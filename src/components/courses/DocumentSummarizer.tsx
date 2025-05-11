import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileUp, Send, FileText, BookOpen } from 'lucide-react';
import { toast } from "sonner";

const DocumentSummarizer = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { 
      role: 'assistant', 
      content: "Upload a document or paste text to get a summary. I can help you understand complex materials quickly." 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      toast.success(`${newFiles.length} file(s) added`);
    }
  };

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  const handleSend = async () => {
    if ((!inputValue.trim() && files.length === 0) || isProcessing) return;

    const userMessage = inputValue.trim() || (files.length > 0 ? `Please summarize these ${files.length} document(s)` : '');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsProcessing(true);

    try {
      const formData = new FormData();
      if (inputValue.trim()) formData.append('text', inputValue.trim());
      files.forEach(file => formData.append('files', file));

      const response = await fetch('http://localhost:5000/summarize', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to get summary');

      const data = await response.json();

      setMessages(prev => [...prev, { role: 'assistant', content: data.summary || "No summary returned." }]);
      setFiles([]);
    } catch (error: any) {
      console.error(error);
      toast.error("An error occurred while summarizing.");
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't process your request." }]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-120px)] border-bolt-brightPurple/30 shadow-lg">
      <CardHeader className="pb-3 blue-gradient text-white">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Document Summarizer
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-bolt-brightPurple text-white rounded-br-none' 
                  : 'bg-muted rounded-bl-none'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}

          {isProcessing && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 bg-muted rounded-lg rounded-bl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-bolt-brightPurple animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-bolt-brightPurple animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-bolt-brightPurple animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      {files.length > 0 && (
        <div className="px-4">
          <div className="space-y-2 mb-4 bg-secondary/80 p-3 rounded-lg border border-bolt-brightPurple/20">
            <p className="text-xs font-medium flex items-center gap-2 text-bolt-brightPurple">
              <FileText className="h-3.5 w-3.5" />
              Selected Files ({files.length})
            </p>
            <div className="space-y-1 max-h-20 overflow-y-auto pr-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-background p-2 rounded-md text-xs border border-border">
                  <span className="truncate max-w-[200px]">{file.name}</span>
                  <button type="button" onClick={() => removeFile(file)} className="text-muted-foreground hover:text-destructive">&times;</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <CardFooter className="p-4 pt-2">
        <div className="flex items-center w-full gap-2">
          <label className="cursor-pointer">
            <div className="flex items-center justify-center p-2 text-bolt-brightPurple rounded-md hover:bg-bolt-brightPurple/10 transition-colors">
              <FileUp className="h-5 w-5" />
            </div>
            <Input type="file" className="hidden" onChange={handleFileChange} multiple accept=".pdf,.doc,.docx,.txt" />
          </label>

          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about your documents or courses..."
            className="flex-1 min-h-10 max-h-32 border-bolt-brightPurple/30 focus-visible:ring-bolt-brightPurple/50"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          
          <Button 
            onClick={handleSend}
            disabled={(!inputValue.trim() && files.length === 0) || isProcessing}
            className="bg-bolt-brightPurple hover:bg-bolt-purple"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DocumentSummarizer;
