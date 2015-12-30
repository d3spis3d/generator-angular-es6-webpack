import 'components/main/main.html';
import 'components/main/main.scss';
import mainCtrl from 'components/main/main-controller';

<% if(uiRouter) { %>export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/main/main.html',
                controller: mainCtrl,
                controllerAs: 'mainCtrl'
            }
        }
    });
}<% } else { %>export default /*@ngInject*/ function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/components/main/main.html',
        controller: mainCtrl,
        controllerAs: 'mainCtrl'
    })
    .otherwise('/');
}<% } %>
