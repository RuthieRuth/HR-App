import './App.css';
import { useState } from "react";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";


function App() {
  const [loginButton,loggedIn]= useState(false)
  const handlelogIn = () => {loggedIn(!loginButton);};

  return (
    <>
      <main>
        {loginButton 
        ? (
            <div>
              <h3>list</h3>
              <EmployeeList props={loginButton}/>
              <button onClick={handlelogIn}>Log out</button></div>) 
        : (
            <div>
              <h3 className='loginpg'>LOG IN TO VIEW EMPLOYEE LIST</h3>
              <button onClick={handlelogIn} >Log in</button></div>)
        }
      </main>
    </>
  );
}

export default App;



