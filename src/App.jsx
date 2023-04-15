import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Homes from './pages/Homes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

export default function App() {


  return (
 <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
    </Routes>
    <Footer/>
  </Box>
  )
}


