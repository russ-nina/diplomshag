import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import AxiosMockAdapter from './Utils/AxiosMockAdapter/AxiosMockAdapter';
import axios from "axios";

const CATEGORIES = {
    ALL: "all",
    WORLD: "world",
    OTHER: "other"
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCategory: CATEGORIES.ALL,
            articles: undefined,
            selectedArticle: undefined
        }
    };
    componentDidMount() {
        this.getArticles(this.state.selectedCategory);
    }

    onSelectArticle = (article) => {
        this.setSelectedArticle(article);
        this.setSelectedCategory('');
    };

    setSelectedArticle = (article) => {
        this.setState({selectedArticle: article});
    };

    setSelectedCategory = (category) => {
        this.setState({selectedCategory: category});
    };

    onCategoryClick = (category) => {
        this.setSelectedArticle(undefined);
        this.setSelectedCategory(category);

        this.getArticles(category);
    };

    getArticles = (category) => {
        this.setState({articles: undefined});

        let articlesUrl = '/articles';

        if (category && category !== CATEGORIES.ALL) {
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

  render() {
    return (
      <div className="App">
        <Header
            selectedCategory={this.state.selectedCategory}
            categories={Object.values(CATEGORIES)}
            onCategoryClick={this.onCategoryClick}
        />
        <Main
            setSelectedArticle = {this.onSelectArticle}
            articles = {this.state.articles}
            selectedArticle = {this.state.selectedArticle}
        />
          <Footer/>
      </div>
    );
  }
}

export default App;
