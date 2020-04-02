import React, {Component} from "react";
import axios from "axios";
import Nabbar from "./components/Nabbar"
import EmployeeTable from "./components/EmployeeTable"
import SearchForm from "./components/SearchForm"

class App extends Component {
    state = {
        employees: [], // Do not modify 'employees' after employees are assinged by API call as it is for keeping original data. 
        employeesForDisplay: [], // employeesForDisplay is displayed in <EmployeeTable />.  
        searchKeyword: ""
    }

    componentDidMount() { 
        this.getEmployees();
    }

    getEmployees = () => {
        const url = "https://randomuser.me/api/?results=6";
        axios.get(url)
        .then((res) => {
            this.setState( {employees: res.data.results} );
            this.setState( {employeesForDisplay: res.data.results} );
        })
        .catch((err)=>{
            console.log("Error in getting employee data", err);
            this.setState( {employees: []} );
            this.setState({employeesForDisplay: []})
        });
    }

    handleInputChange = event => {
        const value = event.target.value;
        console.log("handleInputChange value",value);
        this.setState({searchKeyword: value}, () => this.filterEmployee())
    }

    // This filters employees using searchKeyword. Then, assign it to employeesForDisplay state.
    filterEmployee() {
        var filteredEmployees = this.state.employees.filter((employee) => {
            var fullName = employee.name.first + " " + employee.name.last;
            return (fullName.includes(this.state.searchKeyword));
        });
        this.setState({employeesForDisplay: filteredEmployees});
    }

    render() {
        console.log("render()");
        return (
            <div>
                <Nabbar />
                <SearchForm 
                    searchKeyword={this.state.searchKeyword}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable employees={this.state.employeesForDisplay}/>
            </div>
        )
    }
}

export default App;