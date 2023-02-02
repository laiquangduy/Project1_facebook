btn.onclick = function () {
  let value = input.value;
  if (value !== "") {
    let li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `
    <div class="status-li">

                            <div class="status-li-1">
                                <img src="./z3667158465268_22992f4611764e8d13dcde87b22ef672 (1).jpg" alt="">
                                <div>
                                    <div style="font-weight:600 ;">Four Farmer</div>
                                    <div style="margin-top:-20px"><i class="fa-solid fa-earth-americas"></i></div>
                                </div>
                                <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>

                            </div>
                            <div class="status-li-content">${value}</div>



                            <div class="status-li-icon">
                                <div><i class="fa-solid fa-thumbs-up"></i> Like</div>
                                <div><i class="fa-solid fa-message"></i> Comment</div>
                                <div><i class="fa-solid fa-share"></i> Share</div>
                            </div>
                            <div class="status-li-comment">
                                <img src="./z3667158465268_22992f4611764e8d13dcde87b22ef672 (1).jpg" alt="">
                                <input type="text" placeholder="Write a comment...">
                            </div>





                        </div>`;

    let ul = document.getElementById("list");
    ul.appendChild(li);

    input.value = "";
    let content = {
      content: `${value}`,
    };
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });
  }
};

let list = document.getElementById("list");

list.onclick = function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.parentElement.remove();
  }
};

let api = `https://sheetdb.io/api/v1/ib9lilfmue50c`;

console.log(api);
let obj;

fetch(api)
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => console.log(obj));

// let api = `https://sheetdb.io/api/v1/q4ucj57aat831?sheet=blogs`;

// fetch(api)
//   .then(function (res) {
//     //   console.log(response);
//     //   console.log(response.json);
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     //da lay dc data->tien hanh thao tac in data ra html
//   });

// //get(read)
// //post(create)

// let data = {
//   id: "3",
//   name: "Hello world",
//   content: "loremasdasdsadasdsadsadsad",
//   author: "hung",
//   createAt: "31/01/2022",
//   imgURL: "123123123",
// };

// fetch(api, {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     //toan bo nhung logic phia sau, vi du nhu alert ten la
//     //them moi thanh cong
//     //logic
//     //goi ra the html
//     //.innerHTML
//     //...
//   });

// //put(update)
// //delete(delete)

// let apiUpdate = `https://sheetdb.io/api/v1/q4ucj57aat831/id/1`;
// let data2 = {
//   username: "phongasndsadad ",
// };
// fetch(apiUpdate, {
//   method: "PUT", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data2),
// })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     return res.json(data);
//   });

// fetch
//   .apply(apiUpdate, {
//     method: "DELETE",
//   })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
