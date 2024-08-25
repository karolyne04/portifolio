import Image from "next/image";
import Botao from "../app/components/Botao";
import Nav from "./components/Nav";
import { getImageProps } from "next/image";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Card from "./components/Card";
import Projeto from "./components/Projeto";


export default function Home() {

  return (
    
      <main className="h-full w-full mx-auto text-white justify-center items-center space-y-10" >
        
          <Nav />

          <Sobre />
          {/* <Card name="Gelato" imageUrl={ '/gelato.png'} link={'https://github.com/karolyne04/desafio-chakra'} className="w-full h-full"/> */}
          
          <Projeto/>
          <Habilidades/>
          <Contato className="flex items-center justify-center" />
      </main>
    
  )
}
