import { useState } from "react"

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        
    })

    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(employee)
        fetch("http://localhost:8080/employee", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(employee),
        });
    }
    
  function handleChange(e) {
        const { id, value } = e.target
        console.log(e);
        console.log(e.target.id, e.target.value);
        setEmployee({ ...employee, [id]: value })
    }
    
    return (
      <>
        <form onSubmit={handleSubmit} className="addemployee">
          <table>
            <tbody>
              <tr>
                <th>Name : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="text  "
                    id="name"
                    className=""
                    placeholder="enter name"
                  />
                </td>
              </tr>
              <tr>
                <th>Age : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="number"
                    id="age"
                    className=""
                    placeholder="enter age"
                  />
                </td>
              </tr>
              <tr>
                <th>Select Department : </th>
                <td>
                  <select
                    onChange={handleChange}
                    value={""}
                    id="department"
                    className=""
                  >
                    <option value="Select Department">Select Department</option>
                    <option value="Electronics And Communication">Electronics And Communication</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="CS">CS</option>
                    <option value="Electrical">Electrical</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th> Address : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="address"
                    className=""
                    placeholder="enter address"
                  />
                </td>
              </tr>
              <tr>
                <th> Salary : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="number"
                    id="salary"
                    className=""
                    placeholder="enter salary"
                  />
                </td>
              </tr>
              
            </tbody>
          </table>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </>
    );
    
}

export default AddEmployee