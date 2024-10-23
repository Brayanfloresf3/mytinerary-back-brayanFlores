// https://valorant-api.com/v1/agents

let url = "https://8080-idx-mytinerary-back-1729375617267.cluster-wfwbjypkvnfkaqiqzlu3ikwjhe.cloudworkstations.dev/api/cities"

fetch('url')
  .then(response => response)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });