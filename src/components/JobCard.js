
import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BookmarkContext } from '../context/BookmarkContext';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { addBookmark } = useContext(BookmarkContext);

  const handleNavigate = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <Typography variant="h5" component="div">
          {job.title || 'No title available'}
        </Typography>

      
        <Typography color="text.secondary">
          Location: {job.primary_details?.Place || 'Location not provided'}
        </Typography>
        <Typography color="text.secondary">
          Salary: {job.primary_details?.Salary || 'Salary not provided'}
        </Typography>

        
        <Typography color="text.secondary">
          Phone: {job.custom_link ? job.custom_link.replace('tel:', '') : 'Phone not provided'}
        </Typography>

       
        <Typography color="text.secondary">
          Job Type: {job.primary_details?.Job_Type || 'Not provided'}
        </Typography>
        <Typography color="text.secondary">
          Experience: {job.primary_details?.Experience || 'Experience not provided'}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => addBookmark(job)}>
          Bookmark
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
