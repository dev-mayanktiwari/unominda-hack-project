import {
  ArrowRight,
  BarChart3,
  Bug,
  Car,
  Clock,
  Cpu,
  FileText,
  Headphones,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Driving The New Future of Mobility
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 dark:text-gray-200 md:text-xl">
                Advanced solutions for automotive excellence. Empowering your
                journey with innovation and reliability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700">
                Explore Our Solutions
              </Button>
              <Button
                variant="outline"
                className="text-blue-600 dark:text-gray-100 border-white dark:border-gray-100 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Innovative Solutions
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden transition-all hover:shadow-lg border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-gray-400">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900" />
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                    Employee Support Portal
                  </CardTitle>
                  <CardDescription>
                    Comprehensive assistance for our workforce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <Headphones className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">24/7 Support</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Round-the-clock assistance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <Users className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Team Collaboration</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Enhanced communication
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/customer-portal">
                    <Button className="mt-6 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800">
                      Access Portal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden transition-all hover:shadow-lg border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-gray-400">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900" />
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                    Project Defect Detection
                  </CardTitle>
                  <CardDescription>
                    AI-powered quality assurance system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <Bug className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Real-time Detection</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Instant issue identification
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <BarChart3 className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Analytics Dashboard</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Comprehensive insights
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800">
                    Launch Detection System
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden transition-all hover:shadow-lg border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-gray-400">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900" />
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                    OCR Receipt Data Generation
                  </CardTitle>
                  <CardDescription>
                    Automated invoice data extraction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <FileText className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Instant Extraction</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Quick data processing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-700 p-2 rounded-full">
                        <Zap className="w-6 h-6 text-blue-600 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI-Powered</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Advanced OCR technology
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/ocr">
                    <Button className="mt-6 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800">
                      Try OCR System
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose UNO MINDA
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-gray-500">
                  State-of-the-art security measures to protect your data and
                  systems
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                <p className="text-gray-500">
                  Continuous monitoring and instant alerts for critical issues
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-500">
                  Data-driven insights to improve efficiency and performance
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Car className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Automotive Expertise</h3>
                <p className="text-gray-500">
                  Decades of experience in automotive component manufacturing
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation-Driven</h3>
                <p className="text-gray-500">
                  Constantly pushing boundaries with cutting-edge technologies
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Cpu className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Solutions</h3>
                <p className="text-gray-500">
                  Intelligent systems designed for the future of mobility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Automotive Experience?
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
              Join us in shaping the future of mobility with innovative
              solutions and cutting-edge technology.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
