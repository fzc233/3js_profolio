import {useRef, useState} from 'react'
import  emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef =useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    )
    const handleChange = ({target:{name, value}})=> {
        setForm({...form, [name]: value})
    }

    //service_dsvd583
    const handleSubmit = async (e)=> {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                'service_dsvd583',
                'template_6ufzvvk',
                {
                    form_name:form.name,
                    to_name:'Conor',
                    from_email:form.email,
                    to_email:'isconor323@gmail.com',
                    message:form.message},
                'JypcRKCyCmCxS2NDT'
            )
            setLoading(false)
            alert('Your message has been sent. I will get back to you as soon as possible.')
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }catch (error){
            setLoading(false)
            console.log(error)
            alert('Something went wrong. Please try again.')
        }

    }
    return (
       <section className="c-space my-20">
           <div className="relative min-h-screen flex items-center justify-center flex-col">
               <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>
               <div className="contact-container">
                   <h3 className="head-text">Get in touch</h3>
                   <p className="text-lg text-white-600 mt-3">Feel free to reach out with any questions or just to say
                       hello—my inbox is always open!</p>
                   <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                       <label className='space-y-3'>
                           <span className="field-label">Full Name</span>
                           <input
                               type="text"
                               name="name"
                               value={form.name}
                               onChange={handleChange}
                               required
                               className="field-input"
                               placeholder="Your name"
                           />
                       </label>
                       <label className='space-y-3'>
                           <span className="field-label">Email</span>
                           <input
                               type="email"
                               name="email"
                               value={form.email}
                               onChange={handleChange}
                               required
                               className="field-input"
                               placeholder="Your Email"
                           />
                       </label>
                       <label className='space-y-3'>
                           <span className="field-label">Your message</span>
                           <textarea
                               name="message"
                               value={form.message}
                               onChange={handleChange}
                               required
                               rows={5}
                               className="field-input"
                               placeholder="Hi, I wanna give u a job:） ..."
                           />
                       </label>
                       <button className="field-btn" type="submit" disabled={loading}>
                           {loading ? 'Sending...' : 'Send Msg'}
                           <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                       </button>
                   </form>
               </div>
           </div>
       </section>
    )
}
export default Contact
