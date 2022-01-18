import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className="w-full border border-gray-900 relative p-4 my-5 rounded">
            <div className="flex items-center">
                <div className="">
                    <span className="text-base">Project Managment</span>
                </div>
                <div className="flex absolute right-5">
                    <div className="ml-2 border-r-2 px-4">
                        <Link to="/">
                            <span className="text-sm">Home</span>
                        </Link>
                    </div>
                    <div className="ml-2 border-r-2 px-4">
                        <Link to="/projects">
                            <span className="text-sm">Projects</span>
                        </Link>
                    </div>
                    <div className="ml-2 border-r-2 px-4">
                        <Link to="/settings">
                            <span className="text-sm">Settings</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}