var mongoose = require("mongoose");

var submissionSchema = new mongoose.Schema({
    comfort: String,
    durability: String,
    easeOfButton: String,
    environmentWorn: String,
    comments: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    },
    createdAt: Date
});

module.exports = mongoose.model("Submission", submissionSchema);