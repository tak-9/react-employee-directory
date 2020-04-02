import React from "react";

function TableRow(props){
    var d = new Date(props.employee.dob.date);
    var formatted_date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()
    // console.log(formatted_date)

    return (
        <tr>
            <td><img src={props.employee.picture.thumbnail} alt="employee" /> </td> 
            <td>{props.employee.name.first} {props.employee.name.last}</td>
            <td>{props.employee.phone}</td>
            <td>{props.employee.email}</td>
            <td>{formatted_date}</td>            
        </tr>
    )
}

export default TableRow;