import React from 'react';
import {Link, NavLink} from 'react-router-dom'

// export default class SavedList extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render(props) {
//     console.log(this.props);
//     return (
//       <div className="saved-list">
//         <h3>Saved Movies:</h3>
//         {this.props.list.map(movie => (
//           <NavLink to={`/movie/${movie.id}`} className="saved-movie">{movie.title}</NavLink>
//         ))}
//         <Link to="/" className="home-button">Home</Link>
//       </div>
//     );
//   }
// }

const SavedList = props => {
  console.log(props.list);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movie/${movie.id}`} className="saved-movie" key={movie.id}>{movie.title}</NavLink>
      ))}
      <Link to="/" className="home-button">Home</Link>
    </div>
  )
}

export default SavedList;
