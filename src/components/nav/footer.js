import styles from './styles/footer.module.scss'
import {Instagram, Facebook, Twitter, Whatsapp, EmojiSmileFill} from 'react-bootstrap-icons'


export default function Footer () {

    return (
        <div className= {styles.footer}>
            <span>
                <p>2021 &copy; clace clothings enterprise. </p>
            </span>

            <span>
                <Instagram className= {styles.footer_icon} />
                <Facebook className= {styles.footer_icon} />
                <Whatsapp className= {styles.footer_icon} />
            </span>
        </div>
    )
}