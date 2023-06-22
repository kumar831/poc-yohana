import { useState } from "react";
import "./App.css";
import DailyScale from "./components/DailyScale";
import Clockscale from "./components/ClockScale";
import MonthlyScale from "./components/MonthlyScale";
import WeeklyScale from "./components/WeeklyScale";
import { Button } from "react-bootstrap";
import FormRoutine from './components/CreateAction'
import CreateRoutine from './components/CreateRoutine'
import Calendar from './components/Calendar'
import DisplayRoutine from './components/DisplayRoutine';
import CalendarClock from './components/CalendarTime';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import BigCalendar from "./components/BigCalendar";

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt9QHFqVkJrW05Gd0BAXWFKblJ3T2JYdV1wZCQ7a15RRnVfRF9iSH9Sc0RjWnxecA==;Mgo+DSMBPh8sVXJ2S0d+X1VPcUBAXHxLflF1VWJYdV9xflZGcC0sT3RfQF5jT3xSd0RiXH5ec3BQRw==;ORg4AjUWIQA/Gnt2V1hhQlJAfVhdX2JWfFN0RnNYflRxdV9FYEwgOX1dQl9gSXhRd0RiWHpfcHdTQWA=;MjQ5MDQxM0AzMjMyMmUzMDJlMzBITkFXc3MyZFlnTVNSZ0piTDB0SndUR2p5ZmMycjY0SVVjQ0FrN2JwYitJPQ==;MjQ5MDQxNEAzMjMyMmUzMDJlMzBXcHNSQ0REZG5EZllLaklQODVscloyUkI3R2c3S043TjRUb3B4MkJDSmQ0PQ==;NRAiBiAaIQQuGjN/V0R+XU9HclRFQmFIYVF2R2BJfl96dVRMY1xBNQtUQF1hSn5VdERiWH5bcXRRQGdd;MjQ5MDQxNkAzMjMyMmUzMDJlMzBaZWVaK014Y0FBenJjc2xKc1FnNnZhaGU3dThhbGhXYkNOYlBiNHd5UzlBPQ==;MjQ5MDQxN0AzMjMyMmUzMDJlMzBjbC8yVmllcTVuam5xSUZ1Qk5QNTZWSldCdFIvOUtaZlFUVWdqa0NKZjNvPQ==;Mgo+DSMBMAY9C3t2V1hhQlJAfVhdX2JWfFN0RnNYflRxdV9FYEwgOX1dQl9gSXhRd0RiWHpfcHFRQ2E=;MjQ5MDQxOUAzMjMyMmUzMDJlMzBFT2tCbXlZTUdZVTBIN2F5Mld0NEZVdVlLNC9RYUJNbldWQUVGWXJSdUpFPQ==;MjQ5MDQyMEAzMjMyMmUzMDJlMzBXU0pvVGlEbjA2QlRSeVMzSk9LbzFwakJkWVVoeGJKYThka2x5d1hCVGRRPQ==;MjQ5MDQyMUAzMjMyMmUzMDJlMzBaZWVaK014Y0FBenJjc2xKc1FnNnZhaGU3dThhbGhXYkNOYlBiNHd5UzlBPQ==');


function App() {
  const [clockScale, setClockScale] = useState(true);
  const [dailyScale, setDailyScale] = useState(false);
  const [weeklyScale, setWeeklyScale] = useState(false);
  const [monthlyScale, setMonthlyScale] = useState(false);

  const handleClockScale = () => {
    setClockScale(true);
    setDailyScale(false);
    setWeeklyScale(false);
    setMonthlyScale(false)
  };

  const handleDailyScale = () => {
    setDailyScale(true);
    setClockScale(false);
    setWeeklyScale(false);
    setMonthlyScale(false);
  };

  const handleWeeklyScale = () => {
    setDailyScale(false);
    setClockScale(false);
    setWeeklyScale(true);
    setMonthlyScale(false);
  };

  const handleMonthlyScale = () => {
    setDailyScale(false);
    setClockScale(false);
    setWeeklyScale(false);
    setMonthlyScale(true);
  };

  return (
    <div className="App">
      {/* <Clock /> */}
      {/* <div>
        {clockScale ? <Clockscale /> : ""}
        {dailyScale ? <DailyScale /> : ""}
        {weeklyScale ? <WeeklyScale /> : ""}
        {monthlyScale ? <MonthlyScale /> : ""}
      </div>

      <div className="buttons-list">
        <Button
          variant="primary"
          className={clockScale ? 'text-background' : 'text-class'}
          onClick={handleClockScale}
        >
          12H
        </Button>
        <Button
          onClick={handleDailyScale}
          variant="primary"
          className={dailyScale ? 'text-background' : 'text-class'}
        >
          24H
        </Button>
        <Button
          onClick={handleWeeklyScale}
          variant="primary"
          className={weeklyScale ? 'text-background' : 'text-class'}
        >
          Week Outline
        </Button>
        <Button
          onClick={handleMonthlyScale} variant="primary" 
          className={monthlyScale ? 'text-background' : 'text-class'}
          >
          Month Outline
        </Button>
      </div> */}
      {/* <CalendarClock/> */}
      <BigCalendar/>
      <CreateRoutine/>
    </div>
  );
}

export default App;
