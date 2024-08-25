import Image from "next/image";
import Link from 'next/link';

interface CardProps {
  name: string;
  imageUrl: string;
  link?: string;
  className?: string;
}

export default function Card({ imageUrl, name, link, className }: CardProps) {
  return (
    <div className="w-full h-full max-w-lg bg-teal-600 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-72">
        <Image 
          src={imageUrl} 
          alt={`${name} image`} 
          // fill
          // className="object-cover"
          layout="fill" objectFit="cover"
          // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="px-6 py-4 bg-five h-32">
        <div className="font-bold text-xl mb-2">{name}</div>
        {link ? (
          <Link href={link} className="text-white hover:underline">
            {link}
          </Link>
        ) : (
          <p className="text-gray-500">Link não disponível</p>
        )}
      </div>
    </div>
  );
}
