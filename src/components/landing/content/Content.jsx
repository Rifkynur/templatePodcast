import React from "react";
import HeaderContent from "../../util/HeaderContent";
import ContentList from "./ContentList";
import Button from "../../util/Button";
import { StichingBlack } from "../../util/Stiching";
const Content = () => {
  return (
    <div className="sectionContent bg-primary">
      <HeaderContent title={"Recent Episodes"} desc={"Available on your favorite platform"} />
      <ContentList />
      <Button name={"browse all episodes"} />
      <StichingBlack />
    </div>
  );
};

export default Content;
