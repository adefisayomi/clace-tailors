import styles from './styles/nav.module.scss'
import Logo from './logo'
import Link from 'next/link'
import OffCanvas from '../re-uasables/offcanvas'
import {ChevronDoubleDown, ChevronDoubleUp} from 'react-bootstrap-icons'



export default function Nav () {

    return (
        <div className= {styles.nav}>
            <span> <Logo /> </span>
            
            <span className= {styles.nav_list}>
                <NavList />
            </span>

            <span className= {styles.nav_icon}>
                <OffCanvas
                    iconActive= { <ChevronDoubleDown /> }
                    iconClose= { <ChevronDoubleUp /> }
                    list= {<NavList vertical color= 'white' />}
                />
            </span>
        </div>
    )
}

export const NavList = ({vertical, color}) => {

    return (
        <div className= {styles.navList} style= {{color}}>
            <ul id= {vertical && styles.navList_vertical}>
                <li> <Link href='/'><a>home</a></Link> </li>
                <li> <Link href='/'><a>about</a></Link> </li>
                <li> <Link href='/'><a>contact</a></Link> </li>
            </ul>
        </div>
    )
}