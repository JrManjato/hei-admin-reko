import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventTable: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (<>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Responsable
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Type
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Lieu
                        </th>
                        <th scope="col" className="py-3 px-6">
                            DEBUT
                        </th>
                        <th scope="col" className="py-3 px-6">
                            FIN
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Ny Hasinavalona
                        </th>
                        <td className='py-4 px-6'>
                            <a
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-blue-500'
                            >Cours
                            </a>
                        </td>
                        <td className='py-4 px-6'>
                            <a
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-amber-500'
                            >HEI Antananarivo
                            </a>
                            {/* <button
                                onClick={() => navigate("/presence")}
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-red-500'
                            >Start</button> */}
                        </td>
                        <td className='py-4 px-6'>
                            <a
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-green-500'
                            >8H00
                            </a>
                            {/* <button
                                onClick={() => navigate("/presence")}
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-red-500'
                            >Start</button> */}
                        </td>
                        <td className='py-4 px-6'>
                            <a
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-red-500'
                            >10H00
                            </a>
                        </td>
                        <td className='lg:w-80 mt-3' style={{display:"flex"}}>
                            <button
                                onClick={() => navigate("/presence")}
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-gray-500 mr-6'
                            >Faire présence</button>
                            <button
                                onClick={() => navigate("/events")}
                                className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-gray-500'
                            >Modifier</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </>);
}


export default EventTable;