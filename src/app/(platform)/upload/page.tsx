"use client";

import {
  useEffect,
  useState,
} from "react";

import { toast } from "sonner";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";

import { FeedbackReport } from "@/components/feedback/feedback-report";

import { AnalysisLoader } from "@/components/upload/analysis-loader";

import { UploadDropzone } from "@/components/upload/upload-dropzone";

import { UploadPreview } from "@/components/upload/upload-preview";

import { UploadShell } from "@/components/upload/upload-shell";

import { saveSession } from "@/lib/sessions/session-service";

import { uploadSessionImage } from "@/lib/supabase/storage";

import { FeedbackReport as FeedbackData } from "@/types/feedback";

import { fileToBase64 } from "@/lib/utils/file";

export default function UploadPage() {
  const [file, setFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState("");

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [feedback, setFeedback] =
    useState<FeedbackData | null>(
      null
    );

  useEffect(() => {
    if (!file) {
      return;
    }

    const objectUrl =
      URL.createObjectURL(file);

    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  async function handleFileSelect(
    selectedFile: File
  ) {
    try {
      setFile(selectedFile);

      setIsAnalyzing(true);

      setFeedback(null);

      const base64 =
        await fileToBase64(
          selectedFile
        );

      const response = await fetch(
        "/api/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            image: base64,

            mimeType:
              selectedFile.type,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Analysis failed."
        );
      }

      const data =
        await response.json();

      setFeedback(data);

      try {
        const imageUrl =
          await uploadSessionImage(
            selectedFile
          );

        await saveSession({
          imageUrl,
          feedback: data,
        });
      } catch (storageError) {
        console.error(
          "Session persistence failed:",
          storageError
        );
      }

      toast.success(
        "Analysis completed successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to analyze image."
      );
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <DashboardShell>
      <UploadShell>
        {/* DROPZONE */}
        {!file && (
          <UploadDropzone
            onFileSelect={
              handleFileSelect
            }
          />
        )}

        {/* LOADING */}
        {file && isAnalyzing && (
          <AnalysisLoader />
        )}

        {/* RESULTS */}
        {file && !isAnalyzing && (
          <div
            className="
              grid gap-8
              xl:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* STICKY PREVIEW */}
            <div
              className="
                xl:sticky
                xl:top-24
                xl:self-start
                h-fit
              "
            >
              <UploadPreview
                previewUrl={previewUrl}
              />
            </div>

            {/* SCROLLING REPORT */}
            <FeedbackReport
              feedback={feedback}
            />
          </div>
        )}
      </UploadShell>
    </DashboardShell>
  );
}