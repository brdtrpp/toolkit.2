import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Subactivities = new Mongo.Collection('subactivities');

if (Meteor.isServer) {
  Meteor.publish('subactivities', function() {
    return Subactivities.find({"owner.id": this.userId});
  })
}

SubactivitiesSchema = new SimpleSchema({
  owner: {
    type: OwnerSchema,
    autoform: {
      omit: true,
    }
  },

  activity: {
    type: String,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      if (Meteor.isClient) {
        var act = Session.get('act')
        return act;
      }

    }
  },

  name: {
    type: String,
    label: "What are the names of the subactivities that make up the parent activity?"
  },

  duration: {
    type: Number,
    label: "How Long Does it take?",
    defaultValue: 0,
  },

  downtime: {
    type: Boolean,
    label: "Do the minutes contribute to Downtime?",
    autoform: {
      afFieldInput: {
        type: "boolean-radios",
      }
    },
    defaultValue: false,
  },

  rate: {
    type: Number,
    label: "Labor Rate $/hr",
    defaultValue: 0,
  },

  people: {
    type: Number,
    label: "Number of People",
    defaultValue: 0,
  },

  consumable: {
    type: Number,
    label: "Consumables Cost",
    defaultValue: 0,
  },

  itemCost: {
    type: Number,
    label: "Cost of Items",
    defaultValue: 0,
  },

  itemNum: {
    type: Number,
    label: "Number of Items",
    defaultValue: 0,
  },

  rollup: {
    type: Number,
    autoform: {
      omit: true,
    },
    defaultValue: 0,
  }
});

Subactivities.attachSchema(SubactivitiesSchema);
