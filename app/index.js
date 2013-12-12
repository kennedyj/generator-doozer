'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DoozerGenerator = module.exports = function DoozerGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  /*
  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
  */
};

util.inherits(DoozerGenerator, yeoman.generators.Base);

DoozerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'doozerName',
    message: 'What do you want to call your first form?'
  }];

  this.prompt(prompts, function (props) {
    this.doozerName = props.doozerName;

    cb();
  }.bind(this));
};

DoozerGenerator.prototype.app = function app() {
  this.mkdir('forms');
  this.mkdir('tests');

  this.copy('requirements.txt', 'requirements.txt')
  this.copy('gitignore', '.gitignore')
  this.copy('coveragerc', '.coveragerc')
  this.template('_form.json', 'forms/'+this.doozerName.toLowerCase()+'.json')
  this.template('README.md', 'README.md');
  this.template('main.py', 'main.py');
  this.template('test_main.py', 'tests/test_main.py');
};

DoozerGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('Dockerfile', 'Dockerfile');
  this.copy('Makefile', 'Makefile');
};
