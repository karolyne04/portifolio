'use client'
import { transform } from "next/dist/build/swc";
import React from "react";
import circle from "../../styles/Circle.module.css"

import { useSpring, animated } from "react-spring";
//  import motion from "framer-motion";

interface CircleProps {
    children?: React.ReactNode;
    className?: string
   
    
}



export default function Circle(props: CircleProps) {
    const springProps = useSpring({
        from: {y: 0},
        to: {y: -20},
        config: {duration: 2000},
        loop: true,
    });

    return (
         <div className={`w-16 h-16 relative rounded-full bg-slate-50 flex items-center justify-center text-black  -translate-y-6 and translate-x-6 shadow-md animate-bounce ${circle}   ${props.className}` } 
          style={{ transform: `translateY(${springProps.y.to((y) => `${y}px`)})` }}> 
        {/* //  style={{ transform: springProps.y.to((y) => `translateY(${y}px)`) }}> */}
             {props.children}
         </div>
        
    )
}