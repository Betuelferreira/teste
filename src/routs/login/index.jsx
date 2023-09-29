
import "./login.css"
import { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth"

export default function Login() {

    const { user, login, logout } = useContext(AuthContext)
    /* const {logado} = useContext{AuthContext}
 */
    useEffect(() => {

    }, [])

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function HandleSubmit(e) {
        e.preventDefault()
        login(usuario, senha)
    }

    function AddUser(e) {
        setUsuario(e.target.value)
    }
    function AddSenha(e) {
        setSenha(e.target.value)
    }


    return (
        <div className="container_login">

            <div className="container_conteudo">
                <div className="animacao">
                    <img src="./src/assets/enter-otp-animate.svg" alt="" />
                </div>



                <form className="form_login" onSubmit={HandleSubmit}>


                   {/*  <div className="Logo">
                        <Link to="/"><img src="./src/assets/logo.png" alt="Logo" /></Link>
                    </div> */}
                    <h1>Login</h1>
                    <div className="container_usuario">
                        <label htmlFor="">Usuário:</label>
                        <input placeholder="Usuário" onChange={AddUser} />

                    
                        <label htmlFor="">Senha:</label>
                        <input placeholder="Senha" onChange={AddSenha} />
                    </div>

                    <div className="cadastrar">
                        <p>Esqueci a Senha</p>
                        <p>Não tenho cadastro</p>
                    </div>

                    <button className="botao" type="submit">Enviar</button>
                </form>
            </div>
        </div>

    )
}