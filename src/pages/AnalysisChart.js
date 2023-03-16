import Header from "./layouts/Header";
import LeftSideBar from "./layouts/LeftSideBar";
import TableCell from "../components/TableCell";

const AnalysisChart = () => {
  let processData = [
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
    {
      Name: "formenter",
      Process: "tank1",
      Date: "2023-02-02",
      Odm: "12%",
      TotalN: "10mg/L",
      TotalC: "12mg/L",
      Ratio: "14:15",
      Nh4N: "12mg/L",
      TotalP: "10mg/L",
      TotalK: "12mg/L",
      Cod: "15mg/L",
      Bod: "15mg/L",
      Aa: "12mg/L",
      Pa: "13mg/L",
      Paaa: "12mg/L",
      Ba: "15mg/L",
      IsoBA: "13mg/L",
      Capa: "13mg/L",
      IsoCAPA: "12mg/L",
      Vala: "13mg/L",
      IsoVALA: "12mg/L",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <div className="flex h-screen">
        <div className="w-1/5">
          <LeftSideBar />
        </div>
        <div className="w-4/5 " style={{ marginTop: "116px" }}>
          <table className="w-[95%] text-sm text-left text-gray-500 dark:text-gray-400 mr-[5%] table-auto">
            <thead className="text-xs text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-1 text-center">Name</th>
                <th className="py-3 px-1 text-center">Process</th>
                <th className="py-3 px-1 text-center">Date</th>
                <th className="py-3 px-1 text-center">ODM</th>
                <th className="py-3 px-1 text-center">Total N</th>
                <th className="py-3 px-1 text-center">Total C</th>
                <th className="py-3 px-1 text-center">C:N ratio</th>
                <th className="py-3 px-1 text-center">NH4-N</th>
                <th className="py-3 px-1 text-center">Total P</th>
                <th className="py-3 px-1 text-center">Total K</th>
                <th className="py-3 px-1 text-center">COD</th>
                <th className="py-3 px-1 text-center">BOD</th>
                <th className="py-3 px-1 text-center">AA</th>
                <th className="py-3 px-1 text-center">PA</th>
                <th className="py-3 px-1 text-center">PA/AA</th>
                <th className="py-3 px-1 text-center">BA</th>
                <th className="py-3 px-1 text-center">isoBA</th>
                <th className="py-3 px-1 text-center">CAPA</th>
                <th className="py-3 px-1 text-center">isoCAPA</th>
                <th className="py-3 px-1 text-center">VALA</th>
                <th className="py-3 px-1 text-center">isoVALA</th>
                <td className="py-3 px-1 text-center">
                  <img className="w-6 h-6" src="/assets/pdf.png" alt="pdf" />
                </td>
              </tr>
            </thead>
            {/* <tbody> */}
            <TableCell data={processData} />
            {/* </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalysisChart;
