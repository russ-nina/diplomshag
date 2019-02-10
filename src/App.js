import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import AxiosMockAdapter from './Utils/AxiosMockAdapter/AxiosMockAdapter';
import axios from "axios";

const CATEGORIES = {
    HOME: "home",
    WORLD: "world",
    STORIES: "stories",
    SPORT: "sport"
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: CATEGORIES.HOME,
            articles: undefined,
            selectedArticle: undefined,
            pages: undefined,
            selectedPage: undefined
        }
    };

    componentDidMount() {
        this.getArticles(this.state.selectedCategory);
        this.getPages(this.state.pages);
    };

    onPageClick = (page) => {
        this.setSelectedArticle(undefined);

        this.setSelectedPage(page);
        this.getPages(page);
    };

    onCategoryClick = (category) => {
        this.setSelectedArticle(undefined);
        this.setSelectedPage(undefined);

        this.setSelectedCategory(category);
        this.getArticles(category);

        window.scrollTo(0,0);
    };

    onSelectArticle = (article) => {
        this.setSelectedPage(undefined);

        this.setSelectedArticle(article);
        this.setSelectedCategory('');
    };

    setSelectedPage = (page) => {
        this.setState({selectedPage: page});
    };

    setSelectedArticle = (article) => {
        this.setState({selectedArticle: article});
    };

    setSelectedCategory = (category) => {
        this.setState({selectedCategory: category});
    };

    getArticles = (category) => {
        this.setState({articles: undefined});

        let articlesUrl = '/articles';

        if (category && category !== CATEGORIES.HOME) {
            articlesUrl = `/articles/${category}`;
        }

        axios.get(articlesUrl)
            .then(response => this.setState({articles: response.data}))
            .catch(error => {
                // handle error
                this.setState({articles: []});
                console.log('/articles get error', error);
            });
    };
    getPages = () => {
        let pageUrl = '/page';

        axios.get(pageUrl)
            .then(response => this.setState({pages: response.data}))
            .catch(error => {
                // handle error
                this.setState({pages: []});
                console.log('/page get error', error);
            });
    };

    render() {
        return (
            <div className="App">
                <Header
                    selectedCategory={this.state.selectedCategory}
                    categories={Object.values(CATEGORIES)}
                    onCategoryClick={this.onCategoryClick}
                />
                <Main
                    setSelectedArticle={this.onSelectArticle}
                    articles={this.state.articles}
                    selectedArticle={this.state.selectedArticle}
                    selectedPage={this.state.selectedPage}
                />
                <Footer
                    pages={this.state.pages}
                    onPageClick={this.onPageClick}
                    selectedPage={this.state.selectedPage}
                />
            </div>
        );
    }
}

export default App;
