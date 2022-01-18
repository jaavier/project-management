import { useState } from 'react';
import { Link } from "react-router-dom";

const SubMenu = ({ items }) => {
    if (!items) return null;

    return <div className="absolute bg-white border w-32">
        {
            items.map(({ to, text }, index) => {
                return <div className="p-3 text-center" key={index}>
                    <Link to={to}>
                        <span className="text-sm font-light">{text}</span>
                    </Link>
                </div>

            })
        }
    </div>

}

export default function Navbar(props) {
    const [menu, setMenu] = useState('');
    const menuLinks = [{
        to: '/',
        text: 'Home'
    }, {
        handleClick: () => setMenu('projects'),
        text: 'Projects'
    }, {
        handleClick: () => setMenu('Settings'),
        text: 'Settings'
    }]
    const subMenuProjects = [{
        to: '/projects',
        text: 'All Projects'
    }, {
        to: '/projects/create',
        text: 'Create Project'
    }];
    const subMenuSettings = [{
        to: '/profile',
        text: 'Profile'
    }, {
        to: '/alerts',
        text: 'Alerts'
    },]
    return (
        <div className="w-full border border-gray-900 relative p-4 my-5 rounded">
            <div className="flex items-center">
                <div className="">
                    <span className="text-base">Project Managment</span>
                </div>
                <div className="flex absolute right-5">
                    <div className="ml-2 px-4">
                        <Link to="/">
                            <span className="text-sm">Home</span>
                        </Link>
                    </div>
                    <div className="ml-2 px-4">
                        <button onClick={() => setMenu(menu === 'projects' ? '' : 'projects')}>
                            <span className="text-sm">Projects</span>
                        </button>
                        {
                            menu === 'projects' ? <SubMenu items={subMenuProjects} /> : null}
                    </div>
                    <div className="ml-2 px-4">
                        <button onClick={() => setMenu(menu === 'settings' ? '' : 'settings')}>
                            <Link to="/">
                                <span className="text-sm">Settings</span>
                            </Link>
                        </button>
                        {
                            menu === 'settings' ? <SubMenu items={subMenuSettings} /> : null
                        }

                    </div>
                </div>

            </div>
        </div >
    );
}