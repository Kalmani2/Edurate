export function checkForToxicity(user_text) {
  const apiKey = 'AIzaSyCTq-XnRpUNgCHTc85jCdjvYIIZBREhIVg'
  const url = `https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1comments:analyze?key=${apiKey}`;
  

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