import { useEffect, useState } from "react";
import styles from "../css/TimetablesSection.module.css";
import TimetablePreviews from "./TimetablePreviews";
import Timetables from "./Timetables";

const TimetablesSection = ({ schedules, faculties, getSchedulesForSlots }) => {
  /**
   * Array containing slots of each schedule type
   */
  const schedulesSlots = Object.keys(schedules);
  const [currentlySelectedSlots, setCurrentlySelectedSlots] = useState([]);
  useEffect(() => {
    // setCurrentlySelectedSlots([]);
  }, [schedules]);
  const selectSlots = async (slots) => {
    console.log("selectSlots ", slots);
    getSchedulesForSlots(slots.join("+"));
    setCurrentlySelectedSlots(slots);
  };

  return (
    <div
      className={`${styles.screen} ${
        Object.keys(schedules).length > 0 ? "" : styles.disableScreen
      }`}
      id="screen2"
    >
      <div className={styles.twoCols}>
        <TimetablePreviews
          schedulesSlots={schedulesSlots}
          select={selectSlots}
        ></TimetablePreviews>
        <Timetables
          schedules={schedules}
          slots={currentlySelectedSlots}
          faculties={faculties}
        ></Timetables>
      </div>
    </div>
  );
};

export default TimetablesSection;
