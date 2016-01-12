Meteor.methods({
  registerUser(userInfo) {
    //Create new user
    let user = Accounts.createUser({
      username: userInfo.username,
      password: userInfo.password,
      email: userInfo.email,
    });
    
    Meteor.users.update(user, {
      $set: {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      }
    });
    
    //Assign user to the basic bom role
    Roles.addUsersToRoles(user, 'BasicBOM');
  }
});