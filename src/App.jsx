import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NoPage } from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path='/' element={<Home/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
