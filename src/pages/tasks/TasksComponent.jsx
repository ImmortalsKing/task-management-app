import { SiGoogletasks } from "react-icons/si";
import TasksTable from "./_components/TasksTable";
import { useEffect, useReducer } from "react";
import { getTasks } from "../../services/getTasks";
import Loading from "../../components/Loading";

const initialState = {
    loading: false,
    tasks: null,
    error: null
};

const reducerFn = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: true };
        case "SET_DATA":
            return { ...state, loading: false, tasks: action.payload };
        case "SET_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const TasksComponent = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const showAllTasks = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const data = await getTasks();
            setTimeout(() => {
                dispatch({ type: "SET_DATA", payload: data })
            }, 1000);
        } catch {
            dispatch({ type: "SET_ERROR", payload: 'خطایی رخ داده است.' })
        };
    };

    useEffect(() => {
        showAllTasks();
    }, []);

    return (
        <>
            {state.loading && <Loading />}
            {state.tasks && <><div className="flex my-3 mx-9 gap-4 items-center">
                <div className="bg-radial from-green-800/80 dark:from-gray-600 from-70% to-gray-200 p-4 rounded-2xl shadow-2xs shadow-gray-600 text-white text-4xl">
                    <SiGoogletasks />
                </div>
                <h1 className="text-2xl font-bold">
                    لیست تسک ها
                </h1>
            </div>
                <TasksTable tasks={state.tasks} />
            </>}
        </>
    );
};

export default TasksComponent;