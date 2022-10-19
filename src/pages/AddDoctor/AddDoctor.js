import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const [doctorForm, SetDoctorForm] = useState({
    name: "",
    degrees: "",
    designation: "",
    department: "",
    hospital: "",
    fees: "",
    availability: "",
  });

  const inputClass =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparenta";

  const onSubmit = (data) => {
    // console.log({...doctorForm, edititem: true});
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/doctors`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...doctorForm, edititem: true }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // navigate(from);
      });
  };

  return (
    <div className="mt-[150px] container mx-auto">
      <div class="relative mx-auto w-[50vw]">
        <h1 className="text-4xl font-extrabold py-10">Register as a Doctor</h1>

        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.name}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, name: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Degrees
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.degrees}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, degrees: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Designation
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.designation}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, designation: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Department
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.department}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, department: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Hospital
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.hospital}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, hospital: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Availability
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.availability}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, availability: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="name-with-label" class="text-gray-700 me-4">
              Fees
            </label>
            <input
              type="text"
              className={`form-control ${inputClass}`}
              aria-describedby="basic-addon3"
              value={doctorForm.fees}
              onChange={(e) => {
                SetDoctorForm({ ...doctorForm, fees: e.target.value });
              }}
            />
          </div>

          <br />
          <div className="d-flex ms-auto">
            <button
              href="#!"
              className="btn btn-primary"
              type="submit"
              value="Add Product"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
