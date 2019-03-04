import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import AxiosMockAdapter from './Utils/AxiosMockAdapter/AxiosMockAdapter';
import axios from "axios";

const DEFAULT_CATEGORY = "home";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: undefined,
            selectedCategory: DEFAULT_CATEGORY,
            articles: undefined,
            selectedArticle: undefined,
            selectedArticleFetching: false,
            pages: undefined,
            selectedPage: undefined,
            searchPhrase: undefined
        }
    };

    componentDidMount() {
        this.getArticles(this.state.selectedCategory);
        this.getPages(this.state.pages);
        this.getCategories();
    };

    onPageClick = (page) => {
        this.setSelectedArticle(undefined);
        this.setSelectedPage(page);
        this.getPages(page);
        window.scrollTo(0,0);
    };

    onCategoryClick = (category) => {
        this.setSelectedArticle(undefined);
        this.setSelectedPage(undefined);
        this.setSelectedCategory(category);
        this.getArticles(category);
        this.setState({searchPhrase: ''});
        window.scrollTo(0,0);
    };

    onSelectArticle = (article) => {
        this.setSelectedPage(undefined);
        this.setSelectedArticle(article);
        this.setSelectedCategory('');
    };

    onSelectArticleId = (articleId) => {
        this.onSelectArticle(undefined);
        this.setState({selectedArticleFetching: true});

        let articleIdUrl = `/articles/${articleId}`;

        axios.get(articleIdUrl)
            .then(response => {
                this.setSelectedArticle(response.data);
                this.setState({selectedArticleFetching: false});
            })
            .catch(error => {
                // handle error
                this.onSelectArticle(undefined);
                this.setState({selectedArticleFetching: false});
            });
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

    getArticles = (category, searchPhrase) => {
        let axiosConfig = {};

        this.setState({articles: undefined});
        let articlesUrl = '/articles';
        if (searchPhrase) {
            articlesUrl = `/articles/search`;
            axiosConfig.params = {
                searchText: searchPhrase
            };
        } else if (category && category !== DEFAULT_CATEGORY) {
           articlesUrl = `/articles/${category}`;
        }
        axios.get(articlesUrl, axiosConfig)
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

    getCategories = () => {
        let categoryUrl = '/category';
        axios.get(categoryUrl)
            .then(response => this.setState({categories: response.data}))
            .catch(error => {
                // handle error
                this.setState({categories: []});
                console.log('/categories get error', error);
            });
    };

    handleSearch =(e) => {
        const searchPhrase = e.target.value;
        this.setState({searchPhrase: searchPhrase});

        this.getArticles(this.state.selectedCategory, searchPhrase.toLowerCase());
    };

    render() {
        return (
            <div className="App">
                <Header
                    selectedCategory={this.state.selectedCategory}
                    categories={this.state.categories}
                    onCategoryClick={this.onCategoryClick}
                />
                <Main
                    setSelectedArticle={this.onSelectArticle}
                    setSelectedArticleId={this.onSelectArticleId}
                    articles={this.state.articles}
                    selectedArticle={this.state.selectedArticle}
                    selectedArticleFetching={this.state.selectedArticleFetching}
                    selectedPage={this.state.selectedPage}
                    handleSearch={this.handleSearch}
                    searchPhrase={this.state.searchPhrase}
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
