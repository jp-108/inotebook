import React, { useContext, useEffect } from "react";
import { NoteContext } from "../context/NoteState.js";

function About(props) {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>
        {a.state.name} and {a.state.email}
      </h1>
    </div>
  );
}

export default About;
