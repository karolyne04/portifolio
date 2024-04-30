
// import  from "../../styles/Habilidades.module.css";


import Circle from "./Circle";

export default function Habilidades() {

  return (
    <div className={`bg-backHabilities w-4/5 h-100 rounded-md relative mx-auto`}>
        <h1 className="p-5 m-5 text-2xl">Habilidades</h1>

          <Circle className="left-3/4 -top-2  animate-float-4 animate-float-22">HTML</Circle>
          <Circle className="left-2/4" >CSS</Circle>
          <Circle className="-top-28 left-96 w-24 h-24">JavaScript</Circle>
          <Circle className="left-1/4 top-20  ">Git</Circle>
          <Circle className="top-24 left-48">Figma</Circle>
          <Circle className="left-3 bottom-80 w-20 h-20">React.js</Circle>
          <Circle className="w-28 h-28 bottom-64 left-3/4 items-center justify-center">React Native</Circle>
          <Circle className="bottom-96 left-44 w-28 h-28">Tailwind css</Circle>
          <Circle className="bottom-96 left-6 top-30">Vercel</Circle>
          <Circle className="bottom-96 left-2/4 w-20 h-20" >Next.js</Circle>
          <Circle className="bottom-full -top-56  left-1/4 w-24 h-24">Bootstrap</Circle>
          <Circle className="left-3/4 -top-96 bottom-full w-24 h-24">Native Base</Circle>
          <Circle className="w-32 h-32 bottom-96 -top-96 left-4/5 m-5">Stylecomponet</Circle>
          <Circle className="w-20 h-20 bottom-96 left-2/4">Chakra UI</Circle>   
          
      </div>
  );
}