"use client";
import { X } from "lucide-react";
import { useState } from "react";
import GlassmorphismModal2 from "../modal/components/GlassmorphismModal2";
import SlideUpModal from "../modal/components/SlideUpModal";

const page = () => {
  const [activeModal, setActiveModal] = useState("");


  return (
    <div>
      <SlideUpModal />
    </div>
  );
};

export default page;
