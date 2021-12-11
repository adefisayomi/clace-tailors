import Link from 'next/link'
import styles from '../styles/notfound.module.scss'


export default function NotFound () {

    return (
        <div className= {styles.notfound}>
            <img src="https://www.sageisland.com/wp-content/uploads/2015/04/creative-404-error-page-design-marketing-assets.jpg" alt=""/>
            <Link href= '/'><a>go home</a></Link>

        </div>
    )
}