function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new Post('Nikitarius', 'textasd', new Date());
console.log(post1);
post1.edit('dolor sit');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attached1 = new AttachedPost('Svetoslav', 'another text', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('dolor2 sit2');
console.log(attached1);
    