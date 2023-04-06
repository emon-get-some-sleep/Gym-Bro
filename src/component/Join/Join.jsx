import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './Join.css';
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yvl5uek', 'template_4utxjlm', form.current, 'Lcs0sjwartdPSKWYV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join' id='join'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span> YOUR BODY</span>
                    <span className='stroke-text'> WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} onSubmit={sendEmail} action="" className="email-container">
                    <input type="email" name="user_email" placeholder='Enter your Email address'/>
                    <button className='btn btn-join'>Join Now</button>
                </form>
            </div>  
        </div>
    );
};

export default Join;