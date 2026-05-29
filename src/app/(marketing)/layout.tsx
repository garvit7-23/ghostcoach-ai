import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/layout/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}