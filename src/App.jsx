import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import FlatNavbar from './components/FlatNavbar'
import HomeSection from './components/HomeSection'
import NotFoundSection from './components/NotFoundSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ProjectsSection from './components/ProjectsSection'
import FlatFooter from './components/FlatFooter'

function App() {
    return (
        <BrowserRouter basename='/YousefAhmed-Portfolio/'>
            <FlatNavbar />
            <div className='sp-container'>
                <Routes>
                    <Route index path='/' element={
                        <>
                            <HomeSection />
                            <AboutSection />
                            <ProjectsSection />
                            <ContactSection />
                        </>
                    } />
                    <Route path='/404' element={<NotFoundSection />} />
                    <Route path='*' element={<Navigate replace to="/404" />} />
                </Routes>
            </div>
            <FlatFooter />
        </BrowserRouter>
    )
}

export default App
