import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homview from './views/Homview';
import Sub1 from './views/Sub1';
import Sub2 from './views/Sub2';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homview />} />
        <Route path='/sub1' element={<Sub1 />} />
        <Route path='/sub2' element={<Sub2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App