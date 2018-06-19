import React, { Component } from 'react';
import MovieListItem from './MovieListItem.js';

class MovieList extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }

  }

  componentDidMount(){
    //fetch initial API to get the list of 10 movies
    fetch(`http://www.omdbapi.com/?apikey=47b3f579&s=back`)
      .then(response => response.json())
      .then(data => {

        // Using the list of 10 movies, do another API call via OMDB API by ID with the ID coming from the movie list result's imdbID
        data.Search.map(m =>
          fetch(`http://www.omdbapi.com/?apikey=47b3f579&i=${m.imdbID}`)
            .then(resp => resp.json())
            // spread operator expands array into a single array instead of an array of arrays after itirating through each item.
            .then(data => this.setState({data: [ ...this.state.data, data ] }))
        )
      })
  }


  render() {
    const { data } = this.state
    // Console.log shows how the spread operator will work and how each movie item is added through the iterations
    // console.log(this.state)
    return (
      <div>
        {/* pass this.state.data from MovieList Component into MovieList Item
        */}
        <MovieListItem data={data} />
      </div>
    );
  }
}
export default MovieList
