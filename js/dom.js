const UNCOMPLETED_LIST_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK_ID = "completed-books";
const BOOK_ITEMID = "itemId";

function makeBook(title, author, year, isCompleted){
    const textTitle = document.createElement("h3");
    textTitle.innerText = title;

    const textAuthor = document.createElement("p");
    textAuthor.innerText = author;

    const textYear = document.createElement("p");
    textYear.innerText = year;

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.append(textTitle, textAuthor, textYear);
    
    if(isCompleted){
        container.append(
            // createUndoButton(), 
            // createTrashButton()
            console.log("Sukses")
            );
    }else{
        container.append(
            // createCheckButton()
            console.log("Gagal")
            );
    }

    return container;
}



function createUndoButton(){
    return createButton("red", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
}

function createTrashButton(){
    return createButton("green", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
}

function createCheckButton(){
    return createButton("check-button", function(event){
        addTaskToCompleted(event.target.parentElement);
    });
}

function createButton(buttonTypeClass /* string */, eventListener /* callback function */) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}


function addTodo() {
    const uncompletedBOOKList = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);

    const inputTitle = document.getElementById("inputBookTitle").value;
    const inputAuthor = document.getElementById("inputBookAuthor").value;
    const inputYear = document.getElementById("inputBookYear").value;
   
    const book = makeBook(inputTitle, inputAuthor, inputYear,false);
    const bookObject = listBookObject(inputTitle, inputAuthor, inputYear, false);
   
    book[BOOK_ITEMID] = bookObject.id;
    books.push(bookObject);

    uncompletedBOOKList.append(book);
    updateDataToStorage();
    
}










