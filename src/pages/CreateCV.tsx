import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CreateCV = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Create Your ATS-Friendly CV</h1>
              <p className="text-lg text-muted-foreground">
                Fill in your details and we'll generate a professional CV optimized for applicant tracking systems
              </p>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>CV Information Form</CardTitle>
                <CardDescription>Coming soon - Full CV builder with form fields</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The CV creation form will include sections for:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>Personal Information (Name, Contact, Photo)</li>
                  <li>Education Details</li>
                  <li>Work Experience</li>
                  <li>Skills & Competencies</li>
                  <li>Additional Information</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateCV;
