import './modals.html'

Template.modals.helpers({
  subactivityId: function(){
    var sub = Session.get('sub');
    var doc = Subactivities.findOne(sub);
    return doc;
  },

  actId: function(){
    var act = Session.get('act');
    var doc = Activities.findOne(act);
    return doc;
  },

  sceID: function(){
    var sce = Session.get('scenario');
    var doc = Scenarios.findOne(sce);
    return doc;
  },

  applicationSchema: function(){
    return ApplicationSchema
  }
});
