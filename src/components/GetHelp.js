import React from 'react'
import './Gethelp.css';

export default function GetHelp(props) {
  return (
    <div className={`body bg-${props.reqbg} h-174`}>
      <section className={`assistance-section bg-${props.reqbg} `} id="assistance">
        <div className="container">
            <div className="section-title pt-4" align="center">
                <div className={`mainHead font-bold text-${props.reqtit} text-3xl`} >Request Help Now</div>
                <p className={`headfoot text-${props.formtxt}`}>Fill out this form to request emergency assistance for yourself or others.</p>
            </div>


            <div className={`form-container  px-5 py-2 max-w-4xl bg-${props.formbg} shadow-xl rounded-2xl py-2`}>
                <form className='form '>
                    <div className="form-row">
                        <div className="form-group my-2">   
                            <label htmlFor="name" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Full Name</span></label>
                            <input type="text" id="name" placeholder="Your name" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`} />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="phone" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Phone Number</span></label>
                            <input type="tel" id="phone" placeholder="Your contact number" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`} />

                        </div>
                    </div>
                   
                    <div className="form-row">
                        <div className="form-group my-2">
                            <label htmlFor="location" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Location</span></label>
                            <input type="text" id="location" placeholder="Current location" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`} />

                        </div>
                        <div className="form-group my-2 ">
                            <label htmlFor="disaster-type" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Type of Disaster</span></label>
                            <select id="disaster-type" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}>
                                 <option value="" className={`text-${props.formplctxt}`} disabled selected>Select disaster type</option>
                                <option value="flood">Flood</option>
                                <option value="fire">Fire</option>
                                <option value="earthquake">Earthquake</option>
                                 <option value="hurricane">Hurricane</option>
                                 <option value="tornado">Tornado</option>
                                <option value="other">Other</option>
                            </select>

                        </div>
                    </div>
                   
                    <div className="form-group my-2">
                        <label htmlFor="assistance-needed" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Assistance Needed</span></label>
                        <select id="assistance-needed" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}>
                                <option value="" disabled selected>Select assistance type</option>
                                <option value="shelter">Emergency Shelter</option>
                                <option value="medical">Medical Assistance</option>
                                <option value="food">Food & Water</option>
                                <option value="evacuation">Evacuation Help</option>
                                <option value="search">Search & Rescue</option>
                                <option value="other">Other</option>
                        </select>

                    </div>
                   
                    <div className="form-group my-2">
                        <label htmlFor="description" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Situation Description</span></label>
                        <textarea id="description" placeholder="Please describe your current situation and specific needs" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-[120px]`} />

                    </div>
                   
                    <div className="form-group my-2">
                        <label htmlFor="people" className='forgrouplbl block mb-1 font-bold'><span className={`tailtxt text-${props.formtxt}`}>Number of People Needing Assistance</span></label>
                        <input type="number" id="people" min="1" max="10" val="1" className={`w-full bg-${props.frominpbg} text-${props.formplctxt} px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`} />

                    </div>
                   <div align="center">
                    <button type="submit" className="btn btn-primary mb-2">Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    </section>


    </div>
  )
}
