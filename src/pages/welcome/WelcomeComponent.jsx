import { GiAlienSkull } from "react-icons/gi";

const WelcomeComponent = () => {
    return (
        <div className="flex flex-col h-3/4 w-3/4 gap-15 justify-center items-center">
            <h1 style={{ fontFamily: 'sardar' }} className="font-bold text-9xl">خوش آمدید...</h1>
            <div className="flex flex-row justify-center items-center gap-4">
                <span className="text-4xl py-2 px-2 rounded-lg bg-gray-300 flex justify-center items-center text-green-800">
                    <GiAlienSkull />
                </span>
                <h1 className="font-bold text-2xl">به اولین پروژه ی ری اکتی ما خوش آمدید.</h1>
            </div>
        </div>
    );
};

export default WelcomeComponent;