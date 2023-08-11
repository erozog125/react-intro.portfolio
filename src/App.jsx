import { Routes,Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Pages/Home/Home'
import { Projects } from './components/Pages/Projects/Projects'
import { ContactMe } from './components/Pages/ContactMe/ContactMe'
import { NotFound } from './components/Pages/NotFound/NotFound'
import { Experience } from './components/Experience/Experience'



function App() {

  return (
    <>
    <Header />    
    <Routes>            
      <Route path='/' Component={Home} />
      <Route path='/projects' Component={Projects} />
      <Route path='/contactme' Component={ContactMe} />
      <Route path='/workexperience' Component={Experience} />
      <Route path='*' Component={NotFound} />      
    </Routes>            
    <Footer />            
    </>
  )
}

export default App
