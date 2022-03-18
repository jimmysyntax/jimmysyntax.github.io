// Set authorization HTTP header in requests
// HEADER => Authorization
// VALUE => Bearer {TOKEN}

// When user visits the home page, they'll be redirected to the link below
// REDIRECT => https://secure.meetup.com/oauth2/authorize?client_id=YOUR_CONSUMER_KEY&response_type=code&redirect_uri=YOUR_CONSUMER_REDIRECT_URI


<script>
  (async function () {
    const data = JSON.stringify({
      query: `{
characters(isMonster:true) {
  name
  episode {
    name
  }
}
}`,
    });

    const response = await fetch(
        https://secure.meetup.com/oauth2/authorize?client_id=YOUR_CONSUMER_KEY&response_type=code&redirect_uri=YOUR_CONSUMER_REDIRECT_URI,
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            Authorization:
              'Apikey DONOTSENDAPIKEYS',
          },
        }
      );

      const json = await response.json();
      document.getElementById('code').innerHTML = js_beautify(
        JSON.stringify(json.data)
      );
      Prism.highlightAll();
    })();
  </script>