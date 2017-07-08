import './processes.html'
import './processListItem.js'

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

});
