import Botao from "./Botao"
import { FaLinkedin, FaTelegram, FaGithub, FaWhatsapp} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

interface ContatoProps {
    className: string
}


export default function Contato(props: ContatoProps) {
    return (
        <div className="flex flex-col w-4/5 bg-sec justify-center mx-auto rounded md:rounded-lg">
            <div className={`flex flex-col mx-auto w-2/4 `}>
                <form className="flex flex-col mx-4 py-5 space-y-2">
                    <label>Nome</label>
                    <input placeholder="Nome completo" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Email</label>
                    <input placeholder="E-mail para contato" type="email" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Assunto</label>
                    <input placeholder="Assunto do E-mail" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Comentário</label>
                    <textarea rows={3} placeholder="Digite sua mensagem..." className="border-2  rounded-lg border-primary p-2" />
                    <Botao titulo="Enviar" className="w-2/4 mt-3"/>
                </form>
            </div>

            <div className="flex flex-row mx-auto justify-center gap-20 w-2/3 my-5">
                <span  className="cursor-pointer">
                <Link href="https://www.linkedin.com/in/carolyne-ferreira/" target="black">
                    <FaLinkedin className="bg-blue-600 text-white w-10 h-10 rounded md:rounded-lg" title="Linkedin"/>
                </Link>
                </span>
                <span className="cursor-pointer ">
                    <Link href={"https://mail.google.com/mail/u/1/#inbox"} target="black">
                        <CgMail className="bg-red-500 w-10 h-10 rounded md:rounded-lg" title="Email"/>
                    </Link>
                </span>
                <span className="cursor-pointer">
                    <Link href="https://web.telegram.org/k/"  target="black">
                        <FaTelegram className="bg-blue-500 w-10 h-10 rounded-full" title="Telegram"/>
                    </Link>
                </span>
                <span className="cursor-pointer">
                <Link href={"https://github.com/karolyne04"} target="black">
                    <FaGithub className="w-10 h-10" title="Github"/>
                </Link>
                </span>
                <span className="cursor-pointer">
                <Link href="https://web.whatsapp.com/" target="black">
                    <FaWhatsapp className="w-10 h-10 bg-green-500 rounded md:rounded-lg" title="WhatsApp"/>
                </Link>
                </span>
               
            </div>
        </div>
    )
}