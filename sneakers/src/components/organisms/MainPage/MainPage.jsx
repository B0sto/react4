import React from "react";
import PageHeader from "../../moleculs/PageHeader/PageHeader";
import ImagesComp from "../../moleculs/ImagesComp/ImagesComp";
import Description from "../../moleculs/Description/Description";

const MainPage = () => {
  return (
    <>
      <PageHeader />
      <div className="line"></div>
      <div className="main_subcontainer">
        <ImagesComp />
        <Description />
      </div>
    </>
  );
};

export default MainPage;
