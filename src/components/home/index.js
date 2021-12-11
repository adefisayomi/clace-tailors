import styles from './index.module.scss'
import {Button,Form, FloatingLabel, Spinner} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { GlobalState } from '../../context/globalContext'
import axios from 'axios'
import { mutate } from 'swr';
import { useRouter } from 'next/router'


export default function Home () {

    return (
        <div className= {styles.home}>
            <div className= {styles.home_legend}>
                <h1>
                    tailoring 101
                </h1>
                <p>
                    Save your spot for the upcoming class now
                </p>
                <span>
                    <SignupForClass />
                </span>
            </div>
            <div className= {styles.home_image}>
                <img src="https://media.istockphoto.com/vectors/cartoon-color-character-person-and-taking-measures-at-tailor-shop-vector-id1219933232?k=20&m=1219933232&s=612x612&w=0&h=7sbE30qYeK9MYYwOq1WzKeLpMvSpihi4UJrJn8_iQhM=" alt="Tailor"/>
            </div>
        </div>
    )
}


export const SignupForClass = () => {

    const [form, setForm] = useState({email: ''})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const [isLoading, setIsloading] = useState(false)
    const {setAlert} = GlobalState()


    // useEffect(() => {
    //     const splitName = () => {
    //         const nameSplit = form.name.split(' ')
    //         const firstName = nameSplit[0]
    //         const lastName = nameSplit.length > 1 ?  nameSplit.pop() : ''

    //         setForm({...form, firstName, lastName})
    //     }
    //     splitName()
    // }, [form])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsloading(true)
        
        

        try {
            const res = await axios.post('/signup', form)
            if (!res.data?.success) throw new Error(res.data.message)
            mutate('/profile')
            setIsloading(false)
            return setAlert({message: 'You are successfuly registerd for the class', type: 'success'})

        }
        catch(err) {
            setIsloading(false)
            return setAlert({message: err.message, type: 'error'})
        }
    }


    return (
        <form className= {styles.signup_form} onSubmit= {handleSubmit}>

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
        </form>
    )
}