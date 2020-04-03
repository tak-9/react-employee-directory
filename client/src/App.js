import React, {Component} from "react";
import axios from "axios";
import Nabbar from "./components/Nabbar";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm";
import {sortNameAscend, sortNameDecend, sortDOBAscend, 
        sortDOBDecend, sortEmailAscend, sortEmailDecend, 
        sortPhoneAscend, sortPhoneDecend} from "./sortEmployeesUtil";

class App extends Component {
    state = {
        isLoading: true,
        isAPIError: false,
        employees: [], // Do not modify 'employees' after employees are assinged by API call as it is for keeping original data. 
        employeesForDisplay: [], // employeesForDisplay is displayed in <EmployeeTable />.  
        searchKeyword: "",
        sortNameAsc: true,
        sortEmailAsc: true,
        sortDOBAsc: true,
        sortPhoneAsc: true
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        const url = "https://randomuser.me/api/?results=20";
        axios.get(url)
        .then((res) => {
            this.setState({
                employees: res.data.results, 
                employeesForDisplay: res.data.results,
                isLoading: false
            });
        })
        .catch((err)=>{
            console.log("Error in getting employee data", err);
            this.setState({
                employees: [],
                employeesForDisplay: [],
                isAPIError: true,
                isLoading: false
            });
        });
    }

    handleInputChange = event => {
        const value = event.target.value;
        console.log("handleInputChange value",value);
        this.setState({searchKeyword: value}, () => this.filterEmployee())
    }

    // This filters employees using searchKeyword. Then, assign it to employeesForDisplay state.
    filterEmployee() {
        let filteredEmployees = this.state.employees.filter((employee) => {
            let fullName = employee.name.first + " " + employee.name.last;
            return (fullName.includes(this.state.searchKeyword));
        });
        this.setState({employeesForDisplay: filteredEmployees});
    }

    sortName = event => {
        if (this.state.sortNameAsc) {
            this.setState({
                employeesForDisplay: sortNameAscend(this.state.employees),
                sortNameAsc: false});
        } else {
            this.setState({
                employeesForDisplay: sortNameDecend(this.state.employees),
                sortNameAsc: true});
        }
    }

    sortDOB = event => {
        if (this.state.sortDOBAsc) {
            this.setState({
                employeesForDisplay: sortDOBAscend(this.state.employees),
                sortDOBAsc: false});
        } else {
            this.setState({
                employeesForDisplay: sortDOBDecend(this.state.employees),
                sortDOBAsc: true});
        }
    }

    sortEmail = event => {
        if (this.state.sortEmailAsc) {
            this.setState({
                employeesForDisplay: sortEmailAscend(this.state.employees),
                sortEmailAsc: false});
        } else {
            this.setState({
                employeesForDisplay: sortEmailDecend(this.state.employees),
                sortEmailAsc: true});
        }
    }

    sortPhone = event => {
        if (this.state.sortPhoneAsc) {
            this.setState({
                employeesForDisplay: sortPhoneAscend(this.state.employees),
                sortPhoneAsc: false});
        } else {
            this.setState({
                employeesForDisplay: sortPhoneDecend(this.state.employees),
                sortPhoneAsc: true});
        }
    }

    render() {
        return (
            <div>
                <Nabbar />
                <SearchForm 
                    searchKeyword={this.state.searchKeyword}
                    handleInputChange={this.handleInputChange}
                />
                { this.state.isLoading ? <h4>Loading...</h4>:
                <EmployeeTable 
                    employees={this.state.employeesForDisplay}
                    sortName={this.sortName}
                    sortPhone={this.sortPhone}
                    sortEmail={this.sortEmail}
                    sortDOB={this.sortDOB}
                /> }
                { this.state.isAPIError? <h4>Error in getting employee data.</h4>: '' }
            </div>
        )
    }
}

export default App;