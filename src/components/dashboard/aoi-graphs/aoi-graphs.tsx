import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import SlopeValue from "../aoi-graphs/slopevalue/slopevalue";
import Overview from "./slopevalue/overview";

function AreaGraphs() {
  const link = useSelector((state: RootState) => state.area.selectedLink);
  console.log(link);
  return (
    <>
      {(() => {
        if (link === "Overview")
          return (
            <>
              <Overview />
            </>
          );
        if (link === "Ascending")
          return (
            <>
              <SlopeValue
                title={link}
                maxUp={56}
                maxDown={-193}
                average={-52}
              />
            </>
          );

        if (link === "Descending")
          return (
            <>
              <SlopeValue
                title={link}
                maxUp={60}
                maxDown={-193}
                average={-52}
              />
            </>
          );
        if (link === "Vertical" || "Horizontal")
          return (
            <>
              <SlopeValue
                title={link}
                avgTotalDisplacement={-12}
                displacementRate={-52}
              />
            </>
          );
      })()}
    </>
  );
}
export default AreaGraphs;
