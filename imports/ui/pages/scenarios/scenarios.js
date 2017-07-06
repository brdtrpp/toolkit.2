import './scenarios.html'
import '/imports/ui/pages/activites/activities.js';


Template.scenario.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

// Template.scenario.events({
//   "click #foo": function(event, template){
//
//   }
// });


Template.scenario.onRendered( function(){
  Session.set('scenario', this.data._id);
});
