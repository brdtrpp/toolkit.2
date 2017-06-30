import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';

import './navbar.html';

Template.navbar.events({
  'click .logout'(event){
    AccountsTemplates.logout();
  }
});
