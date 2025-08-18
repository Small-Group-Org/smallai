import React, { useState, useEffect } from "react";
import Vapi from "@vapi-ai/web";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const vapi = new Vapi(`${import.meta.env.VITE_VAPI_PUBLIC_API_KEY}`);

const VapiVoiceDemo = () => {
  const [isRinging, setIsRinging] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [waveHeights, setWaveHeights] = useState(Array(7).fill(12));

  const handleTalkWithAlex = async () => {
    try {
      setIsRinging(true);
      setIsModalOpen(true);
      console.log("Starting call with Alex...");
      
      await vapi.start(null, null, null, `${import.meta.env.VITE_VAPI_WORKFLOW}`);
    } catch (error) {
      console.error("Error starting call:", error);
      setIsRinging(false);
      setIsModalOpen(false);
    }
  };

  const handleEndCall = async () => {
    try {
      await vapi.stop();
      console.log("Call ended");
    } catch (error) {
      console.error("Error ending call:", error);
    }
  };

  useEffect(() => {
    vapi.on("call-start", () => {
      console.log("Call connected");
      setIsConnected(true);
      setIsRinging(false);
    });

    vapi.on("call-end", () => {
      console.log("Call ended");
      setIsConnected(false);
      setIsRinging(false);
      setIsModalOpen(false);
      setIsSpeaking(false);
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setIsConnected(false);
      setIsRinging(false);
      setIsModalOpen(false);
      setIsSpeaking(false);
    });

    vapi.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setIsSpeaking(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  // Voice wave animation component
  const VoiceWave = () => (
    <div className="flex items-center justify-center gap-1 h-16">
      {waveHeights.map((height, i) => (
        <div
          key={i}
          className="w-1.5 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full transition-all duration-200"
          style={{
            height: `${height}px`,
          }}
        />
      ))}
    </div>
  );

  // Animation effect for wave heights
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isSpeaking) {
      intervalId = setInterval(() => {
        setWaveHeights(prev => prev.map((_, i) => 
          Math.sin(Date.now() / 200 + i * 0.5) * 15 + 25
        ));
      }, 100);
    } else {
      setWaveHeights(Array(7).fill(12));
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isSpeaking]);

  return (
    <>
      {/* Talk with Alex Button */}
      <div className="text-center">
        <Button
          onClick={handleTalkWithAlex}
          disabled={isRinging || isConnected}
          className="h-16 px-12 text-xl font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50"
        >
          <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
          {isRinging ? "Ringing..." : "Talk with Alex"}
        </Button>
        <p className="text-sm text-gray-600 mt-3">
          Experience our AI voice agent powered by Vapi
        </p>
      </div>

      {/* Voice Call Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        if (!open && (isConnected || isRinging)) {
          handleEndCall();
        }
        setIsModalOpen(open);
      }}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center space-y-8 p-6">
            {/* Logo */}
            <div className="w-24 h-24">
              <img 
                src="/logo.png" 
                alt="Small AI Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Status */}
            <div className="text-center">
              {isRinging && (
                <p className="text-lg font-medium text-yellow-600">Ringing...</p>
              )}
              {isConnected && (
                <p className="text-lg font-medium text-green-600">
                  Connected with Alex
                </p>
              )}
            </div>

            {/* Voice Wave Animation */}
            {isConnected && (
              <div className="w-full">
                <VoiceWave />
                <p className="text-center text-sm text-gray-500 mt-2">
                  {isSpeaking ? "Alex is speaking..." : "Speak naturally..."}
                </p>
              </div>
            )}

            {/* End Call Button */}
            {(isConnected || isRinging) && (
              <Button
                onClick={handleEndCall}
                className="h-12 px-8 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5 rotate-[135deg]" />
                End Call
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VapiVoiceDemo; 