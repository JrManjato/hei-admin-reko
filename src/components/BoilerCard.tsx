import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoilerCard : React.FC <{text:string,redirect:string,title:string}> = (props) => {
    const {text,redirect,title} = props;
    const navigate = useNavigate();
    return(<>
        <div className="card bg-violet-200 max-w-md w-full space-y-8 rounded-lg" >
            <div className="mt-6 text-center text-2xl font-bold text-stone">
                <h1 className="font-bold text-black drop-shadow-xl uppercase text-2xl" >{title}</h1>
            </div>
            <div className='flex justify-center'>
                <button 
                    className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-purple-500'
                    onClick={() => navigate(redirect)}>{text}</button>
            </div>
        </div>
    </>);
}

export default BoilerCard;