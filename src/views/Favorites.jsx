import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const removeFavorite = (id) => {
    // QUITO DE FAVORITOS CAMBIANDO "ISFAVORITE A "FALSE" "
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: false,
        };
      }

      // RETORNO LOS OBJETOS QUE QUEDAN QUE SERÍAN LOS QUE TIENEN "ISFAVORITE" EN TRUE 👇
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos
          .filter((foto) => foto.isFavorite)
          .map((foto, i) => (
            <img
              src={foto.src.tiny}
              alt=""
              onClick={() => removeFavorite(foto.id)}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
export default Favorites;
