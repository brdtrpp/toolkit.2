Meteor.methods({
  createCustomer : function(userInfo) {
    var stripe = require('stripe')(Meteor.settings.public.stripe.sk_key);
    var stripeCustomersCreate = Meteor.wrapAsync(stripe.customers.create,stripe.customers);

    try {
      return stripeCustomersCreate({
        description: userInfo.des.value,
        email: userInfo.email.value[0].address
      });
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  checkSubs: function() {
    var stripe = require('stripe')(Meteor.settings.public.stripe.sk_key);
    var stripeGetCustomer = Meteor.wrapAsync(stripe.customers.retrieve,stripe.customers);
    const id = Meteor.user().customerId;

    try {
      stripeGetCustomer(
        id,
        function(error, customer){
        }
      );
    } catch(error) {
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  }


});
