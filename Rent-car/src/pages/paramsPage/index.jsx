import React from "react";
import InfoPage from "../../components/InfoPage";
import ParamsTab from "../../components/ParamsTab";
import OtherCrs from "../../components/paramsOthers";

function ParamsPage() {
  return (
    <div>
      <InfoPage />
      <ParamsTab />
      <OtherCrs />
    </div>
  );
}

export default ParamsPage;
