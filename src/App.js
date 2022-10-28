import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './styles/App.scss';
import Header from "./component/header"
import Home from "./component/home"
import About from "./component/about"
import Services from "./component/services"
import Contact from "./component/contact"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/services' element={< Services />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
