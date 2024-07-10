import { useState } from "react";
import { TiInputChecked } from "react-icons/ti";
import { ImRadioUnchecked } from "react-icons/im";
import asset from "./assets/Square.jpg";

function App() {
  const [selectedItem, setSelectedItem] = useState("Risk Assessment");
  const items = [
    "Risk Assessment",
    "Risk Assessment2",
    "Risk Assessment3",
    "Risk Assessment4",
  ];

  return (
    <div className="max-w-7xl mx-auto flex items-center min-h-screen">
      <div>
        <h1 className="my-10 text-center font-bold text-4xl">
          SAFEGUARD YOUR BUSINESS WITH ALL-IN-ONE CYBERSECURITY
        </h1>
        <div className="flex justify-between gap-5 p-2 bg-black rounded-lg mb-10">
          {items.map((item, i) => (
            <Item
              key={i}
              label={item}
              active={selectedItem}
              setActiveItem={setSelectedItem}
            />
          ))}
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <div className="w-1/2">
              <h1 className="font-bold text-2xl">Against Evolving Threats</h1>
              <p className="my-5">
                Get a clear picture of your organization&apos;s security posture
                and how prepared you are against evolving cyber threats before
                malicious entities, and apply customized recommendations to
                improve your security program
              </p>
              <button
                className={`flex-1 text-center py-3 px-4 rounded font-medium bg-error text-white`}
              >
                Identify Cyber Risks Today
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src={asset}
              alt="asset"
              className="rounded-full w-1/2 bg-background/50 p-6"
            />
            <Navigator
              title={"Safe Guard"}
              color={"#000000"}
              top={-150}
              left={-150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const Item = ({ label, active, setActiveItem }) => {
  return (
    <div
      onClick={() => setActiveItem(label)}
      className={`flex-1 text-center py-2 px-4 rounded-md font-medium ${
        active === label ? "bg-error text-white" : "bg-white text-black"
      }`}
    >
      {label}
    </div>
  );
};

const Navigator = ({
  title,
  color,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => {
  return (
    <div
      className="absolute flex items-center"
      style={{ color: color, top, left, bottom, right }}
    >
      <div
        className="flex items-center gap-2 p-2 rounded-md"
        style={{
          border: `1px solid ${color}`,
          background: "white",
        }}
      >
        <TiInputChecked />
        <p>{title}</p>
      </div>
      <hr className="border-2 border-black w-20" />
      <ImRadioUnchecked className="bg-white/90 rounded-full p-2 text-4xl" />
    </div>
  );
};
