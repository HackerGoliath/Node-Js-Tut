const mongoose = require('mongoose');

// Connection creation and creating a new db
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/DeepakTest")
    .then(() => console.log("Connection Successfull"))
    .catch((err) => console.log(err));

// Schema->
// A mongoose schema defines the structure of the document,default values,validators etc.
const Schema = mongoose.Schema;

// Create a schema -> Structure of document
// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     ctype: String,
//     videos: Number,
//     author: String,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });


// // Built in Validations
// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         // unique is not a validator
//         // unique: true,
//         lowercase: true,
//         // uppercase: true,

//         // remove starting and ending whitespaces
//         trim: true,
//         // minlength: 2,
//         minlength: [2, "Minimum 2 letters"],
//         maxlength: 30
//     },
//     ctype: {
//         type: String,
//         enum: ["frontend", "backend", "database"],
//         lowercase: true
//     },
//     videos: {
//         type: Number,
//         min: 10,
//         max: 100
//     },
//     author: String,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });


// Custom or user defined Validations
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique is not a validator
        // unique: true,
        lowercase: true,
        // uppercase: true,

        // remove starting and ending whitespaces
        trim: true,
        // minlength: 2,
        minlength: [2, "Minimum 2 letters"],
        maxlength: 30
    },
    ctype: {
        type: String,
        enum: ["frontend", "backend", "database"],
        lowercase: true
    },
    videos: {
        type: Number,
        // min: 10,
        // max: 100

        // 1st method:
        validate(value) {
            if (value < 0) {
                throw new Error("Video count must not be negative");
            }
        }

        // 2nd method:
        // validate: {
        //     validator: function (value) {
        //         return value.length < 0
        //     },
        //     message: "Video count must not be negative"
        // }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// A mongoose model is a wrapper on the Mongoose Schema.
// A mongoose Schema defines the structure of the document,
// default values,validators etc. ,whereas a mongoose model provides
// an interface to the database for creating, querying, updating, deleting records, etc.

// Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// Create single document or insert data
// const createDocument = async () => {
//     try {
//         const reactPlaylist = new Playlist({
//             name: "Node Js",
//             ctype: "Back End",
//             videos: 50,
//             author: "Deepak",
//             active: true,
//         });

//         const result = await reactPlaylist.save();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// Insert multiple data or create multiple documents
// Create single document or insert data
const createDocument = async () => {
    try {
        // const jsPlaylist = new Playlist({
        //     name: "javascript",
        //     ctype: "Front End",
        //     videos: 150,
        //     author: "Deepak",
        //     active: true,
        // });
        // const expressPlaylist = new Playlist({
        //     name: "Express Js",
        //     ctype: "Back End",
        //     videos: 30,
        //     author: "Deepak",
        //     active: true,
        // });
        // const mongoPlaylist = new Playlist({
        //     name: "MongoDb",
        //     ctype: "Database",
        //     videos: 10,
        //     author: "Deepak",
        //     active: true,
        // });
        // const mongoosePlaylist = new Playlist({
        //     name: "Mongoose",
        //     ctype: "Database",
        //     videos: 5,
        //     author: "Deepak",
        //     active: true,
        // });
        const nextjsPlaylist = new Playlist({
            name: "NextJs6.1",
            ctype: "BackEnd",
            videos: -115,
            author: "Deepak",
            active: true,
        });

        // const result = await Playlist.insertMany([jsPlaylist, expressPlaylist, mongoPlaylist, mongoosePlaylist, nextjsPlaylist]);
        const result = await Playlist.insertMany([nextjsPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();
// ---------------------------

// Read Data
const getDocument = async () => {
    try {
        // const result = await Playlist.find();
        // const result = await Playlist.find({ ctype: "Front End" });
        // const result = await Playlist.find({ ctype: "Front End" }).select({ name: 1 });
        // const result = await Playlist.find({ ctype: "Front End" }).select({ name: 1 }).limit(1);
        // const result = await Playlist.find({ ctype: "Front End" }).select({ _id: 0, name: 1 });

        // Comaprison Operators
        // const result = await Playlist
        // .find({ videos: 30 })
        // .find({ videos: { $gt: 50 } }) // greater than
        // .find({ videos: { $gte: 50 } }) // greater than or equal to
        // .find({ videos: { $lte: 50 } }) // less than or equal to
        // .find({ ctype: "Back End" })
        // .find({ ctype: { $in: ["Back End", "Database"] } })
        // .find({ ctype: { $nin: ["Back End", "Database"] } }) // opp. of $in
        // .select({ name: 1 })
        // .limit(1);

        // Logical operators
        // const result = await Playlist
        // .find({ $or: [{ ctype: "Front End" }, { author: "Deepak" }] })
        // .find({ $and: [{ ctype: "Front End" }, { author: "Deepak" }] })
        // .select({ name: 1 })

        // Sorting and counting
        const result = await Playlist
            .find({ author: "Deepak" })
            .select({ name: 1 })
            // .count()
            // .countDocuments()
            // .sort({ name: 1 }) // 1 is for ascending order
            .sort({ name: -1 }) // -1 is for descending order
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// getDocument();

// Update the document
// const updateDocument = async (id) => {
const updateDocument = async (_id) => {
    try {
        // const result = await Playlist.updateOne({ _id: id }, {
        // const result = await Playlist.updateOne({ _id }, {

        // get the previous document as ouput
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Advanced Javascript Pro"
            }
        }, {
            // If you want modified data as output
            new: true
        }
        );
        console.log(result);
    } catch (error) {
        console.log(result);
    }
}

// updateDocument("63df9a9d921a69ac54596499")

// Delete the document
const deleteDocument = async (_id) => {
    try {
        // const result = await Playlist.deleteOne({ _id })
        const result = await Playlist.findByIdAndDelete({ _id }) // show the deleted document
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// deleteDocument("63df9a9d921a69ac5459649c")