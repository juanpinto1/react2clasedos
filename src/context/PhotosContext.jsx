import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

const PHOTO_URL = '/photos.json';

const PhotosProvider = ({ children }) => {


  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(PHOTO_URL);

    const { photos: photosDB } = await response.json();

    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};
export default PhotosProvider;
