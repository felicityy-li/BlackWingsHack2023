const MongoClient = require("mongodb").MongoClient;

const UserAuthentication = (UserInfo) => {
  const dbUrl = "mongodb://localhost/UserDB";
  MongoClient.connect(url, (err, db) => {
    console.log("Connection successfully made.");
    const result = db.collection("User").find({
      firstName: UserInfo.firstName,
      lastName: UserInfo.lastName,
      UserID: UserInfo.UserId,
    });
    
  });
  console.log("here");
};

module.exports = { UserAuthentication };
