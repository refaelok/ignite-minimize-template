import apisauce from 'apisauce';

const create = (baseURL = 'https://api.github.com/') => {
    const api = apisauce.create({
        baseURL,
        headers: {
            'Cache-Control': 'no-cache',
        }
    });

    const getRoot = () => api.get('');

    return {
        getRoot
    };
};

export default {
    create
};
