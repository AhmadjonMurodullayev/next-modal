import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="https://storage.kun.uz/source/thumbnails/_medium/10/C8LegajuTHiCxALYvB8IEAePl0tVowlJ_medium.jpg"
        alt="Vercel Logo"
        priority
        width={500}
        quality={30}
        sizes="100%"
        height={16}
      />
      <br />
      <br />
      <Image
        src="https://storage.kun.uz/source/thumbnails/_medium/10/hQWUpSjqonq0wQg3Lg1Gue0JyZtNN__h_medium.jpg"
        alt="Vercel Logo"
        width={500}
        height={16}
        quality={100}
      />
    </>
  );
}
