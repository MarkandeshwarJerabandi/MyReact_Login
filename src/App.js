import './App.css';
import About from './components/about';
import Login from './components/login';
import ResponsiveAppBar from './components/nav';
import Pricing from './components/pricing';
import {Routes,Route} from 'react-router-dom';
import Logout from './components/Logout';
import Home from './components/home';
function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/pricing' element = {<Pricing/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/Logout' element = {<Logout/>}/>
      </Routes>
    </div>

  );
}

export default App;
