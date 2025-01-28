import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
//import employeeData from '../data/employeeData.js'
import {useState, useEffect} from "react"
import axios from 'axios';
import './EmployeeList.css';




 const EmployeeList = () => {

    const [posts, setPosts] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = import.meta.env.VITE_API_URL;
    console.log("API URL:", API_URL);


    // using useEffect with fetch
   /*  useEffect (() => {
      fetch("http://localhost:3002/persons")
      .then ((response) => response.json())
      .then ((data) => {
        setPosts(data);
        setIsLoading(false);
      });
    }, []) */

    // USING AXIOS WITH useEffect
    useEffect(() => {
      //axios.get("http://localhost:3002/persons") formally this that was used during the making of this app
      axios.get(`${API_URL}/persons`)
        .then((response) => {
          setPosts(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    // console.log (posts);

     axios.patch(`${API_URL}/persons`, { department: '', location: '' })
        .then((response) => {
          console.log("Data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
 
   return (

      <div className='list'>
        {isLoading ? ( <p>Loading..</p> ) :
        (posts.map((employee) => (<EmployeeCard key={employee.id} {...employee}/>
        )))}
       </div>   
  );
};

export default EmployeeList;
 

