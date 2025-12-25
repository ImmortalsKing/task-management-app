const Loading = () => {
  return (
    <div className="flex items-center justify-center w-28/35 h-2/3">
      <div className="flex flex-col items-center gap-4">
        {/* دایره در حال چرخش */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-700"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 dark:border-t-gray-400 animate-spin"></div>
        </div>
        
        {/* متن لودینگ */}
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          در حال بارگذاری...
        </p>
      </div>
    </div>
  );
};

export default Loading;