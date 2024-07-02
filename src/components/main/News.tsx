function News() {
  const url =
    "https://newsapi.org/v2/everything?q=keyword&apiKey=24897e7e79cf47d79a805ccd483ab2d4";

  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );
  return <div>News</div>;
}

export default News;
