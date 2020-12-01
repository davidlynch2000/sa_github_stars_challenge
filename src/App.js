import starWarsLogo from './starWarsLogo.png';
import './App.css';
import RepoContainer from './RepoContainer';

function App() {

  return (
    <>
      <header className="App-header">
        <img
          src={starWarsLogo}
          alt='Star Wars: The Github Repos'
          className="pageHeader_titleImage"
          data-testid="pageHeader_titleImage"
        />

      </header>
      <RepoContainer />
    </>
  );
}

export default App;
