
import { useContext, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link} from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Navber = () => {
    const [dark, setDark] = useState(false);
    const {user, userLogout} = useContext(AuthContext);

      // toggle
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }


    return (
  
      <div className='bg-primary'>
         <div className="navbar w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allService'>All Service</Link></li>
                      {
                        user && <>
                            <li>
                            <a>DashBoard</a>
                            <ul className="p-2">
                                <li><Link to='/addServiec'>Add Service</Link></li>
                                <li><Link to='/manageService'>Manage Service</Link></li>
                                <li><Link to='/bookedServices'>Booked Services</Link></li>
                                <li><Link to='/serviceToDo'>Service To-Do</Link></li>
                            </ul>
                        </li>
                        </>
                      }

                    </ul>
                </div>
                <a className="text-lg md:text-2xl text-white font-bold italic flex gap-4"><img src="https://i.ibb.co/7tkTYc4/image-Photoroom-7.png" className='w-10 hidden md:block bg-white rounded-full  h-10' alt="" /> SmartRepair</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white text-base z-10 font-semibold px-1 gap-4">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allService'>All Service</Link></li>
                    {
                      user && <>
                      <li>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2 w-48 bg-[#fc7d4f] rounded-md space-y-2">
                                <li><Link to='/addServiec'>Add Service</Link></li>
                                <li><Link to='/manageService'>Manage Service</Link></li>
                                <li><Link to='/bookedServices'>Booked Services</Link></li>
                                <li><Link to='/serviceToDo'>Service To-Do</Link></li>
                            </ul>
                        </details>
                    </li>
                      </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center space-x-2'>
                    {
                        user && user?.email  ? 
                         <>
                        <div className="tooltip tooltip-bottom z-10" data-tip={user?.displayName}>
                          <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 md:w-10 rounded-full">
                              <img
                                alt="Profile Picture"
                                src={user?.photoURL}
                              />
                            </div>
                          </div>
                        </div>
                        <button onClick={userLogout} className="px-1 py-1 md:px-3 md:py-2 font-semibold text-base md:text-lg rounded-md border-2  text-white hover:bg-white hover:text-black bg-transparent">Logout</button>
      
                      </> : <>
                        <Link to="/Login" className="px-1 py-1 md:px-3 md:py-2 font-semibold text-base md:text-lg rounded-md border-2  text-white hover:bg-white hover:text-black bg-transparent">
                    Login
                    </Link>
                    <Link to="/register" className="px-1 py-1 md:px-3 md:py-2 font-semibold text-base md:text-lg rounded-md border-2 hover:text-white bg-white text-black hover:bg-transparent">
                        Register
                    </Link>
                        </>
                    }
                

                {/* toggle theme */}
            <button onClick={() => darkModeHandler()}>
              {

                dark && <IoSunny className="dark:text-white text-xl" />
              }
              {
                !dark && <IoMoon className="dark:text-white text-xl" />
              }
            </button>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Navber;
