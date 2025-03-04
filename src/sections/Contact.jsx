import {useRef, useState} from 'react'

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
    const handleChange = ()=> {

    }
    const handleSubmit = ()=> {

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
                   </form>
               </div>
           </div>
       </section>
    )
}
export default Contact
