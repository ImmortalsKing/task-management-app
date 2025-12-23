import { FaComments, FaMinus, FaMoon, FaRegUserCircle, FaTags, FaTasks, FaUsers } from "react-icons/fa";
import { GiAlienSkull } from "react-icons/gi";
import Darkmode from "../../components/Darkmode";
import { GrProjects } from "react-icons/gr";
import ListItem from "./ListItem";
import { GoQuestion } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className="w-1/6 h-full rounded-2xl bg-gray-100 dark:bg-green-800/10 flex flex-col justify-between">
            <div className="flex flex-col gap-y-4">
                <div className="m-4 flex justify-between">
                    <div className="flex flex-row gap-1.5">
                        <span className="py-1 px-1.5 rounded-lg bg-gray-300 flex justify-center items-center text-green-800">
                            <GiAlienSkull />
                        </span>
                        <h1 className="font-bold text-xl">ایمورتالز ™</h1>
                    </div>
                    <Darkmode />
                </div>
                <div className="mt-3 flex flex-col gap-2 px-6">
                    <div className="my-1.5 flex flex-row justify-between text-md text-gray-700/70 dark:text-gray-200/80 cursor-pointer">
                        <h3>لیست APIها</h3>
                        <div className="flex justify-center items-center"><FaMinus /></div>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <ListItem icon={<FaTasks />} title={"تسک ها"} />
                        <ListItem icon={<FaUsers />} title={"کاربران"} />
                        <ListItem icon={<GrProjects />} title={"پروژه ها"} />
                        <ListItem icon={<FaComments />} title={"کامنت ها"} />
                        <ListItem icon={<FaTags />} title={"برچسب ها"} />
                    </ul>
                </div>
            </div>
            <div className="px-6 pb-10">
                <ListItem icon={<GoQuestion />} title={"پشتیبانی"} />
                <div className="flex flex-row gap-4 mt-6 mr-7">
                    <FaRegUserCircle className="text-3xl text-green-900 dark:text-green-100 rounded-full outline-2 outline-dotted p-1" />
                    <h2 className="font-bold text-xl text-green-900 dark:text-green-100">امیر سلیمانی</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;