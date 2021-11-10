import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPages';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';


const App = () => {
  return (
    <>
        {/* react-router-dom v6부터는 방식이 바뀌었다.(exact도 사용할 필요가 없음) */}
        <Routes>
          <Route path="/@:username" element={<PostListPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/write" element={<WritePage/>} />
          <Route path="/:postId" element={<PostPage/>} />
        </Routes>
    </>
  );
};

export default App;
