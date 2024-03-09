const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Fundamentals'

router.get('/', function (req, res, next) {
  res.send({
    name: 'Fundamentals',
    server: 'express',
    variableData: variableData
  });
});

router.get('/sumTwoNumbers', function (req, res, next) {
  res.send({
    name: 'sumTwoNumbers',
    sum: sumTwoNumbers(1, 2)
  });
});

function sumTwoNumbers(a, b) {
  return a + b;
}
router.get('/comparison',function( req,res,next){
  res.send({
    name:'Comparison',
    Comparison:Comparison(1,1)
  });
});
function Comparison(a, b) {
  return a === b;
}
router.get('/GetTypeOfValue',function( req,res,next){
  res.send({
    name:'GetTypeOfValue',
    GetTypeOfValue:GetTypeOfValue(1)
  });
});
function GetTypeOfValue(a) {
  return typeof a;
}
router.get('/GetNthCharacterOfString',function( req,res,next){
  res.send({
    name:'GetNthCharacterOfString',
    GetNthCharacterOfString:GetNthCharacterOfString('sdgusfs',2)
  });
});
function GetNthCharacterOfString(a, n) {
  return a[n - 1];
}
router.get('/RemoveFirstNCharactersOfString',function( req,res,next){
  res.send({
    name:'RemoveFirstNCharactersOfString',
    RemoveFirstNCharactersOfString:RemoveFirstNCharactersOfString("abcdefg")
  });
});
function RemoveFirstNCharactersOfString(a) {
  return a.slice(3);
}
router.get('/GetLastNCharactersOfString',function( req,res,next){
  res.send({
    name:'GetLastNCharactersOfString',
    GetLastNCharactersOfString:GetLastNCharactersOfString("abcdefg")
  });
});
function GetLastNCharactersOfString(str) {
  return str.slice(-3);
}
router.get('/GetFirstNCharactersOfString',function( req,res,next){
  res.send({
    name:'GetFirstNCharactersOfString',
    GetFirstNCharactersOfString:GetFirstNCharactersOfString("abcdefg")
  });
});
function GetFirstNCharactersOfString(str) {
  return str.slice(0, 3);
}
router.get('/FindThePositionOfOneStringInAnother',function( req,res,next){
  res.send({
    name:'GetLastFindThePositionOfOneStringInAnotherNCharactersOfString',
    FindThePositionOfOneStringInAnother:FindThePositionOfOneStringInAnother("praise")
  });
});
function FindThePositionOfOneStringInAnother(a) {
  return a.indexOf('is');
}
router.get('/ExtractFirstHalfOfString',function( req,res,next){
  res.send({
    name:'ExtractFirstHalfOfString',
    ExtractFirstHalfOfString:ExtractFirstHalfOfString("abcdefgh")
  });
});
function ExtractFirstHalfOfString(a) {
  return a.slice(0, a.length / 2);
}
router.get('/RemoveLastNCharactersOfstring',function( req,res,next){
  res.send({
    name:'RemoveLastNCharactersOfstring',
    RemoveLastNCharactersOfstring:RemoveLastNCharactersOfstring("abcdefg")
  });
});
function RemoveLastNCharactersOfstring(a) {
  return a.slice(0, -3);
}
router.get('/ReturnThePercentageOfANumber',function( req,res,next){
  res.send({
    name:'ReturnThePercentageOfANumber',
    ReturnThePercentageOfANumber:ReturnThePercentageOfANumber(100,50)
  });
});
function ReturnThePercentageOfANumber(a,b) {
  return b / 100 * a
}
router.get('/BasicJavaScriptMathOperators',function( req,res,next){
  res.send({
    name:'BasicJavaScriptMathOperators',
    BasicJavaScriptMathOperators:BasicJavaScriptMathOperators(6,5,4,3,2,1)
  });
});
function BasicJavaScriptMathOperators(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}
router.get('/CheckWhetherAStringContainsAnotherStringAndConcatenate',function( req,res,next){
  res.send({
    name:'CheckWhetherAStringContainsAnotherStringAndConcatenate',
    CheckWhetherAStringContainsAnotherStringAndConcatenate:CheckWhetherAStringContainsAnotherStringAndConcatenate('cheese', 'cake')
  });
});
function CheckWhetherAStringContainsAnotherStringAndConcatenate(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}
router.get('/CheckIfANumberIsEven',function( req,res,next){
  res.send({
    name:'CheckIfANumberIsEven',
    CheckIfANumberIsEven:CheckIfANumberIsEven(10)
  });
});
function CheckIfANumberIsEven(a) {
  return a % 2 === 0;
}
router.get('/HowManytimesDoesACharacterOccur',function( req,res,next){
  res.send({
    name:'HowManytimesDoesACharacterOccur',
    HowManytimesDoesACharacterOccur:HowManytimesDoesACharacterOccur('m', 'how many times does the character occur in this sentence?')
  });
});
function HowManytimesDoesACharacterOccur(a,b) {
  return b.split(a).length - 1
}
router.get('/MultiplicationDivisionAndComparisonOperators',function( req,res,next){
  res.send({
    name:'MultiplicationDivisionAndComparisonOperators',
    MultiplicationDivisionAndComparisonOperators:MultiplicationDivisionAndComparisonOperators(10,100)
  });
});
function MultiplicationDivisionAndComparisonOperators(a,b) {
  return a < b ? a / b : a * b
}

router.get('/RoundANumberTo2DecimalPlaces',function( req,res,next){
  res.send({
    name:'RoundANumberTo2DecimalPlaces',
    RoundANumberTo2DecimalPlaces:RoundANumberTo2DecimalPlaces(2.12397)
  });
});
function RoundANumberTo2DecimalPlaces(a) {
  return Number(a.toFixed(2));
}


router.get('/SplitANumberIntoItsDigits',function( req,res,next){
  res.send({
    name:'SplitANumberIntoItsDigits',
    SplitANumberIntoItsDigits:SplitANumberIntoItsDigits(10)
  });
});
function SplitANumberIntoItsDigits(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}

module.exports = router;
//Finish