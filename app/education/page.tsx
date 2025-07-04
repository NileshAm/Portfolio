import ListItem from "./ListItem/ListItem";
import Maliyadeva from "./Maliyadeva";
import NIBM from "./NIBM";
import UOM from "./UOM";

const page = () => {
  return (
    <>
      <div className="bg-secondary w-1/6 rounded-xl p-3 m-3 fixed right-0">
        <span className="w-full text-center justify-center flex text-lg underline text-highlight">
          Table of Content
        </span>
        <ul className="w-full list-decimal ms-7">
          <ListItem href="#UOM" heading="University of Moratuwa">
            <ul className="list-disc ms-4">
              <ListItem href="#UOMinfo" heading="Info" />
              <ListItem href="#UOMacademic" heading="Academic" />
              <ListItem href="#UOMprojects" heading="Extra Curricular">
                <ol className="list-decimal ms-10 text-sm">
                  <ListItem href="#UOMRobogames" heading="IESL Robogames" />
                  <ListItem
                    href="#UOMThermoBand"
                    heading="ThermoBand Product Design"
                  />
                </ol>
              </ListItem>
            </ul>
          </ListItem>
          <ListItem href="#NIBM" heading="NIBM">
            <ul className="list-disc ms-4">
              <ListItem href="#NIBMinfo" heading="Info" />
              <ListItem href="#NIBMacademic" heading="Academic" />
              <ListItem href="#NIBMprojects" heading="Extra Curricular">
                <ol className="list-decimal ms-10 text-sm">
                  <ListItem
                    href="#NIBMDMobile"
                    heading="DMobile App Development"
                  />
                </ol>
              </ListItem>
            </ul>
          </ListItem>
          <ListItem href="#Maliyadeva" heading="Maliyadeva College">
            <ul className="list-disc ms-4">
              <ListItem href="#MaliyadevaInfo" heading="Info" />
              <ListItem href="#MaliyadevaAcademic" heading="Academic" />
            </ul>
          </ListItem>
        </ul>
      </div>
      <UOM />
      <NIBM />
      <Maliyadeva />
    </>
  );
};

export default page;
