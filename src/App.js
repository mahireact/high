import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FragmentsDemo from "./18Fragments/FragmentsDemo";
import Table from "./18Fragments/Table";
import PureComp from "./19PureComponents/PureComponent";
import ParentComp from "./19PureComponents/ParentComp";
import ParentCompfrmemo from "./20memComponents/ParentCompfrmemo";
import Helloworld from "./2Helloworld/Helloworld";
import FunctionalComponents from "./3Component/FunctionalComponents";
import FunctionalComponents2Aroow from "./3Component/FunctionalComponents2Aroow";
import ClassComponent from "./4Components/ClassComponent1";
//  i can change functional components2arrow name to any name
import FunctionalComponent1 from "./5Props/FunctionalComponent1";
import FunctionalComponChildren from "./5Props/FunctionalComponChildren";
import ClassComponent1 from "./4Components/ClassComponent1";
import ClassState from "./6state/ClassState";
import ClassStateNeverModifyDirectlyInsteadUseState from "./6state/ClassStateNeverModifyDirectlyInsteadUseState";
import FunctionDestruccture from "./7DesstructuringPropsandstates/FunctionDestrucctureoneWay";
import FunctionDestructurePropsSecondWay from "./7DesstructuringPropsandstates/FunctionDestructurePropsSecondWay";
import ClassDestructure from "./7DesstructuringPropsandstates/ClassDestructure";
import FunctionClick from "./8EventHandling/FunctionClick";
import ClassClick from "./8EventHandling/ClassClick";

import EventBind from "./9EventBinding/EventBind";
import ParentComponent from "./10MethodasProps/ParentComponent";
import Oneclass from "./10MethodasProps/Oneclass";
import IFelse from "./11conditionalrendering/ifelse";
import IfelseusingjavascriptVariables from "./11conditionalrendering/IfelseusingjavascriptVariables";
import TernaryOperator from "./11conditionalrendering/ternaryOperator";
import ShortCircui from "./11conditionalrendering/ShortCircuit";
import Namelist1 from "./12List Rendering/Namelist1";
import NameList2 from "./12List Rendering/NameList2";
import Namelistofperson1 from "./12List Rendering/NameListofPerson1";
import Namelistofperson from "./12List Rendering/Namelistofperson";
import NameListforKeys1 from "./13Lists and Keys/NameListforKeys";
import NameforAntipattern from "./14indexasantipattern/NameListforantipattern";
import Form from "./15Forms/Form";
import Form1 from "./15Forms/Form1";
import LifeCycle1 from "./16LifeCycleMethods/LifeCycle1";
import LifeCycle3 from "./17updatingLifecycle/LifeCycle3";
import RefsDemo from "./21Refs/RefsDemo";
import Dashboard from "./21Refs/Dashboard";
import FocusInput from "./22RefswithClassComponent/FocusInput";
import FRParentinput from "./23ForwardingRefss/FRParentinput";
import PortalDemo from "./24Portals/PortalDemo";
import Hero from "./25Error/Hero";
import ErrorBoundary from "./25Error/ErrorBoundary";
import Hero1 from "./25Error/Hero1";
import ClickCounter from "./26HigherOrderPart1/ClickCounter";
import HoverCounter from "./26HigherOrderPart1/HoverCounter";
import ClickCounter1 from "./27higher2/ClickCounter1";
import HoverCounter1 from "./27higher2/HoverCounter1";
import ClickCounter2 from "./28higherorder/ClickCounter2";
import HoverCounter2 from "./28higherorder/HoverCounter2";
import ClickCounter3 from "./29higher3/ClickCounter3";
import HoverCounter3 from "./29higher3/HoverCounter3";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/helloworld" component={Helloworld}></Route>
        <Route path="/classclick" component={ClassClick}></Route>
        <Route
          path="/FunctionalComponents"
          component={FunctionalComponents}
        ></Route>
        <Route
          path="/FunctionalComponents2Aroow"
          component={FunctionalComponents2Aroow}
        ></Route>
        <Route path="/ClassComponent" component={ClassComponent}></Route>
        <Route
          path="/ClassStateNeverModifyDirectlyInsteadUseState"
          component={ClassStateNeverModifyDirectlyInsteadUseState}
        ></Route>
        <Route
          path="/FunctionDestruccture"
          component={FunctionDestruccture}
        ></Route>
        <Route
          path="/FunctionDestructurePropsSecondWay"
          component={FunctionDestructurePropsSecondWay}
        ></Route>
        <Route path="/ParentComponent" component={ParentComponent}></Route>
        <Route path="/Oneclass" component={Oneclass}></Route>
        <Route path="/IFelse" component={IFelse}></Route>
        <Route
          path="/IfelseusingjavascriptVariables"
          component={IfelseusingjavascriptVariables}
        ></Route>
        <Route path="/TernaryOperator" component={TernaryOperator}></Route>
        <Route path="/ShortCircui" component={ShortCircui}></Route>
        <Route path="/Namelist1k" component={Namelist1}></Route>
        <Route path="/NameList2" component={NameList2}></Route>
        <Route path="/Namelistofperson" component={Namelistofperson}></Route>
        <Route path="/Namelistofperson1" component={Namelistofperson1}></Route>
        <Route path="/classclick" component={NameListforKeys1}></Route>
        <Route path="/classclick" component={NameforAntipattern}></Route>
        <Route path="/classclick" component={LifeCycle1}></Route>
        <Route path="/classclick" component={LifeCycle3}></Route>
        <Route path="/classclick" component={FragmentsDemo}></Route>
        <Route path="/classclick" component={Table}></Route>
        <Route path="/classclick" component={PureComp}></Route>
        <Route path="/classclick" component={ParentComp}></Route>
        <Route path="/classclick" component={ParentCompfrmemo}></Route>
        <Route path="/classclick" component={FunctionClick}></Route>
        <Route path="/classclick" component={Form1}></Route>
        <Route path="/classclick" component={EventBind}></Route>
        <Route path="/classclick" component={Form}></Route>
        <Route path="/classclick" component={ClassClick}></Route>
        <Route path="/classclick" component={ClassClick}></Route>
        <Route path="/parentcompfrmemo" component={ParentCompfrmemo}></Route>
        <Route path="/refsDemo" component={RefsDemo}></Route>
        <Route path="/dashboard">
          {" "}
          <Dashboard name="hi how are you" />
        </Route>
        <Route path="/functionalcomponent1">
          {" "}
          <FunctionalComponent1 name="mahitha" />{" "}
        </Route>
        <Route path="/functionalcomponent11">
          {" "}
          <FunctionalComponent1 name="manaswitha" />{" "}
        </Route>
        <Route path="/functionalcomponent111">
          {" "}
          <FunctionalComponent1 name="manaswini" />{" "}
        </Route>
        <Route path="/classcomponent">
          {" "}
          <ClassComponent1 name="sai kumaar" />
        </Route>
        <Route path="/classstate">
          {" "}
          <ClassState name="sai kumaar" />
        </Route>
        <Route path="/classStateneverModifydirectlyinsteadusestate">
          <ClassStateNeverModifyDirectlyInsteadUseState />{" "}
        </Route>
        <Route path="/functiondestructure">
          {" "}
          <FunctionDestruccture name="destructure" age="50" />/
        </Route>
        <Route path="/functiondestructurepropssecondWay">
          {" "}
          <FunctionDestructurePropsSecondWay
            firstName="yelloa"
            secondName="shilpam"
          />
        </Route>
        <Route path="/classstate">
          <ClassDestructure name="class" color="white" />{" "}
        </Route>
        <Route path="/FocusInput" component={FocusInput}></Route>
        <Route path="/FRparentinput" component={FRParentinput}></Route>

        <Route path="/portalsdemo" component={PortalDemo}></Route>
        <Route path="/error">
          {" "}
          <Hero heroName="joker" />
        </Route>
        <Route path="/error1">
          {" "}
          <Hero heroName="batsman" />
        </Route>
        <Route path="/errorboundary" component={ErrorBoundary}>
          {" "}
          <Hero1 heroName="joker" />
        </Route>
        <Route path="/errorboundary1" component={ErrorBoundary}>
          {" "}
          <Hero1 heroName="batsman" />
        </Route>
        <Route path="/high1" component={ClickCounter}></Route>
        <Route path="/high2" component={HoverCounter}></Route>

        <Route path="/high11" component={ClickCounter1}></Route>
        <Route path="/high22" component={HoverCounter1}></Route>

        <Route path="/high101" component={ClickCounter2}></Route>
        <Route path="/high202" component={HoverCounter2}></Route>

        <Route path="/hclick">
          
          <ClickCounter3 name="joker" />
        </Route>

        <Route path="/hhover">
          
          <HoverCounter3 />
        </Route>
      </Router>
    </div>
  );
}

export default App;
