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
    })
  },
  deleteSubactivity: function(doc){
    Subactivities.remove({_id: doc._id});
  }
});
