(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{17:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(11),o=a.n(r),l=a(12),c=a(13),i=a(15),m=a(16),u=a(14),p=a.n(u);var h=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark text-white"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Employee Directory"),n.a.createElement("p",{className:"lead"},"Click on carrots to filter by heading or use the search box to narrow your results.")))};var y=function(e){var t=new Date(e.employee.dob.date),a=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear();return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:e.employee.picture.thumbnail,alt:"employee"})," "),n.a.createElement("td",null,e.employee.name.first," ",e.employee.name.last),n.a.createElement("td",null,e.employee.phone),n.a.createElement("td",null,e.employee.email),n.a.createElement("td",null,a))};var d=function(e){return n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Image"),n.a.createElement("th",null,"Name\u2002",n.a.createElement("span",{onClick:e.sortName,style:{cursor:"pointer"}},n.a.createElement("i",{className:"fa fa fa-sort"}))),n.a.createElement("th",null,"Phone\u2002",n.a.createElement("span",{onClick:e.sortPhone,style:{cursor:"pointer"}},n.a.createElement("i",{className:"fa fa fa-sort"}))),n.a.createElement("th",null,"Email\u2002",n.a.createElement("span",{onClick:e.sortEmail,style:{cursor:"pointer"}},n.a.createElement("i",{className:"fa fa fa-sort"}))),n.a.createElement("th",null,"DOB\u2002",n.a.createElement("span",{onClick:e.sortDOB,style:{cursor:"pointer"}},n.a.createElement("i",{className:"fa fa fa-sort"}))))),n.a.createElement("tbody",null,e.employees.map((function(e,t){return n.a.createElement(y,{key:t,employee:e})}))))};var f=function(e){return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("input",{onChange:e.handleInputChange,value:e.searchKeyword,name:"searchKeyword",type:"text",placeholder:"Enter Name to Search"})))},E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],employeesForDisplay:[],searchKeyword:"",sortNameAsc:!1,sortEmailAsc:!1,sortDOBAsc:!1,sortPhoneAsc:!1},e.getEmployees=function(){p.a.get("https://randomuser.me/api/?results=20").then((function(t){e.setState({employees:t.data.results}),e.setState({employeesForDisplay:t.data.results})})).catch((function(t){console.log("Error in getting employee data",t),e.setState({employees:[]}),e.setState({employeesForDisplay:[]})}))},e.handleInputChange=function(t){var a=t.target.value;console.log("handleInputChange value",a),e.setState({searchKeyword:a},(function(){return e.filterEmployee()}))},e.sortName=function(t){e.state.sortNameAsc?e.sortNameDecend():e.sortNameAscend()},e.sortDOB=function(t){e.state.sortDOBAsc?e.sortDOBDecend():e.sortDOBAscend()},e.sortEmail=function(t){e.state.sortEmailAsc?e.sortEmailDecend():e.sortEmailAscend()},e.sortPhone=function(t){e.state.sortPhoneAsc?e.sortPhoneDecend():e.sortPhoneAscend()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"filterEmployee",value:function(){var e=this,t=this.state.employees.filter((function(t){return(t.name.first+" "+t.name.last).includes(e.state.searchKeyword)}));this.setState({employeesForDisplay:t})}},{key:"sortNameAscend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.name.first.toUpperCase(),s=t.name.first.toUpperCase();return a<s?-1:a>s?1:0}));this.setState({sortNameAsc:!0}),this.setState({sortDOB:!0}),this.setState({employeesForDisplay:e})}},{key:"sortNameDecend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.name.first.toUpperCase(),s=t.name.first.toUpperCase();return a<s?1:a>s?-1:0}));this.setState({sortNameAsc:!1}),this.setState({employeesForDisplay:e})}},{key:"sortDOBAscend",value:function(){var e=this.state.employees.sort((function(e,t){var a=new Date(e.dob.date),s=new Date(t.dob.date);return a<s?-1:a>s?1:0}));this.setState({sortDOBAsc:!0}),this.setState({employeesForDisplay:e})}},{key:"sortDOBDecend",value:function(){var e=this.state.employees.sort((function(e,t){var a=new Date(e.dob.date),s=new Date(t.dob.date);return a<s?1:a>s?-1:0}));this.setState({sortDOBAsc:!1}),this.setState({employeesForDisplay:e})}},{key:"sortEmailAscend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.email.toUpperCase(),s=t.email.toUpperCase();return a<s?-1:a>s?1:0}));this.setState({sortEmailAsc:!0}),this.setState({employeesForDisplay:e})}},{key:"sortEmailDecend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.email.toUpperCase(),s=t.email.toUpperCase();return a<s?1:a>s?-1:0}));this.setState({sortEmailAsc:!1}),this.setState({employeesForDisplay:e})}},{key:"sortPhoneAscend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.phone,s=t.phone;return a<s?-1:a>s?1:0}));this.setState({sortPhoneAsc:!0}),this.setState({employeesForDisplay:e})}},{key:"sortPhoneDecend",value:function(){var e=this.state.employees.sort((function(e,t){var a=e.phone,s=t.phone;return a<s?1:a>s?-1:0}));this.setState({sortPhoneAsc:!1}),this.setState({employeesForDisplay:e})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,null),n.a.createElement(f,{searchKeyword:this.state.searchKeyword,handleInputChange:this.handleInputChange}),n.a.createElement(d,{employees:this.state.employeesForDisplay,sortName:this.sortName,sortPhone:this.sortPhone,sortEmail:this.sortEmail,sortDOB:this.sortDOB}))}}]),a}(s.Component);o.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8ed7a287.chunk.js.map