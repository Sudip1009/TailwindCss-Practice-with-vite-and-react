import './App.css'
import Navbar from './components/Navbar'
import Category from './components/Category'
import { Outlet } from 'react-router-dom'

function App() {

    return (
      <>
       <Navbar/>
       <Outlet/>
       <Category/>
      </>
    )
  }
  
  export default App