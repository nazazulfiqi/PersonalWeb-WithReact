import About from './components/About'
import Hero from './components/Hero'
import Artikel from './pages/Artikel'
import Portofolio from './pages/Portofolio'
import {Routes, Route} from 'react-router-dom'

function App() {
  return(
    <>

    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portofolio' element={<Portofolio/>}/>
      <Route path='/artikel' element={<Artikel/>}/>
    </Routes>
    
    {/* <Hero/> 
    <About/>
    <Portofolio/>
    <Artikel/> */}
 
    </>
  )
}

export default App
