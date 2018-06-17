import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

UserSchema = new SimpleSchema({
    // username: {
    //   type: String,
    //   // For accounts-password, either emails or username is required, but not both. It is OK to make this
    //   // optional here because the accounts-password package does its own validation.
    //   // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    //   optional: true
    // },
    services: Object,
    'services.password': Object,
    'services.password.bcrypt': { type: String, label: "Password" },
    'services.resume': { type: Object, blackbox: true, optional: true },
    profile: {
      type: Object()
    },
    'profile.firstName': {
      type: String,
    },
    'profile.lastName': {
      type: String,
    },
    'profile.company': {
      type: String,
    },
    emails: {
      type: Array,
      // For accounts-password, either emails or username is required, but not both. It is OK to make this
      // optional here because the accounts-password package does its own validation.
      // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
      optional: true
    },

  customerId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        var userInfo = {
          des: this.field("profile.company"),
          email: this.field("emails"),
        };
        return Meteor.call('createCustomer', userInfo).id;

      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    }
  },
  card: {
    type: Boolean,
    autoValue: function(){

    },
    optional: true
  },
  status: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return "unsubed";
      }
    }

  },
  "emails.$": {
      type: Object
  },
  "emails.$.address": {
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      type: Boolean
  },
});


Meteor.users.attachSchema(UserSchema);
