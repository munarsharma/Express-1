const express = require('express');

const app = express();



app.get('/:choice', (req, res) => {
  let aiChoice = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors'];
   aiChoice = options[aiChoice];
   let result =  [{req.params.choice:'rock', aiChoice:'rock', winninngChoice:'tie'}, {req.params.choice:'rock', aiChoice:'paper', winninngChoice: aiChoice} {req.params.choice:'rock', aiChoice:scissors, winninngChoice:req.params.choice}
   {req.params.choice:'paper', aiChoice:'scissors', winninngChoice: aiChoice}
   {req.params.choice:'scissors', aiChoice:'paper', winninngChoice:req.params.choice}
   {req.params.choice:'scissors', aiChoice:'rock', winninngChoice: aiChoice} ]

   const obj= {`user:${req.params.choice} , ai: ${aiChoice} , result: ${result}`}
   res.json(obj);
});


app.listen(8000, () => {
  console.log('you are listening to port 8000');
});
