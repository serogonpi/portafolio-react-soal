import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Posts from './components/Posts'
import Contact from './components/Contact'  // ← NUEVO

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/contact' element={<Contact />} />  {/* ← NUEVO */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;