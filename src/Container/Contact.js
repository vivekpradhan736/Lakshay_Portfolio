import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.css";
import contact from "../assets/images/contact.png";
import email from "../assets/images/email.png";
import location from "../assets/images/location.png";
import phone from "../assets/images/whatsapp.png";
import pic1 from "../assets/images/pic1.png";
import avatar from "../assets/images/avatar.png"
import mail from "../assets/images/email.png"
import subject from "../assets/images/subject.png"



const Contact = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (formData) => {
    window.location.href = `mailto:lakshaygoyal020@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}`;
  };
  return (
    <>
      <div className="contact">
        <div className="heading">
          <div className="headTitle">Contact me...</div>
          <img className="picture" src={contact} alt="" />
        </div>

        <div className="contactPart">
          <div className="Left">
            <h1>Get in touch</h1>
            <h5>
              If you’re a startup looking for a developer with a <br /> broad
              skill set from concept and strategy to <br /> develop, get in
              touch.
            </h5>
            <div className="contactList">
              <div className="list">
                <img src={location} alt="" />
                <h4>Faridabad Haryana India</h4>
              </div>

              <div className="list">
                <img src={email} alt="" />
                <h4>Email: lakshaygoyal020@gmail.com</h4>
              </div>

              <div className="list">
                <img src={phone} alt="" />
                <h4>Phone: +91 8586926229</h4>
              </div>
            </div>
          </div>

          <div className="Right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 class="title text-center mb-4">Talk to Us</h1>

              {/* <!-- Name --> */}
              <div class="form-group">
                <label for="formName" className="d-block">
                  <img className="icon" src={avatar} alt="" />
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="formName"
                  class="form-control form-control-lg thick"
                  placeholder="Name"
                />
              </div>

              {/* <!-- E-mail --> */}
              <div class="form-group ">
                <label for="formEmail" class="d-block">
                  <img className="icon" src={mail} alt="" />
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="formEmail"
                  class="form-control form-control-lg thick"
                  placeholder="E-mail"
                />
              </div>

              {/* <!-- Subject --> */}
              <div class="form-group ">
                <label for="formName" class="d-block">
                  <img className="icon" src={subject} alt="" />
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="formSubject"
                  class="form-control form-control-lg thick"
                  placeholder="Subject"
                />
              </div>

              {/* <!-- Message --> */}
              <div class="form-group message">
                <textarea
                  {...register("message")}
                  id="formMessage"
                  class="form-control form-control-lg"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* <!-- Submit btn --> */}
              <div class="text-center">
                <button type="submit" class="btn btn-primary" tabIndex="-1">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
