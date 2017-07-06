import SimpleSchema from 'simpl-schema';
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
    },
    autoValue: function(){
      if (Meteor.isClient){
        var process = Session.get('process');
        
        return process;
      }
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
      if (Meteor.isClient){
        return 0;
      }
    }
  }
});

Scenarios.attachSchema(ScenarioSchema);
