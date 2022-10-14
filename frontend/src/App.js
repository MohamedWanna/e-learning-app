import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavBars/NavigationBar';
import Home from './Components/Home';
import SessionList from './Components/Sessions/SessionList';
import AddSession from './Components/Sessions/AddSession';
import MyAccount from './Components/authForms/MyAccount';
import SignIn from './Components/authForms/signIn';
import SignUp from './Components/authForms/signUp';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/actions/userActions';
import PrivateRoute from './Components/Private Route/PrivateRoute';
import DashboardStudent from './Components/Dashboards/DashboardStudent';
import DashboardAdmin from './Components/Dashboards/DashboardAdmin';
//import { getAllSessions } from './redux/actions/sessionActions';

function App() {
  const dispatch= useDispatch()
  useEffect(() =>{
    //dispatch(getAllSessions())
    dispatch(getUser())
  },[dispatch])

  return (
    <div className="App">

      <NavigationBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/HOME' element={<Home/>} />
        <Route exact path='/Sessions' element={<SessionList/>} />
        <Route exact path='/AddSession' element={
          <PrivateRoute>
            <AddSession/>
          </PrivateRoute>
        } /> 
        <Route exact path='/signUp' element={<SignUp/>} />
        <Route exact path='/signIn' element={<SignIn/>} />
        <Route exact path='/MY ACCOUNT' element={<MyAccount/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/Blog' element={<Blog/>}/>
        <Route exact path='/dashboardStudent' element={
          <PrivateRoute>
            <DashboardStudent/>
          </PrivateRoute>
          }/>
          <Route exact path='/dashboardAdmin' element={
          <PrivateRoute>
            <DashboardAdmin/>
          </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
