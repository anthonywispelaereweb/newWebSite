import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './styles/App.scss';
import Header from "./component/header"
import Home from "./component/home"
import Experiences from "./component/experiences"
import Services from "./component/services"
import Contact from "./component/contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/experiences' element={< Experiences />}></Route>
          <Route path='/services' element={< Services />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
