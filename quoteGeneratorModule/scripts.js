var quotes = ["“The best way to get started is to quit talking and begin doing.” – Walt Disney",
              "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill",
              "“Don’t let yesterday take up too much of today.” – Will Rogers",
              "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” – Unknown",
              "“It’s not whether you get knocked down, it’s whether you get up.” – Inspirational Quote by Vince Lombardi"
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function userQuote(){
  var text = document.getElementById("quoteInput").value;
  quotes[quotes.length] = text; // add new quote to quotes array
}

