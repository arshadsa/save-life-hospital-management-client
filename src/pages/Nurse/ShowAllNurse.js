import React from 'react';
import NurseListItem from '../../components/Nurse/NurseListItem';
import useNurse from '../../hooks/useNurse';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const ShowAllNurse = () => {
  const [nurse, setNurse] = useNurse();
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[200px]">
        <div class="container flex flex-col mx-auto w-full items-center justify-center">
          <ul class="flex flex-col">
            {nurse.map((nurse) => (
              <NurseListItem
                nurse={nurse}
              ></NurseListItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowAllNurse;