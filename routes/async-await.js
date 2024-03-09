const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'NodeJS Code'

router.get('/', function(req, res, next) {
  res.send({
    name: 'node-docker-gitlab-ci',
    server: 'express',
    variableData: variableData
  });
});



// expected output: Array [5, 44, "foo"]

router.get('/Resolving-JavaScript-Promises', function(req, res, next) {
  let promise1 = Promise.resolve(5);
  let promise2 = 44;
  let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
  });
  
  Promise.all([promise1, promise2, promise3]).then(function(values) {
    res.send({
      name: 'node-docker-gitlab-ci',
      server: 'express',
      variableData: variableData,
      result: values
    });
  });
});
router.get('/Async-Await-Promises', async function(req, res, next) {
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
    return 'Message:'+msg;
  }

  res.send({
    name: 'node-docker-gitlab-ci',
    server: 'express',
    variableData: variableData,
    result: await msg()
  });
});


router.get('AsyncAwaitPromises', async function(req, res, next) {
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    return ('Message:', msg);
  }
  

  res.send({
    name: 'node-docker-gitlab-ci',
    server: 'express',
    variableData: variableData,
    result: await msg()
  });
});
router.get('/userData', (req, res) => {
  try {
      let json = '{ "age": 30 }';
      let user = JSON.parse(json);
      res.json({ success: true, userData: user });
  } catch (e) {
      res.status(500).json({ success: false, message: "Invalid JSON data!" });
  }
});

function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

async function getMessage(req, res, next) {
  try {
    const message = await helloWorld();
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

router.get('/getMessage', getMessage);
module.exports = router;

