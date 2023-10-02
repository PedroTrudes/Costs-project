import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';
import Input from '../../form/Input';
import Select from '../../form/Select';
import SubmitButton from '../../form/SubmitButton';

//passando essa props de um componente pai
function ProjectForm({btnText}) {
    const [categories, SetCategories] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/categories", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        SetCategories(data)
    })
    .catch((err) => console.log(err));
    },[])


    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento do projet" name="name" placeholder="Insira o orçamento do projeto" />
            <Select name="category_id" text="Selecione uma categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm;