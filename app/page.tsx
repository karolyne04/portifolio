// app/page.tsx
import Image from "next/image";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Card from "./components/Card";
import Projeto from "./components/Projeto";
// import ParticlesBackground from "./components/ParticlesBackground";
import Head from 'next/head';

export default function Home() {
    return (
        <>
            {/* <Head>
                <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
            </Head> */}
            <main className="h-full w-full mx-auto text-white flex flex-col justify-center items-center space-y-10">
                <Nav />
                {/* <ParticlesBackground /> */}
                <Sobre />
                <Projeto />
                <Habilidades />
                <Contato className="flex items-center justify-center" />
            </main>
        </>
    );
}
