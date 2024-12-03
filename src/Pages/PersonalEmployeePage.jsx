import employeeData from '../components/data/employeeData'
import { useParams,useNavigate } from "react-router-dom";
import Button from '../components/Button/Button';

const PersonalEmployeePage = () => {
    const {id} = useParams();
    // useState and useEffect with axios to get data again, then search with find the correct one
    // OR get the object based on id

    
    // console.log('employee id:', id);

    //for the button
    const navigate = useNavigate(); 

    const employee = employeeData.find ((employee) => employee.id === parseInt(id));

    return(
        <div> 
            <h3> Full Employee data</h3> 
            <p>{employee.name}</p>
            <p>Email: {employee.email} </p>
            <p>Status:{employee.status} </p>

            <Button text='Back to list' onClick={() => navigate(-1)} />
        </div>
    )
};

export default PersonalEmployeePage;