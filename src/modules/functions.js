// Import Elements
import {getComments, postComments} from './comments.js';
import movies, {commentPopup} from './elements.js';
import { getLikes, postLike } from './likes.js';

// Import Functions


// Function top display images on Home Page
export const displayMovies = (input, input2, input3) => {
   for (let index = 0; index < input.length; index++) {
     movies.innerHTML += `<div class="movie-div">
                           <div class="sub-div">
                             <img src="${input[index]}" alt="" width="" height="" class="poster">
                             <p class="m-name">${input2[index]}</p>
                             <i class="fa-regular fa-he"></i>
                             <button class="fa-heart">Like</button>
                             <p class="l-num" id="${input3[index]}"></p>
                             </div>
                           <button class="commentBtn-1">Comment</button>
                           <button class="reserveBtn-1">Reservation</button>
                          </div>`;
   }
 
 };

// Event Listener Function for Comment Button
movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('commentBtn-1')) {
    e.target.classList.add('test');
    const target = e.target;
    console.log(target);
    const item = e.target.parentElement;
    commentPopup.innerHTML = `<div class="c-popup">
                                <p class="x">x</p>
                                <img src="" alt="" class="poster">
                                <div class="bio"></div>
                                <h2 class="comm-1">Comments</h2>
                                <div class="comm"></div>
                                <h2 class="add-com">Add Comments</h2>
                                <input type="text" name="name" class="un" placeholder="Enter Your Name">
                                <input type="text" name="comments" class="uc" placeholder="Write Comments">
                                <button class="submit">Comment</button>
                                </div>`
  }
  const pic = document.querySelector('.pic')
  const try1 = document.querySelector('.comm')
  console.log(pic);
})

/// Event Listener for Comment Section Button
commentPopup.addEventListener('click', (e) => {
   if (e.target.classList.contains('submit')) {
    const item = e.target.parentElement;
     // Get Index of comment button
    const buttons = document.getElementsByClassName('commentBtn-1')
    const list = [];
    for (let i = 0; i < buttons.length; i++) {
       list.push(buttons[i].className);
    }
    const index = list.indexOf('commentBtn-1 test');
    console.log(index);
    // Get data from input fields
    const userName = document.querySelector('.un')
    console.log(userName.value);
    const userComment = document.querySelector('.uc')
    console.log(userComment.value);
    // Send Comments to API
    postComments(userName.value, userComment.value, index)
    // Recieve Comments from API
    getComments(index);
   }
})
