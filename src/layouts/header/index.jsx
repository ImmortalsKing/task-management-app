import dayjs from "dayjs";
import jalaliday from 'jalaliday';

const Header = () => {
    dayjs.extend(jalaliday);
    const todayDate = dayjs().calendar('jalali').format('YYYY/MM/DD');
    return (
        <div className="h-1/10 w-full flex flex-row border-b-2 border-gray-900/20 items-center justify-between px-3">
            <h2 className='font-bold text-lg'>اپلیکیشن مدیریت تسک ها</h2>
            <h2 className='font-bold text-md'>امروز {todayDate}</h2>
        </div>
    );
};

export default Header;