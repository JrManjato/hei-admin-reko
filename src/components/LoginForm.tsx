import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [card,setCard] = useState<string>("card bg-violet-200 max-w-md w-full space-y-8 rounded-lg");

    return (<>
        <div className="login-card" >
            <div className='mt-6 text-center text-2xl font-bold text-stone' >
                <h1 className='icon-container' ><i className="bi bi-shield-lock"></i></h1>
            </div>
            <div className='mt-8 space-y-6 ' >
                <form className='rounded-md shadow-sm -space-y-px' >
                    <div className='mb-5 space-y-2 text-center flex justify-center' >
                        <input
                            className='lg:w-80 w-60 px-3 py-2 border-transparent rounded-md shadow-md text-sm text-center sm:text-sm focus:outline-none'
                            type={"text"}
                            placeholder="Identifiant"
                            id="username"
                            name='username'
                            value={username}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            required/>
                    </div>
                    <div className='mb-5 space-y-2 flex justify-center'>
                        <input
                            className='text-center lg:w-80 w-60 px-3 py-2 border-transparent rounded-md shadow-md text-sm sm:text-sm focus:outline-none'
                            type={"password"}
                            placeholder="Mot de passe"
                            id="password"
                            name='password'
                            value={password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            required/>
                    </div>
                </form>
            </div>
            <div className='flex justify-center'>
                <button className='text-center lg:w-80 py-3 mb-5 mt-8 px-4 text-sm font-medium rounded-md text-white shadow-lg  bg-blue-500'
                onClick={() => {
                    navigate("/landing")
                }}
                >CONNEXION</button>
            </div>
        </div>
    </>);
}

export default LoginForm;