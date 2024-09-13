import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Button } from '@mui/material';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  if (loading) return <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />;

  if (!job) return <Typography variant="h6" align="center">Job not found.</Typography>;

  return (
    <Container sx={{ paddingTop: 4 }}>
     
      <Typography variant="h4" gutterBottom>
        {job.title || 'No title available'}
      </Typography>

      
      <Typography variant="h6" gutterBottom>
        Job Role: {job.job_role || 'No role specified'}
      </Typography>

      
      <Typography variant="body1" gutterBottom>
        {job.content?.block1 || 'No description available'}
      </Typography>

     
      <Typography variant="body2" color="text.secondary">
        Location: {job.primary_details?.Place || 'Not provided'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Salary: {job.primary_details?.Salary || 'Not provided'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Experience: {job.primary_details?.Experience || 'Not provided'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Job Type: {job.primary_details?.Job_Type || 'Not provided'}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Phone: {job.custom_link ? job.custom_link.replace('tel:', '') : 'Not provided'}
      </Typography>
      <Button
        href={job.custom_link}
        variant="contained"
        sx={{ marginTop: 2 }}
        startIcon={<span role="img" aria-label="call">📞</span>}
      >
        Call HR
      </Button>

     
      {job.contentV3?.V3?.map((detail, index) => (
        <Typography key={index} variant="body2" color="text.secondary">
          {detail.field_name}: {detail.field_value}
        </Typography>
      ))}

     
      <Typography variant="body2" color="text.secondary">
        Openings: {job.openings_count || 'Not specified'}
      </Typography>

     
      <Typography variant="body2" color="text.secondary">
        Other Details: {job.other_details || 'Not provided'}
      </Typography>

    
      {job.creatives && job.creatives[0]?.file && (
        <img
          src={job.creatives[0].file}
          alt="Job creative"
          style={{ marginTop: '20px', maxWidth: '100%' }}
        />
      )}

   
      {job.contact_preference?.whatsapp_link && (
        <Button
          href={job.contact_preference.whatsapp_link}
          variant="contained"
          color="success"
          sx={{ marginTop: 2 }}
          startIcon={<span role="img" aria-label="whatsapp">📱</span>}
        >
          Contact via WhatsApp
        </Button>
      )}
    </Container>
  );
};

export default JobDetails;
