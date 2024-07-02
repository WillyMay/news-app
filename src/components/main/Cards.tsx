import { v4 } from "uuid";

function Cards(props: any) {
  const newsList: any = props.news.articles;

  const ListedNews = newsList.map((news: any) => (
    <li
      className="text-lg p-4 border-2 border-grey-400 flex items-start m-4 w-2/5"
      key={v4()}
    >
      {news.title}
      <img src={news.urlToImage} className="w-auto"></img>
    </li>
  ));

  return <ul>{ListedNews}</ul>;
}

export default Cards;
