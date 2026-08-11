"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to get current time in Jakarta
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };

    // Set initial time (client-side only to avoid hydration mismatch)
    updateTime();
    
    // Update time every 10 seconds to keep it fresh
    const interval = setInterval(updateTime, 10000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono text-sm font-medium text-zinc-600 dark:text-zinc-400 ${className}`}>
      Jakarta, Indonesia <Clock size={16} strokeWidth={2.5} className="mx-0.5" /> {time || "--:-- --"}
    </div>
  );
}
