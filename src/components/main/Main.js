import React from 'react';
import "./main.css";
import Article from '../Article/Article';
import Pagination from '../pagination/Pagination';
import Slider from '../slider/Slider';
import massarticles from '../massarticles';

export default class Main extends React.Component{

    render(){
        const articleCount = massarticles.length;
        let articleContainer;
        if (articleCount > 0){
            articleContainer = <div className="container">
                {
                    massarticles.map((article, index) => {
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
                <Slider/>
            </div>

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
                        <div className="filter_article_cover">
                            <div className="filter_article">
                                <div className="filter_article_image"><img src="img/a1.jpg" alt=""/></div>
                                <div className="filter_article_headline"><h5><a href="#">Brazil deploys troops to stop
                                    violence in Fortaleza</a></h5></div>
                                <div className="filter_article_comment"><p>6 Comments</p></div>
                            </div>
                            <div className="filter_article">
                                <div className="filter_article_image"><img src="img/b2.png" alt=""/></div>
                                <div className="filter_article_headline"><h5><a href="#">Brexit: PM says vote on her
                                    deal will 'definitely' go ahead</a></h5></div>
                                <div className="filter_article_comment"><p>2 Comments</p></div>
                            </div>
                            <div className="filter_article">
                                <div className="filter_article_image"><img src="img/c3.jpg" alt=""/></div>
                                <div className="filter_article_headline"><h5><a href="#">I met my boyfriend 12 years
                                    after giving birth to his child</a></h5></div>
                                <div className="filter_article_comment"><p>3 Comments</p></div>
                            </div>
                            <div className="filter_article">
                                <div className="filter_article_image"><img src="img/d4.jpg" alt=""/></div>
                                <div className="filter_article_headline"><h5><a href="#">After giving birth to his
                                    child</a></h5></div>
                                <div className="filter_article_comment"><p>9 Comments</p></div>
                            </div>
                        </div>
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