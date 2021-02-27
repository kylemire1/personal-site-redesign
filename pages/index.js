import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

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

const App = () => {
  const [sectionsColor] = useState([...originalColors]);
  const [fullpages] = useState([
    {
      text: "Section 1",
    },
    {
      text: "Section 2",
    },
    {
      text: "Section 3",
    },
  ]);

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  return (
    <div className="App">
      <Head>
        <title>My styled page</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <ReactFullpage
        navigation
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        // scrollHorizontally = {true}
        sectionsColor={sectionsColor}
        render={(comp) =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className="section">
                  <h1>{text}</h1>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  );
};

export default App;
