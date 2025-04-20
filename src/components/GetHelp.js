import React from 'react'

export default function GetHelp() {
  return (
    <div class="body bg-blue-50 h-170">
      <section class="assistance-section bg-blue-50 " id="assistance">
        <div class="container">
            <div class="section-title pt-4" align="center">
                <div class="mainHead font-bold text-blue-800 text-3xl" >Request Help Now</div>
                <p>Fill out this form to request emergency assistance for yourself or others.</p>
            </div>


            <div class="form-container ">
                <form >
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Your name"/>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" class="form-control" placeholder="Your contact number"/>
                        </div>
                    </div>
                   
                    <div class="form-row">
                        <div class="form-group">
                            <label for="location">Location</label>
                            <input type="text" id="location" class="form-control" placeholder="Current location"/>
                        </div>
                        <div class="form-group">
                            <label for="disaster-type">Type of Disaster</label>
                            <select id="disaster-type" class="form-control">
                                <option value="" selected disabled>Select disaster type</option>
                                <option value="flood">Flood</option>
                                <option value="fire">Fire</option>
                                <option value="earthquake">Earthquake</option>
                                <option value="hurricane">Hurricane</option>
                                <option value="tornado">Tornado</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                   
                    <div class="form-group">
                        <label for="assistance-needed">Assistance Needed</label>
                        <select id="assistance-needed" class="form-control">
                            <option value="" selected disabled>Select assistance type</option>
                            <option value="shelter">Emergency Shelter</option>
                            <option value="medical">Medical Assistance</option>
                            <option value="food">Food & Water</option>
                            <option value="evacuation">Evacuation Help</option>
                            <option value="search">Search & Rescue</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                   
                    <div class="form-group">
                        <label for="description">Situation Description</label>
                        <textarea id="description" class="form-control" placeholder="Please describe your current situation and specific needs"></textarea>
                    </div>
                   
                    <div class="form-group">
                        <label for="people">Number of People Needing Assistance</label>
                        <input type="number" id="people" class="form-control" min="1" value="1"/>
                    </div>
                   
                    <button type="submit" class="btn btn-secondary">Submit Request</button>
                </form>
            </div>
        </div>
    </section>


    </div>
  )
}
