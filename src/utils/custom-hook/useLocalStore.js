import { useState, useEffect } from "react";

function getStoreValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

function useLocalStore(key, defaultValue) {
  const [likedSongs, setlikedSongs] = useState(() => {
    return getStoreValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(likedSongs));
  }, [key, likedSongs]);

  return [likedSongs, setlikedSongs];
}

export default useLocalStore;
