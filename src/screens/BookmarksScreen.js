
import React, { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import JobCard from '../components/JobCard';
import { Container, Typography } from '@mui/material';

const BookmarksScreen = () => {
  const { bookmarks } = useContext(BookmarkContext);

  if (bookmarks.length === 0) return <Typography variant="h6" align="center" sx={{ paddingTop: 4 }}>No bookmarks yet!</Typography>;

  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 8 }}>
      {bookmarks.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Container>
  );
};

export default BookmarksScreen;
