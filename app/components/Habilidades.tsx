import Circle from "./Circle";

export default function Habilidades() {
  return (
    <div className="bg-backHabilities w-4/5 h-auto rounded-md relative mx-auto p-5">
      <h1 className="p-5 m-5 text-2xl text-center">Habilidades</h1>

      <Circle className="left-3/4 -top-2 animate-float-4 animate-float-22 sm:left-1/2 sm:-top-8 md:left-3/4 lg:left-3/4">HTML</Circle>
      <Circle className="left-2/4 sm:left-1/3 md:left-2/4 lg:left-1/2">CSS</Circle>
      <Circle className="-top-28 left-96 w-24 h-24 sm:left-1/4 sm:top-10 md:left-2/4 lg:left-1/3">JavaScript</Circle>
      <Circle className="left-1/4 top-20 sm:left-1/5 md:left-1/4">Git</Circle>
      <Circle className="top-24 left-48 sm:left-1/3 md:left-1/2">Figma</Circle>
      <Circle className="left-3 bottom-80 w-20 h-20 sm:bottom-72 sm:left-2 md:left-12">React.js</Circle>
      <Circle className="w-28 h-28 bottom-64 left-3/4 items-center justify-center sm:left-1/2">React Native</Circle>
      <Circle className="bottom-96 left-44 w-28 h-28 sm:left-1/4">Tailwind CSS</Circle>
      <Circle className="bottom-96 left-6 top-30 sm:top-20">Vercel</Circle>
      <Circle className="bottom-96 left-2/4 w-20 h-20 sm:left-1/2">Next.js</Circle>
      <Circle className="bottom-full -top-56 left-1/4 w-24 h-24 sm:left-1/3">Bootstrap</Circle>
      <Circle className="left-3/4 -top-96 bottom-full w-24 h-24 sm:left-2/4">Native Base</Circle>
      <Circle className="w-32 h-32 bottom-96 -top-96 left-4/5 m-5 sm:left-1/2">Styled-components</Circle>
      <Circle className="w-20 h-20 bottom-96 left-2/4 sm:left-1/3">Chakra UI</Circle>
      <Circle className="bottom-96 left-3/4 sm:left-1/2">Expo</Circle>
      <Circle className="w-28 h-28 bottom-64 left-48 sm:left-1/4">StyleSheet</Circle>
    </div>
  );
}
