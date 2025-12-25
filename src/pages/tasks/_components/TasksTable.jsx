const TasksTable = ({tasks}) => {
    return (
        <div className="flex mt-6 justify-center items-center overflow-hidden w-28/35 mr-5 rounded-md shadow-md shadow-gray-600">
            <table className="table-auto w-full text-center">
                <thead className="bg-green-800 dark:bg-gray-600">
                    <tr>
                        <th className="py-2 px-4  text-white">عنوان</th>
                        <th className="py-2 px-4  text-white">توضیحات</th>
                        <th className="py-2 px-4  text-white">صاحب</th>
                        <th className="py-2 px-4  text-white">تاریخ ایجاد</th>
                        <th className="py-2 px-4  text-white">تاریخ پایان</th>
                        <th className="py-2 px-4  text-white">اولویت</th>
                        <th className="py-2 px-4  text-white">وضعیت</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr id={task.id}>
                            <td className="py-2 px-4">{task.title}</td>
                            <td className="py-2 px-4">{task.description}</td>
                            <td className="py-2 px-4">{task.owner_display}</td>
                            <td className="py-2 px-4">{task.created_at}</td>
                            <td className="py-2 px-4">{task.due_date}</td>
                            <td className="py-2 px-4">{task.priority}</td>
                            <td className="py-2 px-4">{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TasksTable;