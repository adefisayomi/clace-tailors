import styles from './styles/logo.module.scss'
import Link from 'next/link'


export default function Logo ({bg= false, width, border= true, shrink}) {

    return (
        <div 
        className= {styles.logo}
        style= {{padding: shrink && '0px', backgroundColor: bg && bg,  border: border ? border : 'none', width: width }}>
            <Link href= '/'><a>c a</a></Link>
        </div>
    )
}