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
import LaunchButton from "../button/components/LaunchButton";
import NeonGlowButton from "../button/components/NeonGlowButton";
import SlideUpButton from "../button/components/SlideUpButton";
import HoverMeButton from "../button/components/HoverMeButton";
import NeonGlowButton2 from "../button/components/NeonGlowButton2";
import WipeRevealButton from "../button/components/WipeRevealButton";
import RippleHoverButton from "../button/components/RippleHoverButton";
import RotateMeButton from "../button/components/RotateMeButton";
import BubblePopButton from "../button/components/BubblePopButton";
import BorderTraceButton from "../button/components/BorderTraceButton";
import FlyInButton from "../button/components/FlyInButton";
import ShimmerGlowButton from "../button/components/ShimmerGlowButton";
import WaveSweepButton from "../button/components/WaveSweepButton";
import MagneticButton from "../button/components/MagneticButton";
import SpinBorderButton from "../button/components/SpinBorderButton";
import LightningButton from "../button/components/LightningButton";
import ElasticBounceButton from "../button/components/ElasticBounceButton";
import RippleEffectButton2 from "../button/components/RippleEffectButton2";
import RevealTextButton from "../button/components/RevealTextButton";
import GhostGlowButton from "../button/components/GhostGlowButton";
import PressEffectButton from "../button/components/PressEffectButton";
import SlideFillBlackButton from "../button/components/SlideFillBlackButton";
import LoadingSubmitButton from "../button/components/LoadingSubmitButton";
import RippleEffectButton3 from "../button/components/RippleEffectButton3";
import HoverMeButton2 from "../button/components/HoverMeButton2";
import SlideFillButton from "../button/components/SlideFillButton";
import GradientShiftButton2 from "../button/components/GradientShiftButton2";
import PulseRingButton from "../button/components/PulseRingButton";

export const AnimarionButtons = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
    setTimeout(() => setClickedButton(null), 600);
  };
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const anotherHandleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 1000);
  };

  

  <style>
    {`
        .animate-spin-slow {
            animation: spin 4s linear infinite;
        }
    `}
  </style>

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

        <LaunchButton />

        <NeonGlowButton />

        <SlideUpButton />

        <HoverMeButton />

        <NeonGlowButton2 />

        <WipeRevealButton />

        <RippleHoverButton />

        <RotateMeButton />

        <BubblePopButton />

        <BorderTraceButton />

        <FlyInButton />

        <ShimmerGlowButton />

        <WaveSweepButton />

        <MagneticButton />

        <SpinBorderButton />

        <LightningButton />

        <ElasticBounceButton />

        <RippleEffectButton2 />

        <RevealTextButton />

        <GhostGlowButton />

        <PressEffectButton />

        <SlideFillBlackButton />

        <LoadingSubmitButton />

        <RippleEffectButton3 />

        <HoverMeButton2 />

        <SlideFillButton />

        {/*  */}
        <GradientShiftButton2 />
        

        {/* Pulse Ring Button */}
        <PulseRingButton />

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
            className={`px-8 py-4 bg-red-600 text-white font-bold rounded-lg transition-all duration-500 ${activeButton === "dissolve"
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
