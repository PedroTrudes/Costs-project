import { Link } from "react-router-dom"

function Header() {
    return(
        <div>
            <span>Barra de navegação</span>
            <Link to='/'>Home</Link>
            <Link to='/contato'>Contato</Link>
        </div>
    )
}

export default Header