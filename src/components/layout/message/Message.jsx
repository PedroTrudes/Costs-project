import { useEffect, useState } from 'react';
import styles from './Message.module.css';

function Message({type ,msg}) {
    const [visible ,setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
        }

        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 2000)

        return () => clearTimeout(timer);

    }, [msg])
    return( 
    <>
        {visible && (
            <div className={`${styles.messages} ${styles[type]}`}>
            {msg}
            </div>
        )}
    </>
    )
}

export default Message