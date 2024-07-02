function Cards(props: any) {
    
   const newsList: string = props.news.articles[0].title

    return <h1>{newsList}</h1>;
}

export default Cards;
