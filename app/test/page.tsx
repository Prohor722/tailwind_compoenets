"use client";
import { X } from "lucide-react";
import { useState } from "react";
import GlassmorphismModal2 from "../modal/components/GlassmorphismModal2";

const page = () => {
  const [activeModal, setActiveModal] = useState("");


  return (
    <div>
      <GlassmorphismModal2 />
    </div>
  );
};

export default page;
