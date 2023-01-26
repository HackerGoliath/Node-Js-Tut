// >show dbs
// >use deepakCart
// >show collections
// >db.items.find()

// Make new collection
// >db.updateCollection.insertOne({a:45})

// Insert multiple items
// >db.updateCollection.insertMany([{a:45},{b:56},{c:67,name:"Deepak"},{d:45,name:"Babu"}])

// Update collection
// Update only first matching entry
// >db.updateCollection.updateOne({a:45},{$set:{price:450}})

// Update all matching entries
// >db.updateCollection.updateMany({a:45},{$set:{rating:4.3,price:500,review:"positive"}})