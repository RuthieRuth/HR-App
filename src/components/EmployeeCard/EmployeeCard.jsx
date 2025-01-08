import { useState , useEffect} from 'react'
import './EmployeeCard.css'
import Button from '../Button/Button';
import star from "../../assets/star.svg"
import calcYrsWorked from '../data/yrCalculator';
import { useNavigate } from 'react-router-dom';


// import EmployeeList from '../EmployeeList/EmployeeList';

    const EmployeeCard = ({name, dept, start, location, email, status, role, id}) => { 

        const [isEditing, setIsEditing] = useState(false);

        const [currentlocation , setLocation] = useState(location);
        const [currentdepartment , newDepartment] = useState(dept);

        const [promotedRole, setPromotedRole] = useState (role);
        const navigate = useNavigate();

       
    


         
        // HANDLE PROMOTE/DEMOTE TOGGLE BUTTON
        const clickHandler = () => {
        //console.log('I was clicked');
            setPromotedRole(promotedRole === 'Team Lead' ? role : 'Team Lead')
        }; 

        //TOGGLE EDIT MODE
        const toggleEdit = () => setIsEditing ( (prev) => !prev );
       

        const handleChange = (event) => { 
            const {name, value} = event.target;
            if (name === 'dept') {
                newDepartment(value);
            } else if(name === 'location'){
                setLocation(value);
            }
        };

        // DEPARTMENT COLOUR CHANGE
        const colorCard = {
            border: `4px solid ${currentdepartment === 'Sales and Marketing' ? 'blue' : 
                currentdepartment === 'Product Development' ? 'red':
                currentdepartment === 'Customer Support' ? 'violet' : 'pink'}`,
            borderRadius: '10px'}  

        // HOW LONG THE EMPLOYEE HAS WORKED HERE
        const yearsWorked = calcYrsWorked(start);
        console.log(yearsWorked)

        function getreviewMessage(yearsWorked) {
            if (yearsWorked >=5 || yearsWorked >=10 || yearsWorked >=15) {
                return 'Schedule Recog meeting';
        } else if (yearsWorked < 0.6) {
            return 'Probation check-in';
        } else {
            return ''; 
            }
        }
        const reviewMessage = getreviewMessage(yearsWorked);

        // GET IMAGES OF EMPLOYEES
        useEffect(() => {
            async function fetchEmployee() {
                try {
                    let imageResponse = await fetch( 'http://localhost:3002/persons');
                    let imageData= await imageResponse.json();
    
                    for (let employee of imageData){
                        let imageResponse = await fetch (`https://robohash.org/${employee.id}.png?set=set4`);
                        console.log(imageResponse);
    
                        if(!imageResponse.ok){throw new Error('no image');  
                        }}
                    } 
                catch (error) {
                        console.log(error)
                    }
                }
                fetchEmployee();
            }, []);

            
            
        

        return (       
            <div className='cardTemplate' style={colorCard}>  

            <div className='cardHeader'>
            
                <div className='banner'>
                    {promotedRole === 'Team Lead' ? <img src={star} className="logo" alt="star"/> : ''}
                </div>

                <div className='empImg'>
                <img src={`https://robohash.org/${id}.png?set=set5`} alt="employeeImage" />
                </div>

            </div>

                <p><strong>{name}</strong></p>

                {isEditing 
                    ? (<input type="text" name="dept" value={currentdepartment} onChange={handleChange} placeholder='Department'/>) 
                    : (<p>{currentdepartment}</p>)
                }
                
                <p>{role}</p>
                
                {isEditing 
                    ? (<input type="text" name="location" value={currentlocation} onChange={handleChange} placeholder='Location' />) 
                    : (<p>{currentlocation}</p>)
                }
                
                <p>{email}</p>
                
                <div>
                    <em>{`${yearsWorked}yrs today. ${reviewMessage}`}</em>
                </div> 

                <div className='buttons'>
                    <Button 
                        onClick={clickHandler} 
                        text={promotedRole === role ? "Team Lead Promotion" : "Remove as Team Lead"} 
                        roleColor={promotedRole === role ? 'primary' : 'secondary'}/>

                     <Button 
                        onClick={() => {toggleEdit(); console.log("showing me");}} 
                        text={isEditing ? 'Save' : 'Edit'} />
 
                 

                     {/* <Button onClick = {clickHandler} text={editing ? "Save": "Edit"}/>  */}

                     <Button text="See more" onClick={()=> navigate(`/list/${id}`)}/>
                     
                </div> 
            </div>
        );
}

export default EmployeeCard;