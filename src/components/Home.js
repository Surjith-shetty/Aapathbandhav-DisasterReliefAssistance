import React from 'react';
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <div className="bg-blue-500">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="h-96 flex justify-center items-center text-center text-white px-4 bg-blue-400">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  "Disaster strikes without warning. We're here to help."
                </h1>
                <p className="text-lg mb-8">
                  Find shelter, food, and medical aid quickly. Our network connects those in need with immediate assistance during emergencies.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Find Help</Link>
                  <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Report Disaster</Link>
                  <Link to="Volunteer" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Volunteer Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="h-96 flex justify-center items-center text-center text-white px-4 bg-indigo-400">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                "In times of crisis, unity is our greatest strength."
                </h1>
                <p className="text-lg mb-8">
                  Find shelter, food, and medical aid quickly. Our network connects those in need with immediate assistance during emergencies.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Find Help</Link>
                  <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Report Disaster</Link>
                  <Link to="Volunteer" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Volunteer Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="h-96 flex justify-center items-center text-center text-white px-4 bg-coral-300">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                "During emergencies, every moment counts. We’re ready to act."
                </h1>
                <p className="text-lg mb-8">
                  Find shelter, food, and medical aid quickly. Our network connects those in need with immediate assistance during emergencies.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Find Help</Link>
                  <Link to="GetHelp" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Report Disaster</Link>
                  <Link to="Volunteer" className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-blue-200 transition">Volunteer Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
