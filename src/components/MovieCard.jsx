function MovieCard(props) {
    const {name, releaseYear, director} = props
    return (
        <div> 
        <h2> {name} </h2>
        <p> {releaseYear} </p>
         <p> {director} </p>
        </div>
    );
}

export default MovieCard