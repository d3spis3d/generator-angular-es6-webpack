'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-es6-webpack:app', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({ skipInstall: true })
            .withPrompts({ someOption: true })
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'package.json',
            '.editorconfig',
            '.eslintrc',
            '.gitignore',
            'webpack.config.js',
            'test/spec/tests.webpack.js',
            'test/karma.conf.js',
            'test/karma.ci.conf.js'
        ]);
    });
});
