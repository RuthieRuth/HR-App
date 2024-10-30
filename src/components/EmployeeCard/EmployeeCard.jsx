import { useState } from 'react'

const EmployeeCard = (props) => { 
    console.log(props)

    const [role, setRole] = useState (props.initialRole);

    const clickHandler = () => {
        // console.log('I was clicked');
        if (role === "Team Lead"){
            setRole(props.initialRole);
        }
        else{setRole('Team Lead') ;
        }  
    }

    return (
        <div> 
            <h3>Employee Details</h3>
            <p>Name: {props.name}</p>
            <p>Role: {role}</p>
            <p>Department: {props.dept}</p>
            <p>Level: {props.level}</p>
            <p>Salary:{props.salary}</p>
            <button onClick={clickHandler}>Promote</button>
        </div>
    );
}

export default EmployeeCard;