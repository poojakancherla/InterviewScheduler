const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("notification added", doc);
    });
};

exports.interviewAdded = functions.firestore
  .document("interviews/{interviewDocumentId}")
  .onCreate(doc => {
    const data = doc.data();
    const notification = {
      content: "Added a new interview",
      user: `${data.authorFirstName} ${data.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

exports.userSignedUp = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const data = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${data.firstName} ${data.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
