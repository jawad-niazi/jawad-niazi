let books=[];
function addBook(){
    const bookName=document.getElementById("bookName").value;
    const authorName=document.getElementById("authorName").value;
    const bookDescription=document.getElementById("bookDescription").value;
    const pageNumber=document.getElementById("pageNumber").value;
    if(bookName && authorName && bookDescription && !isNaN(pageNumber)){
        const book={
            name: bookName,
            author: authorName,
            description:bookDescription,
            pageNo:pageNumber,
         }
         books.push(book);
         showbooks();
         clearinput();
    }else{
        alert("please fill in all feild correctly")
    }
   
}

function showbooks(){
   const booksDiv=books.map((book,index)=>`<h1>book Number:${index+1}</h1>
       <p><strong>book Name:</strong> ${book.name}</p>
       <p><strong>author Name:</strong> ${book.author}</p>
       <p><strong>Description Name:</strong> ${book.description}</p>
       <p><strong>page no:</strong> ${book.pageNo}</p>
       `);
       document.getElementById("books").innerHTML=booksDiv.join("");

   
  
 }

 function clearinput(){
    document.getElementById("bookName").value="";
    document.getElementById("authorName ").value="";
    document.getElementById("bookDescription").value="";
    document.getElementById("pageNumber").value="";
 }