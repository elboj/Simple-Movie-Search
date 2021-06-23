import React from "react";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        try {
          const {
            show: { name, image, id },
          } = movie;
          return <img src={image.medium} alt={name} key={id} />;
        } catch (error) {
          console.log(error);
        }
      })}
    </div>
  );
};

export default Movies;
