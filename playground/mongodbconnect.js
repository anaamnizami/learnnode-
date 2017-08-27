const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/Todos',(err,db)=>{
  if (err) {return console.log('err')}

  console.log('no error bitch')

  db.collection('Todos').find({result: false}).toArray().then((docs)=>{

    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2))


  },(err)=> {console.log('unable to do shit',err)});

db.close();
})
