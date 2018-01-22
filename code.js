// Author: Nefedova Oxana
// 2018 J

//help the cashier return the right of change


//Programme input: 
    //Amount due
    //Amount paid by the customer

//Programme output:
    //Print change amount
    //Print change breakdown: notes and coins



//UK Example: 
    //Banknotes:
    //£50 - £20 - £10 - £5
    //Coins:
    //£2 - £1 - 50p - 20p - 10p - 5p - 2p - 1p

var due = parseFloat(prompt('Total due', 0));
var paid = parseFloat(prompt('Amount due', 0));
var change = (paid - due).toFixed(2);

// initialized variables for calculates £
var fiftyNote,
    twentyNote, 
    tenNote,
    fiveNote,
    twoNote,
    oneNote;

// initialized variables for calculates penny
var fiftyCoin,
    twentyCoin,
    tenCoin,
    fiveCoin,
    twoCoin,
    oneCoin;

var coins = ( ( ( (change % 10).toFixed(2) ) * 100 ) % 100 ).toFixed(2);

console.log("Due: £" + due + "/ " + "Paid: " + "£" + paid + "/ " + "Change: " + "£" + change);
console.log("Change Breakdown:");

// calculate pounds
fiftyNote   =   (change >= 50) ?
                console.log("£50 notes: " + Math.floor(change / 50))
                + (change = (change % 50).toFixed(2)):
                false;

twentyNote  =   (change < 50 && change >= 20)  ?
                console.log("£20 notes: " + Math.floor(change / 20))
                + (change = (change % 20).toFixed(2)):
                false;

tenNote     =   (change < 20 && change >= 10) ?
                console.log("£10 notes: " + Math.floor(change / 10))
                + (change = (change % 10).toFixed(2)):
                false;


fiveNote    =   (change < 10 && change >= 5) ?
                console.log("£5 notes: " + Math.floor(change / 5))
                + (change = (change % 5).toFixed(2)):
                false;   

twoNote     =   (change < 5 && change >= 2) ?
                console.log("£2 notes: " + Math.floor(change / 2))
                + (change = (change % 2).toFixed(2)):
                false;   

oneNote     =   (change <  2 && change >= 1) ?
                console.log("£1 coins: " + parseInt(1)):
                false;

// calculate coins
fiftyCoin   =   (coins > 50) ?
                console.log("50p coins: " +  Math.floor(coins / 50) )
                + (coins %= 50):
                false;

twentyCoin  =   (coins <= 50 && coins >= 20 ) ?
                console.log("20p coins: " +  Math.floor(coins / 20) )
                + (coins %= 20):
                false;

tenCoin     =   (coins < 20 && coins >= 10 ) ?
                console.log("10p coins: " +  Math.floor(coins / 10) )
                + (coins %= 10):
                false;

fiveCoin    =   (coins < 10 && coins >= 5 ) ?
                console.log("5p coins: " +  Math.floor(coins / 5) )
                + (coins %= 5):
                false;

twoCoin     =   (coins < 5 && coins >= 2 ) ?
                console.log("2p coins: " +  Math.floor(coins / 2) )
                + (coins %= 2):
                false;

oneCoin     =   (coins <  2 && coins >= 1 ) ?
                console.log("1p coins: " +  parseInt(1) ):
                false;
 
