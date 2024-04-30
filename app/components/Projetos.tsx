'use client'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import spotify from "../../public/spotify.png"
import gelato from "../../public/gelato.png"
import list from "../../public/list.png"
import materialize from "../../public/materialize.png"
import social from "../../public/social.png"


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Projetos() {
    const data = [
        {id: '1', image: '../../public/spotify.png'},
        {id: '2', image: '../../public/gelato.png'},
        {id: '3', image: '../../public/list.png'},
        {id: '4', image: '../../public/materialize.png'},

    ]
    return (
         <div className='w-4/5 bg-ter rounded-md justify-center mx-auto'>
            <h2 className='p-5 m-5 text-2xl'>Projetos</h2>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className='flex justify-center items-center'

            >
                {/* {data.map( (item) => (  */}
                <SwiperSlide
                    className='flex justify-center items-center'
                >
                    <Image
                        src={spotify}
                        alt=''
                        className='mx-auto flex justify-center items-center'
                        width={1000}
                        height={500} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={gelato}
                        alt=''
                        width={1000}
                        height={500}
                        className='mx-auto flex justify-center items-center'
                         />

                </SwiperSlide>
                <SwiperSlide>
                        
                <Image src={list} alt='' width={1000} height={500} 
                        className='mx-auto flex justify-center items-center'
                        />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                        className='mx-auto flex justify-center items-center'
                        src={materialize} alt='' width={1000} height={500}  />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={social} alt={''} className='mx-auto flex justify-center items-center' width={1000} height={500}/>
            </SwiperSlide>
                    
                    
            </Swiper>
        </div> 

                
    )
}