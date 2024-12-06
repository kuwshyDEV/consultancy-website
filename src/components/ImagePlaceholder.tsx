'use client';

const getGradient = (category: string) => {
  const gradients = {
    hero: 'from-secondary/20 via-secondary/10 to-transparent',
    services: 'from-secondary/30 to-transparent',
    portfolio: 'from-secondary/20 via-primary/80 to-primary',
    testimonials: 'from-secondary/10 via-secondary/5 to-transparent',
    team: 'from-secondary/15 to-transparent',
    default: 'from-secondary/10 to-transparent',
    about: 'from-secondary/10 to-transparent'
  };
  return gradients[category as keyof typeof gradients] || gradients.default;
};

const getPattern = (category: string, index: number) => {
  const patterns = {
    hero: [
      'radial-gradient(circle at 20% 30%, var(--secondary) 0.5px, transparent 1px) 0 0/20px 20px',
      'linear-gradient(45deg, var(--secondary) 0.5px, transparent 1px) 0 0/15px 15px'
    ],
    services: [
      'repeating-linear-gradient(45deg, var(--secondary) 0, var(--secondary) 1px, transparent 1px, transparent 10px)',
      'radial-gradient(circle at 50% 50%, var(--secondary) 0.5px, transparent 1px) 0 0/20px 20px'
    ],
    portfolio: [
      'linear-gradient(30deg, var(--secondary) 1px, transparent 1px) 0 0/15px 15px',
      'radial-gradient(circle at 30% 70%, var(--secondary) 0.5px, transparent 1px) 0 0/25px 25px'
    ],
    testimonials: [
      'repeating-linear-gradient(0deg, var(--secondary) 0, var(--secondary) 1px, transparent 1px, transparent 20px)',
      'repeating-linear-gradient(90deg, var(--secondary) 0, var(--secondary) 1px, transparent 1px, transparent 20px)'
    ],
    team: [
      'radial-gradient(circle at 50% 50%, var(--secondary) 0.5px, transparent 1px) 0 0/15px 15px',
      'linear-gradient(60deg, var(--secondary) 0.5px, transparent 1px) 0 0/20px 20px'
    ],
    about: [
      'radial-gradient(circle at 50% 50%, var(--secondary) 0.5px, transparent 1px) 0 0/15px 15px',
      'linear-gradient(60deg, var(--secondary) 0.5px, transparent 1px) 0 0/20px 20px'
    ]
  };
  return (patterns[category as keyof typeof patterns] || patterns.hero)[index % 2];
};

interface ImagePlaceholderProps {
  width: number;
  height: number;
  category: 'hero' | 'about' | 'team' | 'services' | 'portfolio' | 'testimonials';
  index?: number;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width,
  height,
  category,
  index = 0,
  text = '',
  className = ''
}: ImagePlaceholderProps) {
  const gradient = getGradient(category);
  const pattern = getPattern(category, index);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width,
        height,
        backgroundColor: 'var(--primary)',
      }}
    >
      {/* Pattern Layer */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: pattern,
        }}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Category Indicator */}
      <div className="absolute top-4 left-4 text-xs uppercase tracking-wider text-secondary/60">
        {category}
      </div>

      {/* Optional Text */}
      {text && (
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm text-accent/80 truncate">{text}</p>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 w-8 h-8 border border-secondary/20 rounded-full" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border border-secondary/20 rotate-45" />
    </div>
  );
}
