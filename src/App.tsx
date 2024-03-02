import { useState } from "react";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import "./App.css";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import UserFormControlled from "./components/UserFormControlled";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo" /> : null}
            {selectedView == "list1" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "event1" ? <EventDemo1 title="Event Demo1" /> : null}
            {selectedView == "form-uncontrolled" ? <FormUncontrolled title="Form Uncontrolled" /> : null}
            {selectedView == "state1" ? <StateDemo1 title="State Demo1" /> : null}
            {selectedView == "state2" ? <StateDemo2 title="State Demo2" /> : null}
            {selectedView == "state3" ? <StateDemo3 title="State Demo3" /> : null}
            {selectedView == "effect1" ? <UseEffectDemo title="Effect Demo1" /> : null}
            {selectedView == "fetch1" ? <FetchDemo title="Fetch Demo1" /> : null}
            {selectedView == "form-controlled" ? <UserFormControlled title="Form Controlled" /> : null}
            {selectedView == "lifting-state" ? <LiftingState title="Lifting State" /> : null}
            {selectedView == "context-demo" ? <ContextDemoApp title="Context-demo" /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list1")}>
        List demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event1")}>
        Event demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form-uncontrolled")}>
        Form uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State Demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State Demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("effect1")}>
        Effect Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch1")}>
        Fetch Demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form-controlled")}>
        Form Controlled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lifting-state")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lifting-state")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context-demo")}>
        Context Demo
      </button>
    </>
  );
};
