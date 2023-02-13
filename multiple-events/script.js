const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

// Loop removing the whole 'li'
for (let btn of removeButtons) {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    // console.log(e)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newFriend = document.createElement('li');
  const btnRemover = document.createElement('button');
  btnRemover.innerText = 'Remove';
  btnRemover.addEventListener('click', (e) => { // one way to remove the added 'li'
    e.target.parentElement.remove();
  });
  newFriend.innerText = input.value;
  input.value = '';
  newFriend.append(btnRemover);
  friendList.append(newFriend);
});