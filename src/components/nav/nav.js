import styles from './styles/nav.module.scss'
import Logo from './logo'
import Link from 'next/link'
import OffCanvas from '../re-uasables/offcanvas'
import {ChevronDoubleDown, ChevronDoubleUp, PersonCircle} from 'react-bootstrap-icons'
import ShowPopover from '../re-uasables/popover'
import { GlobalState } from '../../context/globalContext'
import axios from 'axios'
import { mutate } from 'swr'



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

    const {user} = GlobalState()

    return (
        <div className= {styles.navList} style= {{color}}>
            <ul id= {vertical && styles.navList_vertical}>
                <li> <Link href='/'><a>home</a></Link> </li>
                <li> <Link href='/'><a>about</a></Link> </li>
                <li> <Link href='/'><a>contact</a></Link> </li>
                {
                    user && <li>
                                <ShowPopover
                                    icon= { <PersonCircle className= {styles.navList_user}/> }
                                    list= {<UserOption />}
                                />
                            </li>
                }
            </ul>
        </div>
    )
}

export const UserOption = () => {

    const {user} = GlobalState()

    const logout = async () => {
        await axios.delete('/logout')
        mutate('/profile', null, false)
    }

    return (
        <div className= {styles.useroption}>
            <span>profile</span>
            { user && <span id= {styles.useroption_logout} onClick= {logout}> Logout </span> }
        </div>
    )
}