'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the flawless ' + chalk.red('Angular ES6 Webpack') + ' generator!'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'appName',
                message: 'What is the applications name?',
                default: ''
            },
            {
                type: 'input',
                name: 'ngVersion',
                message: 'What version of Angular would you like to use?',
                default: '1.4.7'
            },
            {
                type: 'confirm',
                name: 'uiRouter',
                message: 'Would you like to use ui-router?',
                default: true
            }
        ];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.ngVersion = props.ngVersion;
            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            var context = {
                ngVersion: this.ngVersion,
                appName: this.appName,
            };

            this.template('_package.json', 'package.json', context);
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('eslintrc'),
                this.destinationPath('.eslintrc')
            );
        }
    },

    install: function () {
        this.npmInstall();
    }
});
