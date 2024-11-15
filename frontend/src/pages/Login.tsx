import { ErrorMessage, Field, Formik } from 'formik'
import { Button } from 'primereact/button' 
import  { useRef } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useLoginUserMutation } from '../provider/queries/Auth.query'
import { toast } from 'sonner'
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {

const [LoginUser,LoginUserResponse] = useLoginUserMutation();

const navigate = useNavigate()

  type User={
    token:string,
    email:string,
    password:string
  }

  //@ts-ignore
  const RecaptchaRef = useRef<any>();

  const initialValues: User={
    token: '',
    email: '',
    password:''
  }

  const validationSchema =yup.object({
    email: yup.string().email("email must be valid").required("email is required"),
    password: yup.string().min(5,"Password must be grather than 5 characters").required("password is required"),
  })

  const OnSubmitHandler = async (e: User, { resetForm }: any) => {
    try {
      const { data, error }: any = await LoginUser(e);
      if (error) {
        // Handle case where error exists but is undefined
        const errorMessage = typeof error === 'string' ? error : error?.message || 'An error occurred';
        toast.error(errorMessage);
        return;
      }
  
      if (data && data.token) {
        localStorage.setItem("token", data.token);
        resetForm();
        navigate("/landing");
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error: any) {
      toast.error(error.message || 'An unexpected error occurred.');
    } finally {
      RecaptchaRef.current.reset();
    }
  };
  
  return (

    <>

      <div className='min-h-screen flex items-center justify-center w-full bg-[#eee]'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>
          {({ values, setFieldValue, handleSubmit }) => (
            <>
              <form onSubmit={handleSubmit} className="w-[96%] md:w-[70%] lg:w-1/3 shadow-md rounded-md pt-10 pb-3 px-4 bg-white">
              <h1 className="text-3xl text-gray-800 font-extrabold mx-auto md:text-4xl flex justify-center py-4">
                Login Form
              </h1>
                <div className="mb-3 py-1">
                  <label htmlFor="email">Email</label>
                  <Field id='email' name='email' className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg' placeholder='Enter Email Address' />
                  <ErrorMessage component={'p'} className='text-red-500 text-sm ' name='email' />
                </div>
                <div className="mb-3 py-1">
                  <label htmlFor="password">Password</label>

                  <Field name='password' id='password' className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg' placeholder='*****' />
                  <ErrorMessage component={'p'} className='text-red-500 text-sm ' name='password' />

                </div>
                <div className="mb-3 py-1">
                  <ReCAPTCHA
                    ref={RecaptchaRef}
                    sitekey={import.meta.env.VITE_SITE_KEY}
                    onChange={(e) => { setFieldValue('token',e)}}
                  />
                </div>
                <div className="mb-3 py-1 flex items-center justify-center">
                  <Button type='submit' disabled={!values.token} loading={LoginUserResponse.isLoading} className='w-full flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex'>
                    Submit
                  </Button>
                </div>
                <div className="mb-3 py-1 flex items-center justify-start">
                  <p className="inline-flex items-center gap-x-1"> Don't Have An Account?<Link className='font-semibold' to={'/register'}>Register</Link></p>
                </div>
                <div className="mb-3 py-1 flex items-center justify-start">
                  <p className="inline-flex items-center gap-x-1">Forget<Link className='font-semibold' to={'#'}>Password ?</Link></p>
                </div>
              </form>
            </>
          )}
        </Formik>
      </div>
    
    </>

  )
}

export default Login