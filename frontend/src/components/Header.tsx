 
import { useDispatch,  } from 'react-redux'
import { collapsedSidebar  ,toggleSidebar } from '../provider/slice/Sidebar.slice';
import { removeUser } from '../provider/slice/user.slice';
import { useNavigate } from 'react-router-dom';
import { TiThMenuOutline } from 'react-icons/ti';
import { RiLogoutCircleRLine } from 'react-icons/ri';
const Header = () => {

  const disptach = useDispatch(); 

  const sidebarHandler = () => disptach(collapsedSidebar())
  const sidebarHandlerToggle = () => disptach(toggleSidebar())
  const navigate = useNavigate()


  const logoutHandler = ()=>{
    try {
          localStorage.removeItem("token");
      disptach(removeUser())
      navigate("/login");
    } catch (error:any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <header className="py-4 shadow md px-10 bg-teal-500">
        <div className="nav flex items-center justify-between">
          <div className="btn"> 
            <button className='lg:hidden' onClick={sidebarHandlerToggle}><TiThMenuOutline className='text-2xl' /> </button>
            <button className='hidden lg:flex' onClick={sidebarHandler}><TiThMenuOutline className='text-2xl' /> </button></div>
            <h1 className='text-4xl font-semibold leading-tight text-transparent bg-clip-text text-gray-200'>Wings Cafe</h1>
            <div className="end">
            <button title='logout' className='hidden lg:flex' onClick={logoutHandler}><RiLogoutCircleRLine className='text-2xl' /> </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header