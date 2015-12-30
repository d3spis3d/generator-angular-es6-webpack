'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('angular-es6-webpack:app with prompt answers', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true })
            .withPrompts({
                appName: 'Test Angular Application',
                ngVersion: '1.4.6',
                uiRouter: false
            })
            .on('end', done);
    });

    it('should creates files', function () {
        assert.file([
            'package.json',
            'gulpfile.js',
            '.editorconfig',
            '.eslintrc',
            '.gitignore',
            'VERSION',
            'webpack.config.js',
            'test/spec/tests.webpack.js',
            'test/karma.conf.js',
            'test/karma.ci.conf.js',
            'app/app.js',
            'app/services/services.js',
            'app/directives/directives.js',
            'app/components/main/main.routes.js',
            'app/components/main/main.html',
            'app/components/main/main-controller.js'
        ]);
    });

    it('should have user defined angular version', function() {
        assert.fileContent([
            ['package.json', /"angular": "1\.4\.6"/],
            ['package.json', /"angular-resource": "1\.4\.6"/],
            ['package.json', /"angular-sanitize": "1\.4\.6"/],
            ['package.json', /"angular-mocks": "1\.4\.6"/]
        ]);
    });

    it('should have user defined name', function() {
        assert.fileContent('package.json', /"name": "test-angular-application"/);
    });

    it('should not have ui-router', function() {
        assert.fileContent('package.json', /"angular-route": "1\.4\.6"/);
    });

    it('should have user defined angular module name', function() {
        assert.fileContent('app/app.js', /angular\.module\('TestAngularApplication'/);
    });

    it('should import the correct router', function() {
        assert.fileContent([
            ['app/app.js', /import 'angular-route'/],
            ['app/app.js', /'ngResource', 'ngRoute',/]
        ]);
    });

    it('should use correct routing in main.routes.js', function() {
        assert.fileContent('app/components/main/main.routes.js', /\$routeProvider\.when\('\/'/);
    });

    it('should use the correct view directive in index.html', function() {
        assert.fileContent('app/index.html', /<div ng-view><\/div>/);
    });
});
