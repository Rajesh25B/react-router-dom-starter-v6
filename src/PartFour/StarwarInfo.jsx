import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const startwarData = async () => {
  const response = await fetch("https://swapi.dev/api/people/1")
  const data = await response.json();
  return data;
}

export function StarwarInfo() {
  // const [data1, setData] = useState([]);
  // useEffect(()=>{
  //   const data = fetch("https://swapi.dev/api/people/1")
  //   .then((res) => {
  //     return res.json(); // call the json method on the response to get JSON
  //   })
  //   .then((result) => {
  //     console.log(result)
  //     setData(result.name)
  //   })
  //   .catch((err) => console.log(err));
  // }, [])
  
  // instead of above data-loading after user clicking,
  // create a function and pass it into <Route loader={startwarData} />

  // To use loader data, we got a hook useLoaderData()
const {name} = useLoaderData();

  return <div>Starwar Characters: {name}</div>;
}
