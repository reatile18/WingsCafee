 
import { Sidebar, Menu, MenuItem  } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarSlicePath, toggleSidebar } from '../provider/slice/Sidebar.slice';
import { MdOutlineSpaceDashboard } from "react-icons/md"; 
import { FiHome, FiUser } from "react-icons/fi";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { FiBox } from "react-icons/fi";
import { Link } from 'react-router-dom';

const MainLayout = ({ children }:{children:React.ReactNode}) => {
    const selector = useSelector(SidebarSlicePath) 
    const dispatch = useDispatch()

  return (
    <>
      <div className="flex items-start lg:gap-x-2">
        <Sidebar collapsed={selector.collapsed} breakPoint="lg" toggled={selector.toggle} >
          <Menu className='bg-white'>
            <MenuItem className="lg:hidden" onClick={() => dispatch(toggleSidebar())} > {selector.toggle ? <IoIosArrowDropright className="text-2xl" />:<IoIosArrowDropleft className="text-2xl" />} </MenuItem>
            <MenuItem component={<Link to="/landing" />} icon={<FiHome  className="text-2xl" />} > Home </MenuItem>
            <MenuItem component={<Link to="/" />} icon={<MdOutlineSpaceDashboard  className="text-2xl" />} > Dashboard </MenuItem>
            <MenuItem component={<Link to="/user" />} icon={<FiUser className="text-2xl" />} > Users </MenuItem>
            <MenuItem component={<Link to="/orders" />} icon={<FiBox className="text-2xl" />}> Orders </MenuItem>
          </Menu>
        </Sidebar>
          <div className="w-full">
              {children}
          </div>
      </div>
    </>
  )
}

export default MainLayout