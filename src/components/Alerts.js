import React from 'react'

export default function Alerts() {
  return (
    <div className="main bg-blue-50 h-170">
         <section className={`alerts-section bg-blue-50`} id="alerts">
        <div className="container" >
            <div align="center" className="section-title text-blue-800"> 
                <div className="live font-extrabold mb-3 pt-5 text-3xl">Live Updates & Emergency Alerts</div>
            </div> 
            <div>
                <p align="center">Stay informed with real-time updates and emergency alerts in your area.</p>
            </div>
            <div className="alerts-container flex justify-evenly mt-12 ">
                <div align="center" className='bx1 mx-2 rounded-xl bg-white h-101 w-50 border-l-5 border-red-600  shadow-lg'>
                <span className="head1 text-red-600">ferff</span>
                </div>

                <div align="center" className='bx1 mx-2 rounded-xl bg-white h-101 w-50 border-l-5 border-red-600 shadow-lg '>
                <span className="head1 text-red-600">ferff</span>
                </div>

                <div align="center" className='bx1 mx-2 rounded-xl bg-white h-101 w-50 border-l-5 border-red-600 shadow-lg '>
                <span className="head1 text-red-600">ferff</span>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
