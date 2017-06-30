import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

UserSchema = new SimpleSchema({
    username: {
      type: String,
      // For accounts-password, either emails or username is required, but not both. It is OK to make this
      // optional here because the accounts-password package does its own validation.
      // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
      optional: true
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    emails: {
      type: Array,
      // For accounts-password, either emails or username is required, but not both. It is OK to make this
      // optional here because the accounts-password package does its own validation.
      // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
      optional: true
    },
    company: {
      type: String,
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

// Meteor.users.attachSchema(UserSchema);
