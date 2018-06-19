import React from 'react';

const MovieListItem = (props ) => {
  const { data } = props;

  return (
      <div>
        {/*using the state of the parent component, map through each item in the array and use that data to show Title, Poster, Genre, Rated, Year, Awards, Website, and Ratings*/}
        {data.map(movie => (
          <div key={movie.imdbID} >
            <div key={movie.imdbID} className="movie_title">
              <div className="title">
                  <h1> {movie.Title}</h1>
              </div>
              <div className="poster">
                <img src={movie.Poster} alt={movie.title} />
              </div>
              <div className="info">

                <div className="flexBox">
                  <div className="category">
                    <h2>Released</h2>
                  </div>
                  <div className="rightTable">
                    <p>{movie.Year}</p>
                  </div>
                </div>
                <hr/>

                <div className="flexBox">
                  <div className="category">
                    <h2>Rated</h2>
                  </div>
                  <div className="rightTable">
                    <p>{movie.Rated}</p>
                  </div>
                </div>
                <hr/>

                <div className="flexBox">
                  <div className="category">
                    <h2>Genre</h2>
                  </div>
                  <div className="rightTable">
                    <p>{movie.Genre}</p>
                  </div>
                </div>
                <hr/>



                <div className="flexBox">
                  <div className="category">
                    <h2>Website</h2>
                  </div>
                  <div className="rightTable">
                    <p><a target="_blank" href={movie.Website}> {movie.Website}</a></p>
                  </div>
                </div>
                <hr/>

                <div className="flexBox">
                  <div className="category">
                    <h2>Awards</h2>
                  </div>
                  <div className="rightTable">
                    <p>{movie.Awards} </p>
                  </div>
                </div>

                <hr/>
                <div className="flexBox">
                  <div className="category">
                    <h2> Ratings</h2>
                  </div>
                  <div className="rightTable" >
                    {/*map through the ratings array and create a separate line for each with the array index as key*/ }
                    {movie.Ratings.map((rating, index) => (
                      <p className="ratings_p" key={index}>{rating.Source}: {rating.Value}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default MovieListItem;
