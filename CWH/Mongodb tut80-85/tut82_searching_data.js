// Seaching for data in mongodb

// search data according to particular field
// this query will return the objects having rating 3.5
// db.items.find({ rating: 3.5 })

// this query will return the objects having rating gretaer than or equal to 3.5
// $gte - greater than or equal to
// $gt - greater than
// and similarly for less than
// db.items.find({ rating: {$gte:3.5} })

// And operator
// db.items.find({ rating: {$gte:3.5},price:{$gt:22000} })

// or operator
// db.items.find({
    //    $or: [{ rating: { $lte: 3.5 } }, { price: { $gt: 22000 } }]
    //      })
    
// projections - if you want to see only particular values or content
// db.items.find({ rating:{$gt:3.5}},{rating:1,qty:1})


