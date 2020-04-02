import React, {Component} from "react";
import axios from "axios";
import Nabbar from "./components/Nabbar"
import EmployeeTable from "./components/EmployeeTable"
import SearchForm from "./components/SearchForm"

class App extends Component {
    state = {
        employees: [], // Do not modify 'employees' after employees are assinged by API call as it is for keeping original data. 
        employeesForDisplay: [], // employeesForDisplay is displayed in <EmployeeTable />.  
        searchKeyword: "",
        sortNameAsc: false,
        sortEmailAsc: false,
        sortDOBAsc: false,
        sortPhoneAsc: false
    }

    componentDidMount() { 
        this.getEmployees();
    }

    getEmployees = () => {
        const url = "https://randomuser.me/api/?results=20";
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
        let filteredEmployees = this.state.employees.filter((employee) => {
            let fullName = employee.name.first + " " + employee.name.last;
            return (fullName.includes(this.state.searchKeyword));
        });
        this.setState({employeesForDisplay: filteredEmployees});
    }

    sortName = event => {
        //console.log("sort");
        if (this.state.sortNameAsc) {
            this.sortNameDecend();
        } else {
            this.sortNameAscend();
        }
    }

    sortNameAscend() {
        //console.log("sortNameAscend()"); 
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let nameA = a.name.first.toUpperCase();
            let nameB = b.name.first.toUpperCase();
            if (nameA < nameB){
                return -1;
            } 
            if (nameA > nameB){
                return 1;
            }
            return 0;
        })
        this.setState({sortNameAsc: true});
        this.setState({sortDOB: true});
        this.setState({employeesForDisplay: sortedEmployees}) 
    }

    sortNameDecend() {
        //console.log("sortNameDecend()"); 
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let nameA = a.name.first.toUpperCase();
            let nameB = b.name.first.toUpperCase();
            if (nameA < nameB){
                return 1;
            } 
            if (nameA > nameB){
                return -1;
            }
            return 0;
        })
        this.setState({sortNameAsc: false});
        this.setState({employeesForDisplay: sortedEmployees}) 
    }

    sortDOB = event => {
        if (this.state.sortDOBAsc) {
            this.sortDOBDecend();
        } else {
            this.sortDOBAscend();
        }
    }

    sortDOBAscend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = new Date(a.dob.date);
            let empB = new Date(b.dob.date);
            if (empA < empB){
                return -1;
            } 
            if (empA > empB){
                return 1;
            }
            return 0;
        })
        this.setState({sortDOBAsc: true});
        this.setState({employeesForDisplay: sortedEmployees})
    }

    sortDOBDecend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = new Date(a.dob.date);
            let empB = new Date(b.dob.date);
            if (empA < empB){
                return 1;
            } 
            if (empA > empB){
                return -1;
            }
            return 0;
        })
        this.setState({sortDOBAsc: false});
        this.setState({employeesForDisplay: sortedEmployees})
    }

    sortEmail = event => {
        //console.log("sortEmail", this.state.employees)
        if (this.state.sortEmailAsc) {
            this.sortEmailDecend();
        } else {
            this.sortEmailAscend();
        }
    }

    sortEmailAscend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = a.email.toUpperCase();
            let empB = b.email.toUpperCase();
            if (empA < empB){
                return -1;
            } 
            if (empA > empB){
                return 1;
            }
            return 0;
        })
        this.setState({sortEmailAsc: true});
        this.setState({employeesForDisplay: sortedEmployees})
    }

    sortEmailDecend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = a.email.toUpperCase();
            let empB = b.email.toUpperCase();
            if (empA < empB){
                return 1;
            } 
            if (empA > empB){
                return -1;
            }
            return 0;
        })
        this.setState({sortEmailAsc: false});
        this.setState({employeesForDisplay: sortedEmployees})
    }

    sortPhone = event => {
        //console.log("sortPhone", this.state.employees)
        if (this.state.sortPhoneAsc) {
            this.sortPhoneDecend();
        } else {
            this.sortPhoneAscend();
        }
    }

    sortPhoneAscend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = a.phone;
            let empB = b.phone;
            if (empA < empB){
                return -1;
            } 
            if (empA > empB){
                return 1;
            }
            return 0;
        })
        this.setState({sortPhoneAsc: true});
        this.setState({employeesForDisplay: sortedEmployees})
    }

    sortPhoneDecend() {
        let sortedEmployees = this.state.employees.sort(function(a,b){
            let empA = a.phone;
            let empB = b.phone;
            if (empA < empB){
                return 1;
            } 
            if (empA > empB){
                return -1;
            }
            return 0;
        })
        this.setState({sortPhoneAsc: false});
        this.setState({employeesForDisplay: sortedEmployees})
    }


    render() {
        //console.log("render()");
        return (
            <div>
                <Nabbar />
                <SearchForm 
                    searchKeyword={this.state.searchKeyword}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable 
                    employees={this.state.employeesForDisplay}
                    sortName={this.sortName}
                    sortPhone={this.sortPhone}
                    sortEmail={this.sortEmail}
                    sortDOB={this.sortDOB}
                />
            </div>
        )
    }
}

export default App;