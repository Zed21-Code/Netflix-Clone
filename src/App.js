import './App.css';
import Row from './Components/Row/Row';
import requests from './requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
// import 'dotenv/config'

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row  title='NETFLIX ORIGNAL' 
            getUrl={requests.getNetflixOrignal}
            isLargeRow />
      <Row  title='Trending Now' 
            getUrl={requests.getTrending} 
        />    
      <Row  title='Popular On Tv' 
        getUrl={requests.getPopular} 
        />
      <Row  title='Top Rated' 
            getUrl={requests.getTopRated} />
      <Row  title='Action Movies' 
            getUrl={requests.getActionMovies} />
            <Row  title='Family' 
            getUrl={requests.getAdventure} />
    </div>
  );
}

export default App;
