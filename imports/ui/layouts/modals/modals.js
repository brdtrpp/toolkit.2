import './modals.html'

Template.modals.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },

  subactivityId: function(){
    var sub = Session.get('sub');
    var doc = Subactivities.findOne(sub);
    return doc;
  }
});

Template.modals.events({
  "click #foo": function(event, template){

  }
});
