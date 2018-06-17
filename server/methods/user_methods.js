Meteor.methods({
  createCustomer : function(userInfo) {
    var Stripe = StripeAPI('sk_test_GyS8Ovpy1BHVtuPZfoOVnoJG');
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create,Stripe.customers);

    try {
      return stripeCustomersCreate({
        description: userInfo.des.value,
        email: userInfo.email.value[0].address
      });
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  createCustomerS2: function() {
    Meteor.call('createCustomerS2', function(error, result) {
      if (error) {
        console.log(error);
      } else {
        let c = result.id;
        return c;
      }
    });
  },


});
