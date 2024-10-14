import Botao from "./Botao"
import { FaLinkedin, FaTelegram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";

interface ContatoProps {
    className: string;
}

export default function Contato(props: ContatoProps) {
    return (
        <div className="flex flex-col w-4/5 bg-sec justify-center mx-auto rounded md:rounded-lg">
            <div className="flex flex-col mx-auto w-full md:w-2/4">
                <h2 className="mt-10 text-2xl font-bold">Envie me um e-mail</h2>
                <form className="flex flex-col mx-4 py-5 space-y-2">
                    <label>Nome</label>
                    <input placeholder="Nome completo" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Email</label>
                    <input placeholder="E-mail para contato" type="email" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Assunto</label>
                    <input placeholder="Assunto do E-mail" className="border-2 h-10 rounded-lg border-primary p-2"/>
                    <label>Comentário</label>
                    <textarea rows={3} placeholder="Digite sua mensagem..." className="border-2  rounded-lg border-primary p-2" />
                    <Botao titulo="Enviar" className="w-full md:w-2/4 mt-3"/>
                </form>
            </div>

            {/* Seção de contatos */}
            <div className="flex flex-col mx-auto justify-center w-full md:w-2/3 my-5">
                <h2 className="text-2xl font-bold text-center">Contatos</h2>
                <div className="border-b-2 w-full mt-2 mb-4" /> {/* Linha abaixo do título */}
                <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-20">
                    <span className="cursor-pointer transition-transform transform hover:scale-110 active:opacity-50">
                        <Link href="https://www.linkedin.com/in/carolyne-ferreira/" target="_blank">
                            <FaLinkedin className="bg-blue-600 text-white w-10 h-10 rounded md:rounded-lg" title="Linkedin"/>
                        </Link>
                    </span>
                    <span className="cursor-pointer transition-transform transform hover:scale-110 active:opacity-50">
                        <Link href="https://mail.google.com/mail/u/1/#inbox" target="_blank">
                            <CgMail className="bg-red-500 w-10 h-10 rounded md:rounded-lg" title="Email"/>
                        </Link>
                    </span>
                    <span className="cursor-pointer transition-transform transform hover:scale-110 active:opacity-50">
                        <Link href="https://web.telegram.org/k/" target="_blank">
                            <FaTelegram className="bg-blue-500 w-10 h-10 rounded-full" title="Telegram"/>
                        </Link>
                    </span>
                    <span className="cursor-pointer transition-transform transform hover:scale-110 active:opacity-50">
                        <Link href="https://github.com/karolyne04" target="_blank">
                            <FaGithub className="w-10 h-10" title="Github"/>
                        </Link>
                    </span>
                    <span className="cursor-pointer transition-transform transform hover:scale-110 active:opacity-50">
                        <Link href="https://web.whatsapp.com/" target="_blank">
                            <FaWhatsapp className="w-10 h-10 bg-green-500 rounded md:rounded-lg" title="WhatsApp"/>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
