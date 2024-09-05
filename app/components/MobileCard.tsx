import Image from "next/image";
import Link from 'next/link';

interface MobileCardProps {
  name: string;
  imageUrl: string;
  link?: string;
  className?: string;
}

export default function MobileCard({ imageUrl, name, link, className }: MobileCardProps) {
  return (
    <Link href={link || "#"} passHref>
      <div className={`relative w-96 h-[700px] bg-white ${className} rounded-lg transition-transform transform hover:scale-105`}>
        {/* Container para o nome, ocupando um espaço pequeno no topo */}
        <div className="absolute top-0 left-0 w-full bg-white  p-2 z-10 rounded-lg">
          <div className="text-center font-bold text-xl text-primary">{name}</div>
        </div>
        {/* Imagem que cobre o restante do card */}
        <div className="relative w-full h-full">
          <Image 
            src={imageUrl} 
            alt={`${name} image`} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-md"
          />
        </div>
      </div>
    </Link>
  );
}
