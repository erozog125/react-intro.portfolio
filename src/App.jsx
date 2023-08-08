import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { AboutUs } from './components/Pages/AboutUs/AboutUs'
import { Home } from './components/Pages/Home/Home'


function App() {
  
  return (
    <>
      <Header />
      <Home><Main /></Home>
      <AboutUs />
      <Footer />            
    </>
  )
}

export default App
