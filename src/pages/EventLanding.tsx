import React from 'react'
import { useNavigate } from 'react-router-dom';

const EventLanding: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='background-image flex bg-gradient-to-b from-vshad2 to-vshade1 justify-around items-center min-h-screen min-w-full' >
        <button
          className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-red-500'
          onClick={() => navigate('/')}
        >
          Se déconnecter
        </button>
        <button
          className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-green-500'
          onClick={() => navigate('/events')}
        >
          Ajouter un nouveau évènement
        </button>
        <button
          className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-orange-500'
          onClick={() => navigate('/list')}
        >
          Voir la liste des évènements
        </button>
      </div>
    </>
  );
}

export default EventLanding;
