import { Route, Routes } from "react-router";
import TasksComponent from '../../pages/tasks/TasksComponent'
import UsersComponent from '../../pages/users/UsersComponent'
import ProjectsComponent from '../../pages/projects/ProjectsComponent'
import CommentsComponent from '../../pages/comments/CommentsComponent'
import TagsComponent from '../../pages/tags/TagsComponent'
import SupportComponent from "../../pages/supports/SupportComponent";
import WelcomeComponent from "../../pages/welcome/WelcomeComponent";

const Content = () => {
    return (
        <div className="fixed right-1/6 top-25 w-full h-full">
            <Routes>
                <Route path="/" element={<WelcomeComponent />} />
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