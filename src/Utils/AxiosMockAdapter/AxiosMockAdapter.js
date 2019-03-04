import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import massarticles from "./massarticles";
import singleArticle from "./singleArticle";
import massArticlesWorld from "./massArticlesWorld";
import massArticlesStories from "./massArticlesStories";
import masspages from "./masspages";
import massfilteredarticles from "./massfilterarticles";
import massFilteredArticlesWeighty from "./massFilteredArticlesWeighty";
import massFilteredArticlesPopular from "./massFilteredArticlesPopular";
import massFilteredArticlesArchived from "./massFilteredArticlesArchived";
import categories from "./categories";

if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios, {delayResponse: 500});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
    mock.onGet('/articles').reply(200, massarticles);
    mock.onGet('/articles/1').reply(200, singleArticle);
    mock.onGet('/articles/world').reply(200, massArticlesWorld);
    mock.onGet('/articles/stories').reply(200, massArticlesStories);
    mock.onGet('/articles/search',{ params: { searchText: 'john' } }).reply(200, massArticlesStories);

    mock.onGet('/page').reply(200, masspages);
    mock.onGet('/page/our-history').reply(200, masspages);
    mock.onGet('/page/our-team').reply(200, masspages);
    mock.onGet('/page/how-we-do-it').reply(200, masspages);
    mock.onGet('/page/contacts').reply(200, masspages);

    mock.onGet('/filteredarticles').reply(200, massFilteredArticlesWeighty);
    mock.onGet('/filteredarticles/weighty').reply(200, massFilteredArticlesWeighty);
    mock.onGet('/filteredarticles/popular').reply(200, massFilteredArticlesPopular);
    mock.onGet('/filteredarticles/archived').reply(200, massFilteredArticlesArchived);

    mock.onGet('/category').reply(200, categories);
}

