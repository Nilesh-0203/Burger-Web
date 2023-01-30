import Crate from './Crate';
import TopHead from './TopHead';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import {BrowserRouter, Routes,Route} from "react-router-dom";
 
const App=()=>{
  return(
  <>
  
  <TopHead/>
  <BrowserRouter>
  <Routes>
 
    <Route path="/" element={<FirstPage/>}/>
    <Route path='/login' element={<SecondPage/>} />
    <Route path='/burger' element={<Crate/>} />

  </Routes>
  </BrowserRouter>

  </>
  )
}

export default App;

