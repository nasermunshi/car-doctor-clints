import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
 const {singIn} = useContext(AuthContext);                 
  
 const handleLogin = event =>{
   event.preventDefault();  
   const form = event.target;
const email = form.email.value;
const password = form.password.value;
console.log( email, password); 
singIn(email, password) 
.then(result =>{
  const user = result.user;
  console.log(user);                  
})
.catch(error=> console.log(error))           
 }

 return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
    <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <h1 className="text-5xl font-bold">Login now</h1>
     <form onSubmit={handleLogin}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>            
     </form>
      </form>
      <p className='text-center my-4'>New to Cars Doctor <Link className='text-orange-700 font-bold' to="/singup">Sins Up</Link></p>
    </div>
  </div>
</div>
  );
};

export default Login;