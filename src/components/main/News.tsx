import { useState, useEffect } from "react";
import Cards from "./Cards";

//API Key
// "https://newsapi.org/v2/everything?q=keyword&apiKey=24897e7e79cf47d79a805ccd483ab2d4";
function News() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=ar&apiKey=24897e7e79cf47d79a805ccd483ab2d4"
      );

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const result = await response.json();

      // Update the state with the fetched data
      setData(result);
    } catch (error) {
      console.error("Error fetching data:");
    }
  };
  console.log(data)

  return (
    <div>
      {data ? (
        // Display the fetched data

          <Cards news={data}/>

      ) : (
        // Display a loading message or other UI while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}

export default News;
