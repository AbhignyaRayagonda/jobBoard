import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate , Link} from 'react-router-dom';

const Jobs = () => {
  const[jobs, setJobs] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch('https://remoteok.com/api')
    .then((response) => {
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setJobs(data.slice(1));
      setLoading(false);
    })
    .catch((error)=>{
      setError(error.message);
      setLoading(false);
    })
  }, []);

  if(loading){
    return <h3>Loading jobs....</h3>
  }

  if(error){
    return <h3>Error: {error}</h3>
  }
  return (
    <div className='jobs-container'>
      <h1>These are the list of jobs available</h1>
      <div className='job-list'>
    {jobs.map((job)=> (
      <div key={job.id} className='job-card'>
        <h3>Position: {job.position}</h3>
        <p>Company: {job.company}</p>
        <div>Location:
          {job.location?<p>{job.location}</p>: <p>Location not specified</p>}
        </div>
        <p>Min Salary: {job.salary_min}</p>
        <Link to={`/jobs/${job.id}`}><button>Apply Now</button></Link>
      </div>
    ))}
      </div>
    </div>
  )
}

export default Jobs
