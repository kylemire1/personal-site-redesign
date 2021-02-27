import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = [
  "#ff5f45",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

const FullPageLayout = () => {
  const router = useRouter();
  const [activeSectionData, setActiveSectionData] = useState({});
  const [sectionsColor] = useState([...originalColors]);
  const [fullpages] = useState([
    {
      text: "Home",
      anchor: "",
    },
    {
      text: "Portfolio",
      anchor: "portfolio",
    },
    {
      text: "Experience",
      anchor: "experience",
    },
    {
      text: "Contact",
      anchor: "contact",
    },
  ]);

  const anchors = fullpages.map((page) => page.anchor);

  useEffect(() => {
    if (typeof fullpage_api !== "undefined") {
      setActiveSectionData(fullpage_api.getActiveSection());
    }
  }, []);

  const onLeave = (_origin, destination, _direction) => {
    setActiveSectionData(destination);
  };
  return (
    <ReactFullpage
      navigation
      pluginWrapper={pluginWrapper}
      onLeave={onLeave}
      anchors={anchors}
      // scrollHorizontally = {true}
      sectionsColor={sectionsColor}
      render={(comp) => (
        <ReactFullpage.Wrapper>
          {fullpages.map(({ text }) => (
            <div key={text} className="section" id={text}>
              <h1>{text}</h1>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageLayout;
