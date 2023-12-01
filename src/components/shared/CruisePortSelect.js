import React from "react";

export const cruisePortOptions = [
  {
    value: "7100",
    identifier: "karachi",
    label: "Karachi Cruise Port KHI",
  },
  {
    value: "7101",
    identifier: "gwadar",
    label: "Gwadar Cruise Port GWD",
  },
  {
    value: "7102",
    identifier: "port_qasim",
    label: "Port Qasim KHI",
  },
  {
    value: "7103",
    identifier: "ormara",
    label: "Ormara Cruise Port ORW",
  },
  {
    value: "7104",
    identifier: "pasni",
    label: "Pasni Cruise Port PSI",
  },
  {
    value: "7105",
    identifier: "gadani_ship_breaking_yard",
    label: "Gadani Ship Breaking Yard",
  },
  {
    value: "7106",
    identifier: "gaddani_fishing_harbor",
    label: "Gaddani Fishing Harbor",
  },
  {
    value: "7107",
    identifier: "keti_bandar",
    label: "Keti Bandar Port",
  },
  {
    value: "7108",
    identifier: "sonmiani_bay",
    label: "Sonmiani Bay",
  },
  {
    value: "7109",
    identifier: "kund_malir_beach",
    label: "Kund Malir Beach",
  },
  // Add more options as needed
];

const CruisePortSelect = () => (
  <>
    {cruisePortOptions.map((option,index) => (
      <option key={index} value={option.value} identifier={option.identifier}>
        {option.label}
      </option>
    ))}
  </>
);

export default CruisePortSelect;

