import { useState } from "react";
import axios from "axios";
import './formStyles.css'

// FORM COMPONENT
//possible to also store each input as a variable with useState
const Form = () => {
    const [newDetails, setNewDetails] = useState(
                                                { id: "",
                                                    name: "",
                                                    department: "",
                                                    role: "",
                                                    start: "",
                                                    location: "",
                                                    email: "",
                                                    status: ""});
    
    // HANDLE CHANGES IN FORM
    const handleChange = (event) =>  {
        const name = event.target.name;
        const value = event.target.value;
        setNewDetails(values => ({...values, [name]: value}))
    } 

    
// SUBMIT THE FORM 
    const submitBtn = (event) => {
        event.preventDefault();  // move into submitBtn '?
        
        //needs to be added to the list
        (axios.post("http://localhost:3002/persons", newDetails)
        .then((response) => {
            console.log("Data posted successfully:", response.data);

            })
          
        .catch((error) => {
             console.error("Error posting data:", error);
    }));

        
    }


    return (
        <div className="form-container">
            <form action="#" onSubmit={submitBtn}>

                <div className="form-input">
                    <label htmlFor="ID">ID: </label>
                    <input type="text" name="id" value={newDetails.id} onChange={handleChange} /> 
                </div>

                <div className="form-input">
                    <label htmlFor="Name">Name: </label>
                    <input type="text" name="name" value={newDetails.name} onChange={handleChange}  />
                </div>

                <div className="form-input">
                    <label htmlFor="Department">Department: </label>
                    <input type="text" name="department" value={newDetails.department} onChange={handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="Role">Role: </label>
                    <input type="text" name="role" value={newDetails.role} onChange={handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="Start">Start: </label>
                    <input type="text" name="start" value={newDetails.start} onChange={handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="Location">Location: </label>
                    <input type="text" name="location" value={newDetails.location} onChange={handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="Email">Email: </label>
                    <input type="text" name="email" value={newDetails.email} onChange={handleChange}  />
                </div>

                <div className="form-input">
                    <label htmlFor="Status">Status: </label>
                    <input type="text" name="status" value={newDetails.status} onChange={handleChange} />
                </div>

                <div className="form-input"></div>
                <button type='submit'> Submit </button>
                {/* <input type="submit" value="Submit"/>  OR THIS*/}
                
            </form>
        </div>
    )
}

export default Form;