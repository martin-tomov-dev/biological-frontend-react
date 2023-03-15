import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import { useParams } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/5">
          <LeftSideBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
