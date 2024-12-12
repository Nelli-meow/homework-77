import { Route, Routes } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage.tsx';


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/book-messages" element={<MainPage/>} />
        <Route path="*" element={<p>Page is not  found</p>} />
      </Routes>
    </>
  )
};

export default App
