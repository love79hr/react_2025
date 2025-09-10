import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homview from './views/Homview';
import Sub1 from './views/Sub1';
import Sub2 from './views/Sub2';
import Link from './views/Link';


const App = () => {

  useEffect(()=>{
    Link();
  })

  // useEffect() : 리액트 훅 명령어, 컴포넌트가 렌더링 될 때마다 특정 작업을 수행할 수 있게 해주는 명령어
  // 컴포넌트가 처음 렌더링 될 때와 업데이트 될 때 실행됨

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