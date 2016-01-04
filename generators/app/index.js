'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        var done = this.async();

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
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );

            this.fs.copy(
                this.templatePath('app/directives'),
                this.destinationPath('app/directives')
            );

            this.fs.copy(
                this.templatePath('app/services'),
                this.destinationPath('app/services')
            );

            this.fs.copy(
                this.templatePath('app/images'),
                this.destinationPath('app/images')
            );

            this.template('app/_app.js', 'app/app.js', context);
            this.template('app/_index.html', 'app/index.html', context);

            this.fs.copy(
                this.templatePath('app/components/main/main.html'),
                this.destinationPath('app/components/main/main.html')
            );

            this.fs.copy(
                this.templatePath('app/components/main/main.scss'),
                this.destinationPath('app/components/main/main.scss')
            );

            this.template('app/components/main/_main.routes.js', 'app/components/main/main.routes.js', context);
            this.template('app/components/main/_main-controller.js', 'app/components/main/main-controller.js', context);

            this.fs.copy(
                this.templatePath('test/spec/tests.webpack.js'),
                this.destinationPath('test/spec/tests.webpack.js')
            );

            this.fs.copy(
                this.templatePath('test/karma.conf.js'),
                this.destinationPath('test/karma.conf.js')
            );

            this.fs.copy(
                this.templatePath('test/karma.ci.conf.js'),
                this.destinationPath('test/karma.ci.conf.js')
            );

            this.template('test/spec/components/_main-controller-test.js', 'test/spec/components/main-controller-test.js', context);

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

            this.fs.copy(
                this.templatePath('VERSION'),
                this.destinationPath('VERSION')
            );

            this.fs.copy(
                this.templatePath('.babelrc'),
                this.destinationPath('.babelrc')
            );

            this.fs.copy(
                this.templatePath('.eslintignore'),
                this.destinationPath('.eslintignore')
            );
        }
    },

    install: function () {
        this.npmInstall();
    }
});
