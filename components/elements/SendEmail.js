"use client"
import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';


export default function SendMailForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [buttonDisable, setDisable] = useState(false)

    const handleSubmit = (e) => {
        setDisable(true);
        e.preventDefault()    
        let data = {
            name,
            surname,
            phone,
            subject,
            email,
            message
        }
        if(name.length > 0 && surname.length > 0 && phone.length > 0 && subject.length > 0 &&  email.length > 0 && message.length > 0){
            emailjs.send('service_05hamch', 'template_g04f1ai', data, 'ggoDRwfglIMo8tQWu')
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true) 
                setDisable(false);
                setName('')
                setSurname('')
                setSubject('')
                setName('')
                setEmail('')
                setMessage('')
                }, (error) => {
                console.log('FAILED...', error);
            });
        }else{
            alert("Please fill all the fields");
            setDisable(false);
        }
      }

    return (
        <div>
        {!submitted ? (
            <form className="default-form">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" placeholder="First Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" onChange={(e)=>{setSurname(e.target.value)}} name="surname" placeholder="Last Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Your email" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" onChange={(e)=>{setPhone(e.target.value)}} name="phone" required placeholder="Phone" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input type="text" onChange={(e)=>{setSubject(e.target.value)}} name="subject" required placeholder="Subject" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" onChange={(e)=>{setMessage(e.target.value)}} placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button className="theme-btn btn-one" type="button" onClick={(e) => handleSubmit(e)} disabled={buttonDisable} name="submit-form"><span>Send Message</span></button>
                    </div>
                </div>
            </form>
        ) : (
            <div>
                <h2>Thank you for your submission!</h2>
                <p>Your message has been sent successfully.</p>
            </div>
        )}
    </div>
    )
}