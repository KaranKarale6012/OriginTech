import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Product_explore from './Components/Product_explore'
import { useEffect } from 'react';
import Bell_Product from './Components/Bell_Product';
import CurdMakerCommercial from './Components/CurdMakerCommercial';
import CurdMakerHome from './Components/CurdMakerHome';
import IntruderDetectionSystem from './Components/IntruderDetectionSystem';
import WaterLevelController from './Components/WaterLevelController';
import OccupancyDetctionSystem from './Components/OccupancyDetctionSystem';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route exact path='/' element={<Mainpage/>} />
              <Route exact path='/product' element={<Products/>} />
              <Route exact path='/product/bell' element={<Bell_Product/>} />
              <Route exact path='/product/curdMakerCommerical' element={<CurdMakerCommercial/>} />
              <Route exact path='/product/curdMakerHouseHold' element={<CurdMakerHome/>} />
              <Route exact path='/product/intruderDetectionSystem' element={<IntruderDetectionSystem/>} />
              <Route exact path='/product/waterLevelController' element={<WaterLevelController/>} />
              <Route exact path='/product/occupancyDetectionSystem' element={<OccupancyDetctionSystem/>} />
              <Route exact path='/contact' element={<Contacts/>}/>
          </Routes>
      </Router>
      {/* <Product_explore/> */}
    </>
  );
}

export default App;
