import React, { useRef, useState } from 'react';
import { Upload, File, FileText, FilePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface QuizUploaderProps {
  onFileUpload: (file: File) => void;
}

const QuizUploader = ({ onFileUpload }: QuizUploaderProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const allowedFileTypes = [
    'application/pdf', 
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!allowedFileTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, DOCX, or TXT file.",
        variant: "destructive"
      });
      return;
    }
    
    setUploadedFile(file);
    onFileUpload(file);
    
    toast({
      title: "File uploaded",
      description: `${file.name} has been uploaded successfully.`
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    
    if (!allowedFileTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, DOCX, or TXT file.",
        variant: "destructive"
      });
      return;
    }
    
    setUploadedFile(file);
    onFileUpload(file);
    
    toast({
      title: "File uploaded",
      description: `${file.name} has been uploaded successfully.`
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType === 'application/pdf') return <File className="h-6 w-6 text-red-500" />;
    if (fileType.includes('word')) return <FileText className="h-6 w-6 text-blue-500" />;
    return <FileText className="h-6 w-6 text-gray-500" />;
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
          isDragging 
            ? "border-bolt-brightPurple bg-bolt-brightPurple/5" 
            : "border-border hover:border-bolt-brightPurple/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
          
          {uploadedFile ? (
            <div className="flex items-center gap-2">
              {getFileIcon(uploadedFile.type)}
              <span className="font-medium text-sm truncate max-w-full">
                {uploadedFile.name}
              </span>
            </div>
          ) : (
            <>
              <Upload className="h-10 w-10 text-muted-foreground" />
              <p className="text-sm font-medium">
                Drag & drop or <span className="text-bolt-brightPurple cursor-pointer" onClick={() => fileInputRef.current?.click()}>browse</span>
              </p>
              <p className="text-xs text-muted-foreground">
                PDF, DOC, DOCX, or TXT files only
              </p>
            </>
          )}
        </div>
      </div>
      
      {uploadedFile && (
        <Button 
          variant="outline"
          className="w-full text-sm"
          onClick={() => fileInputRef.current?.click()}
        >
          <FilePlus className="mr-2 h-4 w-4" />
          Change file
        </Button>
      )}
    </div>
  );
};

export default QuizUploader;
