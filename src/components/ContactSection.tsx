import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="contact" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Contact Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Have a question, need support, or want a demo for your school? Contact our support team and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@triconnect.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+263 785854173</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">123 Education St, Learning City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Quick actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full"
                    onClick={() => navigate('/signup')}
                  >
                    Request a demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+263785854173', '_blank')}
                  >
                    Talk to support
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">Send a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Full name</Label>
                      <Input id="contactName" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email</Label>
                      <Input id="contactEmail" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="contactSubject">Subject</Label>
                      <Input id="contactSubject" placeholder="How can we help?" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="contactMessage">Message</Label>
                      <Textarea id="contactMessage" placeholder="Write your message..." className="min-h-[140px]" />
                    </div>
                    <div className="sm:col-span-2 flex justify-end">
                      <Button type="button">Send message</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
