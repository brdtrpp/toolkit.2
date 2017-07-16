import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';

import './navbar.html';


Template.navbar.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  image: function(){
    return '/img/image2vector.svg';
  }
});

Template.navbar.events({
  'click .logout'(event){
    AccountsTemplates.logout();
  }
});
