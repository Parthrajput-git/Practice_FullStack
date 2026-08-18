let url = "https://fakestoreapi.com/products/";
let div = document.querySelector("div");

async function useAxios() {
    let result = await axios.get(url);
    console.log(result);
    result.data.map((item) => {
        div.innerHTML += `<div>
        <p>${item.id}</p>
         <p>${item.title}</p>
          <p>${item.category}</p>
           <p><img src="${item.image}"/></p>
        </div>`
    });

}

useAxios();