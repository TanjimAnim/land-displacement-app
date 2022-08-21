import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

function AreaSummary() {
  const area = useSelector((state: RootState) => state.area);

  return (
    <>
      <h3>Area Name</h3>
      <p>{area.value.name}</p>
      <p>{area.value.status}</p>
      <p>{area.value.location}</p>
      <p>{area.value.size}</p>
    </>
  );
}
export default AreaSummary;
