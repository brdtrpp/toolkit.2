import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
State = new Mongo.Collection('state');

if (Meteor.isServer) {
  Meteor.publish('state', function() {
    return State.find({"owner.owner": this.userId});
  })
}

StateSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  driver: {
    type: String,
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

  app: {
    type: String,
    autoform: {
      omit: true,
    }
  },

  state: {
    type: String,
    allowedValues: ["current", "future"],
  },

  name: {
    type: String,
  },

  rollup: {
    type: Number,
    autoform: {
      omit: true,
    }
  }
});

State.attachSchema(StateSchema);
