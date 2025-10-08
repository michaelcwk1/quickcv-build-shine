import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

const templates = [
  {
    name: "Modern Professional",
    description: "Clean and contemporary design with color accents",
    price: "$9.99",
  },
  {
    name: "Creative Portfolio",
    description: "Stand out with unique layouts and bold typography",
    price: "$12.99",
  },
  {
    name: "Minimalist Elite",
    description: "Elegant simplicity with maximum impact",
    price: "$9.99",
  },
  {
    name: "Executive Premium",
    description: "Sophisticated design for senior positions",
    price: "$14.99",
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Crown className="h-3 w-3 mr-1" />
              Premium Templates
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Professional CV Templates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of beautifully designed CV templates. 
              Stand out from the crowd with premium layouts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {templates.map((template, index) => (
              <Card key={index} className="flex flex-col shadow-card hover:shadow-soft transition-all">
                <CardHeader>
                  <div className="h-48 bg-gradient-primary rounded-md mb-4 flex items-center justify-center text-white">
                    <span className="text-lg font-semibold">Template Preview</span>
                  </div>
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-2xl font-bold text-primary">{template.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Purchase Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;
