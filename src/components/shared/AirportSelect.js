import React from "react";

const airportOptions = [
  { value: "0", label: "<--SELECT-->" },
  { value: "6107", label: "Heathrow Airport TW6 1JS" },
  { value: "4127", label: "Heathrow Terminal 1 TW6 1JS" },
  { value: "4126", label: "Heathrow Terminal 2 TW6 1JS" },
  { value: "4125", label: "Heathrow Terminal 3 TW6 1JS" },
  { value: "4124", label: "Heathrow Terminal 4 TW6 3AA" },
  { value: "4123", label: "Heathrow Terminal 5 TW6 2GA" },
  { value: "6108", label: "Gatwick Airport RH6 0PJ" },
  { value: "4129", label: "Gatwick Airport North RH6 0PJ" },
  { value: "4128", label: "Gatwick Airport South RH6 0PJ" },
  { value: "4121", label: "Stansted Airport CM24 1QW" },
  { value: "4122", label: "Luton Airport LU2 9LY" },
  { value: "4120", label: "London City Airport E16 2PB" },
  { value: "4119", label: "Biggin Hill Airport TN16 3BN" },
  { value: "4118", label: "Birmingham Airport B26 3QJ" },
  { value: "4117", label: "Bristol Airport BS48 3DY" },
  { value: "4116", label: "Cardiff Airport CF62 3BD" },
  { value: "4115", label: "Liverpool Airport L24 1YD" },
  { value: "4130", label: "Southend Airport SS2 6YF" },
  { value: "4114", label: "Manchester Airport M90 1QX" },
  { value: "6182", label: "Southampton Airport SO18 2NL" },
  { value: "6185", label: "Exeter Airport EX5 2BD" },
  { value: "6190", label: "Doncaster Airport DN9 3RH" },
];

const AirportSelect = () => (
    <>
    {airportOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
    </>
);

export default AirportSelect;
