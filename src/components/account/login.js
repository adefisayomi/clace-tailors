import styles from './styles/login.module.scss'
import Footer from '../nav/footer'
import {Button,Form, FloatingLabel, Spinner} from 'react-bootstrap'
import Logo from '../nav/logo'
import {useState, useEffect} from 'react'
import { GlobalState } from '../../context/globalContext'
import axios from 'axios'
import { mutate } from 'swr';
import { useRouter } from 'next/router'
import Image from 'next/image'




export default function Login () {

    const [form, setForm] = useState({firstName: '', lastName: '', name: '', email: '', phone: '', classMode: 'weekdays'})
    const getForm = (e) => setForm({...form, [e.target.name]: e.target.value})
    const [isLoading, setIsloading] = useState(false)
    const {setAlert} = GlobalState()
    const router = useRouter()


    useEffect(() => {
        const splitName = () => {
            const nameSplit = form.name.split(' ')
            const firstName = nameSplit[0]
            const lastName = nameSplit.length > 1 ?  nameSplit.pop() : ''

            setForm({...form, firstName, lastName})
        }
        splitName()
    }, [form])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(router.query)
        setIsloading(true)
        
        

        try {

            console.log(form)
            const res = await axios.post('/signup', form)
            if (!res.data?.success) throw new Error(res.data.message)
            mutate('/profile')
            setIsloading(false)
            return setAlert({message: 'You are successfuly registerd for the class', type: 'success'})

        }
        catch(err) {
            console.log(err.message)
            setIsloading(false)
            return setAlert({message: err.message, type: 'error'})
        }
    }




    return (
        <div className= {styles.login_container}>
            <div className= {styles.login}>

                < section className= {styles.login_left}>
                    <span>
                        <Logo border= {false} bg= 'rgb(22,27,34)' width= '40px' shrink />
                    </span>
                    <span className= {styles.login_left_image}>
                        <img src="https://media.istockphoto.com/vectors/cartoon-color-character-person-and-taking-measures-at-tailor-shop-vector-id1219933232?k=20&m=1219933232&s=612x612&w=0&h=7sbE30qYeK9MYYwOq1WzKeLpMvSpihi4UJrJn8_iQhM=" alt="Tailor"/>
                    </span>
                    <span>
                        <Footer />
                    </span>
                </section>

                <section className= {styles.login_right}>

                    <form id= "register_form" onSubmit= {handleSubmit}>

                        <h1>tailoring - 101</h1>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control name= 'name' onChange= {getForm} value= {form.name}  type="text"placeholder="First and Last name" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control name= 'email' onChange= {getForm} value= {form.email}  type="email" placeholder="mail@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Phone">
                            <Form.Control className="mb-3" name= 'phone' onChange= {getForm} value= {form.phone}  type="phone" placeholder="Phone number" />
                        </FloatingLabel>
                        
                        <FloatingLabel className="mb-5 fs-8" controlId="floatingSelectGrid" label="class mode">
                            <Form.Select  name= 'classMode' onChange= {getForm} aria-label="select your class mode">
                                <option value="weekends">weekends</option>
                                <option value="weekdays">weekdays</option>
                            </Form.Select>
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox" style= {{ fontSize: '12px', fontWeight: '400', color: 'rgb(180, 180, 180)' }}>
                            <Form.Check   type="checkbox"  label="i acknowledge that all the information contained in this form are true to the best of my knowledge." defaultChecked />
                        </Form.Group>

                        <Button disabled= {isLoading} type= 'submit' htmlFor= 'register_form'>
                            {
                                isLoading && 
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    style= {{ marginRight: '10px' }}
                                />
                            }

                            { isLoading ? 'signing up...' : 'signup' }
                        </Button>
                    </form>
                </section>

            </div>
        </div>
    )
}