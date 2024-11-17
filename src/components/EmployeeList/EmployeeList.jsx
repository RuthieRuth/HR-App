import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import employeeData from '../data/employeeData.js'
import './EmployeeList.css';


 const EmployeeList = () => {

    console.log (employeeData);

   return (

      <div className='list'>
        {employeeData.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            dept={employee.dept}
            role={employee.role}
            start={employee.start}
            location={employee.location}
            email={employee.email}
            status={employee.status} />
            ))}
       </div>   
  );
};

export default EmployeeList;
 

