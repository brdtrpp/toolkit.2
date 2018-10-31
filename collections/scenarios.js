import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor'
SimpleSchema.extendOptions(['autoform']);
Scenarios = new Mongo.Collection('scenarios');

if (Meteor.isServer) {
  Meteor.publish('scenarios', function() {
    return Scenarios.find({"owner.id": this.userId});
  })
}

ScenarioSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  process: {
    type: String,
    autoform: {
      omit: true,
    }
  },

  application: {
    type: String,
    autoform: {
      omit: true,
    }
  },

  name: {
    type: String,
  },

  description: {
    type: String,

  },

  state: {
    type: String,
    // allowedValues: ["current", "future"],
  },

  rollup: {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      var sumArray = [];
      var sces = Activities.find({scenario: this.docId}).fetch();
      _.forEach(sces, function(sce){
        sumArray.push(sce.rollup);
      });
      function getSum(total, num){
        return total + num;
      }
      if (sumArray == 0) {
        return 0;
      } else {
        return sumArray.reduce(getSum);
      }
    }
  }
});

Scenarios.attachSchema(ScenarioSchema);
