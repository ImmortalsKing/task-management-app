import Content from "./layouts/content";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-100 dark:bg-green-800/90 overflow-hidden">
      <Sidebar />
      <div className="fixed right-1/6 top-3 w-29/35 h-29/30 rounded-2xl bg-white dark:bg-green-400/25 border-2 border-gray-900/20 shadow-2xs shadow-gray-800/50">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;