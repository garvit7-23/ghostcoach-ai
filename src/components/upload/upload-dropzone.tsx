"use client";

import { useCallback } from "react";

import { UploadCloud } from "lucide-react";

import { useDropzone } from "react-dropzone";

import { toast } from "sonner";

type UploadDropzoneProps = {
  onFileSelect: (file: File) => void;
};

export function UploadDropzone({
  onFileSelect,
}: UploadDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) {
        return;
      }

      // VALIDATION
      if (
        ![
          "image/jpeg",
          "image/png",
          "image/webp",
        ].includes(file.type)
      ) {
        toast.error(
          "Only JPG, PNG, or WEBP files are allowed."
        );

        return;
      }

      // 5MB LIMIT
      if (file.size > 5 * 1024 * 1024) {
        toast.error(
          "File size must be under 5MB."
        );

        return;
      }

      onFileSelect(file);
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,

    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        flex min-h-[400px]
        cursor-pointer
        flex-col
        items-center
        justify-center

        rounded-[32px]

        border border-dashed

        p-10

        text-center

        transition-all

        ${
          isDragActive
            ? `
              border-blue-500
              bg-blue-500/10
            `
            : `
              border-white/10
              bg-white/[0.03]

              hover:border-blue-500/40
              hover:bg-blue-500/[0.03]
            `
        }
      `}
    >
      <input {...getInputProps()} />

      <div
        className="
          flex h-24 w-24
          items-center justify-center

          rounded-full

          bg-blue-500/10
        "
      >
        <UploadCloud
          className="
            h-12 w-12
            text-blue-400
          "
        />
      </div>

      <h3
        className="
          mt-8
          text-3xl
          font-semibold
          tracking-tight
        "
      >
        Upload Basketball Form
      </h3>

      <p
        className="
          mt-4
          max-w-lg

          leading-7
          text-slate-400
        "
      >
        Drag and drop your basketball stance
        image here, or click to browse from
        your device.
      </p>

      <div
        className="
          mt-8

          rounded-full

          border border-white/10

          bg-white/[0.03]

          px-5 py-3

          text-sm
          text-slate-400
        "
      >
        JPG, PNG, WEBP • Max 5MB
      </div>
    </div>
  );
}