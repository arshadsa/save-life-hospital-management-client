import React from "react";

const DoctorListItem = ({ doctor }) => {
  return (
    <li class="border-gray-400 flex flex-row mb-8">
      <a href={`/websitedoctors/${doctor._id}`}>
        <div class="shadow-lg border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center p-4">
          
          {/* profile image */}
          <div class="flex flex-col justify-center items-center mr-4">
            {/* <a href={`/doctor/${doctor._id}`} class="block relative" className="w-[15vw]"> */}
            <a class="block relative" className="">
              <img
                alt="profil"
                src={doctor.image}
                class="mx-auto rounded-3 object-contain"
              />
            </a>
          </div>

          {/* Name and Speciality */}
          <div class="flex-1 pl-1 md:mr-16">
            <p class="text-gray-600 dark:text-gray-200">{doctor.category}</p>
            <p class="font-bold dark:text-white text-xl">{doctor.name}</p>

            <br />

            <p class="text-slate-600 dark:text-gray-200">{doctor.education}</p>
          </div>

          {/* Second Column for working hours */}
          <div class="text-gray-600 dark:text-gray-200">
            <p>Working in</p>
            <h1 className="font-bold">{doctor.hospital}</h1>
            <br />
            <p>Total Experience</p>
            <h1>9+ Years</h1>
          </div>

          <div className="ml-14">
            <div>
              <span className="text-4xl font-bold text-blue-600">৳ 150</span>
              <span className="ml-3">(inc. VAT)</span>
            </div>
            <p>Per consultation</p>
          </div>

          {/* Button */}
          <button class="w-24 text-right flex justify-end">
            <svg
              width="12"
              fill="currentColor"
              height="12"
              class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </a>
    </li>
  );
};

export default DoctorListItem;
