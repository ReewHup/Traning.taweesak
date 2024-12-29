import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#3f42f0] p-4"> {}
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold">
        NVC Training Center
        </a>
        <ul className="flex space-x-4">
          <li>
            <NavLink className="text-white hover:text-[#D2B48C]" to="/">หน้าหลัก</NavLink>
          </li>
          <li>
          <NavLink className="text-white hover:text-[#D2B48C]" to="/course">หลักสูตรที่เปิดสอน</NavLink>
          </li>
          <li>
          <NavLink className="text-white hover:text-[#D2B48C]" to="/contract">ติดต่อ</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;