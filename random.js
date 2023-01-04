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

var tabData = [
    {
        name:"Tab-1",
        list:[
            {
                listName:"Tab1L1"
            },
            {
                listName:"Tab1L2"
            },
            {
                listName:"Tab1L3"
            },
            {
                listName:"Tab1L4"
            },
            {
                listName:"Tab1L5"
            },
        ]
    },
    {
        name:"Tab-2",
        list:[
            {
                listName:"Tab2L1"
            },
            {
                listName:"Tab2L2"
            },
            {
                listName:"Tab2L3"
            },
            {
                listName:"Tab2L4"
            },
            {
                listName:"Tab2L5"
            },
        ]
    },
    {
        name:"Tab-3",
        list:[
            {
                listName:"Tab3L1"
            },
            {
                listName:"Tab3L2"
            },
            {
                listName:"Tab3L3"
            },
            {
                listName:"Tab3L4"
            },
            {
                listName:"Tab3L5"
            },
        ]
    },
]



function loadMain(){
    var ul = document.getElementById('ul');
    var wrapper = document.getElementById('wrapper');
    var contentContainer = document.getElementById('content-container');
    var contentUl = document.getElementById('content');
    var container = document.getElementById("content-container");
    //container.innerHTML='';
    var index = 1;
    var itemPerPage = 4;

   // var totalPages = Math.ceil(data.length/itemPerPage);
    //console.log("total pages",totalPages)
    var contentContainer = document.getElementById('myTabContent')
    contentContainer.innerHTML=''
    updatenavTab(tabData);
    updateTabContent(tabData);

    //var refinedData = pageGenerator(data,itemPerPage,totalPages)
    //displayPage(itemPerPage,contentUl,refinedData[0])
    //pageController(1,totalPages,itemPerPage,contentUl)

}
loadMain()


function updatenavTab(data){
    var container = document.getElementById("nav-tab");
    container.innerHTML=''
    var actClass = ''
    data.forEach(ele => {
        if(ele.name == "Tab-1"){
            actClass="active"
        }else{
            actClass=""
        }
        var element = `<a class="nav-link ${actClass}" id="nav-home-tab" data-bs-toggle="tab" href="#${ele.name}" role="tab" aria-controls="nav-home" aria-selected="true">${ele.name}</a>`
        container.insertAdjacentHTML('beforeend',element);
    });
}

function updateTabContent(data){

    var contentContainer = document.getElementById('myTabContent')
    var actClass = ''
    data.forEach(ele=>{
        if(ele.name == "Tab-1"){
            actClass="active"
        }else{
            actClass=""
        }
        
        var descriptionElement = `            
        <div class="tab-pane fade show ${actClass}" id="${ele.name}" role="tabpanel" aria-labelledby="home-tab">
            <div id="${ele.name}-data-list"></div>
            <ul class="list-group list-group-horizontal" id="${ele.name}-page-list">
            </ul>
        </div>`
    
        contentContainer.insertAdjacentHTML("beforeend",descriptionElement);
        var pageList = document.getElementById(`${ele.name}-page-list`)

        pageController(2,7,`${ele.name}-page-list`)

    })

}


function pageController(currentPage,totalPages,name){
    console.log("hey reff",name)
    var pageList = document.getElementById(name)
    var prevPage = currentPage-1;
    var nextPage = currentPage+1;
    var li = ``;
    let ActiveClass = '';

    //displayPage(refinedData[currentPage-1]);
     
    if(currentPage>1){
        li +=`<li class="list-group-item btn" onclick="pageController(${currentPage-1},${totalPages},${pageList})"><i class="fas fa-angle-left"></i><<</li>`
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

        li+=`<li class="list-group-item numb ${ActiveClass}" onclick = "pageController(${pageLength},${totalPages},${pageList})"><span>${pageLength}</span></li>`
    }

    if(currentPage < totalPages){
        li+= `<li class="list-group-item btn" onclick = "this.pageController(${currentPage+1},${totalPages},${pageList})"><i class="fas fa-angle-right"></i>>></li>`
    }

    pageList.innerHTML = li;
}

// function displayPage(data){
//     var contentUl = document.getElementById('content');
//     console.log("hey display",data)
//     contentUl.innerHTML = '';
//     for( let i = 0; i<data.length; i++){
//         var element = `<li>${data[i].name}</li>`
//         contentUl.insertAdjacentHTML('beforeend',element)
//     }
// }

// function pageGenerator(data,itemPerPage,totalPages){
//     refinedData = []
//     var index = 0;
//     for(let i = 0; i<totalPages; i++){
//         var dataPerPage = []; 
//         for( let j = 0; j<itemPerPage; j++){
//             dataPerPage.push(data[index]);
//             index++;
//             if(index==data.length){
//                 break;
//             }
//         }
//         refinedData.push(dataPerPage);
//     }
//     console.log("refuned daat ",refinedData);
//     return refinedData;
    
// }
