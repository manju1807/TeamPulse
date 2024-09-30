'use client';

import { OurFileRouter } from '@/app/api/uploadthing/core';
import { UploadDropzone } from '@uploadthing/react';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { UploadFileResponse } from 'uploadthing/client';
import { IMG_MAX_LIMIT } from './forms/product-form';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface ImageUploadProps {
  onChange: (value: UploadFileResponse[]) => void;
  onRemove: (value: UploadFileResponse[]) => void;
  value: UploadFileResponse[];
}

export default function FileUpload({
  onChange,
  onRemove,
  value
}: ImageUploadProps) {
  const { toast } = useToast();

  const onDeleteFile = (key: string) => {
    const filteredFiles = value.filter((item) => item.key !== key);
    onRemove(filteredFiles);
  };

  const onUpdateFile = (newFiles: UploadFileResponse[]) => {
    onChange([...value, ...newFiles]);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4 flex-wrap">
        {value.map((item) => (
          <div
            key={item.key}
            className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
          >
            <div className="absolute right-2 top-2 z-10">
              <Button
                type="button"
                onClick={() => onDeleteFile(item.key)}
                variant="destructive"
                size="sm"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              alt="Uploaded image"
              src={item.url || ''}
            />
          </div>
        ))}
      </div>
      {value.length < IMG_MAX_LIMIT && (
        <UploadDropzone<OurFileRouter>
          className="ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300 py-2 dark:bg-zinc-800"
          endpoint="imageUploader"
          config={{ mode: 'auto' }}
          content={{
            allowedContent({ isUploading }) {
              if (isUploading) {
                return (
                  <p className="mt-2 animate-pulse text-sm text-slate-400">
                    Image Uploading...
                  </p>
                );
              }
              return (
                <p className="mt-2 text-sm text-slate-400">
                  Drag and drop or click to upload images
                </p>
              );
            }
          }}
          onClientUploadComplete={(res) => {
            if (res) {
              onUpdateFile(res);
              toast({
                title: 'Success',
                description: 'Image uploaded successfully',
              });
            }
          }}
          onUploadError={(error: Error) => {
            toast({
              title: 'Error',
              variant: 'destructive',
              description: error.message
            });
          }}
          onUploadBegin={() => {
            toast({
              title: 'Upload started',
              description: 'Your image is being uploaded',
            });
          }}
        />
      )}
    </div>
  );
}