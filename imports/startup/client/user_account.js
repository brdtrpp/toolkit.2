AccountsTemplates.configure({
    // // Behavior
    // confirmPassword: true,
    // enablePasswordChange: true,
    // forbidClientAccountCreation: false,
    // overrideLoginErrors: true,
    // sendVerificationEmail: false,
    // lowercaseUsername: false,
    // focusFirstInput: true,

    // // Appearance
    // showAddRemoveServices: false,
    // showForgotPasswordLink: false,
    // showLabels: true,
    // showPlaceholders: true,
    // showResendVerificationEmailLink: false,

    // // Client-side Validation
    // continuousValidation: false,
    // negativeFeedback: false,
    // negativeValidation: true,
    // positiveValidation: true,
    // positiveFeedback: true,
    // showValidating: true,

    // // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    termsUrl: 'terms',

    // // Redirects
    // homeRoutePath: '/home',
    // redirectTimeout: 4000,

    // // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // // Texts
    // texts: {
    //   button: {
    //       signUp: "Register Now!"
    //   },
    //   socialSignUp: "Register",
    //   socialIcons: {
    //       "meteor-developer": "fa fa-rocket"
    //   },
    //   title: {
    //       forgotPwd: "Recover Your Password"
    //   },
    // },
});

AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
    {
      _id: 'firstName',
      type: 'text',
      required: true,
      displayName: "First Name",
    },
    {
      _id: 'lastName',
      type: 'text',
      required: true,
      displayName: "Last Name",
    },
    {
      _id: 'company',
      type: 'text',
      required: true,
      displayName: "Company Name",
    },
    {
      _id: 'password',
      type: 'password',
      required: true,
      minLength: 6,
      continuousValidation: true,
      // re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
    }
]);


