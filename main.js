//! -------- HOW TO DOM CONTENT LOADED ------------
document.addEventListener("DOMContentLoaded",function(){

//! -------- HOW TO DELETE EACH ELEMENT ------------
const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete') {

        const li = e.target.parentElement;
        li.parentElement.removeChild(li);}
    });

//! -------- HOW TO ADD EACH ELEMENT ------------

// ADD BOOKS AND CATCH THE VALUES
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;


if(value != '') {
// CREATES ELEMENTS
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// ADD CONTENTS
bookName.textContent = value;
deleteBtn.textContent = 'Delete';

// ADD CLASSES
bookName.classList.add('name');
deleteBtn.classList.add('delete');

// APPEND TO DOCUMENT
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);}
else{ alert('Please enter a book name');}
})

//! -------- HOW TO HIDE ELEMENTS ------------

const hideBox = document.getElementById('hide');

hideBox.addEventListener('change',function(e){

    if (hideBox.checked) {list.style.display = 'none';} 

    else {list.style.display = 'initial'};
})

//! -------- HOW TO FILTER(SEARCH) ELEMENTS ------------

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){

    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
        const title = book.querySelector('span.name').textContent;
        const match = title.toLowerCase().includes(term);
        book.style.display = match? 'block' : 'none';
    });
})

//! -------- HOW TO TAB CONTENT ------------

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){

    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);

        panels.forEach(function(panel){

            if(panel == targetPanel){panel.classList.add('active');}

            else {panel.classList.remove('active');}
    })
}
})




})

