import { IronRouter } from 'meteor/iron:router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/processes/processes.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/processes/processDetails.js';


Router.configure({
  layoutTemplate: 'App_body',
  // loadingTemplate: 'loading',
  // notFoundTemplate: '404',
  waitOn: function(){
    return [
      Meteor.subscribe('drivers'),
      Meteor.subscribe('processes'),
      Meteor.subscribe('activities'),
      Meteor.subscribe('subactivities'),
      Meteor.subscribe('scenarios'),
    ];
  },
});

// Set up all routes in the app
Router.route('/', function() {
  this.render('App_home');
},{
  name: "home",
});

Router.route('/processes', function() {
  this.render('processes');
},{
  name: "processes",
});

Router.route('/processes/:id', function() {
  var params = this.params;
  var id = params.id;
  this.render('processDetails', {
    data: function () {
      return Processes.findOne({_id: id});
    }
  });
},{
  name: "processDetails",
});
