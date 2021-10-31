import React from "react";
import PersonforKeys from "./Personforkeys";
function NameListforKeys1() {
  const persons = [
    {
      id: 1,
      name: "bruce",
      age: 30,
      skill: "React",
    },
    { id: 2, name: "key1", age: "age-22", skill: "js" },
    { id: 3, name: "key2", age: "age-33", skill: "html" },
    { id: 4, name: "key3", age: 40, skill: "css" },
  ];
  const personList=persons.map(person =><PersonforKeys key={person.id} person={person}/>)
  return <div>{personList}</div>;
}

export default NameListforKeys1;

// from namelist 2 in list rendering we came to know that
// index.js:1 Warning: Each child in a list should have a unique "key" prop.
