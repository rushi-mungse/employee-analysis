import { Link } from "react-router-dom";
import { RiUserVoiceFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <nav className="border-b border-gray-400 py-4 sm:px-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center justify-center">
          <span className={`text-3xl mr-2 text-orange-600 `}>
            <RiUserVoiceFill />
          </span>
          <span
            className={`text-3xl font-bold text-orange-600 branding tracking-wide `}
          >
            EmployeeAnalysis
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
