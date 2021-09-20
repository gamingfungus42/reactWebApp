import React from "react";
import { useForm } from "react-hook-form";
import "./contactstyle.css"

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("form"));
    return (
        <div id="formbg" className="h-full bg-red-500">
            <div>
                <h1 className="text-center mt-20 text-blue-400	">Contact</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-36">
                <input defaultValue="Full Name" {...register("form", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input defaultValue="Country" {...register("isRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input defaultValue="Subject" {...register("Required", { required: true })} className="h-20 resize-y	box-border" />
                {errors.Required && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Contact