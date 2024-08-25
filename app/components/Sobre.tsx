import Image from "next/image"
import foto from "../../public/img.png"


export default function  Sobre() {
    return (
        <div className="w-4/5 flex justify-center mx-auto gap-10">
            <p className="w-3/5 text-base column-text ">
                <span className="text-2xl">Sobre</span><br/>
                Sou desenvolvedora front-end com foco em ReactJs e React Native. 
                Utilizando HTML, CSS, JavaScript, Bootstrap, React Native, React, Firebase, 
                styled-components, StyleSheet, Expo, Scrum e Figma, desenvolvi o Smartflow, 
                um aplicativo para contratação projetado para otimizar a gestão de tempo de 
                usuários e equipes de RH. Também criei uma réplica da página de busca do Sporty usando Next.js, 
                React, TypeScript e TailwindCSS. Estou sempre empenhada em elevar o design intuitivo e 
                construir aplicações com código organizado.
            </p>
            <Image src={foto} alt=""  width={200} height={100} className="w-1/5 h-96 rounded-[50px]"/>
        </div>
    )
}