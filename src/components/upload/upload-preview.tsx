import Image from "next/image";

type UploadPreviewProps = {
  previewUrl: string;
};

export function UploadPreview({
  previewUrl,
}: UploadPreviewProps) {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border border-white/10
      "
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={previewUrl}
          alt="Upload preview"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}