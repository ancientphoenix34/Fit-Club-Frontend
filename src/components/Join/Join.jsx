import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'



const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_f37t3d9', 'template_k8h27qj', form.current, {
            publicKey: 'wMVia73DVAsVKFsbB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
      <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
            <span>READY TO</span>
            <span>LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder="Enter your e-mail" />
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Join
