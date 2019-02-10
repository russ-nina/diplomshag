import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import massarticles from "./massarticles";
import masspages from "./masspages";

if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios, {delayResponse: 1000});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
    mock.onGet('/articles').reply(200, massarticles);
    mock.onGet('/articles/world').reply(200, massarticles);
    mock.onGet('/articles/stories').reply(200, massarticles);
    mock.onGet('/page').reply(200, masspages);
    mock.onGet('/page/our-history').reply(200, masspages);
    mock.onGet('/page/our-team').reply(200, masspages);
    mock.onGet('/page/how-we-do-it').reply(200, masspages);
    mock.onGet('/page/contacts').reply(200, masspages);
}

