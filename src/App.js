
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import JobsScreen from './screens/JobsScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import JobDetails from './components/JobDetails';
import { BookmarkProvider } from './context/BookmarkContext';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const App = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/bookmarks');
  };

  return (
    <BookmarkProvider>
      <Routes>
        <Route path="/" element={<JobsScreen />} />
        <Route path="/bookmarks" element={<BookmarksScreen />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
          <BottomNavigationAction label="Bookmarks" icon={<BookmarkIcon />} />
        </BottomNavigation>
      </Paper>
    </BookmarkProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
