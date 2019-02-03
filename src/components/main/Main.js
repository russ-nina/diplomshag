import React from 'react';
import "./main.css";
import Article from '../Article/Article';
import FullArticle from '../FullArticle/FullArticle';
import Pagination from '../pagination/Pagination';
import Slider from '../slider/Slider';
import Preloader from '../spiner/Preloader';
import GroupedArticle from '../groupedArticle/GroupedArticle';
import axios from 'axios';
import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.jpg';
import slide3 from '../../assets/img/slide3.jpg';

// dummy slides data (фиктивные слайды данных)
const dummiSlides = [
    {
        id:1,
        title: "Hello!",
        src: slide1
    },
    {
        id:2,
        title: "Hello2!",
        src: slide2
    },
    {
        id:3,
        title: "Hello3!",
        src: slide3
    }
];
const DESCRIPTION_LENGTH = 250;
export default class Main extends React.Component{

    render(){
        const articles = this.props.articles;
        const selectedArticle = this.props.selectedArticle;

        let articleListContainer;
        let filterArticle;

        if (articles === undefined) {//ответ еще не получили
            articleListContainer = <Preloader/>;
            filterArticle = <Preloader/>
            // articleListContainer = <spiner/>
        } else if (articles.length) {//норм ответ со статьями
            articleListContainer = <div className="container">
                <Slider
                    slideList={dummiSlides}
                />
                {
                    articles.map((article, index) => {
                        const description = article.text.substring(0, DESCRIPTION_LENGTH);

                        return <Article
                            key={article.id}
                            id={article.id}
                            img={article.image}
                            title={article.headline}
                            date={article.info.date}
                            author={article.info.author}
                            rank={article.info.rank}
                            tags={article.info.tags}
                            description={description}
                            onArticleClick={() => this.props.setSelectedArticle(article)}
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
            articleListContainer = <div>Нет статей</div>
            filterArticle = <div>Нет статей</div>
        }
        let content;
        if (selectedArticle){
            content = <FullArticle

                id={selectedArticle.id}
                img={selectedArticle.image}
                title={selectedArticle.headline}
                date={selectedArticle.info.date}
                author={selectedArticle.info.author}
                rank={selectedArticle.info.rank}
                tags={selectedArticle.info.tags}
                text={selectedArticle.text}
            />;
        } else {
            content = articleListContainer;
        }

        return(
            <main className="middle">
                {content}
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
                                <div className="user_avatar"><img src="https://st3.depositphotos.com/1007566/13342/v/1600/depositphotos_133421882-stock-illustration-silhouette-user-avatar-icon.jpg" alt="Robert Miles"/></div>
                                <div className="user_name"><h5>Robert Miles</h5></div>
                                <div className="user_comment"><p>Lorem ipsum dolor sit eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. </p></div>
                            </div>
                            <div className="comment">
                                <div className="user_avatar"><img src="https://previews.123rf.com/images/stockgiu/stockgiu1710/stockgiu171001699/87844977-silhouette-default-avatar-man-to-social-user.jpg" alt="Robert Miles"/></div>
                                <div className="user_name"><h5>Mick Jagger</h5></div>
                                <div className="user_comment"><p>Lorem ipsum dolor sit eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua dolore magna aliqua. </p></div>
                            </div>
                            <div className="comment">
                                <div className="user_avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKay168kHfQUpu3SXG_FAAYbVVW98N_Y2D9EEIUROHTlOQD1VbA" alt="Robert Miles"/></div>
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