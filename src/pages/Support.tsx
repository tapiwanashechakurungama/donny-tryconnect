import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center">Support</h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground text-center">
              Find help articles, report an issue, or contact our support team.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Help Center</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Browse common questions about accounts, dashboards, and features.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Report a problem</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Describe the issue you’re facing and we’ll investigate.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
