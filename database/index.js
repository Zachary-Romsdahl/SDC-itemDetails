const mongoose = require('mongoose');
// Step 2 - if it is avaliable then use it, if not then use our default environment
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher', { useMongoClient: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Successfully connected to DB!')
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  owner_login: String,
  owner_url: String,
  repo_url: String,
  description: String,
  created_at: Date

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var dataFromAPi = new Repo({
    id: repo.id,
    name: repo.name,
    owner_login: repo.owner.login,
    owner_url: repo.owner.html_url,
    repo_url: repo.html_url,
    description: repo.description,
    created_at: repo.created_at
  }).save(function (err, data) {
    if (err) return console.error(err);
    console.log("saved to database collection.");
  });
}

module.exports = {
  Repo: Repo,
  save: save
}