import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import style from "./Home.module.css";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
//importing icons from React-icons
import { BiArrowBack } from "react-icons/bi";

export default function Example() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();

    // counting the occurrence of each character in the text given text :
    const charCounts = {};
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i).toLowerCase();

      //condition to check only alphabet characters excluding special characters "." , "?"  ... : 
      if (/[a-z]/.test(char)) {
        // if Character repeat increse the count by 1 else make it count 1 (i.e. first occurance ) : 
        charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
      }
    }

    // sorting the characters in descending order according to count of the numbers :
    const sortedChars = Object.keys(charCounts).sort((a, b) => {
      return charCounts[b] - charCounts[a];
    });

    // As asked in the question listing only top 20 repetaing words from the lsit of all other words  using slice method : 
    const topChars = sortedChars.slice(0, 20).map((char) => {
      return { char: char, count: charCounts[char] };
    });

    //updating the state with the setData state which consists top 20 repeting characters : 
    setData(topChars);
  };

  //Useeffect hook :
  useEffect(() => {
    //calling the function fetchdata :
    fetchData();
  }, []);

  // header for Excel sheet heading in CSV file :
  const header = [
    {
      label: "Characters",
      key: "char",
    },
    {
      label: "Count of Character",
      key: "count",
    },
  ];

  const csvReport = {
    Filename: "data.csv",
    header: header,
    data: data,
  };

  //useNavigate hook to change page : 
  const navigate = useNavigate();

  //button to return previous page 
  const prevpage = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Top 20 occurring characters:</h2>
      <div className={style.graph}>
        <BarChart width={1500} height={600} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey=  "char" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#9f26f0" barSize={50} />
        </BarChart>
      </div>

    {/* spread Operator to list charters and counts in CSV files  */}


      <CSVLink {...csvReport} className={style.btn}>
        Click to download csv
      </CSVLink>

      <button className={style.prv} onClick={prevpage}>
        <BiArrowBack size={25} />
      </button>
    </div>
  );
}
