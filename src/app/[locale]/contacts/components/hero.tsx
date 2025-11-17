'use client';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[429px] max-md:h-[500px]">
      <Image
        className="object-cover"
        src="/images/contacts/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
      <Image
        className="absolute inset-0 bottom-0 z-10 h-[429px] w-full object-cover max-md:h-[500px]"
        src="/images/contacts/faded.svg"
        alt="faded"
        width={1400}
        height={429}
        unoptimized
      />
    </section>
  );
};
