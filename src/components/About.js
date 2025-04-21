import React from 'react';

export default function About(props) {
  return (
    <div className={`bg-${props.Vreqbg} pb-56`}>
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center pt-4 mb-10">
          <span className={`text-3xl md:text-4xl font-bold text-${props.headtitle} mb-2`}> About Us </span>
          <p className={` text-${props.formtxt}`} >
            Learn more about our mission and how to contact us.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-2">

          <div>
            <span className={`text-2xl md:text-3xl font-semibold text-${props.headtitle} mb-4`}>Our Mission</span>
            <p className={`text-${props.formtxt} mb-6 mt-4 `}>
              Human's Disaster Relief Network is dedicated to providing immediate assistance during emergencies.
              We connect affected communities with essential resources and support services when they need it most.
            </p>
            <p className={`text-${props.formtxt} mb-6`}>
              Founded in 2020, our organization has grown to include thousands of volunteers and partnerships with
              local governments, NGOs, and private businesses to create a comprehensive emergency response system.
            </p>
            <p className={`text-${props.formtxt} mb-6 `}>
              Our goal is to ensure that no one faces a disaster alone. Through our network of volunteers,
              relief centers, and digital tools, we aim to reduce response times and increase the effectiveness
              of disaster relief efforts.
            </p>
          </div>


          <div className={`bg-${props.contactbg} p-8 rounded-xl`}>
            <span className={`text-2xl md:text-3xl font-semibold pb-2 text-${props.formtxt} mb-6`}>Contact Information</span>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <span className={`text-lg font-semibold pt-3 text-${props.formtxt}`}>Emergency Hotline</span>
                <p className={`text-${props.formtxt}`}>1-800-DISASTER (800-347-2783)</p>
                <p className={`text-${props.formtxt} text-sm `}>Available 24/7 for emergency situations</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl shrink-0">
                📧
              </div>
              <div>
                <h4 className={`text-lg font-semibold text-${props.formtxt}`}>Email</h4>
                <p className={`text-${props.formtxt}`}>support@disasterrelief.org</p>
                <p className={`text-${props.formtxt} text-sm `}>Feel free to contact us anytime</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
