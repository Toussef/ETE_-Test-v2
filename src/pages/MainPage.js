import React,{useState}from 'react';
import Popup from "reactjs-popup";
import './table.css';
let apiURL = "http://localhost:3000/employees";


const MainPage =()=>{
    const [employees,setEmployees] = useState([]);
    const [empty,setEmpty] = useState(true);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [Age,setAge] = useState("");


    //add api
    const addEmp = () =>{

        fetch(apiURL,{
                method: 'POST',
                body: JSON.stringify({firstName, lastName, Age}),
                headers:{
                    "Content-type": "application/json"
                }
            },


        ).then((res)=> res.json().then(window.location.reload));}


    //update API
    const updateAPI =(firstNamez) =>{

        fetch(apiURL+"/"+firstNamez,{
            method: 'PUT',
            body: JSON.stringify({firstName, lastName, Age}),
            headers:{
                "Content-type": "application/json"
            }
        },


        ).then((res)=> res.json().then(window.location.reload));}
    //Delete API
    const deleteAPI =(firstName) =>{
        fetch(apiURL+"/"+firstName,{
            method:'DELETE'
        },).then((res)=> res.json().then(window.location.reload));
    }



    if(empty){
        fetch(apiURL, {
                method: 'GET',
            },
        ).then((res) => res.json()).then((json)=> setEmployees(json));
        if(employees!=[]){
            setEmpty(false);
        };
    }else{
        console.log(employees);
        return(
            <div>
                <Popup  trigger =  {<button>Add Employee</button>} modal >
                    <p>Add new employee</p>
                    <form>
                        <label>
                            First Name:
                            <input type = "text" name="firstName"  onChange ={e => {setFirstName(e.target.value)}}/>
                        </label>
                        <label>
                            Last Name:
                            <input type="text" name = "lastName" onChange ={e => {setLastName(e.target.value)}} />
                        </label>
                        <label>
                            Age:
                            <input type = "text" name ="Age" onChange={e => {setAge(e.target.value)}}/>
                        </label>
                        <button onClick={() => {addEmp()}}>Submit</button>
                    </form>
                </Popup>
                <table className='table'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Manipulate Data</th>

                    </tr>
                    {employees.map((val,key) =>{
                        return(
                            <tr key={key}>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.Age}</td>
                                <Popup  trigger =  {<button>Update Employee Information</button>} modal >
                                    <p>Enter updated employee info</p>
                                   <form>
                                       <label>
                                           First Name:
                                           <input type = "text" name="firstName"  onChange ={e => {setFirstName(e.target.value)}}/>
                                       </label>
                                       <label>
                                           Last Name:
                                           <input type="text" name = "lastName" onChange ={e => {setLastName(e.target.value)}} />
                                       </label>
                                       <label>
                                           Age:
                                           <input type = "text" name ="Age" onChange={e => {setAge(e.target.value)}}/>
                                       </label>
                                       <button onClick={() => {updateAPI(val.firstName)}}>Submit</button>
                                   </form>
                                </Popup>
                                <br/>
                                <button ><img src = "../images/458594.png" onClick = {() => {deleteAPI(val.firstName)}}/></button>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }

}
export default MainPage;