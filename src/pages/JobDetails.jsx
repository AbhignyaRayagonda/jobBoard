import React from 'react'
import { useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


const JobDetails = () => {

  const {id} = useParams();
  const [job, setJob] = useState(null);
  const[loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
}, []);

const decodeHTMLEntities = (text) => {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

  useEffect(()=> {
    fetch('https://remoteok.com/api')
    .then((response)=> {
      if(!response.ok){
        throw new Error("Failed to fetch job details")
      }
      return response.json();
    })
    .then((data)=>{
      const jobs = data.slice(1)
      console.log(jobs)
      const selectedJob = jobs.find((j)=>j.id.toString() === id)
      if(!selectedJob){
        throw new Error("Job not found");
      }
      setJob(selectedJob)
      setLoading(false);
    })
    .catch((err)=>{
      setError(err.message);
      setLoading(false)
    })
  }, [id]);

  

  if(loading) return <h3>Loading Job details...</h3>
  if(error) return <h3>Error: {error}</h3>
  if(!job) return <h3>Job not found</h3>

  return (
    <div className = 'job-description'>
      <h2>Job Details
      </h2>
      <p><b>Position:</b>{job.position}</p>
      <p><b>Company:</b>{job.company}</p>
      <p><b>Location:</b>{job.location?job.location:'Location not specified'}</p>
      <p><b>Date:</b>{job.date}</p>
      <p><b>Salary:</b>{job.salary_min} - {job.salary_max}</p>
      <div>
        <b>Skills: </b>
        {
          job.tags && job.tags.length>0 ? (
            <div className='skills'>
            <ul>{
            job.tags.map((skill, index)=>(
            <li key={index}><a target='_blank' href={`https://www.google.com/search?q=learn+${encodeURIComponent(skill)}`}>{skill}</a></li>
          ))}
          </ul>
          <p className='color'>Click on the skill to know more details</p>
          </div>
        ): `No skill listed `
        }
      </div>

      <div className="description">
        <b>Description:</b>
        {job.description ? (
          <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(job.description) }} />
        ) : (
          "No Description available"
        )}
      </div>
      <div><b>Application Link:</b><a className='url' target='_blank' href={job.apply_url}>{job.apply_url}</a></div>

    </div>
  )
}

export default JobDetails


