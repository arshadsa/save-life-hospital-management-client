import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddAmbulance.css';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';
import { usePostJobMutation } from '../../features/job/jobApi';

const AddAmbulance = () => {
    const { register, handleSubmit, reset } = useForm();
    const [  postJob, {isLoading, isError} ] = usePostJobMutation();

    const onSubmit = (data) => {
        console.log(data);
        postJob(data);   
    }
    return (
        <div>
            <NavigationBar isHome={true}></NavigationBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='text-center text-4xl  mb-4  text-primary'>  <Typewriter
                options={{
                    strings: [' Please add an ambulance  : '],
                    autoStart: true,
                    loop: true,
                }}
            /></h1>
            <div className='ml-96'>

                <div className="lg:max-w-lg bg-base-100  shadow-xl">
                  
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("name",)} placeholder="Ambulance Name" />
                            <input {...register("description",)} placeholder="Ambulance Description Description" />
                            <input {...register("image",)} placeholder=" Ambulance Image" />
                            <input type="number" {...register("price",)} placeholder="Ambulance Price" />

                            <button className="btn btn-primary w-full">Add Ambulance</button>


                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddAmbulance;