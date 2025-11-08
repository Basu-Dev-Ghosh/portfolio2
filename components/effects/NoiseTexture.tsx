"use client";

import { useEffect, useRef } from "react";

export default function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        if (Math.random() < 0.05) {
          const gray = Math.random() * 20;
          buffer[i] =
            (20 << 24) | // alpha
            (gray << 16) | // blue
            (gray << 8) | // green
            gray; // red
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    createNoise();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createNoise();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.015] mix-blend-overlay"
    />
  );
}
