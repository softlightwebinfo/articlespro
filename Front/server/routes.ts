const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
module.exports = route
    .add("index", "/")
    .add("register", "/register")
    .add("login", "/login")
    .add({name: 'listCategories', pattern: '/categories', page: 'listCategories'})
    .add({name: 'listOffers', pattern: '/offers', page: 'listOffers'})
    .add({name: 'listPromotions', pattern: '/promotions', page: 'listPromotions'})
    .add({name: 'listProjects', pattern: '/projects', page: 'listProjects'})
    .add({name: 'listPhotos', pattern: '/gallery', page: 'listPhotos'})
    .add({name: 'listPlusArticles', pattern: '/plus-articles', page: 'listPlusArticles'})
    .add({name: 'blog', pattern: '/blog', page: 'blog'})
    .add({name: 'dashboard', pattern: '/dashboard', page: 'dashboard/index'})
    .add({name: 'dashboardPublish', pattern: '/dashboard/publish', page: 'dashboard/publish'})
    .add({name: 'dashboardArticles', pattern: '/dashboard/articles', page: 'dashboard/articles'})
    .add({name: 'directory', pattern: '/directory', page: 'directory'});
