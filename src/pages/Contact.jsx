import '../css/Contact.css'
import { FaEnvelope,FaPhone, FaWhatsapp, FaGithub,FaLinkedin,FaInstagramSquare  } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mzdajoee");

  return (
    <div className='contact'>
      <div className="text-cc"><h2>Get in touch</h2></div>
      
      <div className="contact-card-container">
       
    
      


      <div className="contact-card">
      <div className="contact-item">
        <FaEnvelope className='contact-icon' color='4C8CE4'/>
      </div>
      <h2 >Email</h2>
      <p>israelshitu430@gmail.com</p>
      </div>

      <div className="contact-card">
        <div className="contact-item">
          <FaPhone className='contact-icon' color='FE81D4'/>
        </div>
        <h2>Phone</h2>
        <p>+234 916 214 9972</p>
      </div>

      <div className="contact-card">
        <div className="contact-item">
          <FaWhatsapp className='contact-icon' color='237227'/>
        </div>
        <h2>WhatsApp</h2>
        <p>09162149972</p>
      </div>
      </div>

          {/* Right Side: Form or Success Message */}
          <div className="contact-right">
            {state.succeeded ? (
              <div className="success-msg">
                <h2 style={{ color: '#ff004f', marginTop: '20px' }}>
                  Thanks for reaching out! 
                </h2>
                <p style={{ color: '#fff' }}>I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input className='typing' type="text" name='name' placeholder='Your name' required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input className='emailing' type="email" name="email" placeholder="Your Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type='submit' className='btn' disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
          
          <div className="social-icons">
        <a href="https://linkedin.com/in/israel-shittu-0b92693b0" target="_blank">
        <FaLinkedin />
         </a>

        <a href="https://github.com/israelshittu430-web" target="_blank">
        <FaGithub />
        </a>

      <a href="https://www.instagram.com/israel_11199?igsh=MXE4aGM1MGJ0NnlrYg%3D%3D&utm_source=qr" target="_blank">
       < FaInstagramSquare />
       </a>
      </div>

        </div>
      
  
  )
}

export default Contact