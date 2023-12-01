import React from "react";

export const airportOptions = [
  {
    value: "7100",
    label: "Islamabad International Airport ISB",
    identifier: "islamabad",
  },
  {
    value: "7101",
    label: "Benazir Bhutto International Airport ISB",
    identifier: "islamabad",
  },
  {
    value: "7102",
    label: "Allama Iqbal International Airport LHE",
    identifier: "lahore",
  },
  {
    value: "7103",
    label: "Jinnah International Airport KHI",
    identifier: "karachi",
  },
  {
    value: "7104",
    label: "Quaid-e-Azam International Airport KHI",
    identifier: "karachi",
  },
  {
    value: "7105",
    label: "Multan International Airport MUX",
    identifier: "multan",
  },
  {
    value: "7106",
    label: "Lahore International Airport LHE",
    identifier: "lahore",
  },
  {
    value: "7107",
    label: "Faisalabad International Airport LYP",
    identifier: "faisalabad",
  },
  {
    value: "7108",
    label: "Sialkot International Airport SKT",
    identifier: "sialkot",
  },
  {
    value: "7109",
    label: "Peshawar International Airport PEW",
    identifier: "peshawar",
  },
  {
    value: "7110",
    label: "Bacha Khan International Airport PEW",
    identifier: "peshawar",
  },
  {
    value: "7111",
    label: "Gwadar International Airport GWD",
    identifier: "gwadar",
  },
  {
    value: "7112",
    label: "Skardu International Airport KDU",
    identifier: "skardu",
  },
  { value: "7113", label: "Gilgit Airport GIL", identifier: "gilgit" },
  { value: "7114", label: "Chitral Airport CJL", identifier: "chitral" },
  { value: "7115", label: "Bahawalpur Airport BHV", identifier: "bahawalpur" },
  {
    value: "7116",
    label: "Dera Ghazi Khan Airport DEA",
    identifier: "dera_ghazi_khan",
  },
  { value: "7117", label: "Sukkur Airport SKZ", identifier: "sukkur" },
  { value: "7118", label: "Larkana Airport LRG", identifier: "larkana" },
  { value: "7119", label: "Panjgur Airport PJG", identifier: "panjgur" },
  { value: "7120", label: "Pasni Airport PSI", identifier: "pasni" },
  { value: "7121", label: "Ormara Airport ORW", identifier: "ormara" },
];

const AirportSelect = () => (
  <>
    {airportOptions.map((option,index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </>
);

export default AirportSelect;
