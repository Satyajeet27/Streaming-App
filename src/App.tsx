import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'




const Home = lazy(() => import("./pages/Home"))
const MovieDetail = lazy(() => import('./pages/MovieDetail'))
const TvSeriesDetail = lazy(() => import('./pages/TvSeriesDetail'))
const LatestMovies = lazy(() => import('./pages/LatestMovies'))
const LatestTvShows = lazy(() => import('./pages/LatestMovies'))
const Search = lazy(() => import('./pages/Search'))


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/movies' element={< Movies />} />
          <Route path='/movie/:id' element={< MovieDetail />} />
          <Route path='/tv' element={< TvShows />} />
          <Route path='/tv/:id' element={< TvSeriesDetail />} />
          <Route path='/movies/latest' element={<LatestMovies />} />
          <Route path='/tv/latest' element={<LatestTvShows />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </Suspense>

    </BrowserRouter>
  )
}

export default App