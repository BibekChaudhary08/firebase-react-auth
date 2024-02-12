import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import Input from './Input';
import Button from './Button';

function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

   const login = async () => {
    if(email === '' || password === ''){
        alert('Please enter Email or Password');
    }
    if(!validateEmail){
        alert('Please Enter a Validate Email');
    }
       try {
           const user = await signInWithEmailAndPassword(auth,email,password);
           const users = localStorage.setItem('user', JSON.stringify(user));  // this convert the user id into string
           alert('Login Successfull');
           setEmail('');
           setPassword('');
           navigate('/');
       } catch (error) {
           alert('Login Unsuccessfull');
           setEmail('');
           setPassword('');
       }
   }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <Input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Enter Your Email'
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Enter Your Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <Button
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'
                        onClick={login}
                        >
                        Login
                    </Button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login