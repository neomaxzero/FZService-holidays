const fs = require('fs');
const { json, send }  = require('micro');
const util = require('util');


function readDB(db) {
  return new Promise((resolve,reject) =>{
    fs.readFile(db,
      'utf-8',
      (err, data) =>{
      if (err)
        reject(err);

      resolve(JSON.parse(data));
    });
  }
  );
};

let dbFiles;

readDB('./holidays.json')
  .then((data) => dbFiles = data)
  .catch((err) => console.error(err))

module.exports = function(req, res) {
    send(res, 200, dbFiles);
}
