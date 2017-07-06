import './processDetails.html';
import '/imports/ui/pages/scenarios/scenarios.js'


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
