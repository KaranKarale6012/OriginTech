import React, { useState ,useRef } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";
import Left from "../assets/Left.png";

function Contact() {
  function sendEmail (e) {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    Phone: "",
    email: "",
    message: "",
  });

  const postUserData = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, Phone, email, message } = userData;
    const res = fetch(
      "https://origin-tech-7482e-default-rtdb.firebaseio.com/UserDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          Phone,
          email,
          message,
        }),
      }
    );
    if(res){
       setUserData({
        firstname: "",
        lastname: "",
        Phone: "",
        email: "",
        message: "",
       })
      alert("Your response has been recieved sucessfully");
    }else{
      alert("Please fill the data");
    }
  };

  return (
    <div className="contact_page  ">
      <div className="main-form">
        <div className="left_form">
          <img src={Left} className="Left" alt="" />
        </div>
        <div className="form">
          <form method="POST" className="contact_form" onSubmit={sendEmail}>
            <h>Send us messege</h>

            <input
              className="firstname"
              type="text"
              id="fname"
              name="firstname"
              placeholder="first name*"
              value={userData.firstname}
              onChange={postUserData}
            />
            <input
              className="lastname"
              type="text"
              id="lname"
              name="lastname"
              placeholder="last name*"
              value={userData.lastname}
              onChange={postUserData}
            />
            <input
              className="Phone"
              type="text"
              id="fphone"
              name="Phone"
              placeholder="Phone no.*"
              value={userData.Phone}
              onChange={postUserData}
            />
            <input
              className="email"
              type="text"
              id="femail"
              name="email"
              placeholder="Email*"
              value={userData.email}
              onChange={postUserData}
            />
            <input
              className="message"
              type="text"
              id="fmessage"
              name="message"
              placeholder="Your Messege"
              value={userData.message}
              onChange={postUserData}
            />

            <div className="Label">
              <div className="label">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="message">
                <label for="vehicle1">
                  By sending this messege you confirm that
                </label>
              </div>
            </div>
            <div className="Submit">
              <input
                type="submit"
                value="Get started >>"
                onClick={submitData}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
