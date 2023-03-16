const TableCell = (props) => {
  return (
    <tbody>
      {props.data.map((data, index) => (
        <tr key={index}>
          <td className="text-center py-3 px-1">{data.Name}</td>
          <td className="text-center py-3 px-1">{data.Process}</td>
          <td className="text-center py-3 px-1">{data.Date}</td>
          <td className="text-center py-3 px-1">{data.Odm}</td>
          <td className="text-center py-3 px-1">{data.TotalN}</td>
          <td className="text-center py-3 px-1">{data.TotalC}</td>
          <td className="text-center py-3 px-1">{data.Ratio}</td>
          <td className="text-center py-3 px-1">{data.Nh4N}</td>
          <td className="text-center py-3 px-1">{data.TotalP}</td>
          <td className="text-center py-3 px-1">{data.TotalK}</td>
          <td className="text-center py-3 px-1">{data.Cod}</td>
          <td className="text-center py-3 px-1">{data.Bod}</td>
          <td className="text-center py-3 px-1">{data.Aa}</td>
          <td className="text-center py-3 px-1">{data.Pa}</td>
          <td className="text-center py-3 px-1">{data.Paaa}</td>
          <td className="text-center py-3 px-1">{data.Ba}</td>
          <td className="text-center py-3 px-1">{data.IsoBA}</td>
          <td className="text-center py-3 px-1">{data.Capa}</td>
          <td className="text-center py-3 px-1">{data.IsoCAPA}</td>
          <td className="text-center py-3 px-1">{data.Vala}</td>
          <td className="text-center py-3 px-1">{data.IsoVALA}</td>
          <td className="text-center py-3 px-1">
            <img className="w-6 h-6" src="/assets/pdf.png" alt="pdf" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableCell;
