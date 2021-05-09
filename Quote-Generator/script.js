let apiQuotes = []

// Show New Quote
const newQuote = () => {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
}

// Get Quotes From API
async const getQuotes = () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
  } catch (error) {
      // Catch Error Here
  }
}

getQuotes();
