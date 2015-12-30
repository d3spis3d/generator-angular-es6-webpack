import 'jquery';
import angular from 'angular';
import 'angular-resource';
<% if(uiRouter) { %>import 'angular-ui-router';<% } else { %>import 'angular-route';<% } %>
import 'angular-sanitize';

import 'services/services';
import 'directives/directives';
import 'services/version-service';

angular.module('<%= appName.replace(/\s/g, '') %>', ['ngResource', <% if(uiRouter) { %>'ui.router'<% } else { %>'ngRoute'<% } %>,  'services', 'directives', 'ngSanitize', 'version']);
