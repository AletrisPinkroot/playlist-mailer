import { useEffect, useState } from 'react';

const GenreSelection = ({
  changeState,
  genreList,
}: {
  changeState: React.Dispatch<React.SetStateAction<string[]>>;

  genreList: string[];
}) => {
  let genres: string[] = [''];
  const handleChecked = (active: boolean, genre: string) => {
    if (active) {
      genres.push(genre);
      genres = genres.filter((g) => g !== '');
      changeState(genres);
    } else {
      genres = genres.filter((g) => g !== genre);
      changeState(genres);
    }

    console.log('Active: ' + active);
    console.log('Genre: ' + genre);
    console.log('Genres: ' + genres.toString());
  };

  const [genreListElements, setGenreListElements] = useState([<></>]);
  useEffect(() => {
    setGenreListElements(
      genreList.map((genre) => {
        return (
          <div key={genre}>
            <input
              type="checkbox"
              value={genre}
              onChange={(e) => handleChecked(e.target.checked, genre)}
              name={genre}
            />
            <label key={genre} htmlFor={genre}>
              {genre}
            </label>
          </div>
        );
      })
    );
  }, [genreList]);
  useEffect(() => {
    console.log(genres);
  }, [genres]);
  return <div className="GenreSelection">{genreListElements}</div>;
};

export default GenreSelection;
