
"use client";
import { useState } from 'react';
import Card from './Card';
import MobileCard from './MobileCard';

export default function Projeto() {
    const [selectedCategory, setSelectedCategory] = useState('todos');

    return (
        <div className="w-4/5 mx-auto">
            {/* Títulos como botões */}
            <div className="flex justify-around mb-8">
                <button 
                    onClick={() => setSelectedCategory('todos')} 
                    className={`px-4 py-2 ${selectedCategory === 'todos' ? 'font-bold text-primary' : 'text-gray-500'}`}>
                    Todos
                </button>
                <button 
                    onClick={() => setSelectedCategory('web')} 
                    className={`px-4 py-2 ${selectedCategory === 'web' ? 'font-bold text-primary' : 'text-gray-500'}`}>
                    Web
                </button>
                <button 
                    onClick={() => setSelectedCategory('mobile')} 
                    className={`px-4 py-2 ${selectedCategory === 'mobile' ? 'font-bold text-primary' : 'text-gray-500'}`}>
                    Mobile
                </button>
            </div>

            {/* Renderiza os cards com base na categoria selecionada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                {selectedCategory === 'todos' || selectedCategory === 'web' ? (
                    <>
                        <Card 
                          name="Gelato" 
                          imageUrl={'/gelato.png'} 
                          link={'https://github.com/karolyne04/desafio-chakra'} 
                        />
                        <Card 
                          name="Materialize" 
                          imageUrl={'/materialize.png'} 
                          link={'https://github.com/ifpi-picos/materializeminds-front-end'} 
                        />
                        <Card 
                          name="Spotify" 
                          imageUrl={'/spotify.png'} 
                          link={'https://github.com/karolyne04/spotify-copia'} 
                        />
                        <Card 
                          name="Incubadora" 
                          imageUrl={'/social.png'} 
                          link={'https://github.com/orgs/ifpi-picos/teams/grupo-09/repositories'} 
                        />
                    </>
                ) : null}

                {selectedCategory === 'todos' || selectedCategory === 'mobile' ? (
                    <>
                        <MobileCard
                          name="Apitech" 
                          imageUrl={'/apitech.jpeg'} 
                          className=" h-96"
                        />
                        <MobileCard
                          name="Smartflow"
                          imageUrl={'/smartflow.jpeg'} 
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
}
