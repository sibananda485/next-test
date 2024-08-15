"use client";

import ReactConfetti from "react-confetti";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { useWindowSize } from "react-use";

export const ConfettiProvider = () => {
  const { width, height } = useWindowSize();
  const confetti = useConfettiStore();

  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[200]"
      numberOfPieces={500}
      width={width}
      height={height}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
