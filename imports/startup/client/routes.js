import { IronRouter } from 'meteor/iron:router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/processes/processes.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';


Router.configure({
  layoutTemplate: 'App_body',
  // loadingTemplate: 'loading',
  // notFoundTemplate: '404',
  waitOn: function(){
    return [
      Meteor.subscribe('drivers'),
      Meteor.subscribe('processes'),
      Meteor.subscribe('activities'),
      Meteor.subscribe('subactivity'),
      Meteor.subscribe('state'),
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
