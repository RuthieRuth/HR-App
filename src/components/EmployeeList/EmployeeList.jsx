import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
//import employeeData from '../data/employeeData.js'
import {useState, useEffect} from "react"
import axios from 'axios';
import './EmployeeList.css';




 const EmployeeList = () => {

    const [posts, setPosts] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);


    // using useEffect with fetch
   /*  useEffect (() => {
      fetch("http://localhost:3002/persons")
      .then ((response) => response.json())
      .then ((data) => {
        setPosts(data);
        setIsLoading(false);
      });
    }, []) */

    // use axios with useEffect
    useEffect(() => {
      axios.get("http://localhost:3002/persons")
        .then((response) => {
          setPosts(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);


    // console.log (posts);

   return (

      <div className='list'>
        {isLoading ? ( <p>Loading..</p> ) :
        (posts.map((employee) => (
          <EmployeeCard
            key={employee.id} {...employee}
            />
        )))}
       </div>   
  );
};

export default EmployeeList;
 

