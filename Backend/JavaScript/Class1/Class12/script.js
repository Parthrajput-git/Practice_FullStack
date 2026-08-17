let div = document.querySelector("div");
let url = "https://fakestoreapi.com/products/";

// async function callApi() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//     data.map((item) => {
//         div.innerHTML += `<div>
//             <p>${item.title}</p>

//      </div>`
//     })
// }

// callApi();

async function callApi() {
    let data = await fetch(url);
    let result = await data.json();
  console.log(result);
  
    result.map((item) => {
        div.innerHTML += `<div>
        <p>${item.id}</p>
        <p>${item.title}</p>
        <p><img src="${item.image}"/></p>
        </div>`
    });
}

callApi();