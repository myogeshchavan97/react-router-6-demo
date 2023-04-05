import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CourseDetails from './components/course-details/CourseDetails';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main-container'>
        <Routes>
          <Route path='/' element={<Courses />} />
          <Route path='/courses/:title' element={<CourseDetails />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
