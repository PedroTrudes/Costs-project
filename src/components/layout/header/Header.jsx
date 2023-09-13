import { Link } from 'react-router-dom';
import logo from '../../../img/costs_logo.png';
import styles from './Header.module.css';
import Container from '../container/Container';

function Header() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Logo costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/newproject'>Novo projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/project'>Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>
                    
                </ul>
            </Container>

        </nav>
    )
}

export default Header