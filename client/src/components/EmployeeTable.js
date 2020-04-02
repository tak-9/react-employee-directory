import React from "react";
import TableRow from "./TableRow"

function EmployeeTable(props){
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name 
                        <span onClick={props.sortName} style={{cursor: "pointer"}}><i className="fa fa fa-sort"></i></span>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB
                    <span onClick={props.sortDOB} style={{cursor: "pointer"}}><i className="fa fa fa-sort"></i></span>
                    </th>
                </tr>
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