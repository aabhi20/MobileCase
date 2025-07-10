// components/HeroCards.tsx
import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const HeroCards: React.FC = () => {
  const CardList = [
    { title: 'Itachi', image: '1.jpg' },
    { title: 'Rose', image: '2.jpg' },
    { title: 'Tree', image: '3.jpg' },
    { title: 'Flower', image: '4.jpg' },
    { title: 'Fire', image: '5.jpg' },
    { title: 'Flower', image: '6.jpg' },
  ];

  const rotations = [
    '-rotate-16',
    '-rotate-14',
    '-rotate-12',
    'rotate-12',
    'rotate-14',
    'rotate-16',
  ];

  return (
    <MaxWidthWrapper className="pt-0 mb-0">
      <div className="relative h-64 flex justify-center items-center lg:flex lg:justify-start">
        <div className="relative w-[400px] h-64 flex justify-center items-center lg:items-center lg:justify-baseline">
          {CardList.map((item, index) => (
            <div
              key={index}
              className={`absolute w-20 h-34 overflow-hidden rounded shadow-lg ${rotations[index]} z-${index + 10}`}
              style={{
                transform: `translateX(${(index - CardList.length / 2) * 40}px) rotate(${getRotationDeg(index)}deg)`,
              }}
            >
              <Image src={`/${item.image}`} alt={item.title} fill className="rounded" />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

// Helper function to match Tailwind rotations with degrees
const getRotationDeg = (index: number): number => {
  const values = [-24, -18, -12, 12, 18, 24];
  return values[index] || 0;
};

export default HeroCards;
