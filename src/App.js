import { useState } from "react";
import "./App.css";
import DailyScale from "./components/DailyScale";
import Clockscale from "./components/ClockScale";
import MonthlyScale from "./components/MonthlyScale";
import WeeklyScale from "./components/WeeklyScale";
import { Button } from "react-bootstrap";
import FormRoutine from './components/FormRoutine'
import CreateRoutine from './components/CreateRoutine'

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
      </div> */}
      <CreateRoutine/>

      {/* <div className="buttons-list">
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
    </div>
  );
}

export default App;
