import './activities.html'
import './activityItem.js'


Template.activities.helpers({
  create: function(){
    console.log('elephant');
  },
  rendered: function(){

  },
  destroyed: function(){

  },
  
});

Template.activities.events({
  "click .foo": function(event, template){

  }
});
