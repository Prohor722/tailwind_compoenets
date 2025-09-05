"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Loader2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Plus,
} from "lucide-react";
import BasicHoverButton from "../button/components/BasicHoverButton";
import ScaleHoverButton from "../button/components/ScaleHoverButton";
import LiftEffectButton from "../button/components/LiftEffectButton";
import GradientShiftButton from "../button/components/GradientShiftButton";
import BorderFlipButton from "../button/components/BorderFlipButton";
import RippleButton from "../button/components/RippleButton";
import GlowButton from "../button/components/GlowButton";
import SlideInArrowButton from "../button/components/SlideInArrowButton";
import GlassmorphismButton from "../button/components/GlassmorphismButton";
import LoadingSpinnerButton from "../button/components/LoadingSpinnerButton";
import ShieldPopinButton from "../button/components/ShieldPopinButton";
import NeonBorderButton from "../button/components/NeonBorderButton";
import NeonPulseButton from "../button/components/NeonPulseButton";
import FillSlideButton from "../button/components/FillSlideButton";
import RevealIconButton from "../button/components/RevealIconButton";
import BouncyConfirmButton from "../button/components/BouncyConfirmButton";
import GlowHoverButton from "../button/components/GlowHoverButton";
import PulseIconLockButton from "../button/components/PulseIconLockButton";
import MagicGlassButton from "../button/components/MagicGlassButton";
import ClickMeButton from "../button/components/ClickMeButton";
import GlassyButton from "../button/components/GlassyButton";
import RippleEffectButton from "../button/components/RippleEffectButton";

export const AnimarionButtons = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const anotherHandleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 1000);
  };

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center gap-10">
      <h1 className="text-2xl text-blue-500 font-bold">
        Animated Button Designs
      </h1>

      <div className="flex flex-wrap gap-6 justify-center w-full max-w-4xl">

        <BasicHoverButton />

        <ScaleHoverButton />

        <LiftEffectButton />

        <GradientShiftButton />

        <BorderFlipButton />

        <RippleButton />

        <GlowButton />

        <SlideInArrowButton />

        <GlassmorphismButton />

        <LoadingSpinnerButton />

        <ShieldPopinButton />
        
        <NeonBorderButton />

        <NeonPulseButton />

        <FillSlideButton />

        <RevealIconButton />

        <BouncyConfirmButton />

        <GlowHoverButton />

        <PulseIconLockButton />

        <MagicGlassButton />

        <ClickMeButton />

        <GlassyButton />

        <RippleEffectButton />

        <button className="group relative px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer">
          <span className="absolute left-[-2px] translate-x-[-100%] group-hover:translate-x-4 transition-all duration-500 ease-in-out">
            🚀
          </span>
          <span className="transition-all duration-500 ease-in-out group-hover:ml-6">
            Launch
          </span>
        </button>

        <button className="px-6 py-3 text-white font-bold bg-black border border-white hover:border-gray-400 rounded-lg shadow-lg transition-all duration-300 hover:text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
          Neon Glow
        </button>

        <button className="relative px-6 py-3 text-white bg-black group overflow-hidden rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 group-hover:text-black transition-all duration-500">
            Slide Up
          </span>
        </button>

        <button className="relative px-5 py-2 text-blue-600 font-medium group">
          Hover Me
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full duration-300"></span>
        </button>

        <button className="relative px-6 py-3 bg-black text-white rounded-lg font-bold transition-all duration-500 hover:shadow-[0_0_20px_#0ff] hover:text-cyan-300">
          Neon Glow
        </button>

        <button className="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded overflow-hidden group">
          <span className="absolute inset-0 bg-white transform -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
          <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
            Wipe Reveal
          </span>
        </button>

        <button className="relative overflow-hidden px-6 py-3 bg-emerald-600 text-white rounded-lg group">
          Ripple Hover
          <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-48 group-hover:h-48 transition-all duration-500 ease-out"></span>
        </button>

        <button className="group relative px-6 py-3 bg-gray-800 text-white rounded-md transition-all duration-300 hover:rotate-2 hover:scale-105">
          Rotate Me
        </button>

        <button className="relative px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,150,0.5)]">
          Bubble Pop
        </button>

        <button className="px-6 py-2 border-2 border-transparent bg-purple-700 text-white rounded-md relative group overflow-hidden">
          <span className="absolute inset-0 border-2 border-white transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out rounded-md pointer-events-none"></span>
          <span className="relative z-10">Border Trace</span>
        </button>

        <button className="group px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 overflow-hidden">
          <span className="translate-x-[-150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            ✈️
          </span>
          <span className="transition-all duration-300 group-hover:ml-2">
            Fly In
          </span>
        </button>

        <button className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          <span className="relative z-10">Shimmer Glow</span>
        </button>

        <button className="relative px-6 py-3 bg-sky-500 text-sky-300 hover:text-white rounded-lg overflow-hidden group">
          <span className="absolute -bottom-full left-0 w-full h-full bg-sky-700 group-hover:bottom-0 transition-all duration-500 ease-out"></span>
          <span className="relative z-10">Wave Sweep</span>
        </button>

        <button className="relative px-6 py-3 border-2 border-gray-800 rounded-lg bg-white text-gray-800 group hover:shadow-xl transition-all duration-300">
          <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">
            Magnetic
          </span>
        </button>

        <style>{`
          .animate-spin-slow {
            animation: spin 4s linear infinite;
          }
        `}</style>
        <button className="relative px-6 py-3 rounded-lg bg-gray-900 text-white overflow-hidden group">
          <span className="absolute inset-0 border-2 border-blue-400 rounded-lg animate-spin-slow"></span>
          <span className="relative z-10">Spin Border</span>
        </button>

        <button className="relative px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg overflow-hidden group">
          <span className="absolute inset-0 translate-x-[-100%] bg-yellow-300 skew-x-[-20deg] group-hover:translate-x-[100%] transition-transform duration-500"></span>
          <span className="relative z-10">Lightning</span>
        </button>

        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95">
          Elastic Bounce
        </button>

        <button className="relative px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500"></span>
          <span className="relative z-10">Ripple Effect</span>
        </button>

        <button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg overflow-hidden group">
          <span className="absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Reveal Text
          </span>
        </button>

        <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:font-bold hover:text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]">
          Ghost Glow
        </button>

        <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:translate-y-1 hover:shadow-lg transition-transform duration-300">
          buttonTxt
        </button>

        <button className="relative overflow-hidden px-6 py-3 text-white transition-all duration-300 ease-in-out bg-gray-800 rounded-lg group">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            buttonTxt
          </span>
          <span className="absolute inset-0 z-0 w-full h-full transform scale-x-0 origin-left transition-transform duration-300 ease-out bg-white group-hover:scale-x-100"></span>
        </button>

        {/* Loading Spinner Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Loading Spinner</h3>
          <button
            onClick={() => handleClick("spinner")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            {clickedButton === "spinner" ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </div>

        {/* Ripple Effect Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Ripple Effect</h3>
          <button
            onClick={() => handleClick("ripple")}
            className="relative px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg overflow-hidden transition-colors duration-200"
          >
            <span className="relative z-10">Ripple</span>
            {clickedButton === "ripple" && (
              <div className="absolute inset-0 bg-white opacity-25 rounded-full animate-ping"></div>
            )}
          </button>
        </div>

        {/* 3D Flip Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">3D Flip</h3>
          <div className="relative w-32 h-12" style={{ perspective: "1000px" }}>
            <button
              onClick={() => handleClick("flip")}
              className="w-full h-full relative group"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)";
              }}
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 bg-orange-500 text-white font-semibold rounded-lg flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden", // Safari support
                }}
              >
                Hover Me
              </div>

              {/* Back Face */}
              <div
                className="absolute inset-0 bg-orange-600 text-white font-semibold rounded-lg flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden", // Safari support
                  transform: "rotateY(180deg)",
                }}
              >
                Flipped!
              </div>
            </button>
          </div>
        </div>

        {/* Slide Fill Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Slide Fill</h3>
          <button
            onClick={() => handleClick("slide")}
            className="relative px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg overflow-hidden group transition-colors duration-300 hover:text-gray-900"
          >
            <span className="relative z-10">Slide Fill</span>
            <div className="absolute top-0 left-0 w-0 h-full bg-yellow-400 transition-all duration-300 group-hover:w-full"></div>
          </button>
        </div>

        {/* Gradient Shift Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Gradient Shift</h3>
          <button
            onClick={() => handleClick("gradient")}
            className="p-3 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(45deg, #a855f7, #ec4899, #ef4444)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 3s ease infinite",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.animationDuration = "1s"; // Speed up on hover
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.animationDuration = "3s"; // Back to normal speed
            }}
          >
            Gradient Shift
          </button>
        </div>

        {/* Pulse Ring Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Pulse Ring</h3>
          <button
            onClick={() => handleClick("pulse")}
            className="relative px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <span className="relative z-10">Pulse Ring</span>
            <div className="absolute inset-0 border-2 border-indigo-400 rounded-lg animate-ping opacity-75"></div>
          </button>
        </div>

        {/* Neon Cyberpunk Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Cyberpunk Neon</h3>
          <button
            className="relative px-8 py-4 bg-black border border-cyan-400 text-cyan-400 font-mono font-bold rounded-none hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:skew-x-2"
            style={{
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
              textShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
            }}
          >
            &gt; EXECUTE_
          </button>
        </div>

        {/* Holographic Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Holographic</h3>
          <button
            className="relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-lg overflow-hidden group"
            style={{
              backgroundSize: "400% 400%",
              animation: "holographic 3s ease infinite",
            }}
          >
            <span className="relative z-10">HOLOGRAM</span>
            <div className="absolute inset-0 bg-white opacity-20 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Lightning Strike Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Lightning Strike</h3>
          <button
            onClick={() => anotherHandleClick("lightning")}
            className="relative px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg overflow-hidden group hover:bg-yellow-400 transition-colors duration-200"
          >
            <span className="relative z-10">⚡ THUNDER</span>
            {activeButton === "lightning" && (
              <div className="absolute inset-0 bg-white animate-pulse opacity-60"></div>
            )}
          </button>
        </div>

        {/* Dissolve Effect Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Dissolve</h3>
          <button
            onClick={() => anotherHandleClick("dissolve")}
            className={`px-8 py-4 bg-red-600 text-white font-bold rounded-lg transition-all duration-500 ${
              activeButton === "dissolve"
                ? "opacity-20 blur-sm scale-90"
                : "hover:opacity-90"
            }`}
          >
            Dissolve
          </button>
        </div>

        {/* Origami Fold Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-lg font-semibold">Origami Fold</h3>
          <button
            className="relative px-8 py-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold transition-all duration-500 hover:from-pink-500 hover:to-purple-600 transform-gpu hover:rotate-3 hover:scale-105"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
            }}
          >
            ORIGAMI
          </button>
        </div>

        {/* Retro Arcade Button */}
        <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white text-lg font-semibold">Retro Arcade</h3>
            <button 
              className="px-8 py-4 bg-black border-4 border-green-400 text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all duration-200 transform hover:translate-y-1"
              style={{
                boxShadow: '0 6px 0 #16a34a, 0 8px 8px rgba(0,0,0,0.3)',
                textShadow: '0 0 10px currentColor',
              }}
            >
              [START]
            </button>
          </div>
      </div>
    </div>
  );
};
