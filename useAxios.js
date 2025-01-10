import { useState } from "react";
import axios from 'axios';

const API_BASE_URL = "http://localhost:3002/persons";


// Function to update a single employee by ID
export const useUpdateEmployee = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateEmployee = async (id, updatedFields) => {
    setIsUpdating(true);
    setError(null); // Clear any previous error
    try {

      const response = await axios.patch(`${API_BASE_URL}/${id}`, updatedFields);
      setIsUpdating(false);
      return response.data; // Return the updated data
      
    } catch (err) {
      setIsUpdating(false);
      setError(err);
      console.error("Error updating employee:", err);
      throw err; // Rethrow for further handling if needed
    }
  };

  return { updateEmployee, isUpdating, error };
};


