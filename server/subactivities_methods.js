Meteor.methods({
  cloneSubactivity: function(doc){
    Subactivities.insert({
      activity: doc.activity,
      consumable: doc.consumable,
      downtime: doc.downtime,
      duration: doc.duration,
      itemCost: doc.itemCost,
      itemNum: doc.itemNum,
      name: doc.name + " - clone",
      people: doc.people,
      rate: doc.rate,
      rollup: doc.rollup
    });
    Meteor.call('updateActivity', doc.activity);
  },
  deleteSubactivity: function(doc){
    var actId = Subactivities.findOne({_id: doc._id}).activity;
    Subactivities.remove({_id: doc._id});
    Meteor.call('updateActivity', actId);
  }
});
