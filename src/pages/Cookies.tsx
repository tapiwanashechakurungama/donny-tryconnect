import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Cookie Policy</h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              This is a placeholder cookie policy page for the TriConnect demo project.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
