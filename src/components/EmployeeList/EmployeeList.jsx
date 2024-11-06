import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import employeeData from '../data/employeeData.js'
import './EmployeeList.css';
// import './EmployeeCard.css'

 const EmployeeList = () => {
    console.log (employeeData);
   return (
      <div>
          {/* <h2>Employee List</h2> */}
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
      </div>
  );
};

export default EmployeeList;
 

