
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedIllustrationProps {
  type: "web" | "uiux" | "mobile" | "software";
  className?: string;
}

const AnimatedIllustration: React.FC<AnimatedIllustrationProps> = ({ type, className }) => {
  return (
    <div className={cn("w-full h-full relative", className)}>
      {type === "web" && (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Browser window frame */}
          <rect x="20" y="30" width="160" height="140" rx="5" fill="#2A2A2A" className="animate-fade-in" />
          <rect x="20" y="30" width="160" height="20" rx="5" fill="#444444" />
          <circle cx="35" cy="40" r="3" fill="#FF6464" />
          <circle cx="45" cy="40" r="3" fill="#FFD264" />
          <circle cx="55" cy="40" r="3" fill="#64D2FF" />
          
          {/* URL bar */}
          <rect x="65" y="35" width="100" height="10" rx="2" fill="#555555" />
          
          {/* Content */}
          <rect x="30" y="60" width="140" height="10" rx="2" fill="#64D2FF" className="animate-pulse" />
          <rect x="30" y="80" width="80" height="10" rx="2" fill="#FFD264">
            <animate
              attributeName="width"
              values="30;80;30"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="30" y="100" width="120" height="10" rx="2" fill="#FFFFFF">
            <animate
              attributeName="width"
              values="60;120;60"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="30" y="120" width="100" height="10" rx="2" fill="#64D2FF">
            <animate
              attributeName="width"
              values="80;100;80"
              dur="6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="30" y="140" width="60" height="10" rx="2" fill="#FF6464" />
        </svg>
      )}
      
      {type === "uiux" && (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Canvas */}
          <rect x="25" y="25" width="150" height="150" rx="5" fill="#2A2A2A" className="animate-fade-in" />
          
          {/* Design Elements */}
          <rect x="40" y="40" width="60" height="40" rx="5" fill="#64D2FF" opacity="0.8">
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          
          <rect x="110" y="40" width="50" height="20" rx="10" fill="#FF6464">
            <animate
              attributeName="rx"
              values="10;5;10"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          
          <circle cx="50" cy="110" r="20" fill="#FFD264">
            <animate
              attributeName="r"
              values="18;22;18"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          
          <rect x="85" y="100" width="75" height="10" rx="3" fill="white" />
          <rect x="85" y="120" width="50" height="10" rx="3" fill="white" />
          
          {/* Design Tools */}
          <circle cx="160" cy="160" r="15" fill="#444444" />
          <circle cx="160" cy="160" r="8" fill="#8D5BFF" className="animate-pulse" />
          <rect x="140" y="147" width="6" height="25" rx="3" fill="#444444" transform="rotate(-45 140 147)" />
        </svg>
      )}
      
      {type === "mobile" && (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Phone */}
          <rect x="70" y="20" width="60" height="160" rx="10" fill="#2A2A2A" className="animate-fade-in" />
          <rect x="75" y="30" width="50" height="110" rx="2" fill="#111111" />
          
          {/* App Screen */}
          <rect x="80" y="35" width="40" height="8" rx="4" fill="#8D5BFF" />
          
          <rect x="80" y="48" width="40" height="20" rx="2" fill="#64D2FF" className="animate-pulse" />
          
          <rect x="80" y="73" width="18" height="18" rx="2" fill="#FF6464">
            <animate
              attributeName="fill"
              values="#FF6464;#FF8264;#FF6464"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          
          <rect x="102" y="73" width="18" height="18" rx="2" fill="#FFD264">
            <animate
              attributeName="fill"
              values="#FFD264;#FFEA64;#FFD264"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          
          <rect x="80" y="95" width="40" height="8" rx="2" fill="white" />
          <rect x="80" y="107" width="30" height="8" rx="2" fill="white" />
          
          {/* Home Button */}
          <circle cx="100" cy="155" r="8" stroke="white" strokeWidth="1.5" />
        </svg>
      )}
      
      {type === "software" && (
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Gears */}
          <circle cx="70" cy="100" r="30" fill="#444444" className="animate-fade-in">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 70 100"
              to="360 70 100"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="70" cy="100" r="20" fill="#2A2A2A" />
          
          {/* Gear Teeth */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <rect
              key={i}
              x="65"
              y="65"
              width="10"
              height="25"
              rx="2"
              fill="#444444"
              transform={`rotate(${angle} 70 100)`}
            />
          ))}
          
          {/* Second Gear */}
          <circle cx="130" cy="100" r="25" fill="#64D2FF" className="animate-fade-in">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 130 100"
              to="0 130 100"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle cx="130" cy="100" r="15" fill="#2A2A2A" />
          
          {/* Small Gear Teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x="127"
              y="70"
              width="6"
              height="20"
              rx="2"
              fill="#64D2FF"
              transform={`rotate(${angle} 130 100)`}
            />
          ))}
          
          {/* Connection Line */}
          <line x1="85" y1="85" x2="115" y2="85" stroke="#FFD264" strokeWidth="2" strokeDasharray="4 2">
            <animate
              attributeName="y1"
              values="85;90;85"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="85;80;85"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      )}
    </div>
  );
};

export default AnimatedIllustration;
