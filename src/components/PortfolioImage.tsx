'use client';

import Image from 'next/image';

interface PortfolioImageProps {
  category: string;
  index: number;
  className?: string;
}

const getImageUrl = (category: string, index: number) => {
  // Using Visual Hunt cat images as placeholders
  return `https://visualhunt.com/photos/cat/${index + 1}`;
};

export default function PortfolioImage({ category, index, className = '' }: PortfolioImageProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={getImageUrl(category, index)}
        alt={`${category} project ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={index < 6}
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-50" />
    </div>
  );
}
