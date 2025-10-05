import React from "react";
import GlassmorphismStyle from "./components/GlassmorphismStyle";
import BasicFlexNavbar from "./components/BasicFlexNavbar";
import CenteredBrandNavbar from "./components/CenteredBrandNavbar";
import DarkModeIconNavbar from "./components/DarkModeIconNavbar";
import BoldDarkMode from "./components/BoldDarkMode";
import EcommerceMultiCategoryNavigation from "./components/EcommerceMultiCategoryNavigation";
import SaasPlatformFeature from "./components/SaasPlatformFeature";
import ServiceBusinessContactInfo from "./components/ServiceBusinessContactInfo";
import MorphingBlobBackground from "./components/MorphingBlobBackground";
import TiltEffect from "./components/TiltEffect";
import GlassmorphicFloatingParticles from "./components/GlassmorphicFloatingParticles";
import AnimatedIconsNavigation from "./components/AnimatedIconsNavigation";
import LiquidMorphingEffect from "./components/LiquidMorphingEffect";

const Navbar = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-800">Tailwind Navbars</h1>

        <BasicFlexNavbar />

        <CenteredBrandNavbar />

        <DarkModeIconNavbar />

        <GlassmorphismStyle />

        <BoldDarkMode />

        <EcommerceMultiCategoryNavigation />

        <SaasPlatformFeature />

        <ServiceBusinessContactInfo />

        <MorphingBlobBackground />

        <TiltEffect />

        <GlassmorphicFloatingParticles />

        <AnimatedIconsNavigation />

        <LiquidMorphingEffect />
        
      </div>
    </div>
  );
};

export default Navbar;
