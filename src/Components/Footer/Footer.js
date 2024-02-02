import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="flex gap-20 justify-center">
          <div>
            <div className="w-80">
              <h5 className="w-80">LONEX CORPORATION PRIVATE LIMITTED</h5>
              <img
                src="https://lonexindia.com/static/media/logo.4897f709b57f34c1138d.png"
                alt="logo"
                className="w-72 mt-5"
              />
            </div>
          </div>

          <div>
            <h5 className="underline mb-8">PRODUCTS</h5>
            <div className="deliver__time-list">
              <div className="underline mb-2">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </div>

              <div className="underline mb-2">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </div>
              <div className="underline mb-2">
                <Link to="/services">
                  <span>Services</span>
                </Link>
              </div>
              <div className="underline mb-2">
                <Link to="/clients">
                  <span>Clients</span>
                </Link>
              </div>
              <div className="underline mb-2">
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h5 className="underline mb-8">USEFULL LINKS</h5>
            <div className="deliver__time-list">
              <div className="underline mb-2">
                <span>Microfinance Services</span>
              </div>
              <div className="underline mb-2">
                <span>privacy policy Policy</span>
              </div>

              <div className="underline mb-2">
                <span>Tiysol</span>
              </div>
              <div className="underline mb-2">
                <span>Help</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="underline mb-8">CONTACT</h5>
            <div className="flex gap-2 items-center">
              <span>
                <i>
                  <IoMdHome size={25}/>
                </i>
              </span>
              <span>Corporate Office: 301, A-43, Sector - 63, Noida</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <i>
                  <FaEnvelope  size={18}/>
                </i>
              </span>
              <span>hr@lonexindia.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <i>
                  <FaEnvelope  size={18}/>
                </i>
              </span>
              <span>hr@tiysol.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <i class="ri-send-plane-line">
                  <FaPhoneAlt  size={20}/>
                </i>
              </span>
              <span>+91-7011767241</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div>
            <p className="copyright__text">
              © 2023 Lonex Corporation Private Limitted . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
