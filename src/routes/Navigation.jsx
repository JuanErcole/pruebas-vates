import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { ReactPage } from '../pages/ReactPage/ReactPage'
import { PythonPage } from '../pages/PythonPage/PythonPage'
import { Navbar } from '../components/Navbar'
import { PagesContainer } from '../components/PagesContainer'
// import { Pruebas } from '../pages/Pruebas/Pruebas'
import { Pruebas2 } from '../pages/Pruebas/Pruebas2'

export const Navigation = () => {
  return (
    <>
      <Navbar />
      <PagesContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/pruebas" element={<Pruebas2 />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </PagesContainer>
    </>
  )
}
