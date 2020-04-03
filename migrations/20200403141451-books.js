const csv = require('csvtojson');

const csvFilePath='books.csv';

module.exports = {
  async up(db, client) {

     const data = await csv().fromFile(csvFilePath);

     await db.collection('booksmodel').insertMany(data.map((index) => {
        return {
            title: index.title,
            description: index.description,
            code3: index.code3,
            createdAt: new Date(),
            updatedAt: new Date()          
        }
     }));
  },

  async down(db, client) {
 
     await db.collection('booksmodel').deleteMany({});   
  }
};
