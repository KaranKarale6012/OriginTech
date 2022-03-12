import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Product_explore from './Components/Product_explore'

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path='/' element={<Mainpage/>} />
              <Route exact path='/product' element={<Products/>} />
              <Route exact path='/contact' element={<Contacts/>}/>
          </Routes>
      </Router>
      {/* <Product_explore/> */}
    </>
  );
}

export default App;
