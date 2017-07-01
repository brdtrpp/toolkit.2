// Users may insert processes only if they are logged in
// Processes.permit('insert').ifLoggedIn();

Processes.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
