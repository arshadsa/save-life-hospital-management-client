import React from "react";

const DoctorListItem = ({img, doctor}) => {
  return (
    <li class="border-gray-400 flex flex-row mb-2">
      <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src={img}
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
        </div>
        <div class="flex-1 pl-1 md:mr-16">
          <div class="font-medium dark:text-white">Jean Marc</div>
          <div class="text-gray-600 dark:text-gray-200 text-sm">Developer</div>
        </div>
        <div class="text-gray-600 dark:text-gray-200 text-xs">6:00 AM</div>
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
    </li>
  );
};

export default DoctorListItem;
