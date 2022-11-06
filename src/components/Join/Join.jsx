import React from 'react'
import './Join.css'
import emails from '@emailjs/browser'
 
const Join = () => {
  const form = React.useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emails.sendForm('service_96gxpge', 'template_jxcn0cn', form.current, 'GOcAI27uHxkfGuLuq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
 <div className="join" id="join-us">
    <div className="left-j">
        <hr />
        <div><span className='stroke-text'>Ready to </span><span>Level Up</span></div>
        <div><span>Ur Body </span><span className='stroke-text'>With Us</span></div>
    </div>
    <div className="right-j"></div>
    <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
      <input type="email" name='user-email' placeholder='ENTER UR EMAIL ADDRESS'/>
<button className='btn btn-j'>join now</button>
    </form>
 </div>
  )
}

export default Join
