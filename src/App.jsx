import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import FlatNavbar from './components/FlatNavbar'
import HomeSection from './components/HomeSection'
import NotFoundSection from './components/NotFoundSection'
import AboutSection from './components/AboutSection'

function App() {
    return (
        <BrowserRouter basename='/YousefAhmed-Portfolio/'>
            <FlatNavbar/>
            <div className='container'>
                <Routes>
                    <Route index path='/' element={
                        <>
                            <HomeSection/>
                            <AboutSection/>
                        </>
                    }/>
                    <Route path='/*' element={<NotFoundSection />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
