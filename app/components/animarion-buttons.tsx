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
import NeonCyberpunkButton from "../button/components/NeonCyberpunkButton";
import HolographicButton from "../button/components/HolographicButton";
import GlassShineButton from "../button/components/GlassShineButton";
import LightningStrikeButton from "../button/components/LightningStrikeButton";
import DissolveButton from "../button/components/DissolveButton";
import OrigamiButton from "../button/components/OrigamiButton";
import RetroArcadeButton from "../button/components/RetroArcadeButton";
import { ToggleButtons } from "../button/components/ToggleButtons";
import ProcessButton from "../button/components/ProcessButton";

export const AnimarionButtons = () => {
  <style>
    {`
        .animate-spin-slow {
            animation: spin 4s linear infinite;
        }
    `}
  </style>;

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

        <GradientShiftButton2 />

        <PulseRingButton />

        <NeonCyberpunkButton />

        <HolographicButton />

        <GlassShineButton />

        <LightningStrikeButton />

        <DissolveButton />

        <OrigamiButton />

        <RetroArcadeButton />

        <ToggleButtons />

        <ProcessButton />
        
      </div>
    </div>
  );
};
