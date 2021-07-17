document.addEventListener("DOMContentLoaded", function(){
    
    const formBook = document.getElementById("inputBook");

    formBook.addEventListener("submit", function(event){
        event.preventDefault();
        addTodo();
    });

    if(isStorageReady){
        loadDataLocalStorage();
    }
});


    document.addEventListener("ondatasaved",()=>{
        console.log("Data Berhasil disimpan");
    })

    document.addEventListener("ondataloaded",()=>{
           refreshDataFromTodos();
    })