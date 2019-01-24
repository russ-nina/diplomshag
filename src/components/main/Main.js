import React from 'react';
import "./main.css";
import Article from '../Article/Article';
import Pagination from '../pagination/Pagination';
import Slider from '../slider/Slider';
import Preloader from '../spiner/Preloader';
import GroupedArticle from '../groupedArticle/GroupedArticle';
import axios from 'axios';
import kotik from '../../assets/img/slide1.jpg';

// dummy slides data (фиктивные слайды данных)
const dummiSlides = [
    {
        id:1,
        title: "Hello!",
        src: kotik
    },
    {
        id:2,
        title: "Hello2!",
        src: kotik
    },
    {
        id:3,
        title: "Hello3!",
        src: kotik
    }
];

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: undefined
        }
    }

    componentDidMount() {
        axios.get('/articles')
            .then(response => this.setState({articles: response.data}))
            .catch(error => {
                // handle error
                console.log('/articles get error', error);
            });
    }

    render(){
        const {articles} = this.state;
        let articleContainer;
        let filterArticle;

        if (articles === undefined) {//ответ еще не получили
            articleContainer = <Preloader/>;
            filterArticle = <Preloader/>
            // articleContainer = <spiner/>
        } else if (articles.length) {//норм ответ со статьями
            articleContainer = <div className="container">
                <Slider
                    slideList={dummiSlides}
                />
                {
                    articles.map((article, index) => {
                        return <Article
                            key={article.id}
                            img={article.image}
                            title={article.headline}
                            date={article.info.date}
                            author={article.info.author}
                            rank={article.info.rank}
                            tags={article.info.tags}
                            description={article.description}
                        />
                    })
                }
                <Pagination/>
            </div>
            filterArticle = <div className="filter_article_cover">
                {
                    articles.map((article, index) => {
                        return <GroupedArticle
                            key={article.id}
                            img={article.image}
                            rank={article.info.rank}
                            title={article.headline}
                            sumcomments={article.sumcomments}
                        />
                    })
                }
            </div>
        } else {//получили пустой ответ
            articleContainer = <div>Нет статей</div>
            filterArticle = <div>Нет статей</div>
        }

        return(
            <main className="middle">
                {articleContainer}
                <aside className="right_sidebar">
                    <div className="search">
                        <p>Search</p>
                        <input type="search" placeholder="type an hit enter"/>
                    </div>
                    <div className="filter">
                        <div className="filter_headline">
                            <div className="recent active"><p>Recent</p></div>
                            <div className="popular"><p>Popular</p></div>
                            <div className="archived"><p>Archived</p></div>
                        </div>
                        {filterArticle}
                    </div>
                    <div className="comments_block">
                        <div className="comments_category">
                            <div className="recent_comments"><p>Recent comments</p></div>
                        </div>
                        <div className="comments">
                            <div className="comment">
                                <div className="user_avatar"><img src="img/avatarsiluet.jpg" alt="Robert Miles"/></div>
                                <div className="user_name"><h5>Robert Miles</h5></div>
                                <div className="user_comment"><p>Lorem ipsum dolor sit eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. </p></div>
                            </div>
                            <div className="comment">
                                <div className="user_avatar"><img src="img/avatarsiluet.jpg" alt="Robert Miles"/></div>
                                <div className="user_name"><h5>Mick Jagger</h5></div>
                                <div className="user_comment"><p>Lorem ipsum dolor sit eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua dolore magna aliqua. </p></div>
                            </div>
                            <div className="comment">
                                <div className="user_avatar"><img src="img/avatarsiluet.jpg" alt="Robert Miles"/></div>
                                <div className="user_name"><h5>Steven Spielberg</h5></div>
                                <div className="user_comment"><p>Lorem ipsum dolor sit eiusmod tempor . </p></div>
                            </div>
                        </div>
                    </div>
                </aside>

            </main>
        );
    }
}