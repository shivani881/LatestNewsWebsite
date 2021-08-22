console.log("this is my index js");
// Initialize the news api parameters..
let source = 'bbc-news';
let apiKey = 'a02f5afebe0248f39a339816a2505ef9';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an AJAX GET request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        // console.log(articles);
        articles.forEach(function(element,index){
         let news = `<div class="newsCard">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <h5><b>Breaking News ${(index+1 )}:</b><h5>
                               <h6> ${element["title"]} </h6>
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element["content"]}.. <a href="${element['url']}" target ="_blank">Read more here..</a></div>
                            </div>
                    </div>`;
             newsHtml += news;       
        });
    newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occurred");
    }
}
xhr.send();

