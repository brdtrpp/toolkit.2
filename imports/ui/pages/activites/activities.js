import './activities.html'
import './activityItem.html'


Template.activities.helpers({
  create: function(){
    console.log('elephant');
  },
  rendered: function(){

  },
  destroyed: function(){

  },
  activity: function(){
    return Activities.find().fetch();
  },
});

Template.activities.events({
  "click .foo": function(event, template){

  }
});
