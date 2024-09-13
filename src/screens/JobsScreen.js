import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import '../styles/globalStyles.css'; 

export default function JobsScreen() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log(`Fetching jobs from page ${page}`);
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        
        console.log('API response:', response);  
        
     
        const jobsData = response.data?.results || []; 
        
        if (Array.isArray(jobsData)) {
          setJobs((prevJobs) => [...prevJobs, ...jobsData]);
        } else {
          throw new Error('Unexpected API response structure');
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching jobs:', err.message);
        setError('Failed to load jobs');
        setLoading(false);
      }
    };
    fetchJobs();
  }, [page]);

  const loadMoreJobs = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="job-list" onScroll={loadMoreJobs}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
