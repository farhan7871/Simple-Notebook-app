const STORAGE_SOURCE = "BOOKSHELF";

let books = [];

function isStorageReady(){
    if(typeof(Storage)==undefined){
        alert("Browser tidak mendukung penyimpanan data");
        return false
    }
    return false;
}

function saveData(){
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_SOURCE, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}

function loadDataLocalStorage(){
    const getData = localStorage.getItem(STORAGE_SOURCE);

    let data = JSON.parse(getData);

    if(data != null)
        todos = data;

        document.dispatchEvent(new Event("dataonloaded"));
    }

    function updateDataToStorage(){
        if(isStorageReady())
        saveData();
    }

    function listBookObject(title, author, year, isCompleted){
        return{
            id: +new Date(),
            title,
            author, 
            year,
            isCompleted
        };
    }

    function findBook(bookId){
        for(book of books){
            if(book.id = bookId){
                return book;
            }
            return null;
        }
    }

    function findBookIndex(bookId){
        let index = 0;
        for(book of books){
            if(book.id === bookId)
            return index;

            index++
        }
        return -1;
    }

  
    
    
