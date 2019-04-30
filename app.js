document.addEventListener('DOMCont entLoaded', function(){
  const list = document.querySelector('#wrapper ul')
  // delete books
  list.addEventListener("click", function(e){
    if(e.target.textContent == 'Delete'){
      const li = e.target.parentElement;
      // console.log(list)
      console.log(li)
      list.removeChild(li)
    };
  });

  // add books
  const addForm = document.forms['add-book']
  addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = "Delete";

    // add class names
    li.id = "book";
    bookName.classList.add("book-title");
    deleteBtn.classList.add("delete");

    //append to the document
    list.appendChild(li);
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
  });

  //hide books checkbox
  const hideBox = document.querySelector("#hide")
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = 'none';
    } else {
      list.style.display = 'initial';
    };
  });


  //custom search filter -> hides the books that are not typed into the box
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent;
      console.log(title)
      if(title.toLowerCase().indexOf(term) != -1){
        book.style.display = 'block';
      } else{
        book.style.display = 'none'
      }
    })
  })

  //tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if(panel ==targetPanel){
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        };
      });
    };
  });

});


// const wrap = document.querySelector("#book-list li:nth-child(2) .book-title");
// // console.log(wrap)
// //this returns only the title of the second book
//
// var books = document.querySelector("#book-list li .book-title")
// // console.log(books)
//
//
// books = document.querySelectorAll("#book-list li .book-title")
//
// // for (i=0; i < books.length; i++){
// //   console.log(books[i])
// // }
//
// // How to turn something into an array:
// // Array.from(books).forEach(function(book){
// //   console.log(book)
// // })
//
// // !! WE DO NOT NEED TO TURN 'BOOKS' INTO AN ARRAY BECAUSE QUERY SELECTOR AUTO TURNS THE SELECTED ELEMENT(S) INTO A NODE-LIST WHICH BEHAVES JUST LIKE AN ARRAY...
// books.forEach(function(book){
//   book.textContent += ' (book title)'
// })
//
//
//
// const bookList = document.querySelector("#book-list");
// // bookList.innerHTML = '<h2> Books and more books.... </h2>'
//
// bookList.innerHTML += '<p>This is how you add html</p>'
//
// const banner = document.querySelector("#banner");
//
// console.log("#book-list node type is:", banner.nodeName)
//
// var bannerClone = banner.cloneNode(true)
//
// console.log(bannerClone)
//
// var bookList = document.querySelector("#book-list")
//
// // console.log("the parent node is:", bookList.parentNode)
// // console.log("the parent node is:", bookList.parentElement.parentElement)
// //
// // console.log(bookList.childNodes)
//
// console.log(bookList.previousSibling)
// console.log(bookList.previousElementSibling)
//
// bookList.parentElement.querySelector('p').innerHTML += '<br/> This is a new line test test'
//
//
// var h2 = document.querySelector('#book-list h2')
//
// console.log(h2)
//
// h2.addEventListener('click', function(e){
//   if(h2.innerHTML == "Books to Read"){
//     h2.innerHTML = "Books to Read in 2020"
//   }
//   else{
//     h2.innerHTML = "Books to Read"
//   }
//   console.log(h2.innerHTML);
//   // console.log(e);
// })
//
// var btns = document.querySelectorAll("#book .delete");
//
// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//
//     const li = e.target.parentElement.parentElement;
//     console.log(li)
//
//     li.parentElement.removeChild(li)
//
//   });
// });
//
// const link = document.querySelector("#book-list a")
//
// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log("navigation to ", e.target.textContent, "was prevented")
// })
//


//
