import {v4} from "uuid"

function Cards(props: any) {
    
   const newsList: any = props.news.articles

   const ListedNews = newsList.map((news: any) => <li key={v4()}>{news.title}</li>)

    return <h1 className="text-lg font-bold">{ListedNews}</h1>;
}

export default Cards;
