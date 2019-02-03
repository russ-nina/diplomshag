import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import massarticles from "./massarticles";

if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios, {delayResponse: 1000});

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
    mock.onGet('/articles').reply(200, massarticles);
    mock.onGet('/articles/world').reply(200, massarticles);
}

