import './processes.html'
import './processListItem.html'

Template.processes.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },

  process: function(){
    return Processes.find().fetch();
  }
});

Template.processes.events({
  "click #foo": function(event, template){

  }
});
