var sortNameAscend = function(employees) {
    //console.log("sortNameAscend()"); 
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortNameDecend = function(employees) {
    //console.log("sortNameDecend()"); 
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortDOBAscend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortDOBDecend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortEmailAscend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortEmailDecend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}


var sortPhoneAscend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}

var sortPhoneDecend = function(employees) {
    let sortedEmployees = employees.sort(function(a,b){
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
    return sortedEmployees;
}


module.exports = {
    sortNameAscend: sortNameAscend,
    sortNameDecend: sortNameDecend,
    sortDOBAscend: sortDOBAscend,
    sortDOBDecend: sortDOBDecend,
    sortEmailAscend: sortEmailAscend,
    sortEmailDecend: sortEmailDecend,
    sortPhoneAscend: sortPhoneAscend,
    sortPhoneDecend: sortPhoneDecend
}
