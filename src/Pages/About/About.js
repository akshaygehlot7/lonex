import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center mt-4 mb-8">
        <h1 className="text-2xl">About Lonex</h1>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex items-center w-11/12 shadow-xl justify-center gap-10  border border-slate-200" style={{height: "28rem"}}>
          <div className="w-2/5">
            <p>
              Lonex aim to alleviate poverty and promote financial inclusion by
              offering small, affordable loans to low-income individuals, often
              entrepreneurs or small business owners, to help them start or
              expand their businesses. These loans are typically used for
              income-generating activities, such as setting up a small shop,
              buying livestock, or investing in farming equipment.
              <br />
              Lonex has tied up with Tiysol Corporation which is basically a
              service-based company. Tiysol provide solutions that are highly
              apt for customer requirements and they show a hand and glove
              fitment. Services provided by Tiysol Corporation is Web Designing,
              Web Development, Digital Marketing, Mobile App Development, Domain
              Hosting, Google Listing.
            </p>
          </div>
          <div>
            <img
              src="https://lonexindia.com/static/media/logo.4897f709b57f34c1138d.png"
              alt="Lonex"
              className="w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
