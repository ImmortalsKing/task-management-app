import { Route, Routes } from "react-router";
import TasksComponent from '../../pages/TasksComponent'
import UsersComponent from '../../pages/UsersComponent'
import ProjectsComponent from '../../pages/ProjectsComponent'
import CommentsComponent from '../../pages/CommentsComponent'
import TagsComponent from '../../pages/TagsComponent'
import SupportComponent from "../../pages/SupportComponent";

const Content = () => {
    return (
        <div className="fixed right-1/6 top-25">
            <Routes>
                <Route path="/tasks" element={<TasksComponent />} />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/projects" element={<ProjectsComponent />} />
                <Route path="/comments" element={<CommentsComponent />} />
                <Route path="/tags" element={<TagsComponent />} />
                <Route path="/support" element={<SupportComponent />} />
            </Routes>
        </div>
    );
};

export default Content;