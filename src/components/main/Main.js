import React from 'react';
import "./main.css";
import Article from '../Article/Article';
import FullArticle from '../FullArticle/FullArticle';
import FullPage from '../FullPage/FullPage';
import Pagination from '../pagination/Pagination';
import Slider from '../slider/Slider';
import Preloader from '../spiner/Preloader';
import GroupedArticle from '../groupedArticle/GroupedArticle';
import FilterCategory from '../FilterCategory/FilterCategory';
import AxiosMockAdapter from '../../Utils/AxiosMockAdapter/AxiosMockAdapter';
import axios from "axios";


const DESCRIPTION_LENGTH = 350;
const FILTER_CATEGORIES = {
    WEIGHTY: "weighty",
    POPULAR: "popular",
    ARCHIVED: "archived",
};
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedFilterCategory: FILTER_CATEGORIES.WEIGHTY,
            filteredArticles: undefined,
        }
    };
    componentDidMount() {
        this.getFilterArticles(this.state.selectedFilterCategory);
    };
    setSelectedFilterCategory = (filterCategory) => {
        this.setState({selectedFilterCategory: filterCategory});
    };
    onFilterCategoryClick = (filterCategory) => {
        this.setSelectedFilterCategory(filterCategory);
        this.getFilterArticles(filterCategory);
    };

    getArticlesList = (articles) => {
        let articleListContainer;

        if (articles === undefined) {//ответ еще не получили
            articleListContainer = <Preloader/>;
        } else if (articles.length) {//норм ответ со статьями
            articleListContainer = <div className="container">
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
                <Slider
                    slideList={articles}
                />
            </div>;
        } else {//получили пустой ответ
            articleListContainer = <div>Нет статей</div>
        }

        return articleListContainer;
    };

    getFilterArticles = (filterCategory) => {
        this.setState({filteredArticles: undefined});
        let filteredArticlesUrl = '/filteredarticles';
        if (filterCategory && filterCategory !== FILTER_CATEGORIES.WEIGHTY) {
            filteredArticlesUrl = `/filteredarticles/${filterCategory}`;
        }
        axios.get(filteredArticlesUrl)
            .then(response => this.setState({filteredArticles: response.data}))
            .catch(error => {
                // handle error
                this.setState({filteredArticles: []});
                console.log('/filteredarticles get error', error);
            });
    };

    getFilterArticlesList = (filteredArticles) => {
        let filterArticle;
        if (filteredArticles === undefined) {//ответ еще не получили
            filterArticle = <Preloader/>
        } else if (filteredArticles.length) {//норм ответ со статьями
            filterArticle = <div className="filter_article_cover">
                {
                    filteredArticles.map((filteredArticle, index) => {
                        return <GroupedArticle
                            key={filteredArticle.id}
                            img={filteredArticle.image}
                            title={filteredArticle.headline}
                            sumcomments={filteredArticle.sumcomments}
                        />
                    })
                }
            </div>
        } else {//получили пустой ответ
            filterArticle = <div>Нет статей</div>
        }

        return filterArticle;
    };

    handleSearch =(e) => {
        let articless = this.articles.filter(function(article) {
            return article.text.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        this.setState({
            articles: articless
        });
    };

    render(){
        const filteredArticles = this.state.filteredArticles;
        const filterArticle = this.getFilterArticlesList(filteredArticles);
        const articles = this.props.articles;
        const selectedArticle = this.props.selectedArticle;
        const selectedPage = this.props.selectedPage;

        let content;
        if (selectedArticle){
            content = <FullArticle

                id={selectedArticle.id}
                img={selectedArticle.image}
                slides_img={selectedArticle.slides_img}
                title={selectedArticle.headline}
                date={selectedArticle.info.date}
                author={selectedArticle.info.author}
                rank={selectedArticle.info.rank}
                tags={selectedArticle.info.tags}
                text={selectedArticle.text}
            />;
        } else if(selectedPage){
            content = <FullPage
                id={selectedPage.id}
                img={selectedPage.image}
                title={selectedPage.title}
                text={selectedPage.text}
            />
        }
        else {
            content = this.getArticlesList(articles);
        }

        return(
            <main className="middle">
                {content}
                <aside className="right_sidebar">
                    <div className="search">
                        <p>Search</p>
                        <input type="search" placeholder="type and hit enter"
                               onChange={this.handleSearch}/>
                    </div>
                    <div className="filter">
                        <FilterCategory
                            filterCategories = {Object.values(FILTER_CATEGORIES)}
                            selectedFilterCategory = {this.state.selectedFilterCategory}
                            onFilterCategoryClick = {this.onFilterCategoryClick}
                        />
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