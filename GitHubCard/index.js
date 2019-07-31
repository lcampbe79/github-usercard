/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/lcampbe79
*/


  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'Heather-Ridgill',
  'kiamco',
  'pshushereba',
  'carlpadilla',
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/


const gitHubCard = axios.get('https://api.github.com/users/lcampbe79')
.then((axiosData) => {
  const card = createGitHubCard(axiosData);
  cards.appendChild(card);
})
.catch((error) => {
  console.log('There was an error: ', error);
})

function createGitHubCard(gitHubCard) {
  //New Elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

  //appending
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  location.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);

  //adding Class Names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');


  //console.log(myInfo);
  //setting attributes
  img.src = gitHubCard.data.avatar_url;
  name.textContent = gitHubCard.data.name;
  userName.textContent = gitHubCard.data.login;
  location.textContent = `Location: ${gitHubCard.data.location}`;
  profile.textContent = `Profile: ${gitHubCard.data.html_url}`;
  followers.textContent = `Followers: ${gitHubCard.data.followers}`;
  following.textContent = `Following: ${gitHubCard.data.following}`;
  userBio.textContent = `Bio: ${gitHubCard.data.bio}`;
  
  return card;
}

const cards = document.querySelector('.cards');
//console.log(cards)

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then((axiosData) => {
    const card = createGitHubCard(axiosData);
    cards.appendChild(card);
  })
 
  .catch((error) => {
    console.log('There was an error: ', error);
  })
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
