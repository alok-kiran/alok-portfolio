"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  onClick?: () => void;
}

export const SpotlightButton = ({
  children,
  className,
  variant = "default",
  onClick,
}: SpotlightButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-4 rounded-full font-medium transition-all duration-300",
        variant === "default"
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25"
          : "border border-white/20 backdrop-blur-sm bg-white/5 text-white hover:bg-white/10",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === "default" && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl" />
      )}
    </motion.button>
  );
};