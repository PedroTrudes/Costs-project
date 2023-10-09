import { useLocation } from "react-router-dom";

import Message from "../../layout/message/Message";

function Projects() {
    const location = useLocation()

    let message = '';
    if (location.state){
        console.log(location)
        message = location.state.message
    }
    return(
        <div>
            <h1>Meus projetos</h1>
            {message && <Message msg={message} type="success" />}
        </div>
    )
}

export default Projects;