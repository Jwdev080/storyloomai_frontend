/* eslint-disable import/no-extraneous-dependencies */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './App.scss';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './components/header/Header'
import Home from './pages/Home'

function LandingView() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default LandingView
