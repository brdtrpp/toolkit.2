import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Processes = new Mongo.Collection("processes");

if (Meteor.isServer) {
 Meteor.publish('processes', function() {
    return Processes.find({"owner.id": this.userId});
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
    type: Array,
    label: "What applications are in this Process?",
  },

  "app.$":{
    label: function() {
      return "toaster"
    },
    type: Object
  },

  "app.$.name": {
    type: String,
  },

  timeperiod: {
    type: Number,
    label: "What is the time period under review? (in minutes)",
    min: 0
  },

  downtime: {
    type: Number,
    label: "What is the downtime cost for this process? (in $/hr)",
    min: 0
  }

});

Processes.attachSchema(ProcessSchema);
