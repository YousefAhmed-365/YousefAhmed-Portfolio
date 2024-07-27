import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
                    <Route path='/not-found' element={<NotFoundSection />}/>
                    <Route path='*' element={<Navigate replace to="/not-found"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
