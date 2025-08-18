import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Bot } from "lucide-react";
import Vapi from "@vapi-ai/web";

interface BookCallModalProps {
  children: React.ReactNode;
}

const vapi = new Vapi(`${import.meta.env.VITE_VAPI_PUBLIC_API_KEY}`); 
const BookCallModal: React.FC<BookCallModalProps> = ({ children }) => {
  const [isVapiCalling, setIsVapiCalling] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/prakarshgupta", "_blank");
  };

  const handleWhatsAppVoiceCall = () => {
    window.open("https://wa.me/17744199996", "_blank");
  };

  const handleVAPICall = async () => {
    try {
    //   setIsVapiCalling(true);
      setIsRinging(true);
      console.log("Initiating VAPI voice agent call...");
      
      await vapi.start(null,null,null, `${import.meta.env.VITE_VAPI_WORKFLOW}`); 
      
    } catch (error) {
      console.error("Error starting VAPI call:", error);
      setIsVapiCalling(false);
      setIsRinging(false);
    }
  };

  const handleVAPIEnd = async () => {
    await vapi.stop();
    console.log("VAPI call ended"); 
    // setIsVapiCalling(false);
  };

  React.useEffect(() => {
    vapi.on("call-start", () => {
      console.log("VAPI call started");
      setIsVapiCalling(true);
      setIsRinging(false);
    });

    vapi.on("call-end", () => {
      console.log("VAPI call ended");
      setIsVapiCalling(false);
      setIsRinging(false);
    });

    vapi.on("error", (error) => {
      console.error("VAPI error:", error);
      setIsVapiCalling(false);
      setIsRinging(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => {
      if (!open && (isVapiCalling || isRinging)) {
        handleVAPIEnd();
      }
      setIsModalOpen(open);
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            Book a Discovery Call
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Logo */}
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <img 
                src="/logo.png" 
                alt="SmallAI Logo" 
                className="w-48 h-48 object-contain mx-auto"
              />
            </div>
          </div>
          
          {/* Right side - Booking options */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Choose Your Preferred Way to Connect</h3>
              <p className="text-gray-600">Select the most convenient option for your discovery call</p>
            </div>
            
            <div className="space-y-4">
              {/* Calendly Button */}
              <Button
                onClick={handleCalendlyClick}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Schedule via Calendly
              </Button>
              
              {/* VAPI Voice Agent Button */}
              {!isVapiCalling && !isRinging ? (
                <Button
                  onClick={handleVAPICall}
                  className="w-full h-14 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Bot className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Talk with AI Agent
                </Button>
              ) : isRinging  ? (
                <Button
                  disabled
                  className="w-full h-14 text-lg font-semibold bg-yellow-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Bot className="h-5 w-5 animate-pulse" />
                  Ringing...
                </Button>
              ) : (
                <Button
                  onClick={handleVAPIEnd}
                  className="w-full h-14 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  End AI Call
                </Button>
              )}
              
              {/* WhatsApp Voice Call Button */}
              <Button
                onClick={handleWhatsAppVoiceCall}
                className="w-full h-14 text-lg font-semibold bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp Voice Call
              </Button>
            </div>
            
            {isVapiCalling && (
              <div className="text-center text-sm text-green-600 font-medium">
                AI Agent is ready to talk! Please allow microphone access.
              </div>
            )}
            
            <div className="text-center text-sm text-gray-500 mt-6">
              <p>We'll discuss how AI automation can transform your business operations and drive growth.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal; 