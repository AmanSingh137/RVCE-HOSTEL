import "./App.css";
import InputField from "./InputFields";
import Navigator from "./Navigator";
import Options from "./Options";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuCard from "./MenuCard";
import FeeStructue from "./FeeStructure";
import RoomAvailabe from "./RoomAvailable";
import Payments from "./Payments";
import Complaints from "./Complaints";
import MessStaff from "./MessStaff";
import Success from "./Success";

function App() {


  return (
    <div className="App">
      <Router>
        <Navigator />
        <Switch>
          <Route path="/" exact component={InputField} />
          <Route path="/options" component={Options} />
          <Route path="/menucard" component={MenuCard} />
          <Route path="/feestructure" component={FeeStructue} />
          <Route path="/rooms" component={RoomAvailabe} />
          <Route path="/payments" component={Payments} />
          <Route path="/complaints" component={Complaints} />
          <Route path="/staff" component={MessStaff} />
          <Route path="/success" component={Success}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
