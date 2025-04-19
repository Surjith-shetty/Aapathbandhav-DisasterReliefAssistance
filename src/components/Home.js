import React from 'react'

export default function Home() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusIiAdGDbweqVkMAy0Dvp7CwxY7PkAT5pgQ&s" class="d-block w-100 h-90" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://factly.in/wp-content/uploads//2022/07/Disaster-relief-funds_Featured-Image.jpg" class="d-block w-100 h-90" alt="..."/>
    </div>
    <div class="carousel-item">
      {/* <img src="https://www.thegoan.net/uploads/news/big_95985_Mock-drill-at-Donapaula-1.jpg" class="d-block w-100 h-90" alt="..."/> */}
    

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Disaster strikes without warning. We're here to help.</h1>
            <p>Find shelter, food, and medical aid quickly. Our network connects those in need with immediate assistance during emergencies.</p>
            <div class="cta-buttons">
                <a href="#assistance" class="btn btn-secondary">Find Help</a>
                <a href="#alerts" class="btn btn-outline">Report Disaster</a>
                <a href="#volunteer" class="btn btn-outline">Volunteer Now</a>
            </div>
        </div>
    </section>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
