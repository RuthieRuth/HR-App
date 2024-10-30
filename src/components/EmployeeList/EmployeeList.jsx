import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'

const EmployeeList = () => {
   return (
      <div>
          <h2>-----</h2>
          <EmployeeCard name="Emelia" initialRole="Developer" dept="IT"/>
          <EmployeeCard name="Ruth" initialRole="Student" dept="REACT24S"/>
          <EmployeeCard name="Mark" initialRole="Teacher" dept="Business"/>
      </div>
  );
};

export default EmployeeList;
