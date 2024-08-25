import Card from "./Card";

export default function Projeto() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-4/5 mx-auto">
            <Card 
              name="Gelato" 
              imageUrl={ '/gelato.png'} 
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
            <Card 
              name="Apitech" 
              imageUrl={'/apitech.jpeg'} 
            />
        </div>
    );
}
