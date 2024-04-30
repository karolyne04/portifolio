
interface BotaoPros {
    titulo: string
    className?: string
}

export default function Botao(props: BotaoPros) {
    return (
        <button className="bg-primary w-22 h-10 rounded-full text-white" >{props.titulo}</button>
    )
}