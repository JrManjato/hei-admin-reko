import React from 'react'
import LoginForm from '../components/LoginForm';

const LoginPage:React.FC = () => {
    return (<>
            <div className='flex bg-gradient-to-b from-vshad2 to-vshade1 justify-center items-center min-h-screen min-w-full background-image'>
                <LoginForm/>
            </div>
        </>
    );
}

export default LoginPage;