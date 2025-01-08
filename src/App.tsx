import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ShowDetail from './pages/ShowDetail'

const Home = lazy(() => import("./pages/Home"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/movie/:id' element={< ShowDetail />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default App