import React from "react";
import TableRow from "./TableRow"

function EmployeeTable(props){
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name&ensp;
                        <span onClick={props.sortName} style={{cursor: "pointer"}}><i className="fa fa fa-sort"></i></span>
                    </th>
                    <th>Phone&ensp;
                        <span onClick={props.sortPhone} style={{cursor: "pointer"}}><i className="fa fa fa-sort"></i></span>
                    </th>
                    <th>Email&ensp;
                        <span onClick={props.sortEmail} style={{cursor: "pointer"}}><i className="fa fa fa-sort"></i></span>
                    </th>
                    <th>DOB&ensp;
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