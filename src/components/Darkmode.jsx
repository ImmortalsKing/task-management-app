import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkmode } from "../hooks/useDarkmode";

const Darkmode = () => {
    const { setLight, setDark } = useDarkmode();
    return (
        <div className="cursor-pointer p-1 rounded-lg flex justify-center items-center transition-all transform dark:rotate-90">
            <FaMoon className="dark:hidden app-size_24" onClick={setDark} />
            <FaSun className="hidden dark:inline app-size_24" onClick={setLight} />
        </div>
    );
};

export default Darkmode;