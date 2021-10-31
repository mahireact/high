import React from "react";

function Namelistofperson() {
  const persons = [
    {
      id: 1,
      name: "bruce",
      age: 30,
      skill: "React",
    },
    { id: 2, name: "clark", age: 3, skill: "js" },
    { id: 3, name: "diana", age: 22, skill: "html" },
    { id: 4, name: "angel", age: 40, skill: "css" },
  ];
  const personalist=persons.map(person =><h3>{person.name} and {person.age}and {person.sskills}</h3>)
  return <div>{personalist}</div>;
}

export default Namelistofperson;
