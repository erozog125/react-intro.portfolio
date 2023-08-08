import { Routes,Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Pages/Home/Home'
import { Projects } from './components/Pages/Projects/Projects'
import { WorkExperience } from './components/Pages/WorkExperience/WorkExperience'
import { ContactMe } from './components/Pages/ContactMe/ContactMe'
import { NotFound } from './components/Pages/NotFound/NotFound'


function App() {

  return (
    <>
    <Header />    
    <Routes>      
      <Route path='/' Component={Home} />
      <Route path='/projects' Component={Projects} />
      <Route path='/contactme' Component={ContactMe} />
      <Route path='/workexperience' Component={WorkExperience} />
      <Route path='*' Component={NotFound} />      
    </Routes>            
    <Footer />            
    </>
  )
}

export default App
