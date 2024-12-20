"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload, ArrowLeft } from "lucide-react";

export default function OCRPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/extract-invoice", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the image.");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to format values
  const formatValue = (value: any): string => {
    if (value === null || value === undefined) return "N/A";
    if (typeof value === "number") return value.toFixed(2);
    if (typeof value === "boolean") return value.toString();
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return value.toString();
  };

  // Recursive function to render nested objects
  const renderObject = (obj: any, level: number = 0) => {
    if (!obj || typeof obj !== "object") return null;

    return (
      <div className={`space-y-4 ${level > 0 ? "ml-4" : ""}`}>
        {Object.entries(obj).map(([key, value]) => {
          // Skip rendering if value is undefined or null
          if (value === undefined || value === null) return null;

          // Special handling for arrays
          if (Array.isArray(value)) {
            return (
              <Card key={key} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="capitalize">
                    {key.replace(/_/g, " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-full max-h-[400px]">
                    {value.map((item, index) => (
                      <div key={index} className="mb-4 p-4 border rounded-lg">
                        {typeof item === "object"
                          ? renderObject(item, level + 1)
                          : formatValue(item)}
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            );
          }

          // Handle nested objects
          if (typeof value === "object") {
            return (
              <Card key={key} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="capitalize">
                    {key.replace(/_/g, " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>{renderObject(value, level + 1)}</CardContent>
              </Card>
            );
          }

          // Handle primitive values
          return (
            <div
              key={key}
              className="flex items-start gap-2 p-2 rounded-lg bg-muted/50"
            >
              <span className="font-medium capitalize min-w-[120px]">
                {key.replace(/_/g, " ")}:
              </span>
              <span className="flex-1">{formatValue(value)}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 ml-4">
            OCR Receipt Data Generation
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Receipt Image</CardTitle>
            <CardDescription>
              Select an image of a receipt to extract data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="receipt-image">Receipt Image</Label>
                <Input
                  id="receipt-image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
              </div>
              <Button type="submit" disabled={!file || loading}>
                {loading ? "Processing..." : "Extract Data"}
                <Upload className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Extracted Data</CardTitle>
              <CardDescription>Results from OCR processing</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-full max-h-[800px]">
                {renderObject(result)}
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
