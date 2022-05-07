import { useState, useEffect } from "react";

const ShowEmployeeDetails = () => {
    const [employee, setEmployee] = useState([]);
    
    useEffect(() => {
        getData();
        console.log("employee",employee)
        return function cleanup() {}
    },[])

    async function getData() {
        const data = await fetch("http://localhost:8080/employee").then((d) =>
            d.json()
        );
        setEmployee(data);
        
    }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {employee.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
              <td>{elem.address}</td>
              <td>{elem.department}</td>
              <td>{elem.salary}</td>
              <td>{elem.maritalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEmployeeDetails;
