
import React, { useState } from 'react';
import { FileUp, File, X, Upload, BookOpen } from 'lucide-react';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const DocumentUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast.error("Please upload at least one document");
      return;
    }
    
    if (!title.trim()) {
      toast.error("Please enter a document title");
      return;
    }
    
    // Simulate processing
    toast.success("Documents uploaded successfully!");
    toast.success("Processing started! We're creating lessons and quizzes.");
    
    // Reset form
    setFiles([]);
    setTitle('');
    setDescription('');
  };

  return (
    <Card className="dashboard-card border-2 border-bolt-brightPurple/30 shadow-[0_0_15px_rgba(139,92,246,0.2)] animate-fade-in transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold text-white">
          <BookOpen className="h-6 w-6 text-bolt-brightPurple" />
          Upload Training Documents
        </CardTitle>
        <p className="text-muted-foreground text-sm mt-1">
          Transform your documents into interactive training materials
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1 text-bolt-brightPurple">Document Title</label>
              <Input 
                placeholder="Enter a title for this training material"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-bolt-brightPurple/30 focus-visible:ring-bolt-brightPurple/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-bolt-brightPurple">Description (Optional)</label>
              <Textarea 
                placeholder="Add a brief description of the document content"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border-bolt-brightPurple/30 focus-visible:ring-bolt-brightPurple/50"
                rows={1}
              />
            </div>
          </div>
          
          <div 
            className={`border-2 rounded-lg p-8 transition-all ${
              dragActive 
                ? 'border-bolt-brightPurple bg-bolt-brightPurple/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
                : 'border-dashed border-bolt-brightPurple/40 hover:border-bolt-brightPurple/70 hover:bg-bolt-brightPurple/5'
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FileUp className={`h-12 w-12 ${dragActive ? 'text-bolt-brightPurple animate-pulse' : 'text-muted-foreground'}`} />
              <div className="flex flex-col space-y-2">
                <p className="text-lg font-medium">
                  {dragActive ? 'Drop files to upload' : 'Drag & drop files here, or click to select files'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Support for PDF, DOCX, TXT, and other text documents (max 50MB)
                </p>
              </div>
              <label className="cursor-pointer">
                <Button 
                  variant="outline" 
                  className="bg-bolt-brightPurple hover:bg-bolt-brightPurple/90 text-white border-0"
                >
                  Select Files
                </Button>
                <Input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  multiple 
                  accept=".pdf,.doc,.docx,.txt"
                />
              </label>
            </div>
          </div>
          
          {files.length > 0 && (
            <div className="space-y-3 mt-4 bg-secondary/80 p-4 rounded-lg border border-bolt-brightPurple/20">
              <p className="text-sm font-medium flex items-center gap-2 text-bolt-brightPurple">
                <File className="h-4 w-4" />
                Selected Files ({files.length})
              </p>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between bg-background p-3 rounded-md border border-border transition-all hover:border-bolt-brightPurple/30"
                  >
                    <div className="flex items-center space-x-2">
                      <File className="h-4 w-4 text-bolt-brightPurple" />
                      <span className="text-sm truncate max-w-[250px]">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({Math.round(file.size / 1024)} KB)
                      </span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => removeFile(file)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-bolt-brightPurple to-bolt-purple text-white py-6 rounded-md hover:opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            <Upload className="h-5 w-5" />
            Upload & Process Documents
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DocumentUpload;
