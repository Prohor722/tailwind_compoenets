import BasicShadowCard from "./components/BasicShadowCard";
import ImageCard from "./components/ImageCard";
import BorderedCard from "./components/BorderedCard";
import ProfileCard from "./components/ProfileCard";
import ColoredCard from "./components/ColoredCard";
import GlassmorphicCard from "./components/GlassmorphicCard";
import GlassmorphismHoverCard from "./components/GlassmorphismHoverCard";
import HoverZoomImageCard from "./components/HoverZoomImageCard";
import AnimatedCard from "./components/AnimatedCard";
import FlipCard from "./components/FlipCard";
import PulseGlowCard from "./components/PulseGlowCard";
import TiltCard from "./components/TiltCard";
import LikeButtonCard from "./components/LikeButtonCard";
import FloatingCard from "./components/FloatingCard";
import GlassmorphismProfileCard from "./components/GlassmorphismProfileCard";
import GradientBorderProductCard from "./components/GradientBorderProductCard";
import NeumorphismStatsCard from "./components/NeumorphismStatsCard";
import HolographicFeatureCard from "./components/HolographicFeatureCard";
import D3TiltingCard from "./components/D3TiltingCard";
import AnimatedGradientCard from "./components/AnimatedGradientCard";
import SocialMediaCard from "./components/SocialMediaCard";
import WeatherCard from "./components/WeatherCard";
import MusicPlayerCard from "./components/MusicPlayerCard";
import NotificationCard from "./components/NotificationCard";
import CryptocurrencyCard from "./components/CryptocurrencyCard";
import TeamMemberCard from "./components/TeamMemberCard";
import UsageInstructions from "./components/UsageInstructions";

const Card = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold text-gray-800">
        Tailwind Card Showcase
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        <BasicShadowCard />

        <ImageCard />

        <BorderedCard />

        <ProfileCard />

        <ColoredCard />

        <GlassmorphicCard />

        <HoverZoomImageCard />

        <AnimatedCard />

        <GlassmorphismHoverCard />

        <FlipCard />

        <PulseGlowCard />

        <TiltCard />

        <LikeButtonCard />

        <FloatingCard />

        <GlassmorphismProfileCard />

        <GradientBorderProductCard />

        <NeumorphismStatsCard />

        <HolographicFeatureCard />

        <D3TiltingCard />

        <AnimatedGradientCard />

        <SocialMediaCard />

        <WeatherCard />

        <MusicPlayerCard />

        <NotificationCard />

        <CryptocurrencyCard />

        <TeamMemberCard />

        <UsageInstructions />

        

      </div>
    </div>
  );
};

export default Card;
