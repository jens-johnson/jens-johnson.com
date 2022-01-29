const mongoose = require('mongoose');

const BlogPost = mongoose.model('BlogPost', new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  authors: [String],
  tags: [String]
}, {
  collection: 'BlogPost'
}));

module.exports = BlogPost;
