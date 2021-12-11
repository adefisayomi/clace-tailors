import Header from './header'
import styles from './styles/wrapper.module.scss'
import ShowAlert from './alert'
import Nav from '../nav/nav'
import Footer from '../nav/footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


export default function Wrapper ({children}) {

    const router = useRouter()
    const [showNav, setShowNav] = useState(false)

    // check route
    useEffect(() => {
        const checkRoute = () => {
            const check = ['login', 'signup']
            const path = router.route.split('/').pop()
            if (check.includes(path)) {
                return setShowNav(false)
            }
            return setShowNav(true)
        }
        checkRoute()
    }, [router.route])

    return (
        <div className= {styles.wrapper}>
            <Header />
            <ShowAlert />

            { showNav && <div className= {styles.wrapper_header}> <Nav /> </div> }
            
            <div className= {styles.wrapper_container}>{children}</div>

            { showNav && <div className= {styles.wrapper_footer}> <Footer /> </div> }
            
        </div>
    )
}