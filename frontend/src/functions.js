export function checkForToxicity(user_text) {
  const apiKey = 'AIzaSyCTq-XnRpUNgCHTc85jCdjvYIIZBREhIVg'
  const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyCTq-XnRpUNgCHTc85jCdjvYIIZBREhIVg`;
  const backend_url = 'http://localhost:8000/api/check_toxicity';

  const parameters = {
    comment: { text: user_text },
    languages: ['en'],
    requestedAttributes: { TOXICITY: {} /* Add innappropiate etccc*/ }
  };

  fetch(url, parameters)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
}