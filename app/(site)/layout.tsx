import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-6 mt-10">{children}</main>
      <Footer />
    </div>
    
  );
}
