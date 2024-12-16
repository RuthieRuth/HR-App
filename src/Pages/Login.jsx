import { useState } from "react";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import './login.css'

const Login = () => {
    const [loginButton,loggedIn]= useState(false)
    const handlelogIn = () => {loggedIn(!loginButton);};
    return (
        <>
        <main>
          {loginButton 
          ? (
              <div className="login-container">
                <h3>LIST OF EMPLOYEES (exchange progamme)</h3>
                <EmployeeList props={loginButton}/>
                <button onClick={handlelogIn}>Log out</button>
              </div>
            ) 
          : (
              <div>
                <h3 className='loginpg'>LOG IN TO VIEW EMPLOYEE LIST</h3>
                <button onClick={handlelogIn} >Log in</button>
              </div>
            )
          }
        </main>
        </>
    );
}

export default Login;