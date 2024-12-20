"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function ChatPage() {
  useEffect(() => {
    // Clean up any existing messenger instances
    const cleanup = () => {
      const existingMessenger = document.querySelector("df-messenger");
      if (existingMessenger) {
        existingMessenger.remove();
      }
    };

    // Create and append the messenger element
    const createMessenger = () => {
      const messenger = document.createElement("df-messenger");
      messenger.setAttribute("location", "us-central1");
      messenger.setAttribute("project-id", "uno-minda-hack");
      messenger.setAttribute(
        "agent-id",
        "6d4e4b6a-ea51-45fc-8a4d-ec09b54feff3"
      );
      messenger.setAttribute("language-code", "en");
      messenger.setAttribute("max-query-length", "-1");

      const chatBubble = document.createElement("df-messenger-chat-bubble");
      chatBubble.setAttribute("chat-title", "Uno Minda Agent");
      messenger.appendChild(chatBubble);

      document.body.appendChild(messenger);
    };

    cleanup();
    createMessenger();
    return cleanup;
  }, []);

  return (
    <>
      <Script
        src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              UNO MINDA Support
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat Support
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto p-6 text-center space-y-4">
            <h1 className="text-3xl font-bold">
              Welcome to UNO MINDA Chat Support
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI assistant is here to help you with any questions about our
              products and services.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click the chat bubble in the bottom right corner to start a
              conversation.
            </p>
          </Card>
        </main>
      </div>

      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          bottom: 16px;
          right: 16px;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: system-ui, -apple-system, sans-serif;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
        }
      `}</style>
    </>
  );
}
