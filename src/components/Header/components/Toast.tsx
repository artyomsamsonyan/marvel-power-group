"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "rate-limited";
  duration?: number; // миллисекунды
  onClose?: () => void;
}

export default function Toast({ message, type, duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  return (
    <div
      className={`
        fixed bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg font-semibold text-white z-80
        transition-all duration-300 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"}
        ${type === "success" ? "bg-green-500" : ""}
        ${type === "error" ? "bg-red-500" : ""}
        ${type === "rate-limited" ? "bg-yellow-500" : ""}
        z-50
      `}
    >
      {message}
    </div>
  );
}
