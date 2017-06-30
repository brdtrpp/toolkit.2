import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Drivers = new Mongo.Collection("drivers");

if (Meteor.isServer) {
  Meteor.publish('drivers', function() {
    return Drivers.find({"owner.owner": this.userId});
  })
}

DriverSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  driver: {
    type: String,
  }
});

Drivers.attachSchema(DriverSchema);
