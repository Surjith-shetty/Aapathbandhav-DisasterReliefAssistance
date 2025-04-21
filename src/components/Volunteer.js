import React from 'react';

export default function Volunteer(props) {
  return (
    <div>
      <section className={`pt-1 pb-23 px-4 bg-${props.Vreqbg}`} id="volunteer">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-10 bg-${props.Vreqbg}`}>
            <span className={`text-3xl font-bold text-${props.headtitle} block my-9`}>Volunteer Registration</span>
            <p className={`text-gray-600 text-${props.formtxt}`}>Join hands to save lives. Become a volunteer today!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div>
              <h3 className={`text-2xl font-semibold text-${props.formtxt} dark:text-white mb-4`}>Make a Difference</h3>
              <p className={`text-gray-700 text-${props.formtxt} mb-6`}>
                Our network of volunteers provides crucial support during disasters. From distributing supplies to providing medical assistance, your skills can help save lives.
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold text-${props.stats}`}>4,300+</div>
                  <div className={`text-${props.formtxt}`}>Active Volunteers</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold text-${props.stats}`}>230+</div>
                  <div className={`text-${props.formtxt}`}>Communities Served</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold text-${props.stats}`}>72h</div>
                  <div className={`text-${props.formtxt}`}>Response Time</div>
                </div>
              </div>
            </div>

           
            <div className={`form bg-${props.contactbg} px-5 py-3 rounded-2xl shadow-2xl`}>
              <h3 className={`text-2xl font-semibold text-${props.formtxt} mb-6`}>Sign Up to Volunteer</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="volunteer-name" className={`block text-sm font-medium text-${props.formtxt}`}>Full Name</label>
                    <input type="text" id="volunteer-name" placeholder="Your name"
                      className={`mt-1 w-full text-${props.formplctxt} bg-${props.frominpbg} px-3 py-2 border border-gray-300  rounded-lg shadow-sm  `} />
                  </div>
                  <div>
                    <label htmlFor="volunteer-email" className={`block text-sm font-medium text-${props.formtxt}`}>Email Address</label>
                    <input type="email" id="volunteer-email" placeholder="Your email"
                      className={`mt-1 w-full text-${props.formplctxt} bg-${props.frominpbg} px-3 py-2 border border-gray-300  rounded-lg shadow-sm  `} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="volunteer-phone" className={`block text-sm font-medium text-${props.formtxt}`}>Phone Number</label>
                    <input type="tel" id="volunteer-phone" placeholder="Your contact number"
                      className={`mt-1 w-full text-${props.formplctxt} px-3 py-2 border border-gray-300  rounded-lg shadow-sm  `} />
                  </div>
                  <div>
                    <label htmlFor="volunteer-location" className={`block text-sm font-medium text-${props.formtxt}`}>Location</label>
                    <input type="text" id="volunteer-location" placeholder="Your city and state"
                      className={`mt-1 w-full text-${props.formplctxt} bg-${props.frominpbg} px-3 py-2 border border-gray-300  rounded-lg shadow-sm `} />
                  </div>
                </div>

                <div>
                  <label htmlFor="volunteer-skills" className={`block text-sm font-medium text-${props.formtxt}`}>Skills & Experience</label>
                  <select id="volunteer-skills"
                    className={`mt-1 w-full px-3 py-2 border border-gray-300 text-${props.formplctxt} bg-${props.frominpbg} rounded-lg shadow-sm `}>
                    <option value="" className={`text-${props.formplctxt}`} disabled selected>Select your primary skill</option>
                    <option value="medical">Medical (Doctor, Nurse, EMT)</option>
                    <option value="logistics">Logistics & Transportation</option>
                    <option value="construction">Construction & Repair</option>
                    <option value="communications">Communications</option>
                    <option value="food">Food Preparation & Distribution</option>
                    <option value="general">General Assistance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="volunteer-availability" className={`block text-sm font-medium text-${props.formtxt}`}>Availability</label>
                  <select id="volunteer-availability"
                    className={`mt-1 w-full px-3 py-2 border border-gray-300 text-${props.formplctxt} bg-${props.frominpbg} rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400 bg-${props.inputbg} text-${props.inputtxt}`}>
                    <option value="" disabled selected>Select your availability</option>
                    <option value="oncall">On-call for Emergencies</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="evenings">Evenings Only</option>
                    <option value="flexible">Flexible Schedule</option>
                  </select>
                </div>
                <div className='buttonalign' align="center">
                <button type="submit" align="center"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
                  Register as Volunteer
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
