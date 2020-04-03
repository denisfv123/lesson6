module.exports = {
  async up(db, client) {

    await db.collection('booksmodel').find({}).snapshot().forEach((doc) => {
        
        db.collection('booksmodel').updateOne(
            { 
                _id: doc._id 
            }, 
            { 
                $set: { 
                    titleLength: doc.title.length, 
                    updatedAt: new Date()
                } 
            }
        );
    });
  },

  async down(db, client) {
  }
};
