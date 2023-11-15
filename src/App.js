import { Routes,Route } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Navbar } from './Component/Navbar';
import Form from './Component/Form.js';
 import {Profile} from './Component/Profile.js' ;
 import Details from './Component/Salary-details'
 import Registration from './Component/Registration';
 import Logout from './Component/Logout'; // Make sure the path is correct

import Notfound from './Component/Notfound.js';
function App() {
  return (
   <div>  
    <Navbar/>

    <Routes>
   
      <Route path='/' element={<Form/>}/>      
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/details' element={<Details/>}/>
      <Route path='/registr' element={<Registration/>}/>
      <Route path='*' element={<Notfound />} />
    </Routes>
    </div>
  );
} 

export default App;
