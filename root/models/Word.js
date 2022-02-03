const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        max: 20,
    },
    description: {
        type: String,
        default: null,
    },
    relations: {
        type: Array,
        default: [],
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
});
postSchema.plugin(mongoosePaginate);
postSchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
const Post = mongoose.model('word', postSchema);
module.exports = Post;
