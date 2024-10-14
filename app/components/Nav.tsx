import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-sec flex justify-center w-full h-20 p-4 m- text-white ">
            <div className="flex space-x-10 justify-center items-center w-2/3 my-2">
                <Link href="#sobre" className="w-32 h-10 bg-primary flex justify-center items-center rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">Sobre</Link>
                <Link href="#projeto" className="w-32 h-10 bg-primary flex justify-center items-center rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">Projetos</Link>
                <Link href="#habilidades" className="w-32 h-10 bg-primary flex justify-center items-center rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">Habilidades</Link>
                <Link href="#contato" className="w-32 h-10 bg-primary flex justify-center items-center rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">Contato</Link>
            </div>
        </nav>
    )
}