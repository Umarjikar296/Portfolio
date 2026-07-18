import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'
import { LanguageProvider } from './context/LanguageContext'
import ScrollToAnchor from './components/ScrollToAnchor'
import HomeLayout from './components/HomeLayout'
import CaseStudyDetail from './section/CaseStudyDetail'

export default function App() {

  const [introDone, setIntroDone] = useState(false);

  return (

    <LanguageProvider>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className='relative gradient text-white min-h-screen'>
          <CustomCursor />
          <ScrollToAnchor />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          </Routes>
        </div>
      )}
    </LanguageProvider>
  )
}

