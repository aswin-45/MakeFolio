// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import Template from './components/templete';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/redux/userReducer';
// import { MainNav } from './components/NavBar';
import About from './components/about';
import ProfilePage from './components/profile';
import Yours from './components/yours';
import { Wishlist } from './components/wishlist';
import Page from './components/get';
import { Feedback } from '@material-ui/icons';

const store = configureStore({
  reducer:{
    user:userReducer
  }
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        {/* <MainNav/> */}
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          {/* <Route path="login" element={<LoginPage/>}></Route> */}
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/home" element={<Template/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/yours' element={<Yours/>}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
          <Route path='/get' element={<Page/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
        </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;