import React from "react";
import Person from "./Person";
function Namelistofperson1() {
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
  const personList=persons.map(person =><Person person={person}/>)
 console.log(personList)
  return <div>{personList}</div>;

}

export default Namelistofperson1;
