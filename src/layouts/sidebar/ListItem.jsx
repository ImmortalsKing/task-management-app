import { NavLink } from "react-router";

const ListItem = ({ to, icon, title }) => {
    return (
        <li className="list-none">
            <NavLink to={to} className={({isActive}) => `py-0.5 px-2 w-full flex gap-3 items-center text-gray-700 dark:text-gray-100 dark:hover:text-gray-700 text-lg hover:bg-gray-200 rounded-xl cursor-pointer ${isActive ? 'text-gray-800 dark:text-gray-800 border border-gray-700/60 bg-gray-200' : ''}`}>
                <span>{icon}</span>
                <p className="font-bold">{title}</p>
            </NavLink>
        </li>
    );
};

export default ListItem;