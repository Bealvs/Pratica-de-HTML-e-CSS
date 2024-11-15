import { useEffect } from "react"
import { useState } from "react"
import './Contador.css'

export function Contador() {

    const [Cont, setCont] = useState(0)
    const[Contando,setContando] = useState(false)
    let valor = Cont

    useEffect(()=>{
        if(Contando!==true){
        return;
    }
    const tempo = setTimeout(()=>setCont(Cont+1),1000)
    return  ()=>{clearTimeout(tempo)}
    }
    )
    

function iniciar(){
    setContando(true)
    }
        
function parar (){
    setContando(false)
}

function zerar (){
    setCont(0)
    setContando(false)
}
    return (
      <>
        <div className="Trás">
            <div className="Painel">
                <div className="Contador">
                  <p>{valor}</p>
                </div>
              <button onClick={iniciar} id = "BotãoIni">Iniciar</button>
              <button onClick={parar} id = "BotãoParar">Parar</button>
              <button onClick={zerar} id = "BotãoIni">Zerar</button>
            </div>
        </div>
        
      </>
    )
  }
  
  