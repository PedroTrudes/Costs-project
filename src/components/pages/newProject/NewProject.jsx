import styles from './NewProject.module.css';
import ProjectForm from '../../layout/project/ProjectForm';
import { useNavigate } from 'react-router-dom';

function NewProject() {
    const nav = useNavigate();

    function createPost(project){
        // initialize cost and service
        project.cost = 0;
        project.service = [];
        //parei aqui 

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()).then((data) => {
            nav('/project', {state: {message: 'Projeto criado com sucesso!'}})

        }).catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject;