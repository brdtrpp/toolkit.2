import './processDetails.html';
import '/imports/ui/pages/activites/activities.js';

Template.processDetails.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  activity: function(){
    return Activities.find({process: this._id}).fetch();
  },
  active: function(){
    return "active";
  }
});

Template.processDetails.onRendered( function(){
  Session.set('process', this.data._id);
});
