import React,{useState}from 'react';
import InfoCard from "../components/infoCard";

let apiURL = "http://localhost:3000/employees";


class MainPage extends React.Component{


    constructor(props) {
        super(props);

        this.state={
            employees: []
        }


    }

    async componentDidMount() {
        fetch(apiURL,)
                .then(res=>res.json())
            .then(result => {
                this.setState({employees:result});
            }

        );
    }


    render(){
        return(
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                {this.state.employees.map(emp =>(
                    <tr key ={emp.firstName}>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.Age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );

    }


}
export default MainPage;