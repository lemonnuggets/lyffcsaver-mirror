import { useState } from "react";
import styles from "../css/BlacklistSlots.module.css";
import timetableStyles from "../css/Timetable.module.css";
import timetableTemplateData from "../utils/timetableTemplateData";
// TODO: Clicking on row or column should select everything in that row or column
const BlacklistSlots = ({ blacklistedSlots, toggleBlacklist }) => {
  let dayCount = 0;
  const id = "blacklist-slots";
  const getClassName = (cellContent, rowIndex, cellIndex) => {
    let className = `${timetableStyles.cell} `;
    const pattern = /[A-Z]+\d+/;
    if (pattern.test(cellContent)) className += ` ${styles.slotCell} `;
    if (cellIndex < 2) {
      className += ` ${timetableStyles.headDay} `;
      return className;
    }
    if (rowIndex < 4) {
      className += ` ${timetableStyles.cell} ${timetableStyles.headTop} `;
      return className;
    }
    if (cellContent === "Lunch") {
      className += ` ${timetableStyles.lunch} `;
      return className;
    }
    if (blacklistedSlots.includes(cellContent)) {
      className += ` ${timetableStyles.blacklisted} `;
      return className;
    }
    if (dayCount % 2 === 0) {
      className += ` ${timetableStyles.evenDay} `;
      return className;
    } else {
      className += ` ${timetableStyles.oddDay} `;
      return className;
    }
  };
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <h2>Blacklist Slots</h2>
      </label>
      <table className={timetableStyles.timetable} onClick={(e) => {}}>
        <thead>
          {timetableTemplateData.slice(0, 4).map((row, rowIndex) => {
            return (
              <tr key={`${id}-row-${rowIndex}`}>
                {row.map((cell, index) => {
                  return cell === "" || index === 1 ? (
                    <></>
                  ) : (
                    <th
                      key={`${id}-${rowIndex}-${index}`}
                      className={getClassName(cell, rowIndex, index)}
                      rowSpan={index === 0 ? 2 : 1}
                    >
                      {cell !== "Lunch" ? cell : ""}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {timetableTemplateData.slice(4).map((row, rowIndex) => {
            if (rowIndex % 2 === 0) dayCount++;
            return (
              <tr key={`${id}-row-${rowIndex}`}>
                {row.map((cell, cellIndex) => {
                  return cell === "" ||
                    cellIndex === 1 ||
                    (rowIndex > 0 && cell === "Lunch") ? (
                    <></>
                  ) : (
                    <td
                      key={`${id}-${rowIndex}-${cellIndex}`}
                      className={`${getClassName(
                        cell,
                        rowIndex + 4,
                        cellIndex
                      )}`}
                      rowSpan={cell === "Lunch" ? 14 : cellIndex === 0 ? 2 : 1}
                      onClick={() => toggleBlacklist(cell)}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlacklistSlots;
