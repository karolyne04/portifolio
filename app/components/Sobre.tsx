import Image from "next/image"
import foto from "../../public/img.png"

export default function  Sobre() {
    return (
        <div className="w-4/5 flex justify-center mx-auto gap-10">
            <p className="w-3/5 text-base ">
                <span className="text-2xl">Sobre</span><br/>
            Olá, sou Carolyne. Iniciei um curso técnico em informática no IFPI campus Oeiras,
             onde descobri minha paixão pela área de TI.
              Após um ano, decidi ingressar no curso de Tecnólogo em Análise e Desenvolvimento de Sistemas.
               Durante esse período, conciliava os estudos com o trabalho como operadora de caixa. Contudo, após sete meses, percebi que não fazia sentido continuar nessa área, 
               pois desejava me dedicar integralmente ao curso e buscar oportunidades na programação.Ao deixar o emprego, encontrei minha afinidade com a área de Front-end. 
               Após meu primeiro projeto solo, o CheckinTime, continuei estudando e trabalhando em projetos que me encantaram, percebendo o potencial que a programação Front-end proporciona.
               Algumas curiosidades sobre mim incluem o gosto pela fotografia, culinária, música e organização. Com uma sólida experiência em HTML, CSS e JavaScript, trago criatividade e atenção
                aos detalhes para cada projeto. Minha paixão pela resolução de problemas e otimização do desempenho do site impulsiona meu trabalho e assim sigo estudado React e Next.js .
            </p>
            <Image src={foto} alt=""  width={200} height={100} className="w-1/5 h-96 rounded-[50px]"/>
        </div>
    )
}