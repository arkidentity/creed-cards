interface IconProps {
  accentColor: string;
  stroke?: string;
}

export function CardIcon({
  cardId,
  accentColor,
  stroke = "#ffffff",
}: {
  cardId: number;
  accentColor: string;
  stroke?: string;
}) {
  const props: IconProps = { accentColor, stroke };

  switch (cardId) {
    case 1: return <Icon1 {...props} />;
    case 2: return <Icon2 {...props} />;
    case 3: return <Icon3 {...props} />;
    case 4: return <Icon4 {...props} />;
    case 5: return <Icon5 {...props} />;
    case 6: return <Icon6 {...props} />;
    case 7: return <Icon7 {...props} />;
    case 8: return <Icon8 {...props} />;
    case 9: return <Icon9 {...props} />;
    case 10: return <Icon10 {...props} />;
    case 11: return <Icon11 {...props} />;
    case 12: return <Icon12 {...props} />;
    case 13: return <Icon13 {...props} />;
    case 14: return <Icon14 {...props} />;
    case 15: return <Icon15 {...props} />;
    case 16: return <Icon16 {...props} />;
    case 17: return <Icon17 {...props} />;
    case 18: return <Icon18 {...props} />;
    case 19: return <Icon19 {...props} />;
    case 20: return <Icon20 {...props} />;
    case 21: return <Icon21 {...props} />;
    case 22: return <Icon22 {...props} />;
    case 23: return <Icon23 {...props} />;
    case 24: return <Icon24 {...props} />;
    case 25: return <Icon25 {...props} />;
    case 26: return <Icon26 {...props} />;
    case 27: return <Icon27 {...props} />;
    case 28: return <Icon28 {...props} />;
    case 29: return <Icon29 {...props} />;
    case 30: return <Icon30 {...props} />;
    case 31: return <Icon31 {...props} />;
    case 32: return <Icon32 {...props} />;
    case 33: return <Icon33 {...props} />;
    case 34: return <Icon34 {...props} />;
    case 35: return <Icon35 {...props} />;
    case 36: return <Icon36 {...props} />;
    case 37: return <Icon37 {...props} />;
    case 38: return <Icon38 {...props} />;
    case 39: return <Icon39 {...props} />;
    case 40: return <Icon40 {...props} />;
    case 41: return <Icon41 {...props} />;
    case 42: return <Icon42 {...props} />;
    case 43: return <Icon43 {...props} />;
    case 44: return <Icon44 {...props} />;
    case 45: return <Icon45 {...props} />;
    case 46: return <Icon46 {...props} />;
    case 47: return <Icon47 {...props} />;
    case 48: return <Icon48 {...props} />;
    case 49: return <Icon49 {...props} />;
    case 50: return <Icon50 {...props} />;
    default: return null;
  }
}

const s = { width: "100%", height: "100%" };

function Icon1({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="40" r="25" fill="none" stroke={stroke} strokeWidth="2" opacity="0.9" />
      <circle cx="45" cy="65" r="25" fill="none" stroke={stroke} strokeWidth="2" opacity="0.7" />
      <circle cx="75" cy="65" r="25" fill="none" stroke={stroke} strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="55" r="5" fill={accentColor} />
    </svg>
  );
}

function Icon2({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M60 30 L90 80 L30 80 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="30" r="4" fill={accentColor} />
      <circle cx="30" cy="80" r="4" fill={accentColor} />
      <circle cx="90" cy="80" r="4" fill={accentColor} />
      <circle cx="60" cy="63" r="3" fill={stroke} opacity="0.6" />
    </svg>
  );
}

function Icon3({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 70 L30 50 L40 60 L60 40 L80 60 L90 50 L90 70 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="30" y="70" width="60" height="15" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="40" cy="60" r="3" fill={accentColor} />
      <circle cx="60" cy="40" r="3" fill={accentColor} />
      <circle cx="80" cy="60" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon4({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <line x1="60" y1="30" x2="60" y2="90" stroke={stroke} strokeWidth="2.5" />
      <line x1="35" y1="55" x2="85" y2="55" stroke={stroke} strokeWidth="2.5" />
      <circle cx="60" cy="60" r="20" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="30" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon5({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M60 25 Q70 40, 65 55 Q75 65, 70 80 Q65 90, 60 95 Q55 90, 50 80 Q45 65, 55 55 Q50 40, 60 25 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M60 45 Q65 55, 62 65 Q60 72, 58 65 Q55 55, 60 45 Z" fill={accentColor} opacity="0.6" />
      <circle cx="60" cy="70" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon6({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="60" r="35" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
      <path d="M60 25 A35 35 0 0 1 84 75" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M84 75 A35 35 0 0 1 36 75" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M36 75 A35 35 0 0 1 60 25" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="60" r="5" fill={accentColor} />
      <polygon points="82,73 87,75 84,80" fill={stroke} />
      <polygon points="38,73 33,75 36,80" fill={stroke} />
      <polygon points="58,27 60,22 62,27" fill={stroke} />
    </svg>
  );
}

function Icon7({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M25 60 Q30 45, 40 40 L50 50 Q45 60, 40 70 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M95 60 Q90 45, 80 40 L70 50 Q75 60, 80 70 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="50" r="2" fill={accentColor} />
      <circle cx="55" cy="60" r="1.5" fill={stroke} opacity="0.7" />
      <circle cx="65" cy="60" r="1.5" fill={stroke} opacity="0.7" />
      <circle cx="60" cy="65" r="2.5" fill={accentColor} />
    </svg>
  );
}

function Icon8({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="65" r="30" fill="none" stroke={stroke} strokeWidth="2" />
      <ellipse cx="60" cy="65" rx="30" ry="12" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="60" cy="65" rx="12" ry="30" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <line x1="60" y1="25" x2="60" y2="42" stroke={accentColor} strokeWidth="2" />
      <line x1="52" y1="33" x2="68" y2="33" stroke={accentColor} strokeWidth="2" />
      <circle cx="60" cy="65" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon9({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="35" r="20" fill="none" stroke={stroke} strokeWidth="2" opacity="0.9" />
      <rect x="40" y="60" width="40" height="40" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="55" x2="60" y2="60" stroke={stroke} strokeWidth="2" strokeDasharray="2,2" />
      <circle cx="60" cy="75" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon10({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <polygon points="60,25 63,35 73,35 65,42 68,52 60,45 52,52 55,42 47,35 57,35" fill={accentColor} />
      <path d="M40 70 L40 90 L80 90 L80 70" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="40" y1="70" x2="80" y2="70" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="70" x2="60" y2="90" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function Icon11({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="50" cy="60" r="28" fill="none" stroke={stroke} strokeWidth="2" opacity="0.7" />
      <rect x="42" y="52" width="36" height="36" fill="none" stroke={stroke} strokeWidth="2" opacity="0.7" />
      <circle cx="60" cy="68" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon12({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <line x1="60" y1="30" x2="60" y2="95" stroke={stroke} strokeWidth="2.5" />
      <line x1="35" y1="55" x2="85" y2="55" stroke={stroke} strokeWidth="2.5" />
      <circle cx="60" cy="55" r="25" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.3" strokeDasharray="3,3" />
      <circle cx="60" cy="30" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon13({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="35" y="60" width="50" height="35" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="50" y="55" width="20" height="25" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="78" cy="70" r="8" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="35" r="15" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.7" />
      <line x1="52" y1="28" x2="48" y2="20" stroke={accentColor} strokeWidth="1.5" />
      <line x1="68" y1="28" x2="72" y2="20" stroke={accentColor} strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="15" stroke={accentColor} strokeWidth="1.5" />
    </svg>
  );
}

function Icon14({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <ellipse cx="60" cy="35" rx="25" ry="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <path d="M60 50 L60 90" stroke={stroke} strokeWidth="2" strokeDasharray="3,3" />
      <path d="M60 25 L60 35" stroke={accentColor} strokeWidth="2" />
      <polygon points="56,29 60,25 64,29" fill={accentColor} />
      <path d="M50 25 L50 20 L55 23 L60 18 L65 23 L70 20 L70 25 Z" fill="none" stroke={accentColor} strokeWidth="1.5" />
    </svg>
  );
}

function Icon15({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="50" y="40" width="20" height="35" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="30" r="8" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="40" y="75" width="40" height="10" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M55 85 Q60 80, 65 85" stroke={accentColor} strokeWidth="1.5" />
      <line x1="60" y1="65" x2="60" y2="75" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2,2" />
    </svg>
  );
}

function Icon16({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="35" r="15" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M60 50 L60 70" stroke={stroke} strokeWidth="2.5" />
      <ellipse cx="60" cy="80" rx="25" ry="15" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="40" y1="75" x2="35" y2="90" stroke={stroke} strokeWidth="2" />
      <line x1="80" y1="75" x2="85" y2="90" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function Icon17({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <ellipse cx="60" cy="50" rx="18" ry="8" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M42 50 L35 45 Q30 42, 35 38" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M78 50 L85 45 Q90 42, 85 38" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M60 58 L60 75" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="78" r="4" fill={accentColor} />
      <circle cx="57" cy="48" r="2" fill={accentColor} />
    </svg>
  );
}

function Icon18({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <ellipse cx="60" cy="80" rx="8" ry="5" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M60 80 L60 50 Q60 40, 50 35" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M60 55 Q60 45, 70 40" fill="none" stroke={accentColor} strokeWidth="2" />
      <ellipse cx="50" cy="35" rx="5" ry="8" fill="none" stroke={accentColor} strokeWidth="1.5" />
      <ellipse cx="70" cy="40" rx="5" ry="8" fill="none" stroke={accentColor} strokeWidth="1.5" />
      <path d="M55 80 L55 90 M60 85 L60 92 M65 80 L65 90" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function Icon19({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="45" r="12" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="50" y="57" width="20" height="30" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M45 65 L35 80" stroke={accentColor} strokeWidth="2" />
      <polygon points="32,78 35,80 37,77" fill={accentColor} />
      <path d="M60 35 L60 25" stroke={accentColor} strokeWidth="2" />
      <polygon points="58,27 60,25 62,27" fill={accentColor} />
      <path d="M75 65 L85 55" stroke={accentColor} strokeWidth="2" />
      <polygon points="83,57 85,55 87,57" fill={accentColor} />
    </svg>
  );
}

function Icon20({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M60 90 L60 55" stroke={stroke} strokeWidth="2.5" />
      <path d="M45 70 L45 55 L60 55" stroke={stroke} strokeWidth="2" />
      <path d="M75 70 L75 55 L60 55" stroke={stroke} strokeWidth="2" />
      <circle cx="45" cy="45" r="8" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="60" cy="40" r="8" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="75" cy="45" r="8" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M55 88 L65 88" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function Icon21({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="35" y="55" width="20" height="20" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M35 65 L55 65" stroke={accentColor} strokeWidth="2" />
      <path d="M45 55 L45 75" stroke={accentColor} strokeWidth="2" />
      <rect x="65" y="55" width="20" height="20" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M65 65 L85 65" stroke={accentColor} strokeWidth="2" />
      <path d="M75 55 L75 75" stroke={accentColor} strokeWidth="2" />
      <rect x="50" y="35" width="20" height="20" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M50 45 L70 45" stroke={accentColor} strokeWidth="2" />
      <path d="M60 35 L60 55" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

function Icon22({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="45" r="12" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M50 57 L50 85 L70 85 L70 57" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M60 60 Q65 68, 63 75 Q60 80, 57 75 Q55 68, 60 60 Z" fill={accentColor} opacity="0.6" />
      <circle cx="60" cy="70" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon23({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 40 Q30 35, 35 35 L85 35 Q90 35, 90 40 L90 80 Q90 85, 85 85 L35 85 Q30 85, 30 80 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="35" y1="35" x2="35" y2="85" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <line x1="85" y1="35" x2="85" y2="85" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <line x1="45" y1="50" x2="75" y2="50" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="60" x2="75" y2="60" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="70" x2="75" y2="70" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <circle cx="60" cy="60" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon24({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M50 35 Q55 30, 60 35 Q65 30, 70 35 L70 50 Q70 55, 65 55 L55 55 Q50 55, 50 50 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="52" cy="60" r="2" fill={accentColor} />
      <circle cx="60" cy="65" r="2.5" fill={accentColor} />
      <circle cx="68" cy="60" r="2" fill={accentColor} />
      <circle cx="57" cy="72" r="2" fill={accentColor} opacity="0.7" />
      <circle cx="63" cy="72" r="2" fill={accentColor} opacity="0.7" />
      <path d="M60 75 L60 85" stroke={accentColor} strokeWidth="2" strokeDasharray="2,2" />
    </svg>
  );
}

function Icon25({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M40 75 L40 65 Q40 60, 45 58 L50 56" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M80 75 L80 65 Q80 60, 75 58 L70 56" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="35" r="15" fill="none" stroke={accentColor} strokeWidth="2" />
      <line x1="52" y1="28" x2="48" y2="20" stroke={accentColor} strokeWidth="1.5" />
      <line x1="68" y1="28" x2="72" y2="20" stroke={accentColor} strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="15" stroke={accentColor} strokeWidth="1.5" />
      <path d="M50 56 L60 50 L70 56" stroke={stroke} strokeWidth="2" strokeDasharray="2,2" />
    </svg>
  );
}

function Icon26({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <line x1="60" y1="30" x2="60" y2="90" stroke={stroke} strokeWidth="2" />
      <circle cx="45" cy="50" r="10" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="75" cy="50" r="10" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="40" y1="70" x2="50" y2="70" stroke={stroke} strokeWidth="2" />
      <line x1="70" y1="70" x2="80" y2="70" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="50" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon27({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M80 40 L80 60 Q80 75, 60 75 Q40 75, 40 60" fill="none" stroke={stroke} strokeWidth="2.5" />
      <polygon points="35,65 40,60 45,65" fill={stroke} />
      <circle cx="60" cy="40" r="4" fill={accentColor} />
      <circle cx="40" cy="60" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon28({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M40 50 L40 85 L80 85 L80 50 L60 40 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="54" y="70" width="12" height="15" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="50" cy="62" r="5" fill={accentColor} opacity="0.7" />
      <circle cx="70" cy="62" r="5" fill={accentColor} opacity="0.7" />
      <circle cx="60" cy="58" r="6" fill={accentColor} />
      <line x1="60" y1="40" x2="60" y2="30" stroke={accentColor} strokeWidth="2" />
      <line x1="56" y1="34" x2="64" y2="34" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

function Icon29({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 40 Q30 35, 35 35 L85 35 Q90 35, 90 40 L90 80 Q90 85, 85 85 L35 85 Q30 85, 30 80 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="35" y1="35" x2="35" y2="85" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <line x1="85" y1="35" x2="85" y2="85" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <line x1="45" y1="50" x2="75" y2="50" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="60" x2="75" y2="60" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="70" x2="75" y2="70" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <circle cx="60" cy="60" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon30({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="35" y="70" width="50" height="20" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M35 70 L60 45 L85 70" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="52" y="30" width="16" height="40" fill="none" stroke={stroke} strokeWidth="2" opacity="0.7" />
      <line x1="60" y1="35" x2="60" y2="45" stroke={accentColor} strokeWidth="2" />
      <line x1="55" y1="40" x2="65" y2="40" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

function Icon31({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="30" y="40" width="25" height="45" rx="3" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="65" y="40" width="25" height="45" rx="3" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="35" y1="50" x2="50" y2="50" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="58" x2="50" y2="58" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="66" x2="50" y2="66" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="50" x2="85" y2="50" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="58" x2="85" y2="58" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="66" x2="85" y2="66" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="60" cy="32" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon32({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M40 50 L40 85 L80 85 L80 50 L60 55 L40 50" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="55" x2="60" y2="85" stroke={stroke} strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="55" stroke={accentColor} strokeWidth="2.5" />
      <line x1="50" y1="37" x2="70" y2="37" stroke={accentColor} strokeWidth="2.5" />
      <circle cx="60" cy="30" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon33({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M35 75 L35 90 L85 90 L85 75 L60 55 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="55" y="75" width="10" height="15" fill="none" stroke={stroke} strokeWidth="1.5" />
      <path d="M52 55 L60 35 L68 55" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="28" x2="60" y2="38" stroke={accentColor} strokeWidth="2" />
      <line x1="56" y1="32" x2="64" y2="32" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

function Icon34({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="60" r="12" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="60" cy="35" r="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.8" />
      <circle cx="85" cy="60" r="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.8" />
      <circle cx="60" cy="85" r="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.8" />
      <circle cx="35" cy="60" r="8" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.8" />
      <line x1="60" y1="48" x2="60" y2="43" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <line x1="72" y1="60" x2="77" y2="60" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <line x1="60" y1="72" x2="60" y2="77" stroke={stroke} strokeWidth="1" opacity="0.4" />
      <line x1="48" y1="60" x2="43" y2="60" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function Icon35({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 70 Q40 65, 50 70 T70 70 T90 70" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M30 78 Q40 73, 50 78 T70 78 T90 78" fill="none" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <path d="M30 85 Q40 80, 50 85 T70 85 T90 85" fill="none" stroke={stroke} strokeWidth="2" opacity="0.3" />
      <circle cx="55" cy="55" r="2" fill={accentColor} />
      <circle cx="60" cy="48" r="2.5" fill={accentColor} />
      <circle cx="65" cy="58" r="2" fill={accentColor} />
      <path d="M60 30 L60 45" stroke={stroke} strokeWidth="2" />
      <path d="M56 41 L60 45 L64 41" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function Icon36({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <ellipse cx="45" cy="65" rx="18" ry="12" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M30 65 L60 65" stroke={stroke} strokeWidth="1.5" strokeDasharray="2,2" />
      <path d="M70 55 L70 75 Q70 78, 75 78 L85 78 Q90 78, 90 75 L90 55 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <ellipse cx="80" cy="55" rx="10" ry="3" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="80" cy="65" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon37({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M35 70 L35 55 Q35 50, 40 50 Q45 50, 45 55 L45 65" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M85 70 L85 55 Q85 50, 80 50 Q75 50, 75 55 L75 65" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="60" cy="45" r="5" fill="none" stroke={accentColor} strokeWidth="2" />
      <line x1="65" y1="45" x2="65" y2="28" stroke={accentColor} strokeWidth="2" />
      <line x1="60" y1="28" x2="60" y2="20" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="30" x2="48" y2="22" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="68" y1="30" x2="72" y2="22" stroke={stroke} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function Icon38({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <circle cx="60" cy="60" r="25" fill="none" stroke={stroke} strokeWidth="2" />
      <ellipse cx="60" cy="60" rx="25" ry="10" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="60" cy="60" rx="10" ry="25" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="4" fill={accentColor} />
      <path d="M60 30 L60 25 M57 28 L60 25 L63 28" stroke={accentColor} strokeWidth="1.5" />
      <path d="M85 60 L90 60 M87 57 L90 60 L87 63" stroke={accentColor} strokeWidth="1.5" />
      <path d="M60 90 L60 95 M57 92 L60 95 L63 92" stroke={accentColor} strokeWidth="1.5" />
      <path d="M35 60 L30 60 M33 57 L30 60 L33 63" stroke={accentColor} strokeWidth="1.5" />
    </svg>
  );
}

function Icon39({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 90 L60 30" stroke={stroke} strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
      <ellipse cx="40" cy="75" rx="4" ry="6" fill={stroke} opacity="0.6" transform="rotate(-25 40 75)" />
      <ellipse cx="48" cy="75" rx="4" ry="6" fill={stroke} opacity="0.6" transform="rotate(-25 48 75)" />
      <ellipse cx="48" cy="60" rx="4" ry="6" fill={stroke} opacity="0.7" transform="rotate(-25 48 60)" />
      <ellipse cx="56" cy="60" rx="4" ry="6" fill={stroke} opacity="0.7" transform="rotate(-25 56 60)" />
      <line x1="60" y1="30" x2="60" y2="42" stroke={accentColor} strokeWidth="2" />
      <line x1="54" y1="36" x2="66" y2="36" stroke={accentColor} strokeWidth="2" />
      <circle cx="60" cy="30" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon40({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M60 45 L50 35 Q45 30, 40 35 Q35 40, 40 48 L60 70 L80 48 Q85 40, 80 35 Q75 30, 70 35 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="50" x2="60" y2="58" stroke={accentColor} strokeWidth="1.5" />
      <line x1="56" y1="54" x2="64" y2="54" stroke={accentColor} strokeWidth="1.5" />
      <line x1="45" y1="45" x2="38" y2="38" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="75" y1="45" x2="82" y2="38" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="35" x2="60" y2="25" stroke={stroke} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function Icon41({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M48 45 L48 75 Q48 80, 53 80 L60 80" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M72 45 L72 75 Q72 80, 67 80 L60 80" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="48" y1="45" x2="72" y2="45" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="40" x2="60" y2="25" stroke={accentColor} strokeWidth="2" strokeDasharray="3,3" />
      <circle cx="60" cy="25" r="4" fill={accentColor} />
      <line x1="52" y1="27" x2="48" y2="20" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <line x1="68" y1="27" x2="72" y2="20" stroke={stroke} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function Icon42({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M40 35 L40 65 Q40 75, 50 80 L60 85 L70 80 Q80 75, 80 65 L80 35 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="60" y1="45" x2="60" y2="65" stroke={accentColor} strokeWidth="2" />
      <line x1="50" y1="55" x2="70" y2="55" stroke={accentColor} strokeWidth="2" />
      <line x1="75" y1="40" x2="90" y2="25" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <rect x="87" y="22" width="6" height="4" fill={stroke} opacity="0.6" />
    </svg>
  );
}

function Icon43({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <line x1="75" y1="35" x2="75" y2="85" stroke={stroke} strokeWidth="2" strokeDasharray="5,5" />
      <circle cx="50" cy="50" r="6" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="56" x2="50" y2="72" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="60" x2="42" y2="66" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="60" x2="58" y2="66" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="72" x2="45" y2="85" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="72" x2="60" y2="80" stroke={stroke} strokeWidth="2" />
      <circle cx="80" cy="45" r="4" fill={accentColor} />
    </svg>
  );
}

function Icon44({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M35 60 L35 75 L40 75 L40 65 L45 65 L45 70 L50 70 L50 65 L55 65 L55 70 L60 70 L60 55" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="70" cy="45" r="3" fill={accentColor} />
      <circle cx="78" cy="40" r="2.5" fill={accentColor} opacity="0.7" />
      <circle cx="75" cy="52" r="2" fill={accentColor} opacity="0.7" />
      <line x1="62" y1="47" x2="68" y2="44" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function Icon45({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M40 60 L40 75 Q40 80, 45 82 L75 82 Q80 80, 80 75 L80 60 Z" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M50 45 Q48 50, 50 55 Q52 50, 50 45" fill={accentColor} opacity="0.7" />
      <path d="M60 40 Q58 48, 60 55 Q62 48, 60 40" fill={accentColor} opacity="0.8" />
      <path d="M70 45 Q68 50, 70 55 Q72 50, 70 45" fill={accentColor} opacity="0.7" />
      <path d="M35 50 Q37 48, 39 50 T43 50" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function Icon46({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <line x1="60" y1="35" x2="60" y2="75" stroke={stroke} strokeWidth="2" />
      <path d="M45 75 Q45 85, 60 85 Q75 85, 75 75" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="45" cy="75" r="5" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="75" cy="75" r="5" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="45" x2="70" y2="45" stroke={stroke} strokeWidth="2" />
      <path d="M60 25 L60 35" stroke={accentColor} strokeWidth="2" />
      <path d="M56 29 L60 25 L64 29" fill="none" stroke={accentColor} strokeWidth="2" />
      <circle cx="60" cy="25" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon47({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M30 55 Q35 50, 42 52 Q45 48, 50 52" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M90 55 Q85 50, 78 52 Q75 48, 70 52" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M60 30 L60 70" stroke={accentColor} strokeWidth="3" opacity="0.8" />
      <path d="M55 35 L50 40" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
      <path d="M65 35 L70 40" stroke={accentColor} strokeWidth="1.5" opacity="0.5" />
      <path d="M50 25 L50 20 L55 23 L60 18 L65 23 L70 20 L70 25 Z" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="60" cy="18" r="3" fill={accentColor} />
    </svg>
  );
}

function Icon48({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="40" y="65" width="40" height="25" fill="none" stroke={stroke} strokeWidth="2" />
      <rect x="50" y="60" width="20" height="20" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="85" cy="75" r="8" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="81" y1="75" x2="89" y2="75" stroke={stroke} strokeWidth="1" opacity="0.5" />
      <circle cx="55" cy="45" r="4" fill={accentColor} />
      <line x1="55" y1="49" x2="55" y2="60" stroke={accentColor} strokeWidth="2" />
      <circle cx="65" cy="40" r="4" fill={accentColor} />
      <line x1="65" y1="44" x2="65" y2="60" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
}

function Icon49({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <rect x="45" y="55" width="30" height="30" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M40 55 L40 50 L80 50 L80 55" fill="none" stroke={stroke} strokeWidth="2" />
      <line x1="50" y1="85" x2="50" y2="90" stroke={stroke} strokeWidth="2" />
      <line x1="70" y1="85" x2="70" y2="90" stroke={stroke} strokeWidth="2" />
      <path d="M50 45 L50 40 L55 43 L60 38 L65 43 L70 40 L70 45 Z" fill="none" stroke={accentColor} strokeWidth="1.5" />
      <line x1="35" y1="65" x2="85" y2="65" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function Icon50({ stroke, accentColor }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" style={s}>
      <path d="M20 70 Q35 60, 50 70 T80 70 T100 70" fill="none" stroke={stroke} strokeWidth="2" />
      <path d="M20 78 Q35 68, 50 78 T80 78 T100 78" fill="none" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <circle cx="60" cy="55" r="15" fill="none" stroke={accentColor} strokeWidth="2" />
      <line x1="60" y1="35" x2="60" y2="25" stroke={accentColor} strokeWidth="1.5" />
      <line x1="75" y1="40" x2="83" y2="32" stroke={accentColor} strokeWidth="1.5" />
      <line x1="78" y1="55" x2="88" y2="55" stroke={accentColor} strokeWidth="1.5" />
      <line x1="45" y1="40" x2="37" y2="32" stroke={accentColor} strokeWidth="1.5" />
      <line x1="42" y1="55" x2="32" y2="55" stroke={accentColor} strokeWidth="1.5" />
      <line x1="85" y1="65" x2="85" y2="78" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <circle cx="85" cy="62" r="5" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
