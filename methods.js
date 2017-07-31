Meteor.methods({
  updateProcess: function(proId){
    Processes.update(proId, {
      $set: {},
    });
  },

  updateScenario: function(sceId){
    var proId = Scenarios.findOne(sceId).process;

    if (proId != undefined){
      Scenarios.update(sceId, {
        $set: {},
      });

      Meteor.call('updateProcess', proId);
    }
  },

  createApplication: function(doc){
    // if(Meteor.isClient){
    //   var pro = Session.get('process');
    //   console.log(Processes.findOne(pro));
    //   Processes.update(pro, {
    //     $push: {
    //       "app": doc
    //     }
    //   });
    //   console.log(Processes.findOne(pro));
    // };
    console.log(doc);

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
