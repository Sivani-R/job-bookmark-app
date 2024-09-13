
import React, { createContext, useState, useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

 
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (job) => {
    if (!bookmarks.some((bookmark) => bookmark.id === job.id)) {
      setBookmarks([...bookmarks, job]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
