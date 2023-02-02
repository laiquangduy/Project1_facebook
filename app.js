let tt0 = document.getElementById("tt0");
let tt1 = document.getElementById("tt1");
let tt2 = document.getElementById("tt2");
let tt3 = document.getElementById("tt3");
let tt4 = document.getElementById("tt4");
// console.log(tt1);
console.log(tt1);

tt0.onclick = function (event) {
  console.log(event.target.parentElement.children[1]);
  console.log(event.target);
  if (event.target.style.color !== "#1B74E4") {
    event.target.style.color = "#1B74E4";

    event.target.parentElement.children[1].style.color = "";
    event.target.parentElement.children[2].style.color = "";
    event.target.parentElement.children[3].style.color = "";
    event.target.parentElement.children[4].style.color = "";

    event.target.parentElement.parentElement.children[1].style.color = "";
    event.target.parentElement.parentElement.children[2].style.color = "";
    event.target.parentElement.parentElement.children[3].style.color = "";
    event.target.parentElement.parentElement.children[4].style.color = "";
  }
  // event.target.style.color = "#1B74E4";
};

tt1.onclick = function (event) {
  console.log(event.target.parentElement.parentElement.children[0]);
  if (event.target.style.color !== "#1B74E4") {
    event.target.style.color = "#1B74E4";
    event.target.parentElement.children[0].style.color = "";
    event.target.parentElement.children[2].style.color = "";
    event.target.parentElement.children[3].style.color = "";
    event.target.parentElement.children[4].style.color = "";

    event.target.parentElement.parentElement.children[0].style.color = "";
    event.target.parentElement.parentElement.children[2].style.color = "";
    event.target.parentElement.parentElement.children[3].style.color = "";
    event.target.parentElement.parentElement.children[4].style.color = "";
  }

  // event.target.style.color = "#1B74E4";
};

tt2.onclick = function (event) {
  console.log(event.target.children);
  if (event.target.style.color != "#1B74E4") {
    event.target.style.color = "#1B74E4";
    event.target.parentElement.children[0].style.color = "";
    event.target.parentElement.children[1].style.color = "";
    event.target.parentElement.children[3].style.color = "";
    event.target.parentElement.children[4].style.color = "";
  }
};

tt3.onclick = function (event) {
  // console.log(event.target.parentElement.children);
  if (event.target.style.color != "#1B74E4") {
    event.target.style.color = "#1B74E4";
    event.target.parentElement.children[0].style.color = "";
    event.target.parentElement.children[1].style.color = "";
    event.target.parentElement.children[2].style.color = "";
    event.target.parentElement.children[4].style.color = "";
  }
};

tt4.onclick = function (event) {
  // console.log(event.target.parentElement.children);
  if (event.target.style.color != "#1B74E4") {
    event.target.style.color = "#1B74E4";
    event.target.parentElement.children[0].style.color = "";
    event.target.parentElement.children[1].style.color = "";
    event.target.parentElement.children[2].style.color = "";
    event.target.parentElement.children[3].style.color = "";
  }
};

function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<div id="round-btn">
    <i class="fa-solid fa-angle-down"></i>
  </div>
  <span class="wu">See more</span>
  </div>
`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `<div id="round-btn">
    <i class="fa-solid fa-angle-up"></i>
  </div>
  <span class="wu">See less</span>
  `;
    moreText.style.display = "inline";
  }
}

var btnText1 = document.getElementById("myBtn");
var see = document.getElementById("s");
var ic = document.getElementById("c");

btnText1.onmouseover = function (event) {
  event.target.children[0].style.backgroundColor = "#D8DADF";

  console.log(event.target.children);
  console.log(event.target.children.children);
};

btnText1.onmouseout = function (event) {
  event.target.children[0].style.backgroundColor = "#E4E6EB";

  console.log(event.target.children);
};

//anh Hùng
$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    arrows: true,
    autoplay: false,

    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
$(document).ready(function () {
  $(".image-slider-rooms").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: false,

    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

let reels = document.getElementById("story-2");
let stories = document.getElementById("story-1");
let rooms = document.getElementById("story-3");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

// reels.onclick = function (event) {
//   event.target.parentElement.parentElement.style.display = "none";
//   let displayreels =
//     event.target.parentElement.parentElement.parentElement.children;
//   displayreels[1].style.display = "inline-block";
//   displayreels[1].children[0].children[1].style.borderBottom =
//     "3px solid #1876F2";
//   displayreels[1].children[0].children[1].style.color = "#1876F2";
//   displayreels[1].children[0].children[0].style.color = "black";
//   displayreels[1].children[0].children[0].style.borderBottom =
//     "1px solid #e5e5e5";
// };

reels.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[0].style.color = "black";
    event.target.parentElement.children[0].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.parentElement.children[2].style.display =
      "block";
    event.target.parentElement.parentElement.children[1].style.display = "none";
    event.target.parentElement.parentElement.children[3].style.display = "none";
  }
};

stories.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[1].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[1].style.color = "black";
    event.target.parentElement.children[2].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[2].style.color = "black";
    event.target.parentElement.parentElement.children[1].style.display =
      "block";
    event.target.parentElement.parentElement.children[2].style.display = "none";
    event.target.parentElement.parentElement.children[3].style.display = "none";
  }
};
rooms.onclick = function (event) {
  if (event.target.style.borderBottom != "3px solid #1876F2") {
    event.target.style.borderBottom = "3px solid #1876F2";
    event.target.style.color = "#1876F2";
    event.target.parentElement.children[0].style.color = "black";
    event.target.parentElement.children[0].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.children[1].style.color = "black";
    event.target.parentElement.children[1].style.borderBottom =
      "1px solid #e5e5e5";
    event.target.parentElement.parentElement.children[3].style.display =
      "block";
    event.target.parentElement.parentElement.children[2].style.display = "none";
    event.target.parentElement.parentElement.children[1].style.display = "none";
  }
};

btn.onclick = function () {
  let value = input.value;
  if (value !== "") {
    let li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `
    <div style="text-align: center; margin-top: 15px">
                <div
                  style="
                    width: 580px;
                    border: 1px solid #e5e5e5;
                    border-radius: 10px;
                    display: inline-block;
                    background-color: white;
                    margin-left: 8px;
                  "
                >
                  <div style="display: flex; margin: 20px">
                    <img
                      src="./img/4farmers.jpg"
                      alt=""
                      style="width: 50px; height: 50px; border-radius: 50%"
                    />
                    <div style="font-weight: 700; margin-left: 10px">
                      4 Farmers  <br />
                      <div class="h-tt">
                        <span><i class="fa-solid fa-earth-americas"></i>&nbspPublic&nbsp<i class="fa-solid fa-caret-down"></i></span>
                      </div>
                    </div>
                    <div class="btn-group">
                      <button class="delete-btn">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>

                  <div
                    class="content"
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin: 20px;
                      margin-bottom: 0px;
                      padding-bottom: 15px;
                      border-bottom: 1px solid #e5e5e5;
                      box-sizing: border-box;
                      text-align: left;
                    "
                  >
                    ${value}
                  </div>

                  <div id="hung"
                    style="
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    "
                  >
                  <div id="d-popup" class="h-likes">
                    <div id="d-like"> <i
                      class="fas fa-thumbs-up" 
                      style="font-size: 25px; color: gray; padding: 5px"
                    ></i
                    >Like</div>
                   
                    
                  </div>
                  
                    <div class="h-comment">
                      <i
                        class="fa-solid fa-message"
                        style="font-size: 20px; color: gray; "
                      ></i>
                      Comment
                    </div>
                    <div class="h-comment">
                      <i
                        class="fa-solid fa-share"
                        style="font-size: 20px; color: gray;"
                      ></i>
                      Share
                    </div>
                    <div class="d-popup-icon" id="d-thepopup" style="display: none;">
                      <img class="d-gif" src="./img/likegif (1).gif" alt="" />
                      <img class="d-gif" src="./img/heartgif (1).gif" alt="" />
                      <img class="d-gif" src="./img/hahagif (1).gif" alt="" />
                      <img class="d-gif" src="./img/wowgif (1) (1).gif" alt="" />
                      <img class="d-gif" src="./img/sadgif (1).gif" alt="" />
                      <img class="d-gif" src="./img/angrygif (1).gif" alt="" />
                    </div>
                  
                    
                  </div>
                  <div
                    style="
                      border-top: 1px solid #e5e5e5;
                      display: flex;
                      align-items: center;
                      margin: 20px;
                      margin-top: 0px;
                      margin-bottom: 0px;
                      padding: 5px;
                    "
                  >
                    <div>
                      <img
                        src="./img/4farmers.jpg"
                        style="width: 40px; height: 40px; border-radius: 50%"
                        alt=""
                      />
                    </div>
                    <div>
                      <form action="">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          style="
                            width: 400px;
                            height: 35px;
                            border-radius: 999px;
                            border: none;
                            background-color: #f0f2f5;
                            margin-left: 15px;
                          "
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>`;

    let ul = document.getElementById("list");
    ul.appendChild(li);

    input.value = "";
  }
};

let list = document.getElementById("list");

list.onclick = function (event) {
  if (event.target.classList.contains("delete-btn")) {
    // event.target.parentElement.parentElement.remove();

    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
};

//interact pop-up
let inter = document.getElementById("d-popup");
console.log(inter);

let interi = document.getElementById("d-like");
console.log(interi);

interi.onmouseover = function (event) {
  console.log(event.target.parentElement.parentElement.children[3]);
  // console.log(event.target.parentElement.children[3]);
  event.target.parentElement.parentElement.children[3].style.display =
    "inline-block";
};
interi.onmouseout = function (event) {
  // console.log(event.target.parentElement.parentElement);
  event.target.parentElement.parentElement.children[3].style.display = "none";
};

inter.onmouseover = function (event) {
  console.log(
    event.target.parentElement.parentElement.parentElement.children[0]
  );
  event.target.parentElement.parentElement.parentElement.children[3].style.display =
    "inline-block";
};

inter.onmouseout = function (event) {
  // console.log(event.target.children[1]);
  event.target.parentElement.parentElement.parentElement.children[3].style.display =
    "none";
};

// d-like

//thẻ i
inter.onclick = function (event) {
  console.log(inter);
  console.log(event.target.children[0]);
  if (event.target.style.color == "gray") {
    event.target.parentElement.style.color = "#1B74E4";
    event.target.style.color = "#1B74E4";
    event.target.children[0].style.color = "#1B74E4";
  } else {
    event.target.parentElement.style.color = "gray";
    event.target.style.color = "gray";
    event.target.children[0].style.color = "gray";
  }
};

//popup trang cá nhân

//post from profile page

let api = `https://sheetdb.io/api/v1/ib9lilfmue50c`;
let content;
let reload = document.getElementById("reload");
console.log(reload);

fetch(api)
  .then((res) => res.json())
  .then((data) => (content = data))
  .then(() => console.log(content));

reload.onclick = function () {
  let li = document.createElement("li");

  if (content !== []) {
    for (let i = 0; i <= content.length - 1; i++) {
      li.classList.add("list-item");

      li.innerHTML = `
    <div style="text-align: center; margin-top: 15px">
                <div
                  style="
                    width: 580px;
                    border: 1px solid #e5e5e5;
                    border-radius: 10px;
                    display: inline-block;
                    background-color: white;
                    margin-left: 8px;
                  "
                >
                  <div style="display: flex; margin: 20px">
                    <img
                      src="./img/4farmers.jpg"
                      alt=""
                      style="width: 50px; height: 50px; border-radius: 50%"
                    />
                    <div style="font-weight: 700; margin-left: 10px">
                      4 Farmers  <br />
                      <div class="h-tt">
                        <span><i class="fa-solid fa-earth-americas"></i>&nbspPublic&nbsp<i class="fa-solid fa-caret-down"></i></span>
                      </div>
                    </div>
                    <div class="btn-group">
                      <button class="delete-btn">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>

                  <div
                    class="content"
                    style="
                      font-size: 20px;
                      font-weight: 500;
                      margin: 20px;
                      margin-bottom: 0px;
                      padding-bottom: 15px;
                      border-bottom: 1px solid #e5e5e5;
                      box-sizing: border-box;
                      text-align: left;
                    "
                  >
                    ${content[i].content}
                  </div>

                  <div
                    style="
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    "
                  >
                  <div id="d-popup" class="h-likes">
                    <div id="d-like"> <i
                      class="fas fa-thumbs-up" 
                      style="font-size: 25px; color: gray; padding: 5px"
                    ></i
                    >Like</div>
                   
                    
                  </div>
                  
                    <div class="h-comment">
                      <i
                        class="fa-solid fa-message"
                        style="font-size: 20px; color: gray; "
                      ></i>
                      Comment
                    </div>
                    <div class="h-comment">
                      <i
                        class="fa-solid fa-share"
                        style="font-size: 20px; color: gray;"
                      ></i>
                      Share
                    </div>
                    <div class="d-popup-icon" id="d-thepopup" style="display: none;">
                      <img class="d-gif" src="./img/likegif (1).gif" alt="" />
                      <img class="d-gif" src="./img/heartgif (1).gif" alt="" />
                      <img class="d-gif" src="./img/hahagif (1).gif" alt="" />
                      <img class="d-gif" src="./img/wowgif (1) (1).gif" alt="" />
                      <img class="d-gif" src="./img/sadgif (1).gif" alt="" />
                      <img class="d-gif" src="./img/angrygif (1).gif" alt="" />
                    </div>
                  
                    
                  </div>
                  <div
                    style="
                      border-top: 1px solid #e5e5e5;
                      display: flex;
                      align-items: center;
                      margin: 20px;
                      margin-top: 0px;
                      margin-bottom: 0px;
                      padding: 5px;
                    "
                  >
                    <div>
                      <img
                        src="./img/4farmers.jpg"
                        style="width: 40px; height: 40px; border-radius: 50%"
                        alt=""
                      />
                    </div>
                    <div>
                      <form action="">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          style="
                            width: 400px;
                            height: 35px;
                            border-radius: 999px;
                            border: none;
                            background-color: #f0f2f5;
                            margin-left: 15px;
                          "
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>`;

      let ul = document.getElementById("list");
      ul.appendChild(li);
    }
  }
};
