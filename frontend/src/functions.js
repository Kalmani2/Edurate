
export function checkForToxicity(event) {
  event.preventDefault();
  const user_text = document.getElementById('text').value;

  const apiKey = 'AIzaSyCTq-XnRpUNgCHTc85jCdjvYIIZBREhIVg'
  const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyCTq-XnRpUNgCHTc85jCdjvYIIZBREhIVg`;
  const backend_url = 'http://localhost:8000/api/check_toxicity';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    comment: { text: user_text },
    languages: ['en'],
    requestedAttributes: { TOXICITY: {} /* Add innappropiate etccc*/ }
    })
  };

  fetch(url, parameters)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    // .then(data => {
    //   // Accesses the probability
    //   const toxicityScore = data.attributeScores.TOXICITY.summaryScore.value;
    //   console.log('Toxicity Score:', toxicityScore);
    
      
    // })
    .catch(error => {
      console.error('Error:', error);
    })
}