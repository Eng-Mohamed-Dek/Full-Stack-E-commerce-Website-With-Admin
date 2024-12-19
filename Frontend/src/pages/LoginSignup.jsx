import { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
   const [state, setState] = useState('Login')

   const navigate = useNavigate()

   const baseURL = "http://localhost:4000/api/user/"

   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      const inputData = data;
      try {
         if (state === "Sign up") {

            const response = await fetch(`${baseURL}/signup`, {
               method: "POST",
               body: JSON.stringify(inputData),
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
            })

            const data = await response.json()


            if(response.ok) {
               localStorage.setItem("accessToken", data.token)
               window.location.reload()
               navigate('/login')
            } else {
               toast.error(data.message);
            }
         } else {
            const response = await fetch(`${baseURL}/login`, {
               method: "POST",
               body: JSON.stringify(inputData),
               headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
            })

            const data = await response.json()

            if(response.ok) {
               localStorage.setItem('auth-token', data.token)
               window.location.reload()
               navigate('/')
            } else {
               toast.error(data.message);
            }
         }
      } catch (error) {
         console.log(error)
         toast.error(error.message);
      }
   }

   return (
      <div className='loginsignup'>
         <ToastContainer />
         <div className="loginsignup-container">
            <h1>{state}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="loginsignup-fields">
                  {state == "Sign up" &&
                     (
                        <>
                           <input type="text" placeholder='Enter Your Name'
                              {...register("name")}
                           />
                        </>
                     )
                  }
                  <input type="text" placeholder='Enter Your Email'
                     {...register("email")}
                  />
                  <input type="password" placeholder='Enter Your Password'
                     {...register("password")}
                  />
               </div>
               <button>{state}</button>
               {state === "Sign up" ? (
                  <p className="loginsignup-login">
                     Already have an account? <span onClick={() => setState('Login')}>Login</span>
                  </p>
               ) : (
                  <p className="loginsignup-login">
                     Create an Account? <span onClick={() => setState('Sign up')}>Sigup</span>
                  </p>
               )}

               <div className="loginsignup-agree">
                  <input type="checkbox" name="checkbox" />
                  <p>By continuing, Your agree Our Privary and Policy</p>
               </div>
            </form>
         </div>
      </div>
   )
}

export default LoginSignup