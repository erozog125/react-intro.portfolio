import { Routes,Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/Pages/NotFound/NotFound'
import { Experience } from './components/Experience/Experience'
import { ContactMe } from './components/ContactMe/ContactMe'



function App() {

  return (
    <>
    <Header />    
    <Routes>            
      <Route path='/' Component={Home} />
      <Route path='/projects' Component={Home} />
      <Route path='/contactme' Component={ContactMe} />
      <Route path='/workexperience' Component={Experience} />
      <Route path='*' Component={NotFound} />      
    </Routes>            
    <Footer />            
    </>
  )
}

export default App
