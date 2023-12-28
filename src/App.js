import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import NewPostButton from './components/buttons/NewPost/NewPostButton';

// context
import AllPosts from './context/AllPosts';

// pages
import List from './pages/MainPage/List';
import Post from './pages/post/Post';
import Create from './pages/create/Create';
import Update from './pages/update/Update';

// hooks
import usePosts from './hooks/usePosts';

function App() {
  // Получаем посты
  const [posts, setPosts] = usePosts(process.env.REACT_APP_GET_POSTS);
 
  return (
    <div className="App">
      <header className="header">
        <NewPostButton />
      </header>
      <AllPosts.Provider value={{posts, setPosts}}>
        <main className="main">
          {!posts ? 'Loading...' : ''}
          <Routes>
            {posts && <Route path="/" element={<List />}/>}
            <Route path='/main' element={<Navigate to='/' />}/>
            <Route path={'/posts/:id'} element={<Post />}/>
            <Route path='/posts/new' element={<Create />} />
            <Route path='/posts/change/:id' element={<Update />} />
          </Routes>
        </main>
      </AllPosts.Provider>
    </div>
  );
}

export default App;
