import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-sec flex justify-center w-full h-20 p-4 m- text-white ">
            <div className="flex space-x-10 justify-center items-center w-2/3 my-2">
                <Link href="#sobre" className="w-20 h-10 bg-primary flex justify-center items-center rounded-full">Sobre</Link>
                <Link href="#sobre" className="w-24 h-10 bg-primary flex justify-center items-center rounded-full">Projetos</Link>
                <Link href="#sobre" className="w-32 h-10 bg-primary flex justify-center items-center rounded-full">Habilidades</Link>
                <Link href="#sobre" className="w-24 h-10 bg-primary flex justify-center items-center rounded-full">Contato</Link>
            </div>
        </nav>
    )
}