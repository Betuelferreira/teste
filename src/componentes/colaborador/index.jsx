import React from "react";
import "./colaborador.css"

function Colaborador({nome, cargo, imagem}){
    return(
        <div className="colaborador">
            <div className="cabecalho" >
                <img src={imagem} alt="imagemPerfil" />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador