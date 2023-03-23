import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div
      className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col fixed"
      style={{ height: "calc(100vh - 98px)", marginTop: "98px" }}
    >
      <ul className="space-y-2">
        <li className="py-2">
          <a
            href="users"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
          </a>
        </li>
        <li className="py-2">
          <a
            href="daily-report"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              className="w-6 h-6"
              src="/assets/daily-report.png"
              alt="daily report"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">
              Daily Data Upload
            </span>
          </a>
        </li>
        <li className="py-2">
          <a
            href="weekly-report"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              className="w-6 h-6"
              src="/assets/weekly-report.png"
              alt="weekly report"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">
              Weekly Data Upload
            </span>
          </a>
        </li>
        <li className="py-2">
          <a
            href="/add-analysis"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              className="svg-icon w-6 h-6"
              style={{
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M439.532308 466.707692l-143.753846 144.147693 38.596923 38.990769 116.184615-116.184616 78.769231 39.384616 139.421538-139.421539 21.661539 21.661539 44.504615-128-128 44.504615 22.843077 22.843077-111.458462 111.458462z"
                fill="#999999"
              />
              <path
                d="M315.076923 118.153846L118.153846 236.307692v669.538462h393.846154v-94.523077H212.676923V291.446154h129.969231V212.676923h468.676923v299.323077h94.523077V118.153846z"
                fill="#999999"
              />
              <path
                d="M905.846154 866.461538l-62.227692-62.227692c14.572308-21.661538 22.843077-48.049231 22.843076-76.012308 0-76.012308-61.833846-137.846154-137.846153-137.846153s-137.846154 61.833846-137.846154 137.846153 61.833846 137.846154 137.846154 137.846154c27.963077 0 54.350769-8.270769 76.012307-22.843077L866.461538 905.846154l39.384616-39.384616z m-259.938462-137.846153c0-45.686154 37.021538-82.707692 82.707693-82.707693s82.707692 37.021538 82.707692 82.707693-37.021538 82.707692-82.707692 82.707692-82.707692-37.021538-82.707693-82.707692z"
                fill="#999999"
              />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Add Analysis</span>
          </a>
        </li>
        <li className="py-2">
          <a
            href="analysis-chart"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              className="w-6 h-6"
              src="/assets/analysis.png"
              alt="add analysis"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">
              Analysis chart
            </span>
          </a>
        </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <li>
          <a
            href="/login"
            className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            <img className="w-6 h-6" src="/assets/logout.png" alt="logout" />
            <span className="ml-4">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
