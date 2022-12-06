import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import './sass/index.scss';
import Quiz from './components/Quiz';
import Cpp from './components/Cpp';
import Javascript from './components/Javascript';
import Matematik from './components/Matematik';
import Turkce from './components/Turkce';
import { QuizProvider } from './contexts/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QuizProvider>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/cpp' element={<Cpp/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/matematik' element={<Matematik/>}></Route>
        <Route path='/turkce' element={<Turkce/>}></Route>
    </Routes>
    </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);

