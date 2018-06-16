Meteor.methods({
  createCustomer : function(userInfo) {
    var Stripe = StripeAPI('sk_test_GyS8Ovpy1BHVtuPZfoOVnoJG');
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create,Stripe.customers);

    try {
      return stripeCustomersCreate({
        description: userInfo.des.value,
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

  createCard: function() {
    var Stripe = StripeAPI('sk_test_GyS8Ovpy1BHVtuPZfoOVnoJG');
    var stripeTokenCreate = Meteor.wrapAsync(Stripe.tokens.create,Stripe.tokens);
    stripeTokenCreate({
      card: {
        "number": '4242424242424242',
        "exp_month": 12,
        "exp_year": 2019,
        "cvc": '123'
      }
    }, function(err, token) {
      // asynchronously called
    });
  }
});
