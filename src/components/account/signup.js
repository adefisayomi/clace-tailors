import styles from './styles/signup.module.scss'
import {Button,Form, FloatingLabel, Spinner} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { GlobalState } from '../../context/globalContext'
import axios from 'axios'
import SwipePages from '../re-uasables/swipePages'
import ThankYou from './thankYou'
import { useRouter } from 'next/router'



export default function Signup () {

    const {user} = GlobalState()
    const router = useRouter()
    const [form, setForm] = useState({email: ''})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const [isLoading, setIsloading] = useState(false)
    const {setAlert} = GlobalState()
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {
        if (user) {
            return router.push('/')
        }
    }, [user])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsloading(true)
        
        

        try {
            const res = await axios.post('/signup', form)
            if (!res.data?.success) throw new Error(res.data.message)
            setActivePage(1)
            setForm({email: ''})
            // mutate('/profile')
            setIsloading(false)
            return setAlert({message: 'Regsiteration successful'})

        }
        catch(err) {
            setIsloading(false)
            return setAlert({message: err.message, type: 'error'})
        }
    }


    return (
       <div className= {styles.signup}>
           <SwipePages
                pages = {{1: <SignupForm isLoading= {isLoading} form= {form} getForm= {getForm} handleSubmit= {handleSubmit} />, 2: <ThankYou />}}
                index= {activePage}
            />
       </div>
    )
}



// ------------------------------------------------------------

export const SignupForm = ({getForm, form, handleSubmit, isLoading}) => {

    return (
        <div className= {styles.signup_form}>

            <form onSubmit= {handleSubmit}>

                <h1>
                    tailoring 101
                </h1>
                <p>
                    Save your spot for the upcoming class now
                </p>

                <span>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        id= {styles.signup_input}
                    >
                        <Form.Control name= 'email' onChange= {getForm} value= {form.email}  type="email" placeholder="youremail@email.com" />
                    </FloatingLabel>

                    <Button id= {styles.signup_btn} disabled= {isLoading} type= 'submit' htmlFor= 'register_form'>
                            {
                                isLoading && 
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    // size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    style= {{ marginRight: '5px', width:'fit-content' }}
                                />
                            }

                        { isLoading ? 'signing up...' : 'signup' }
                    </Button>
                </span>

            </form>

            <div className= {styles.signup_image}>
                <img src="https://media.istockphoto.com/vectors/cartoon-color-character-person-and-taking-measures-at-tailor-shop-vector-id1219933232?k=20&m=1219933232&s=612x612&w=0&h=7sbE30qYeK9MYYwOq1WzKeLpMvSpihi4UJrJn8_iQhM=" alt="Tailor"/>
            </div>

        </div>
    )
}

