import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import NotFoundSection from './components/NotFoundSection'
import AboutSection from './components/AboutSection'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
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
