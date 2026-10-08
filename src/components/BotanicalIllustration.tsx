import React from 'react';

interface BotanicalIllustrationProps {
  type: string;
  className?: string;
}

export const BotanicalIllustration: React.FC<BotanicalIllustrationProps> = ({ type, className = "w-full h-full" }) => {
  switch (type) {
    case 'starter-balcony':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="starter-sky" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A543A" />
              <stop offset="1" stopColor="#1E3E2B" />
            </linearGradient>
            <linearGradient id="sun-glow" x1="200" y1="50" x2="200" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE68A" stopOpacity="0.4" />
              <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#starter-sky)" />
          {/* Soft solar radiance */}
          <circle cx="200" cy="90" r="85" fill="url(#sun-glow)" />
          <circle cx="200" cy="90" r="45" fill="#FEF3C7" fillOpacity="0.8" />
          
          {/* Distant building silhouette */}
          <path d="M40 240 L40 180 L80 180 L80 240 Z" fill="#142A1D" fillOpacity="0.5" />
          <path d="M90 240 L90 150 L140 150 L140 240 Z" fill="#142A1D" fillOpacity="0.5" />
          <path d="M280 240 L280 160 L330 160 L330 240 Z" fill="#142A1D" fillOpacity="0.5" />
          <path d="M340 240 L340 190 L380 190 L380 240 Z" fill="#142A1D" fillOpacity="0.5" />
          
          {/* Deck floor */}
          <rect x="0" y="240" width="400" height="60" fill="#2E2018" />
          <line x1="0" y1="260" x2="400" y2="260" stroke="#3D2B20" strokeWidth="2" />
          <line x1="0" y1="280" x2="400" y2="280" stroke="#3D2B20" strokeWidth="2" />

          {/* Balcony Railing */}
          <rect x="20" y="140" width="360" height="10" rx="3" fill="#64748B" fillOpacity="0.7" />
          {[50, 90, 130, 170, 210, 250, 290, 330, 370].map((x, i) => (
            <line key={i} x1={x} y1="140" x2={x} y2="240" stroke="#475569" strokeWidth="4" />
          ))}

          {/* Large Potted Plant on left */}
          <path d="M80 245 L90 290 L130 290 L140 245 Z" fill="#C85A32" />
          <ellipse cx="110" cy="245" rx="30" ry="6" fill="#8C3518" />
          {/* Foliage */}
          <path d="M110 245 Q80 190 60 170 Q90 180 110 230" fill="#4ADE80" />
          <path d="M110 245 Q120 180 150 160 Q130 190 110 230" fill="#22C55E" />
          <path d="M110 245 Q110 160 100 130 Q120 160 110 230" fill="#86EFAC" />

          {/* Small nursery pots in center */}
          <path d="M185 255 L190 288 L215 288 L220 255 Z" fill="#B45309" />
          <ellipse cx="202" cy="255" rx="18" ry="4" fill="#78350F" />
          <path d="M202 255 Q195 235 185 225 Q205 230 202 250" fill="#86EFAC" />
          <path d="M202 255 Q210 230 220 220 Q215 240 202 250" fill="#4ADE80" />

          {/* Railing Planter Box on right */}
          <rect x="260" y="125" width="100" height="40" rx="4" fill="#C85A32" />
          <path d="M275 125 Q270 100 255 90 Q280 95 278 125" fill="#4ADE80" />
          <path d="M300 125 Q300 90 310 80 Q315 105 302 125" fill="#86EFAC" />
          <path d="M330 125 Q340 95 355 88 Q345 110 332 125" fill="#22C55E" />
          {/* Tiny flowers */}
          <circle cx="265" cy="95" r="4" fill="#F87171" />
          <circle cx="315" cy="85" r="4" fill="#FBBF24" />
          <circle cx="350" cy="92" r="4" fill="#F472B6" />
        </svg>
      );

    case 'herb-pots':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#263E34" />
          {/* Background wood shelf */}
          <rect x="30" y="225" width="340" height="20" rx="3" fill="#5C3D2E" />
          <rect x="50" y="245" width="300" height="8" fill="#3D281E" />

          {/* Left Pot - Rosemary */}
          <path d="M70 180 L80 225 L120 225 L130 180 Z" fill="#B45309" />
          <ellipse cx="100" cy="180" rx="30" ry="6" fill="#78350F" />
          {/* Rosemary needles */}
          <path d="M100 180 L100 90 M95 160 L75 140 M100 150 L125 135 M100 130 L80 110 M100 120 L120 105 M100 100 L85 85" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
          <path d="M100 180 L85 105 M90 140 L70 125 M95 120 L110 110" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Center Pot - Sweet Basil */}
          <path d="M170 160 L180 225 L230 225 L240 160 Z" fill="#C85A32" />
          <ellipse cx="205" cy="160" rx="35" ry="7" fill="#8C3518" />
          {/* Basil broad succulent leaves */}
          <path d="M205 160 Q170 130 160 100 Q195 110 205 155" fill="#4ADE80" />
          <path d="M205 160 Q240 130 250 100 Q215 110 205 155" fill="#22C55E" />
          <path d="M205 155 Q190 110 195 75 Q215 100 205 150" fill="#86EFAC" />
          <path d="M205 160 Q210 130 230 120 Q220 140 205 155" fill="#15803D" />

          {/* Right Pot - Thyme & Chives */}
          <path d="M280 180 L290 225 L330 225 L340 180 Z" fill="#9A3412" />
          <ellipse cx="310" cy="180" rx="30" ry="6" fill="#6C240C" />
          {/* Delicate thyme cluster */}
          <circle cx="300" cy="150" r="14" fill="#34D399" fillOpacity="0.8" />
          <circle cx="320" cy="140" r="16" fill="#10B981" fillOpacity="0.8" />
          <circle cx="310" cy="125" r="12" fill="#6EE7B7" fillOpacity="0.8" />
          <path d="M305 180 L305 120 M315 180 L315 115" stroke="#059669" strokeWidth="2" />
          {/* Star chive blossom */}
          <circle cx="312" cy="112" r="5" fill="#C084FC" />
        </svg>
      );

    case 'cherry-tomatoes':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#451810" />
          {/* Vine stem */}
          <path d="M60 280 Q140 200 180 120 Q220 60 330 40" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
          <path d="M180 120 Q250 160 300 230" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
          
          {/* Leaves */}
          <path d="M130 160 Q90 140 80 110 Q120 125 135 155" fill="#15803D" />
          <path d="M220 100 Q260 70 290 60 Q270 95 225 105" fill="#16A34A" />
          <path d="M250 170 Q300 180 320 160 Q280 200 250 175" fill="#22C55E" />

          {/* Yellow tomato blossom */}
          <polygon points="320,50 325,40 335,45 330,55 335,65 325,60 318,70 317,58 307,55 316,48" fill="#FACC15" />

          {/* Tomato Clusters */}
          {/* Ripe red 1 */}
          <circle cx="160" cy="170" r="22" fill="#DC2626" />
          <circle cx="152" cy="162" r="5" fill="#FCA5A5" fillOpacity="0.8" />
          <path d="M160 148 L155 142 M160 148 L165 142 M160 148 L160 140" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />

          {/* Ripe red 2 */}
          <circle cx="195" cy="190" r="24" fill="#EF4444" />
          <circle cx="187" cy="182" r="6" fill="#FCA5A5" fillOpacity="0.8" />

          {/* Golden ripe 3 */}
          <circle cx="230" cy="175" r="20" fill="#EA580C" />
          <circle cx="224" cy="168" r="4" fill="#FED7AA" fillOpacity="0.8" />

          {/* Small green tomato */}
          <circle cx="260" cy="140" r="16" fill="#84CC16" />
          <circle cx="255" cy="135" r="3" fill="#D9F99D" fillOpacity="0.7" />

          {/* Hanging lower ripe tomato */}
          <circle cx="210" cy="235" r="20" fill="#B91C1C" />
          <circle cx="204" cy="228" r="4" fill="#FCA5A5" fillOpacity="0.7" />
        </svg>
      );

    case 'sunlight-compass':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#4B3310" />
          {/* Radiant Sun */}
          <circle cx="200" cy="130" r="60" fill="#F59E0B" fillOpacity="0.3" />
          <circle cx="200" cy="130" r="42" fill="#FBBF24" />
          
          {/* Sunbeams */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <line
              key={i}
              x1={200 + 55 * Math.cos((angle * Math.PI) / 180)}
              y1={130 + 55 * Math.sin((angle * Math.PI) / 180)}
              x2={200 + 85 * Math.cos((angle * Math.PI) / 180)}
              y2={130 + 85 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FDE68A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}

          {/* Compass Ring */}
          <circle cx="200" cy="130" r="95" stroke="#D97706" strokeWidth="2" strokeDasharray="6 6" />
          <text x="200" y="24" fill="#FEF3C7" fontSize="14" fontWeight="bold" textAnchor="middle">N</text>
          <text x="200" y="245" fill="#FEF3C7" fontSize="14" fontWeight="bold" textAnchor="middle">S</text>
          <text x="310" y="135" fill="#FEF3C7" fontSize="14" fontWeight="bold" textAnchor="middle">E</text>
          <text x="90" y="135" fill="#FEF3C7" fontSize="14" fontWeight="bold" textAnchor="middle">W</text>

          {/* Flourishing sprout beneath sun */}
          <path d="M190 280 L195 295 L205 295 L210 280 Z" fill="#92400E" />
          <path d="M200 280 L200 230" stroke="#22C55E" strokeWidth="4" />
          <path d="M200 250 Q180 235 170 215 Q195 220 200 245" fill="#4ADE80" />
          <path d="M200 240 Q220 225 230 205 Q205 210 200 235" fill="#86EFAC" />
        </svg>
      );

    case 'pot-selection':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#382012" />
          {/* Surface */}
          <rect x="20" y="235" width="360" height="15" fill="#5A351D" rx="3" />

          {/* Center Tall Terracotta Pot */}
          <path d="M165 140 L175 235 L225 235 L235 140 Z" fill="#C85A32" />
          <rect x="160" y="132" width="80" height="12" rx="2" fill="#D96B43" />
          <ellipse cx="200" cy="235" rx="32" ry="5" fill="#8C3518" />

          {/* Left Glazed Navy/Teal Pot */}
          <path d="M70 170 L80 235 L130 235 L140 170 Z" fill="#1E4E5F" />
          <rect x="66" y="163" width="78" height="10" rx="2" fill="#2D728A" />
          <path d="M105 163 Q85 125 70 110 Q100 120 105 160" fill="#86EFAC" />

          {/* Right Fabric Grow Bag */}
          <path d="M260 175 Q260 235 270 235 L330 235 Q340 235 340 175 Z" fill="#525252" />
          <rect x="256" y="170" width="88" height="10" rx="3" fill="#737373" />
          <line x1="280" y1="185" x2="280" y2="225" stroke="#404040" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="320" y1="185" x2="320" y2="225" stroke="#404040" strokeWidth="2" strokeDasharray="3 3" />

          {/* Plant in center pot */}
          <path d="M200 132 Q160 80 145 60 Q180 75 198 125" fill="#4ADE80" />
          <path d="M200 132 Q240 80 255 60 Q220 75 202 125" fill="#22C55E" />
          <path d="M200 125 Q200 65 195 40 Q215 65 202 120" fill="#86EFAC" />

          {/* Drainage droplet indicator */}
          <path d="M200 255 C195 262 192 267 192 272 C192 277 195 280 200 280 C205 280 208 277 208 272 C208 267 205 262 200 255 Z" fill="#38BDF8" />
        </svg>
      );

    case 'apartment-compost':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#261B12" />
          {/* Composter container */}
          <rect x="130" y="90" width="140" height="160" rx="12" fill="#3F2D21" stroke="#5C4231" strokeWidth="3" />
          <rect x="120" y="80" width="160" height="18" rx="5" fill="#5C4231" />

          {/* Strata layers inside bin */}
          <rect x="140" y="185" width="120" height="55" rx="4" fill="#1C140D" />
          <rect x="140" y="145" width="120" height="35" rx="4" fill="#422E1F" />
          <rect x="140" y="110" width="120" height="30" rx="4" fill="#6B4B32" />

          {/* Sprout emerging from compost top */}
          <path d="M200 80 L200 45" stroke="#4ADE80" strokeWidth="4" />
          <path d="M200 60 Q175 45 165 30 Q190 35 198 58" fill="#4ADE80" />
          <path d="M200 52 Q225 35 235 20 Q210 25 202 48" fill="#86EFAC" />

          {/* Friendly worm motif */}
          <path d="M155 210 Q170 195 185 210 Q200 225 215 210" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
          <circle cx="155" cy="210" r="3" fill="#DB2777" />

          {/* Golden microbial aura */}
          <circle cx="200" cy="170" r="75" stroke="#A3E635" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
        </svg>
      );

    case 'watering-can':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#112932" />
          {/* Watering can body */}
          <path d="M110 110 L130 200 L210 200 L220 110 Z" fill="#1E5262" stroke="#2D728A" strokeWidth="2" />
          {/* Handle */}
          <path d="M115 125 C80 120 75 185 125 190" stroke="#2D728A" strokeWidth="7" fill="none" strokeLinecap="round" />
          {/* Long spout */}
          <line x1="215" y1="140" x2="280" y2="85" stroke="#2D728A" strokeWidth="8" strokeLinecap="round" />
          {/* Rose head */}
          <ellipse cx="288" cy="80" rx="10" ry="16" fill="#38BDF8" transform="rotate(35 288 80)" />

          {/* Water droplets */}
          {[
            { cx: 310, cy: 110, r: 3.5 },
            { cx: 325, cy: 135, r: 4 },
            { cx: 300, cy: 145, r: 3 },
            { cx: 340, cy: 165, r: 4 },
            { cx: 320, cy: 185, r: 3.5 },
            { cx: 335, cy: 215, r: 3 }
          ].map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#7DD3FC" />
          ))}

          {/* Thriving plant below receiving water */}
          <path d="M305 240 L310 280 L350 280 L355 240 Z" fill="#9A3412" />
          <path d="M330 240 L330 195" stroke="#22C55E" strokeWidth="3" />
          <path d="M330 220 Q310 205 300 190 Q325 195 330 215" fill="#4ADE80" />
          <path d="M330 210 Q350 195 360 180 Q335 185 330 205" fill="#86EFAC" />
        </svg>
      );

    case 'leafy-greens':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#133624" />
          {/* Planter box */}
          <rect x="40" y="210" width="320" height="60" rx="6" fill="#4B3322" />
          <rect x="35" y="200" width="330" height="14" rx="3" fill="#6B4B32" />

          {/* Ruffled Lettuce Leaves */}
          <path d="M90 200 C60 160 80 100 110 90 C125 110 120 150 115 200 Z" fill="#4ADE80" />
          <path d="M115 200 C110 140 140 85 165 80 C175 115 160 160 140 200 Z" fill="#22C55E" />
          
          {/* Center Tuscan Kale blade */}
          <path d="M190 200 C185 130 190 60 205 40 C220 60 225 130 215 200 Z" fill="#166534" />
          <line x1="205" y1="45" x2="202" y2="200" stroke="#4ADE80" strokeWidth="2" />

          {/* Oakleaf and Butterhead clusters */}
          <path d="M220 200 C240 150 270 100 295 95 C295 130 280 170 245 200 Z" fill="#34D399" />
          <path d="M260 200 C280 160 320 120 340 125 C330 160 300 185 280 200 Z" fill="#10B981" />

          {/* Small foreground baby sprouts */}
          <path d="M140 205 Q125 185 115 180 Q135 185 140 200" fill="#86EFAC" />
          <path d="M270 205 Q285 185 295 180 Q275 185 270 200" fill="#86EFAC" />
        </svg>
      );

    case 'pollinator-flowers':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#3B1838" />
          {/* Stems */}
          <path d="M120 270 Q130 180 150 130" stroke="#15803D" strokeWidth="4" />
          <path d="M200 270 Q210 160 220 90" stroke="#16A34A" strokeWidth="4" />
          <path d="M280 270 Q270 190 260 140" stroke="#15803D" strokeWidth="4" />

          {/* Nasturtium Orange Blossom (Left) */}
          <circle cx="150" cy="120" r="32" fill="#EA580C" />
          <circle cx="150" cy="120" r="12" fill="#CA8A04" />
          <circle cx="150" cy="120" r="6" fill="#78350F" />

          {/* Lavender Spikes / Marigold (Center) */}
          <circle cx="220" cy="85" r="28" fill="#F59E0B" />
          <circle cx="220" cy="85" r="18" fill="#D97706" />
          <circle cx="220" cy="85" r="8" fill="#78350F" />

          {/* Borage / Alyssum Bloom (Right) */}
          <polygon points="260,110 268,130 290,132 272,145 278,165 260,152 242,165 248,145 230,132 252,130" fill="#A855F7" />
          <circle cx="260" cy="140" r="7" fill="#FDE047" />

          {/* Flying Honeybee Motif */}
          <g transform="translate(290, 70)">
            <ellipse cx="20" cy="15" rx="14" ry="9" fill="#FBBF24" />
            <line x1="14" y1="7" x2="14" y2="23" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="22" y1="6" x2="22" y2="24" stroke="#1E293B" strokeWidth="2.5" />
            <ellipse cx="16" cy="6" rx="8" ry="5" fill="#E2E8F0" fillOpacity="0.8" />
            <ellipse cx="24" cy="6" rx="8" ry="5" fill="#E2E8F0" fillOpacity="0.8" />
          </g>
        </svg>
      );

    case 'pest-control':
      return (
        <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#1C3827" />
          {/* Protective Botanical Leaf Shield */}
          <path d="M200 40 C280 40 310 100 310 180 C310 240 250 275 200 290 C150 275 90 240 90 180 C90 100 120 40 200 40 Z" fill="#22543D" stroke="#4ADE80" strokeWidth="3" />

          {/* Inner Leaf Veins */}
          <line x1="200" y1="50" x2="200" y2="280" stroke="#38A169" strokeWidth="3" />
          <line x1="200" y1="110" x2="250" y2="90" stroke="#38A169" strokeWidth="2" />
          <line x1="200" y1="110" x2="150" y2="90" stroke="#38A169" strokeWidth="2" />
          <line x1="200" y1="160" x2="265" y2="140" stroke="#38A169" strokeWidth="2" />
          <line x1="200" y1="160" x2="135" y2="140" stroke="#38A169" strokeWidth="2" />
          <line x1="200" y1="210" x2="260" y2="200" stroke="#38A169" strokeWidth="2" />
          <line x1="200" y1="210" x2="140" y2="200" stroke="#38A169" strokeWidth="2" />

          {/* Friendly Ladybug Protector */}
          <ellipse cx="200" cy="165" rx="26" ry="32" fill="#DC2626" />
          <circle cx="200" cy="133" r="14" fill="#0F172A" />
          <line x1="200" y1="140" x2="200" y2="197" stroke="#0F172A" strokeWidth="3" />
          {/* Ladybug dots */}
          <circle cx="186" cy="155" r="4.5" fill="#0F172A" />
          <circle cx="214" cy="155" r="4.5" fill="#0F172A" />
          <circle cx="183" cy="178" r="4.5" fill="#0F172A" />
          <circle cx="217" cy="178" r="4.5" fill="#0F172A" />
          {/* Dewdrops of clean water */}
          <circle cx="140" cy="110" r="5" fill="#7DD3FC" fillOpacity="0.8" />
          <circle cx="260" cy="120" r="4" fill="#7DD3FC" fillOpacity="0.8" />
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center bg-emerald-950 text-emerald-400 ${className}`}>
          <span className="text-4xl">🌿</span>
        </div>
      );
  }
};
