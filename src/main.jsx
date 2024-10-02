import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import News from './pages/News.jsx'
import About from './pages/About.jsx'
import Market from './pages/Market.jsx'
import CropsDetails from './pages/CropsDetails.jsx'
import ShowDataBase from './pages/ShowDataBase.jsx'

import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<App/>}/>
        <Route path='cropsdetails'element={<CropsDetails/>}/>
        <Route path='allcrops' element={<ShowDataBase/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='market' element={<Market/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)
