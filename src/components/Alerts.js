import React from 'react'

export default function Alerts(props) {
  return (
    <div className={`main bg-blue-${props.albg} h-174`}>
         <section className={`alerts-section bg-blue-${props.albg}`} id="alerts">
        <div className="container" >
            <div align="center" className={`section-title text-${props.pageheadcol}`}> 
                <div className="live font-extrabold mb-2 pt-5 text-3xl">Live Updates & Emergency Alerts</div>
            </div> 
            <div>
                <p className={`headfooter text-${props.alheadfoot}`} align="center">Stay informed with real-time updates and emergency alerts in your area.</p>
            </div>
            <div className="alerts-container flex justify-evenly mt-12 ">
                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600 shadow-lg`}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold py-3 inline-block`}>Flood Warning</span>
                <span className={`date block text-${props.alheadfoot} `}>April 16, 2025</span>
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Riverside County, CA</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>Heavy rainfall has caused river levels to rise. Evacuation recommended for low-lying areas near the river.</div>
                </div>

                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600 shadow-lg `}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold p-3 inline-block`}>Wildfire</span>
                <span className={`date block text-${props.alheadfoot} `}>April 15, 2025</span>
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Sierra Mountains</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>Wildfire spreading rapidly due to strong winds. Mandatory evacuation ordered for affected communities.</div>
                </div>

                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600 shadow-lg `}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold py-3 inline-block`}>Hurricane Watch </span>
                <span className={`date block text-${props.alheadfoot} `}>April 18, 2025</span> <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}></div>
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Gulf Coast</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>Hurricane Elena forming in the Atlantic. Expected to make landfall within 72 hours. Prepare emergency supplies. </div>
                </div>  
            </div>

            <div className="alerts-container flex justify-evenly mt-12 ">
                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600  shadow-lg`}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold py-3 inline-block`}>Tornado Alert</span>
                <span className={`date block text-${props.alheadfoot} `}>April 20, 2025</span>
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Oklahoma City, OK</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>A tornado has been spotted on the outskirts of the city. Residents are urged to take shelter immediately in a basement or interior room.</div>
                </div>

                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600 shadow-lg `}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold p-3 inline-block`}>Severe Thunderstorm Warning</span>
                <span className={`date block text-${props.alheadfoot} `}>April 19, 2025</span>
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Austin, TX</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>A line of severe thunderstorms is moving through the region with potential for hail and damaging winds. Stay indoors and avoid travel.</div>
                </div>

                <div align="center" className={`bx1 mx-2 rounded-xl bg-${props.alinfobg} h-55 w-50 border-l-5 border-${props.disashead}-600 shadow-lg `}>
                <span className={`head1 text-${props.disashead}-600 text-2xl font-bold py-3 inline-block`}>Heatwave Advisory </span>
                <span className={`date block text-${props.alheadfoot} `}>April 21, 2025</span> 
                <div align="left"  className={`area text-2xl px-7 pt-3 text-${props.alheadfoot} font-bold`}>Phoenix, AZ</div>
                <div align="left" className={`info px-7 text-${props.alheadfoot} text-md`}>Temperatures are expected to exceed 110°F. Limit outdoor activities, stay hydrated, and check on vulnerable individuals and pets. </div>
                </div>  
            </div>
        </div>
        </section>
    </div>
  )
}
