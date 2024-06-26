import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'



export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route path = '*' element={<PageNotFound/>}/>

    </Routes>
  )
}
