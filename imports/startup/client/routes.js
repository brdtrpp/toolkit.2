import { IronRouter } from 'meteor/iron:router';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import '../../startup/client/user_account.js';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/processes/processes.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/processes/processDetails.js';
import '../../ui/components/spinner.html';


Router.configure({
  layoutTemplate: 'App_body',
  loadingTemplate: 'spinBaby',
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

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('App_home');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
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
