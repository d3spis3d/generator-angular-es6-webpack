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
                default: 'Angular ES6 App'
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
            this.uiRouter = props.uiRouter;
            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            var context = {
                ngVersion: this.ngVersion,
                appName: this.appName,
                uiRouter: this.uiRouter
            };

            this.template('_package.json', 'package.json', context);

            this.fs.copy(
                this.templatePath('test'),
                this.destinationPath('test')
            );

            this.fs.copy(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js')
            );
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
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
        }
    },

    install: function () {
        this.npmInstall();
    }
});
