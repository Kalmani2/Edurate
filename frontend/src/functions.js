
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

      const toxicityScore = data.attributeScores.TOXICITY.summaryScore.value;
      console.log('Toxicity Score:', toxicityScore);
      handleComment(toxicityScore);

    })
    
    .catch(error => {
      console.error('Error:', error);
    })
}

function handleComment(toxicityScore) {
  if (toxicityScore > 0.7) {
    console.log('After reviewing, this comment seems to be toxic. Please consider revising it');
  } else if (toxicityScore > 0.4) {
    console.log('After reviewing, this comment seems to be innapropriate. Please consider revising it');
  } else {
    console.log('Comment is not toxic');

    //send request to store comment in database
  }
}


export function reviewCourseUnit(userID, courseUnitID, rating, review) {
  const url = 'http://localhost:8000/api/course';

  fetch(url, {
    body: JSON.stringify({userID, courseUnitID, rating, review
    }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  // if null, maybe try to find an error message
  .catch((error) => {
    console.error('Error:', error);
  });

}