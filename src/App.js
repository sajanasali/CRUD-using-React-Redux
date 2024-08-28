/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/updateUser';
import UserList from './Components/userList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route   path='/' element={<Home></Home>}></Route>
      <Route path='/user' element={<UserList></UserList>} ></Route>
      <Route path='/user/add' element={<AddUser></AddUser>} ></Route>
      <Route path='/user/edit/:id' element={<UpdateUser></UpdateUser>} ></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
