type UploadShellProps = {
  children: React.ReactNode;
};

export function UploadShell({
  children,
}: UploadShellProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-blue-300
          "
        >
          AI Session Upload
        </p>

        <h1
          className="
            mt-4
            text-5xl
            font-semibold
            tracking-tight
          "
        >
          Upload Your Basketball Form
        </h1>

        <p
          className="
            mt-5
            max-w-3xl

            text-lg
            leading-8
            text-slate-400
          "
        >
          Submit a clear image of your
          shooting form or stance to receive
          personalized AI-powered coaching
          feedback.
        </p>
      </div>

      {children}
    </div>
  );
}