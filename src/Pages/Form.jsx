import { useState } from "react";
import './styles.css'

const Form = () => {

    return (
        <div className="form-container">
            <form action="#">

                <div className="form-input">
                    <label htmlFor="ID">ID: </label>
                    <input type="text" /> 
                </div>

                <div className="form-input">
                    <label htmlFor="Name">Name: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Department">Department: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Role">Role: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Start">Start: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Location">Location: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Email">Email: </label>
                    <input type="text" />
                </div>

                <div className="form-input">
                    <label htmlFor="Status">Status: </label>
                    <input type="text" />
                </div>

                <div className="form-input"></div>
                {/* <input type="submit" value="Submit"/> */}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;