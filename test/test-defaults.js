'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('angular-es6-webpack:app with default prompt answers', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true })
            .on('end', done);
    });

    it('should creates files', function () {
        assert.file([
            'package.json',
            '.editorconfig',
            '.eslintrc',
            '.gitignore',
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

    it('should have default angular version', function() {
        assert.fileContent([
            ['package.json', /"angular": "1\.4\.7"/],
            ['package.json', /"angular-resource": "1\.4\.7"/],
            ['package.json', /"angular-sanitize": "1\.4\.7"/],
            ['package.json', /"angular-mocks": "1\.4\.7"/]
        ]);
    });

    it('should have default name', function() {
        assert.fileContent('package.json', /"name": "angular-es6-app"/);
    });

    it('should have ui-router', function() {
        assert.fileContent('package.json', /"angular-ui-router":/);
    });

    it('should have default angular module name', function() {
        assert.fileContent('app/app.js', /angular\.module\('AngularES6App'/);
    });

    it('should import the correct router', function() {
        assert.fileContent([
            ['app/app.js', /import 'angular-ui-router'/],
            ['app/app.js', /'ngResource', 'ui-router',/]
        ]);
    });
});
