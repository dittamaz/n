import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoPage } from './pages/NoPage';
import { BasicLayout } from './layout/BasicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<Home/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
