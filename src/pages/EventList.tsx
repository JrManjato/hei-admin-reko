import React, { useEffect } from 'react'
import axios from 'axios';
import { dataProvider } from '../providers/data-provider';
import EventTable from '../components/EventTable';

const EventList: React.FC = () => {
  useEffect(() => {
    const fetch = async () => {
      const value = await dataProvider.makeRequest(axios.get, 'http://jsonplaceholder.typicode.com/users/1');
      console.log(value, 'HOAAA')
    }
    fetch();
  }, []);

  return (
    <>
      <div className='background-image flex bg-gradient-to-b from-vshad2 to-vshade1 justify-around items-center min-h-screen min-w-full' >
          <EventTable/>
      </div>
    </>
  );
}

export default EventList;