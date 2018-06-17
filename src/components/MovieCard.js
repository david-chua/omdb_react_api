import React, { Component } from 'react';
import getMovies from './MovieAPI.js';

// const movieExample = [
//   {
//     id: '1',
//     title: 'Back to the Future',
//     released: 1985,
//     rated: 'PG',
//     genre: "Adventure, Comedy, Sci-fi",
//     Website: "https://www.google.com",
//     Awards: "Won 1 Oscar. Another 19 wins & 25 nominations.",
//     Rating: [
//       {Source: "Internet Movie Database", Value: "8.5/10"}, {Source: "Rotten Tomatoes", Value:"96%" },
//       {Source: "Metacritic", Value: "86/100"}],
//     Poster: "https://ia.media-imdb.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//   },
//   {
//     id: '2',
//     title: 'SWAT',
//     released: "2006",
//     rated: 'PG-13',
//     genre: "Adventure, Action",
//     Website: "https://www.youtube.com",
//     Awards: "No Awards.",
//     Rating: [{"Source": "Internet Movie Database", "Value": "7.3/10"}, {"Source": "Rotten Tomatoes", "Value":"67%" },{"Source": "Metacritic", "Value": "79/100"}],
//     Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTdhOTY3NDktZjZiMy00ODFkLThkZjItNmNiNzVhODI0MjAwXkEyXkFqcGdeQXVyNTY3NTg3Mjg@._V1_SX300.jpg"
//   }
// ]

class MovieCard extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    getMovies().then(results => {
      let movies = results.Search.map((movie) =>{
        console.log(movie)
        return(
          <div key={movie.imdbID} >
            <div className="movie_title">
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
                    <p>{movie.genre}</p>
                  </div>
                </div>
                <hr/>
                <div className="flexBox">
                  <div className="category">
                    <h2> Website </h2>
                  </div>
                  <div className="rightTable">
                    <p><a target="_blank" href={movie.Website}> {movie.Website}</a></p>
                  </div>
                </div>
                <hr/>

                <div className="flexBox">
                  <div className="category">
                    <h2> Awards</h2>
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

                </div>
              </div>
            </div>

          </div>
        )
      })
      this.setState({movies: movies});
      console.log("state", this.state)
    })
  }



  render(){
    return (
      <div>
      {this.state.movies}
      </div>
      // <div>
      // {movieExample.map((movie) => (
      //   <div key={movie.id} className="movie_title">
      //     <div className="title">
      //         <h1> {movie.title}</h1>
      //     </div>
      //     <div className="poster">
      //       <img src={movie.Poster} alt={movie.title} />
      //     </div>
      //     <div className="info">
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2>Released</h2>
      //         </div>
      //         <div className="rightTable">
      //           <p>{movie.released}</p>
      //         </div>
      //       </div>
      //       <hr/>
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2>Rated</h2>
      //         </div>
      //         <div className="rightTable">
      //           <p>{movie.rated}</p>
      //         </div>
      //       </div>
      //       <hr/>
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2>Genre</h2>
      //         </div>
      //         <div className="rightTable">
      //           <p>{movie.genre}</p>
      //         </div>
      //       </div>
      //       <hr/>
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2> Website </h2>
      //         </div>
      //         <div className="rightTable">
      //           <p><a target="_blank" href={movie.Website}> {movie.Website}</a></p>
      //         </div>
      //       </div>
      //       <hr/>
      //
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2> Awards</h2>
      //         </div>
      //         <div className="rightTable">
      //           <p>{movie.Awards} </p>
      //         </div>
      //       </div>
      //
      //       <hr/>
      //       <div className="flexBox">
      //         <div className="category">
      //           <h2> Ratings</h2>
      //         </div>
      //         <div className="rightTable">
      //           {movie.Rating.map((rating) => (
      //             <p>{rating.Source}: {rating.Value}</p>
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // ))}
      // </div>
    )
  }
}

export default MovieCard;
