import { React, useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  function handleEmail(event) {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  }

  return (
    <div className='newsLetter-container'>
      <div className='newsLetter-inside'>
        <div className='header'>
          <p>newsletter</p>
        </div>
        <div className='email'>
          <form action='#'>
            <input
              type='email'
              value={email}
              name='email'
              id='subs'
              onChange={handleEmail}
              placeholder='Your email'
            />
            <button className='subs-btn'>subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
