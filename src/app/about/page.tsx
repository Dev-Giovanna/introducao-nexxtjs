// import NavBar from "@/components/NavBar"
import { CardDois } from "@/components/CardDois"

export default function About(){

    return(
        <div>
            {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
            <h1>Sobre nós</h1>
            <p>Informações sobre a empresa ...</p>
            <CardDois 
                title="Estrela Brilhante"
                description="Linda estrela brilhante, que brilha e irradia com seu radioso semblante."
                imageUrl="estrela.png"
            />
        </div>
    )
}