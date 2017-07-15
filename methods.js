Meteor.methods({
  updateProcess: function(proId){
    Processes.update(proId, {
      $set: {},
    });
  },
  updateScenario: function(sceId){
    var proId = Scenarios.findOne(sceId).process;
    Scenarios.update(sceId, {
      $set: {},
    });

    Meteor.call('updateProcess', proId);
  },
  updateActivity: function(actId){
    if (Activities.findOne(actId) !== undefined){
      var sceId = Activities.findOne(actId).scenario;
      Activities.update(actId, {
        $set: {},
      });
      Meteor.call('updateScenario', sceId);
    }
  },
  updateSubactivity: function(subId){
    var actId = Subactivities.findOne(subId).activity;
    Subactivities.update(subId, {
      $set: {},
    });

    Meteor.call('updateActivity', actId);
  },
});
