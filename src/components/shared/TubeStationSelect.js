import React from "react";

export const tubeStationOptions = [
  {
    value: "7100",
    identifier: "islamabad",
    label: "Islamabad Tube Station",
  },
  {
    value: "7101",
    identifier: "peshawar",
    label: "Peshawar Tube Station",
  },
  {
    value: "7102",
    identifier: "karachi",
    label: "Karachi Tube Station",
  },
  {
    value: "7103",
    identifier: "lahore",
    label: "Lahore Tube Station",
  },
  {
    value: "7104",
    identifier: "faisalabad",
    label: "Faisalabad Tube Station",
  },
  {
    value: "7105",
    identifier: "rawalpindi",
    label: "Rawalpindi Tube Station",
  },
  {
    value: "7106",
    identifier: "quetta",
    label: "Quetta Tube Station",
  },
  {
    value: "7107",
    identifier: "multan",
    label: "Multan Tube Station",
  },
  {
    value: "7108",
    identifier: "pindi",
    label: "Pindi Tube Station",
  },
  {
    value: "7109",
    identifier: "kohat",
    label: "Kohat Tube Station",
  },
  // Add more options as needed
];

const TubeStationSelect = () => (
  <>
    {tubeStationOptions.map((option,index) => (
      <option key={index} value={option.value} identifier={option.identifier}>
        {option.label}
      </option>
    ))}
  </>
);

export default TubeStationSelect;
