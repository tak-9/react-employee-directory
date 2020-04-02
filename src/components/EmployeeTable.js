import React from "react";
import TableRow from "./TableRow"

function EmployeeTable(props){
    return (
        <table className="table table-striped">
            <thead>
                <tr><th>Image</th><th>Name</th><th>Phone</th><th>Email</th><th>DOB</th></tr>
            </thead>
            <tbody>
                {props.employees.map((employee, index) => 
                    <TableRow key={index} employee={employee}/>
                    )}
            </tbody>
        </table>
    )
}

export default EmployeeTable;