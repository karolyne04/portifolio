import Image from "next/image";
import Link from 'next/link';

interface CardProps {
  name: string;
  imageUrl: string;
  link?: string;
  className?: string;
}

export default function Card({ imageUrl, name, link = "#", className }: CardProps) {
  return (
    <Link href={link}>
      <div className={`w-full h-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${className}`}>
        <div className="relative w-full h-72">
          <Image 
            src={imageUrl} 
            alt={`${name} image`} 
            layout="fill" 
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="px-6 py-4 bg-gray-100 h-22 justify-text">
          <div className="font-bold text-xl mb-2 text-primary text-center">{name}</div>
          {/* Caso queira remover o texto de link */}
          {/* {link ? (
            <span className="text-blue-500 hover:underline">
              {link}
            </span>
          ) : (
            <p className="text-gray-500">Link não disponível</p>
          )} */}
        </div>
      </div>
    </Link>
  );
}
