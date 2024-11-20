import { useState } from 'react'
import './EmployeeCard.css'
import Button from '../Button/Button';
import star from "../../assets/star.svg"
import calcYrsWorked from '../data/yrCalculator';
// import EmployeeList from '../EmployeeList/EmployeeList';

    const EmployeeCard = ({name, dept, start, location, email, status, role}) => { 
        const [currentlocation , setLocation] = useState(location);
        const [promotedRole, setPromotedRole] = useState (role);
        const [isEditing, setIsEditing] = useState(false);
         
        // PROMOTE AND DEMOTE TOGGLE BUTTON
        const clickHandler = () => {
        //console.log('I was clicked');
            setPromotedRole(promotedRole === 'Team Lead' ? role : 'Team Lead')
        }; 

        const toggleEdit = () => setIsEditing ( (prev) => !prev );
        const handleChange = (event) => setLocation(event.target.value);

        // DEPARTMENT COLOUR CHANGE
        const colorCard = {
            border: `4px solid ${dept === 'Sales and Marketing' ? 'blue' : 
                                 dept === 'Product Development' ? 'red':
                                 dept === 'Customer Support' ? 'violet' : 'pink'}`,
            borderRadius: '10px'}  

        // HOW LONG THE EMPLOYEE HAS WORKED HERE
        const yearsWorked = calcYrsWorked(start);
        console.log(yearsWorked)

        function getreviewMessage(yearsWorked) {
            if (yearsWorked >=5 || yearsWorked >=10 || yearsWorked >=15) {
                return 'Recog meeting';
        } else if (yearsWorked < 0.6) {
            return 'Probation check in';
        } else {
            return ''; 
            }
        }
        const reviewMessage = getreviewMessage(yearsWorked);

        
        return (       
            <div className='cardTemplate' style={colorCard}>  
            
                <div>
                    {/* {role === 'Team Lead' ? star : ''}</div> */}
                    {promotedRole === 'Team Lead' ? <img src={star} className="logo" alt="star"/> : ''}
                </div>

                <p>Name: {name}</p>
                <p>Department: {dept}</p>
                <p>Role: {role}</p>
                <p>Start: {start}</p>
                
                {isEditing 
                    ? (<input type="text" value={currentlocation} onChange={handleChange} />) 
                    : (<p>location: {currentlocation}</p>)
                }
                
                <p>email:{email}</p>
                <p>status:{status}</p> 
                
                <div>
                    {`${yearsWorked} years today. ${reviewMessage}`}
                </div> 

                <div>
                    {/* {role === initialRole ? 
                        (<Button onClick={clickHandler} text={"Promote to Team Lead"} roleColor={}/>) : 
                        (<Button onClick={clickHandler} text={"Remove as Team Lead"}/>)
                    } */}

                    <Button 
                        onClick={clickHandler} 
                        text={promotedRole === role ? "Promote to Team Lead" : "Remove as Team Lead"} 
                        roleColor={promotedRole === role ? 'primary' : 'secondary'}/>

                    <div className='this works dont delete'>
                   {/*  <Button 
                        onClick={() => {toggleEdit(); console.log("showing you");}} 
                        text={isEditing ? 'Save' : 'Edit'} 
                    /> */}

                    
                    <Button 
                        onClick={() => {toggleEdit(); console.log("showing me");}} 
                        text={isEditing ? 'Save' : 'Edit'} 
                    />

                     {/* <Button onClick = {clickHandler} text={editing ? "Save": "Edit"}/>  */}
                    </div> 
       
          
                </div>

            </div>
        );
}

export default EmployeeCard;