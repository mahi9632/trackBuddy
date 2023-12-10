import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addExercise, getUsers } from './services/api';


const  CreateExercises = ()=>{
    console.log(getUsers(),"logginexercises");
     const [usersData,setUserData] = useState()
     const [description, setDescription] = useState('')
     const [duration, setDuration] = useState(0)
     const [date, setDate] = useState(new Date())

    useEffect(()=>{
        getUsers()
        .then(data=>setUserData(data))
        .catch(err=>console.log(err))
    },[])

    const handleDescription = (data) => {
        setDescription(data)
    }

    return (
       <div className='container' style={{ width: '40%' }}>
        <h3>Create Exercises</h3>
        <br/>
        <form styles={{flex:1}}>
            <div className='form-group'>
                <div>
                <label>Username</label><br/>
                {console.log(usersData,"usersData")}
                <select>
                    <option>select User</option>
                    {usersData && usersData.map(ele=><option>{ele.username}</option>)

                    }
                </select>
                </div>
                <br/>
                <div>
                    <label>Description</label>
                    <input type="input"
                     className='form-control'
                     value={description}
                     onChange={(e)=>handleDescription(e.target.value)}
                     style={{width:'300px'}}
                     />
                     
                </div>
                <br/>
                <div>
                    <label>Duration</label>
                    <input type='text'
                        required
                        className='form-control'
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />                </div>
                <br/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
       </div>
    )
}


export default CreateExercises