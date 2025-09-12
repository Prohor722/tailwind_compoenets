"use client";
import { ChevronRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const CardStackEffectModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);
  return (
    <div>
        
    </div>
  );
};

export default CardStackEffectModal;
