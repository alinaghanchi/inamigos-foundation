import { motion } from "framer-motion";
import "./App.css";
import {
  FaHandsHelping,
  FaLeaf,
  FaGraduationCap,
  FaFemale,
  FaPaw,
  FaBriefcase,
} from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
        <div className="logo">
  <img src="/images/logo.jpg" alt="InAmigos Logo" />
  <span>InAmigos Foundation</span>
</div>
        
        
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

   <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
><h1>
  Empowering Communities Through
  <br />
  
</h1>


  <p>
    Uniting Minds For Change
  </p>

  <button>Become a Volunteer</button>
</motion.div>
      <section id="about" className="about">
        
        <p>
          InAmigos Foundation is a Section 8 NGO working across India through
          impactful projects focused on education, environment, animal welfare,
          women empowerment and social development.
        </p>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>

        <div className="stats">
          <div className="stat-card">
            <h3>50000+</h3>
            <p>Beneficiaries</p>
          </div>

          <div className="stat-card">
            <h3>200+</h3>
            <p>Volunteers</p>
          </div>

          <div className="stat-card">
            <h3>28</h3>
            <p>States Reached</p>
          </div>

          <div className="stat-card">
            <h3>6</h3>
            <p>Core Projects</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Our Projects</h2>

        <div className="cards">
          <div className="card">
            <FaHandsHelping />
            <h3>Project Seva</h3>
            <p>Food and clothing distribution drives.</p>
          </div>

          <div className="card">
            <FaGraduationCap />
            <h3>Bachpanshala</h3>
            <p>Education support for children.</p>
          </div>

          <div className="card">
            <FaPaw />
            <h3>Jeev</h3>
            <p>Animal welfare initiatives.</p>
          </div>

          <div className="card">
            <FaFemale />
            <h3>Udaan</h3>
            <p>Women empowerment programs.</p>
          </div>

          <div className="card">
            <FaLeaf />
            <h3>Prakriti</h3>
            <p>Environmental sustainability campaigns.</p>
          </div>

          <div className="card">
            <FaBriefcase />
            <h3>Vikas</h3>
            <p>Internship and skill development.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <h2>Our Gallery</h2>

        <div className="gallery-grid">
          <img src="/images/gallery 1.jpg" alt="" />
<img src="/images/gallery 2.jpg" alt="" />
<img src="/images/gallery 3.jpg" alt="" />
<img src="/images/gallery 4.jpg" alt="" />
<img src="/images/gallery 7.jpg" alt="" />
<img src="/images/gallery 6.jpg" alt="" />
        </div>
      </section>
<section className="testimonials">
  <h2>Voices of Impact</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        "Working with InAmigos Foundation gave me the opportunity
        to create real impact in society."
      </p>
      <h4>- Volunteer</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "The Bachpanshala initiative has helped many children
        continue their education."
      </p>
      <h4>- Community Member</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "Their dedication to animal welfare and social service
        is truly inspiring."
      </p>
      <h4>- Supporter</h4>
    </div>

  </div>
</section>
      <section id="contact" className="contact">
        <h2>Volunteer With Us</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="How would you like to contribute?" />
          <button>Submit</button>
        </form>
      </section>

<footer>

<img
src="/images/logo.jpg"
alt="InAmigos Logo"
/>

<h3>InAmigos Foundation</h3>

<p>Uniting Minds For Change</p>

<div className="footer-links">
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#gallery">Gallery</a>
<a href="#contact">Contact</a>
</div>

<p className="creator">
Designed & Developed with ❤️ by Alina Ghanchi
</p>

<p>
© 2026 All Rights Reserved
</p>

</footer>
    </>
  );
}

export default App;
