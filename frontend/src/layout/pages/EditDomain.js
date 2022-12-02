import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditDomain() {

    let navigate = useNavigate()

    const {id} = useParams()

    const [domain,setDomain] = useState({
        program:"",
        batch:"",
        capacity:"",
        qualification:""
    })

    const{program,batch,capacity,qualification} = domain

    const onInputChange=(e)=>{
        setDomain({...domain,[e.target.name]:e.target.value});
    }
    
    useEffect(()=>{
        loadDomain()
    },[])

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:7070/api/domain/modify/${id}`,domain)
        navigate("/home");
    }

    const loadDomain = async () =>{
        //const result= await axios.get(`http://localhost:7070/api/domain/get/${id}`)
        //setDomain(domain.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Domain</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Program
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter Program'
                            name="program"
                            value={program}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Batch
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter the Batch'
                            name="batch"
                            value={batch}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Capacity
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter the capacity'
                            name="capacity"
                            value={capacity}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Qualification
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter the qualification required'
                            name="qualification"
                            value={qualification}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link  className='btn btn-outline-danger mx-2' to='/home'>Cancel</Link>
                </form>
            </div>
        </div>

    </div>
  )
};
