import './processDetails.html';
import '/imports/ui/pages/scenarios/scenarios.js'


Template.processDetails.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  scenarios: function(){
    return Scenarios.find({process: this._id}).fetch();
  },
  active: function(){
    return "active";
  }
});
Template.processDetails.onRendered( function(){
  Session.set('process', this.data._id);
});
