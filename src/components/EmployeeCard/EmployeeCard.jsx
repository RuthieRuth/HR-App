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
       
        // const [images, setImages]=useState([]);
         
        // PROMOTE AND DEMOTE TOGGLE BUTTON
        const clickHandler = () => {
        //console.log('I was clicked');
            setPromotedRole(promotedRole === 'Team Lead' ? role : 'Team Lead')
        }; 

        const toggleEdit = () => setIsEditing ( (prev) => !prev );
        // const handleChange = (event) => setLocation(event.target.value);

        const handleChange = (event) => { 
            const {name, value} = event.target;
            if (name === 'dept') {
                newDepartment(value);
            } else if(name === 'location'){
                setLocation(value);
            }
        }

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
                    let imageResponse = await fetch('../db.json/persons');
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
            
                <div>
                    {promotedRole === 'Team Lead' ? <img src={star} className="logo" alt="star"/> : ''}
                </div>

                <div className='empImg'>Employee Image 
                    
                </div>

                <p>Name: {name}</p>

                {isEditing 
                    ? (<input type="text" name="dept" value={currentdepartment} onChange={handleChange} />) 
                    : (<p>Department: {currentdepartment}</p>)
                }
                
                <p>Role: {role}</p>
                <p>Start: {start}</p>
                
                {isEditing 
                    ? (<input type="text" name="location"value={currentlocation} onChange={handleChange} />) 
                    : (<p>location: {currentlocation}</p>)
                }
                
                <p>email:{email}</p>
                <p>status:{status}</p> 
                
                <div>
                    {`${yearsWorked} years today. ${reviewMessage}`}
                </div> 

                <div>
                    <Button 
                        onClick={clickHandler} 
                        text={promotedRole === role ? "Promote to Team Lead" : "Remove as Team Lead"} 
                        roleColor={promotedRole === role ? 'primary' : 'secondary'}/>

                    <Button 
                        onClick={() => {toggleEdit(); console.log("showing me");}} 
                        text={isEditing ? 'Save' : 'Edit'} />

                     {/* <Button onClick = {clickHandler} text={editing ? "Save": "Edit"}/>  */}

                     <Button text="see more" onClick={()=> navigate(`/list/${id}`)}/>
                     
                </div> 
            </div>
        );
}

export default EmployeeCard;