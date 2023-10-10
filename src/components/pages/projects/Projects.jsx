import { useLocation } from "react-router-dom";

import Message from "../../layout/message/Message";

import styles from './Projects.module.css';
import Container from '../../layout/container/Container';
import LinkButton from "../../button/LinkButton";

function Projects() {
    const location = useLocation()

    let message = '';
    if (location.state){
        console.log(location)
        message = location.state.message
    }
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>
    )
}

export default Projects;