import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

ApplicationSchema = new SimpleSchema({
  name: {
    type: String
  }
});
