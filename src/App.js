import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import Nominees from './components/Nominees/Nominees';

function App() {
  return (
    <>
    <h1>The Shoppies</h1>
    <Search />
    <Results />
    <Nominees />
    </>
  );
}

export default App;
