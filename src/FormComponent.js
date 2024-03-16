import React from 'react';
import { useForm } from 'react-hook-form';

function FormComponent({ setFormData }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-field">
        <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} id="firstName" required />
      </div>
      <div className="form-field">
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} id="lastName" required />
      </div>
      <div className="form-field">
        <label htmlFor="position">Position</label>
        <input {...register("position")} id="position" required />
      </div>
      <div className="form-field">
        <label htmlFor="jobStartDate">Job Start Date</label>
        <input type="date" {...register("jobStartDate")} id="jobStartDate" required />
      </div>
      <button type="submit" className="submit-btn">Generate Offer Letter</button>
    </form>
  );
}

export default FormComponent;
