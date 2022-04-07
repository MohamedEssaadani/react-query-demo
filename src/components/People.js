import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://localhost:5000/people");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>

      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
