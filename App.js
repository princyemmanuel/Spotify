
import './App.css';
import Addartist from './components/Addartist/Addartist';
import Addsong from './components/Addsong/Addsong';
import Song from './song/Song';
import{BrowserRouter as Router,Switch,Route}from'react-router-dom';

// import NavbarComponent from './components/Navbar/NavbarComponent.js';


function App() {
  return (
    <div className="App">
       
         {/* <Song/> */}
        
         {/* <Addsong/> */}
         {/* <Addartist/> */}
         
         


          <Router>  
           <Switch>
           <Route path="/"exact component={Song}/>
           <Route exact path='/Addsong' component={Addsong}></Route>
           <Route exact path='/song' component={Song}/>
           </Switch>
         </Router> 
        
    </div>
  );
}

export default App;
