document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// get text function

function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(`Error: ${err}`)
    });
}

// get JSON data
function getJSON() {
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      output = '';
      data.forEach(post=> {
        output += `<li>${post.title}</li>`;
      });
      
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(`Error: ${err}`)
    });
}

const originalBlog = 'https://spreadsheets.google.com/feeds/list/1wN1bHqX8zkIS2f5DusWJVuuLwhoaNiA3D6lSr0J8o0E/od6/public/values?alt=json';

// get JSON data from external API
function getExternal() {
  fetch("http://spreadsheets.google.com/feeds/list/1JKj2ikdAixUMt9U-EPImnzgI0eMpplnA1DxjTcaEu6o/od6/public/values?alt=json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(JSON.stringify(data));
      console.log(data.feed.entry[1]['gsx$author']['$t']) // asi se entra en forma de array a un artículo
      console.log(data.feed.entry[0].gsx$author.$t);
      output = '';
      // asi recorres el array
      data.feed.entry.forEach(entry => {
        output += `<li>${entry.content.$t}</li>`;
      });
      
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(`Error: ${err}`)
    });
}