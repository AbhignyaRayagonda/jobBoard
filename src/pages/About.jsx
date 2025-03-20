import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
       <h1>About Our Job Board</h1>
       <p>Welcome to our Job Board, a platform designed to connect job seekers with exciting opportunities from around the world. Our goal is to provide a seamless experience for users looking for remote and on-site jobs in various industries.</p>
       <h3>What We Offer:</h3>
       <ul>
        <li>A curated list of job postings from reputable sourc</li>
        <li>Detailed job descriptions, including salary ranges, required skills, and application links</li>
        <li>A user-friendly interface that makes job searching easy and efficient</li>
        <li>The ability to explore different career opportunities with real-time updates</li>
       </ul>
       <h3>How It Works:</h3>
       <p>How It Works:
       Our platform fetches job listings from an API and displays them in a structured manner. Users can browse through the listings, view detailed job descriptions, and apply directly through the provided links. Each job listing includes relevant details such as company name, position, location, and required skills.</p>
       <h3>Why Choose Our Job Board?</h3>
       <ul>
        <li><b>Efficiency: </b>We streamline the job search process, saving you time and effort.
</li>
        <li><b>Accuracy: </b>Our listings are updated frequently to ensure users access the latest opportunities.</li>
        <li><b>Convenience: </b>Whether on a phone, tablet, or desktop, our platform is responsive and easy to navigate.

</li>
       </ul>

       <h4>Start your job search today and take the next step in your career with our Job Board!</h4>
       <Link to='/'><button>Go to Home</button></Link>
    </div>
  )
}

export default About
