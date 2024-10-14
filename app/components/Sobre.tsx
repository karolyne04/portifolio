"use client";
import Image from "next/image";
import caro from "../../public/caro.jpeg";
import { useState, useEffect } from "react";

export default function Sobre() {
    const [index, setIndex] = useState(0);
    const texts = ["Desenvolvedora Front-end", "Desenvolvedora Mobile"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-4/5 flex flex-col justify-center mx-auto gap-10">
            {/* Seção de introdução */}
            <div className="flex w-full justify-start items-center gap-8">
                <Image
                    src={caro}
                    alt="Carolyne Ferreira"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                <div className="flex flex-col justify-center">
                    <span className="text-4xl font-bold text-pink-500">
                        Carolyne Ferreira
                    </span>
                    <span className="text-2xl text-pink-500 typing-animation mt-2">
                        {texts[index]}
                    </span>
                    {/* 
                    <p className="mt-4">
                        Sou desenvolvedora focada em ReactJs e React Native, com experiência em 
                        HTML, CSS, JavaScript e design intuitivo. Criei o Smartflow para otimizar 
                        a gestão de tempo em RH e repliquei a página de busca do Sporty usando 
                        Next.js, React, TypeScript e TailwindCSS.
                    </p>
                    */}
                </div>
            </div>

            {/* Linha do tempo em ziguezague */}
            <div className="timeline flex-col w-full relative my-10">
                <div className="timeline-item left w-1/2 ml-0 mb-10">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">Sou desenvolvedora front-end com uma sólida experiência em ReactJS e React Native, apaixonada por criar interfaces intuitivas e funcionais.</p>
                    </div>
                </div>
                <div className="timeline-item right w-1/2 ml-auto mb-10">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">Minha expertise abrange uma variedade de tecnologias, incluindo HTML, CSS, JavaScript, Bootstrap, Firebase, styled-components, StyleSheet e Expo</p>
                    </div>
                </div>
                <div className="timeline-item left w-1/2 ml-0 mb-10">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">Recentemente, desenvolvi o Smartflow, um aplicativo de contratação projetado para otimizar a gestão do tempo de usuários e equipes de RH, promovendo eficiência e agilidade no processo de recrutamento.</p>
                    </div>
                </div>
                <div className="timeline-item right w-1/2 ml-auto mb-10">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">criei uma réplica da página de busca do Sporty utilizando Next.js, React, TypeScript e TailwindCSS, demonstrando minha habilidade em trabalhar com as mais recentes ferramentas e frameworks do mercado.</p>
                    </div>
                </div>
                <div className="timeline-item left w-1/2 ml-0">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">Estou sempre comprometida em elevar o design intuitivo e construir aplicações com código organizado e sustentável.</p>
                    </div>
                </div>

                <div className="timeline-item right w-1/2 ml-auto mb-10">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <p className="text-primary">Minha abordagem combina princípios de design eficazes com práticas de desenvolvimento ágeis, garantindo que cada projeto não só atenda, mas supere as expectativas dos usuários.</p>                        
                    </div>
                </div>
                {/* Linha de conexão */}
                <div className="absolute w-1 h-full bg-pink-500 left-1/2 transform -translate-x-1/2 top-0"></div>
            </div>
        </div>
    );
}
