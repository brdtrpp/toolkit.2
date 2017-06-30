import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Processes = new Mongo.Collection("processes");

if (Meteor.isServer) {
 Meteor.publish('processes', function() {
    return Processes.find({"owner.owner": this.userId});
  });
}

// Define the schema for processes
ProcessSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  name: {
    type: String,
    label: "What is the name of the process under review?",
    max: 75
  },

  app: {
    type: [Object],
    label: "What applications are in this Process?",
    minCount: 1,
    maxCount: 4
    },
  "app.$.name": {
    type: String,
  },

  timeperiod: {
    type: Number,
    label: "What is the time period under review? (in minutes)",
  },

  downtime: {
    type: Number,
    label: "What is the downtime cost for this process? (in $/hr)"
  }

});

Processes.attachSchema(ProcessSchema);
