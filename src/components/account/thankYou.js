import styles from './styles/thanks.module.scss'
import {EmojiSmile} from 'react-bootstrap-icons'


export default function Thanks ({user}) {

    return (
        <div className= {styles.thanks}>

            <div className= {styles.thanks_image}>
                <img src="https://img.freepik.com/free-vector/fashion-designer-illustration-with-man-studio_23-2148830705.jpg?size=626&ext=jpg" alt="Happy student"/>
            </div>

            <div className= {styles.thanks_main}>
                <span>
                    <EmojiSmile className= {styles.thanks_smile} />
                    <h1>
                        #welcome
                    </h1>
                    <p>We sent a payment link to your email to complete your <span>#registration</span> </p>
                    <em>see you in class</em>
                    {/* <blockquote>Dolapo oluwole</blockquote> */}
                </span>
                
            </div>

        </div>
    )
}