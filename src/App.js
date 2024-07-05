
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import CreatePostPage from "./pages/creatPostPage/CreatPostPage";
import loading from "./loading/Loading";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PostPage/>} />
                <Route path='/users' element={<CreatePostPage/>} />
                <Route path='/loading' element={<loading/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
