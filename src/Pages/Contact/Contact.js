import React, { useRef } from "react";

const Contact = () => {
    const contactEmailRef = useRef();
  const contactNumberRef = useRef();
  const contactMessageRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="background mb-10">
        <h1 className="text-2xl text-center ">Contact Us</h1>
        <div className="contact-container flex justify-center mt-8">
          <div className="contact grid bg-indigo-800 text-white w-52 justify-center">
            <h1 className="mt-3 text-4xl">Contact us</h1>
            <div className="text-start ml-2">
              <h6>hr@lonextindia.com</h6>
              <h6>+91-9986783761</h6>
            </div>
            <h1 className="mt-3 text-4xl">Address</h1>
            <div className="text-center">
              <h6>
                Corporate office: 301 <br /> A-43, sector-63, Noida
              </h6>
            </div>
            <h1 className="mt-3 text-xl">Social Link</h1>
            <div className="text-start ml-2 mb-8">
              <h6>Facebook</h6>
              <h6>Linkedin</h6>
              <h6>Instagram</h6>
              <h6>Twitter</h6>
              <h6>Youtube</h6>
            </div>
          </div>
          <div className="flex bg-white w-[415px] justify-center">
            <div className="flex justify-center">
              <form className="form mb-5">
                <div className="form__group mt-4">
                  <label className="grid">
                    Email:
                    <input
                      className="w-96 h-12 shadow-lg border border-inherit"
                      type="email"
                      placeholder="Emter your Email"
                      required
                      ref={contactEmailRef}
                    />
                  </label>
                </div>
                <div className="form__group mb-6 mt-4">
                  <label className="grid">
                    Phone Number:
                    <input
                      // className="w-96 h-12 shadow-lg border border-current"
                      className="w-96 h-12 shadow-lg border border-inherit"
                      type="number"
                      placeholder="Enter your phone number"
                      required
                      ref={contactNumberRef}
                    />
                  </label>
                </div>
                <div className="form__group mt-4">
                  <label className="grid">
                    Message:
                    <textarea
                      className="w-96 h-32 shadow-lg border border-inherit "
                      type="text"
                      placeholder="Emter your message"
                      required
                      ref={contactMessageRef}
                    />
                  </label>
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500 text-white  w-20 h-12 justify-center rounded-md mt-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
