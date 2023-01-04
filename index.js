var data = [
    {
        name : "Alex1"
    },
    {
        name : "Alex2"
    },
    {
        name : "Alex3"
    },
    {
        name : "Alex4"
    },
    {
        name : "Alex5"
    },
    {
        name : "Alex6"
    },
    {
        name : "Alex7"
    },
    {
        name : "Alex8"
    },
    {
        name : "Alex9"
    },
    {
        name : "Alex10"
    },
    {
        name : "Alex11"
    },
    {
        name : "Alex12"
    },
    {
        name : "Alex13"
    },
    {
        name : "Alex14"
    }
]



function loadMain(){
    var ul = document.getElementById('ul');
    var wrapper = document.getElementById('wrapper');
    var contentContainer = document.getElementById('content-container');
    var contentUl = document.getElementById('content');
    var index = 1;
    var itemPerPage = 4;

    var totalPages = Math.ceil(data.length/itemPerPage);
    console.log("total pages",totalPages)

    var refinedData = pageGenerator(data,itemPerPage,totalPages)
    displayPage(itemPerPage,contentUl,refinedData[0])
    pageController(1,totalPages,itemPerPage,contentUl)

}
loadMain()

function pageController(currentPage,totalPages){
    var prevPage = currentPage-1;
    var nextPage = currentPage+1;
    var li = ``;
    let ActiveClass = '';

    displayPage(refinedData[currentPage-1]);
     
    if(currentPage>1){
        console.log("hey 1")
        li +=`<li class="btn" onclick="pageController(${currentPage-1},${totalPages})"><i class="fas fa-angle-left"></i><</li>`
    }
    var pageLength = prevPage
    for(pageLength ; pageLength <= nextPage; pageLength++){

        if( pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength+1;
        }
        
        if(currentPage == pageLength){
            ActiveClass = 'active';
        }
        else{
            ActiveClass = '';
        }

        li+=`<li class="numb ${ActiveClass}" onclick = "pageController(${pageLength},${totalPages})"><span>${pageLength}</span></li>`
    }

    if(currentPage < totalPages){
        console.log("hey 2")
        li += `<li class="btn" onclick = "pageController(${currentPage+1},${totalPages})"><i class="fas fa-angle-right">></i></li>`
    }

    ul.innerHTML = li;
}

function displayPage(data){
    var contentUl = document.getElementById('content');
    console.log("hey display",data)
    contentUl.innerHTML = '';
    for( let i = 0; i<data.length; i++){
        var element = `<li>${data[i].name}</li>`
        contentUl.insertAdjacentHTML('beforeend',element)
    }
}

function pageGenerator(data,itemPerPage,totalPages){
    refinedData = []
    var index = 0;
    for(let i = 0; i<totalPages; i++){
        var dataPerPage = []; 
        for( let j = 0; j<itemPerPage; j++){
            dataPerPage.push(data[index]);
            index++;
            if(index==data.length){
                break;
            }
        }
        refinedData.push(dataPerPage);
    }
    console.log("refuned daat ",refinedData);
    return refinedData;
    
}
