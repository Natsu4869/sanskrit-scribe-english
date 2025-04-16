import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "./LoadingSpinner";
import { Copy, ArrowRight, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function TranslationBox() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "The input field cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setTranslatedText("Translation will appear here...");
      setIsLoading(false);
    }, 1000);
  };

  const copyToClipboard = async () => {
    if (translatedText) {
      await navigator.clipboard.writeText(translatedText);
      toast({
        title: "Copied!",
        description: "Translation copied to clipboard",
      });
    }
  };

  const shareTranslation = async () => {
    if (translatedText) {
      try {
        await navigator.share({
          title: 'Sanskrit Translation',
          text: translatedText
        });
      } catch (error) {
        toast({
          title: "Sharing Failed",
          description: "Unable to share the translation",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="grid gap-6 w-full max-w-3xl">
      <div className="space-y-2">
        <Textarea
          placeholder="Enter Sanskrit text here..."
          className="min-h-[150px] resize-none font-sanskrit bg-white/90"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleTranslate}
          className="w-40 gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              Translate
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Textarea
            readOnly
            placeholder="English translation will appear here..."
            className="min-h-[150px] resize-none bg-white/90"
            value={translatedText}
          />
          {translatedText && (
            <div className="absolute top-2 right-2 flex space-x-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={copyToClipboard}
                title="Copy to Clipboard"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={shareTranslation}
                title="Share Translation"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
