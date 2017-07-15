Meteor.methods({
  cloneSubactivity: function(doc, actId){
    Subactivities.insert({
      activity: actId,
      consumable: doc.consumable,
      downtime: doc.downtime,
      duration: doc.duration,
      itemCost: doc.itemCost,
      itemNum: doc.itemNum,
      name: doc.name + " - clone",
      people: doc.people,
      rate: doc.rate,
      rollup: doc.rollup,
    });
    Meteor.call('updateActivity', actId);
  },

  deleteSubactivity: function(doc){
    var actId = Subactivities.findOne({_id: doc._id}).activity;
    Subactivities.remove({_id: doc._id});
    Meteor.call('updateActivity', actId);
  },
});
