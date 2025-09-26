"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-28 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-darkGreen text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-80" : "opacity-0"
      }`}
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
