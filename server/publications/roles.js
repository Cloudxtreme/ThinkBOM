//Publish roles of users since its not done
//by default in the roles package
Meteor.publish(null, function (){
  return Meteor.roles.find({})
})