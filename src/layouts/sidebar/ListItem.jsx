const ListItem = ({ icon, title }) => {
    return (
        <li className="list-none">
            <button className="py-1 px-2 w-full flex gap-3 items-center text-gray-700 dark:text-gray-100 text-lg hover:bg-gray-200 cursor-pointer">
                <span>{icon}</span>
                <p className="font-bold">{title}</p>
            </button>
        </li>
    );
};

export default ListItem;