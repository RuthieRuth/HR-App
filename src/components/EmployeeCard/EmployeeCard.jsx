import { useState } from 'react'
import './EmployeeCard.css'
// import star from './assets/star.svg'
// import EmployeeList from '../EmployeeList/EmployeeList';

    const EmployeeCard = (props) => { 
            // console.log(props)
            const initialRole = props.role;
            const [role, setRole] = useState (initialRole);
            const star = "./assets/star.svg'";
        
             const clickHandler = () => {
             //console.log('I was clicked');
                setRole(role === 'Team Lead' ? initialRole : 'Team Lead')
            }; 

    return (       
        <div className='cardTemplate'>  
            <div>
                {/* {role === 'Team Lead' ? star : ''}</div> */}
                {role === 'Team Lead' ? <img src={star} className="logo" alt="star"/> : ''}
            </div>

            <p>Name: {props.name}</p>
            <p>Department: {props.dept}</p>
            <p>Role: {role}</p>
            <p>Start: {props.start}</p>
            <p>location:{props.location}</p>
            <p>email:{props.email}</p>
            <p>status:{props.status}</p> 
            <div>
                {role === initialRole ? 
                    (<button onClick={clickHandler}>Promote to Team Lead</button>) : 
                    (<button onClick={clickHandler}>Remove as Team Lead</button>)
                }
             </div>
        </div>
    );

   
}

export default EmployeeCard;