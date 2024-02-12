import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import Input from './Input';
import Button from './Button';

function Signup() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

   const signup = async() => {
    try {
        if(email === '' || password === ''){
            alert('please enter your Email or Password');

        }
        else if(!validateEmail(email)){
            alert('Please Enter a valid Email');
         }
        else{
        const user = await createUserWithEmailAndPassword(auth,email, password);
        alert('signup successfull');
        setEmail('');
        setPassword('');
        navigate('/login');
        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Email is already in use. Please use a different email.');
            setEmail('');
            setPassword('');
          } 
          else {
            alert('Signup unsuccessful');
            setEmail('');
            setPassword('');
          }
    }
   }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <Input type="email"
                        name='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className=' bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className=' bg-gray-300 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-800 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <Button
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'
                        onClick={signup}
                    >
                        Signup
                    </Button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup