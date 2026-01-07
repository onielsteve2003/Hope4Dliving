"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-brand-100 bg-linear-to-br from-brand-600 via-brand-500 to-brand-700 text-white shadow-2xl shadow-brand-900/40">
      <div className="text-center w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-2">Countdown</p>
        <div className="flex justify-center gap-2 text-4xl font-bold tracking-tight items-end">
          <div className="flex flex-col items-center min-w-[60px]">
            <span>{String(days).padStart(2, "0")}</span>
            <span className="text-xs font-medium text-white/80 mt-1">d</span>
          </div>
          <span className="text-2xl font-bold pb-2">:</span>
          <div className="flex flex-col items-center min-w-[40px]">
            <span>{String(hours).padStart(2, "0")}</span>
            <span className="text-xs font-medium text-white/80 mt-1">h</span>
          </div>
          <span className="text-2xl font-bold pb-2">:</span>
          <div className="flex flex-col items-center min-w-[40px]">
            <span>{String(minutes).padStart(2, "0")}</span>
            <span className="text-xs font-medium text-white/80 mt-1">m</span>
          </div>
          <span className="text-2xl font-bold pb-2">:</span>
          <div className="flex flex-col items-center min-w-[40px]">
            <span>{String(seconds).padStart(2, "0")}</span>
            <span className="text-xs font-medium text-white/80 mt-1">s</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/90">We gather in Enugu</p>
      </div>
    </div>
  );
}
