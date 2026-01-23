import LandingPage from './pages/LandingPage';
import {Routes, Route} from "react-router-dom";
import AccountLayout from './layouts/AccountLayout';

export default function App() {
  return <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/account' element={<AccountLayout/>}/>
  </Routes>
}