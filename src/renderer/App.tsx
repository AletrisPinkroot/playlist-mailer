import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GenreSelection from './GenreSelection';
import FileGet from './FileGet';
import './App.css';
import generateGenreList from './App.helpers';

const Main = () => {
  const [genres, setGenres] = useState(['']); // genres = array of genres which have been selected
  const [emails, setEmails] = useState([{}]); // emails = array of emails which have been selected
  const [genreList, setGenreList] = useState(['']); // genreList = array of all genres

  //When emails is updated, update genreList
  useEffect(() => {
    console.log(emails);
    setGenreList(generateGenreList(emails));
  }, [emails]);

  useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <div>
      <h1>Playlist Mailer</h1>
      <FileGet emails={emails} setEmails={setEmails} />
      <GenreSelection genreList={genreList} changeState={setGenres} />
      <p>{genres}</p>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
