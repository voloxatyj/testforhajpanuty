import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
      </div>
      <form method="post">
        <h3>Drop Us a Message</h3>
        <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                  <input 
                    type="text" 
                    name="txtName" 
                    className="form-control" 
                    placeholder="Your Name *" 
                    onChange={(e)=>setName(e.target.value)}
                    />
              </div>
              <div className="form-group">
                  <input 
                    type="text" 
                    name="txtEmail" 
                    className="form-control" 
                    placeholder="Your Email *" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
              </div>
              <div className="form-group">
                  <input 
                    type="text" 
                    name="txtPhone" 
                    className="form-control" 
                    placeholder="Your Phone Number *" 
                    onChange={(e)=>setPhone(e.target.value)}
                    />
              </div>
              <div className="form-group">
                  <input 
                    type="button" 
                    name="btnSubmit" 
                    className="btnContact" 
                    value="Send Message" 
                    onClick={(e)=>{
                      e.preventDefault()
                      axios.post(`https://v1.nocodeapi.com/ostapmedynskyy/telegram/kSneUkeTXlxESCaM/sendText?text=${message}`)
                        .then(function (response) {
                          // handle success
                          console.log(response);
                        })
                        .catch(function (error) {
                          // handle error
                          console.log(error);
                        })
                    }}
                    />
              </div>
          </div>
          <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg" 
                  className="form-control" 
                  placeholder="Your Message *" 
                  style={{width: "100%", height: "150px"}}
                  onChange={(e)=>{
                    setMessage(e.target.value)
                    console.log(message)
                  }}
                ></textarea>
              </div>
          </div>
      </div>
  </form>
</div>
  );
}

export default App;
