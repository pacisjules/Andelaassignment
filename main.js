// Object Array for usable as Default FOR BOOKMARKS
let bookmarksarray = [
  {
    id: 1,
    name: "Youtube Andela Chanel",
    webName: "Youtube Web",
    Category_id: 1,
    Category_name: "Video",
    avatar_source:
      "https://prod-discovery.edx-cdn.org/media/course/image/f42bce09-2533-48fb-a9c4-8053aedf941b-798c36769d88.small.png",
    link: "https://youtu.be/MYjwP9G0IrM",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },

  {
    id: 2,
    name: "Avatar the way of Water",
    webName: "Imdb Movie posters",
    Category_id: 1,
    Category_name: "Video",
    avatar_source:
      "https://pbs.twimg.com/profile_images/1300687543156043777/-G0T4ll0_400x400.jpg",
    link: "https://www.imdb.com/title/tt1630029/?ref_=vp_vi_tt_p",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },

  {
    id: 3,
    name: "Learning Javascript",
    webName: "W3schools Web",
    Category_id: 2,
    Category_name: "Coding",
    avatar_source:
      "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283",
    link: "https://www.w3schools.com/js/default.asp",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

// Object Array for usable as Default for AVATARS

let avatararray = [
  {
    id: 1,
    img_src:
      "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283",
  },

  {
    id: 2,
    img_src:
      "https://pbs.twimg.com/profile_images/1300687543156043777/-G0T4ll0_400x400.jpg",
  },

  {
    id: 3,
    img_src:
      "https://prod-discovery.edx-cdn.org/media/course/image/f42bce09-2533-48fb-a9c4-8053aedf941b-798c36769d88.small.png",
  },

  {
    id: 4,
    img_src:
      "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg",
  },

  {
    id: 5,
    img_src:
      "https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40.jpg",
  },

  {
    id: 6,
    img_src:
      "https://theimportantsite.com/wp-content/uploads/2020/04/family-1466262_1280-2.jpg",
  },
  {
    id: 7,
    img_src:
      "https://www.business2community.com/wp-content/uploads/2013/01/20-Ideas-for-Content.jpg",
  },
  {
    id: 8,
    img_src:
      "https://people.socsci.tau.ac.il/mu/snsnews/files/2016/11/blog6.jpg",
  },
  {
    id: 9,
    img_src:
      "https://www.oxy.edu/sites/default/files/landing-page/banner-images/politics_main_1440x800.jpg",
  },
];

// const myt = (id) => {
//   document.getElementById("teta").innerHTML = id;
//   console.log(
//     student.filter((item) => {
//       return item.ID == id;
//     })
//   );

//   const ExportContentNow = student
//     .filter((item) => {
//       return item.ID == id;
//     })
//     .map((item, index) => {
//       return `
//         <div id="imo" key="${item.ID}">
//             <h1>ID: ${item.ID}</h1>
//             <p>${item.Name}</p>
//             <p>Age:${item.Age}</p>
//             <button onClick="myt(${item.ID})">INFOS</button>
//         </div>
//         `;
//     });

//   document.querySelector(".demo").innerHTML = ExportContentNow;
// };

const demo = document.querySelector(".demo");

// const ExportContent = student.map((item, index) => {
//   return `
//     <div id="imo" key="${item.ID}">
//         <h1>ID: ${item.ID}</h1>
//         <p>${item.Name}</p>
//         <p>Age:${item.Age}</p>
//         <button onClick="myt(${item.ID})">INFOS</button>
//     </div>
//     `;
// });

// const showme = () => {
//   const currentID = student.length + 1;
//   student.push({
//     ID: currentID,
//     Name: document.getElementById("names").value,
//     Age: document.getElementById("age").value,
//     Category: document.getElementById("category").value,
//   });

//   console.log(student);

//   const ExportContent = student.map((item, index) => {
//     return `
//     <div id="imo" key="${item.ID}">
//         <h1>ID: ${item.ID}</h1>
//         <p>${item.Name}</p>
//         <p>Age:${item.Age}</p>
//         <button onClick="myt(${item.ID})">INFOS</button>
//     </div>

//     `;
//   });

//   document.querySelector(".demo").innerHTML = ExportContent;
// };

const setImg = (link) => {
  localStorage.setItem("setImage", link);
  document.getElementById("msgInfo").style.color = "green";
  document.getElementById("msgInfo").style.fontWeight = "bold";
  document.getElementById("msgInfo").innerHTML =
    "Avatar Assigned you can finish by press continue Button";
};

document.addEventListener("DOMContentLoaded", () => {
  const ExportContent = bookmarksarray.map((item, index) => {
    return `
        <div class="Books">
        <div class="p1">
            <div class="ifoto">
                <img src="${item.avatar_source}"
                    alt="" width="100px" />
            </div>
        </div>

        <div class="p2">
            <div class="infos">
                <h2>${item.name}</h2>
                <p>${item.webName}</p>
                <p class="cattc">${item.Category_name}</p>
            </div>
        </div>

        <div class="p3">
            <div class="actions">
                <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
                <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
            </div>
        </div>
    </div>
        `;
  });

  document.querySelector(".BooksCont").innerHTML = ExportContent;

  const ExportAvatarContent = avatararray.map((item, index) => {
    return `
        
                <div class="ifomg" onclick="setImg('${item.img_src}')">
                    <img src="${item.img_src}" alt="" srcset="" width="100px">
                </div>
  
        `;
  });

  document.querySelector(".avts").innerHTML = ExportAvatarContent;
});

//Start App Here

//Load Page and Check if local storage has any data
window.addEventListener("DOMContentLoaded", function () {
  let local = localStorage.getItem("clientName");

  if (localStorage.getItem("clientName") === null) {
    document.getElementById("welcomeIDBox").style.display = "block";
    document.getElementById("iconLogo").style.display = "flex";
    document.getElementById("appNow").style.display = "none";
  } else {
    document.getElementById("welcomeIDBox").style.display = "none";
    document.getElementById("appNow").style.display = "block";
    document.getElementById("iconLogo").style.display = "none";
    document.getElementById("naming").innerHTML =
      "Hi, " + localStorage.getItem("clientName") + ".";
  }
});

//Starting the Application with Welcome Box
const welcomeFuc = () => {
  let names = document.getElementById("wlcmId").value;
  if (names == "") {
    document.getElementById("msger").innerHTML = "Please enter your names";
  } else {
    localStorage.setItem("clientName", names);
    document.getElementById("wlcmId").value = "";
    document.getElementById("welcomeIDBox").style.display = "none";
    document.getElementById("iconLogo").style.display = "none";
    document.getElementById("appNow").style.display = "block";
    document.getElementById("naming").innerHTML =
      "Hi, " + localStorage.getItem("clientName") + ".";

    //Play all Bookmarks

    const ExportContent = bookmarksarray.map((item, index) => {
      return `
            <div class="Books">
            <div class="p1">
                <div class="ifoto">
                    <img src="${item.avatar_source}"
                        alt="" width="100px" />
                </div>
            </div>

            <div class="p2">
                <div class="infos">
                    <h2>${item.name}</h2>
                    <p>${item.webName}</p>
                    <p class="cattc">${item.Category_name}</p>
                </div>
            </div>

            <div class="p3">
                <div class="actions">
                    <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
                    <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
                </div>
            </div>
        </div>
            `;
    });

    document.querySelector(".BooksCont").innerHTML = ExportContent;
  }
};

//Opening View
const openView = (id) => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.id == id;
    })
    .map((item, index) => {
      return `
      <div class="forIcon">
      <iconify-icon icon="mdi:close-circle" id="closerV" onclick="CloseView()"></iconify-icon>
  </div>
  <div class="headerMan">
      <div class="ifoto">
          <img src="${item.avatar_source}" alt="" srcset=""
              width="100px" />
      </div>
      <div class="infos">
          <p class="ti">${item.name}</p>
          <p class="lin">${item.webName}</p>
          <p class="cats">${item.Category_name}</p>
      </div>
  </div>

  <div class="mdCenter">
      <p class="descr">Description</p>
      <p class="publ">${item.description}</p>
  </div>

  <div class="actions">
      <a href="${item.link}" target="_blank"><button class="btn-vst">Visit</button></a>
      <button class="btn-rmv" onclick="removBook(${item.id})">Remove it</button>
  </div>
        `;
    });

  document.querySelector(".ViewBook").innerHTML = ExportContentNow;
  document.getElementById("Whole").style.display = "flex";
  document.getElementById("ViewBook").style.display = "flex";
};

const removBook = (id) => {
  const indexOfObject = bookmarksarray.findIndex((object) => {
    return object.id === id;
  });

  bookmarksarray.splice(indexOfObject, 1);

  const ExportContent = bookmarksarray
    .sort(function compareFn(a, b) {
      return parseInt(b.id) - parseInt(a.id);
    })
    .map((item, index) => {
      return `
        <div class="Books">
        <div class="p1">
            <div class="ifoto">
                <img src="${item.avatar_source}"
                    alt="" width="100px" />
            </div>
        </div>
    
        <div class="p2">
            <div class="infos">
                <h2>${item.name}</h2>
                <p>${item.webName}</p>
                <p class="cattc">${item.Category_name}</p>
            </div>
        </div>
    
        <div class="p3">
            <div class="actions">
                <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
                <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
            </div>
        </div>
    </div>
        `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContent;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("ViewBook").style.display = "none";
};

//Close View
const CloseView = () => {
  document.getElementById("Whole").style.display = "none";
  document.getElementById("ViewBook").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

//Open Add bookmark form

const CloseAddForm = () => {
  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

//Open Add bookmark form

const OpenAddForm = () => {
  document.getElementById("Whole").style.display = "flex";
  document.getElementById("AddingForm").style.display = "flex";
  document.getElementById("AvatarForm").style.display = "none";
};

//Open Avatar to assign on bookmark
const OpenAvatar = () => {
  let title = document.getElementById("TitleB").value;
  let webname = document.getElementById("WebnameB").value;
  let link = document.getElementById("linkB").value;
  let categ = document.getElementById("categoriesDrop").value;
  let description = document.getElementById("descrB").value;

  if (title == "") {
    document.getElementById("msgErr").innerHTML = "Please add Title please";
  } else if (webname == "") {
    document.getElementById("msgErr").innerHTML = "Please add Web names please";
  } else if (link == "") {
    document.getElementById("msgErr").innerHTML = "Please add Link please";
  } else if (categ == "") {
    document.getElementById("msgErr").innerHTML =
      "Please Choose category please";
  } else if (description == "") {
    document.getElementById("msgErr").innerHTML =
      "Please Write Description please";
  } else {
    localStorage.setItem("title", title);
    localStorage.setItem("webname", webname);
    localStorage.setItem("link", link);
    localStorage.setItem("categ", categ);
    localStorage.setItem("description", description);

    document.getElementById("Whole").style.display = "flex";
    document.getElementById("AddingForm").style.display = "none";
    document.getElementById("AvatarForm").style.display = "flex";
  }
};

const SelectAvatar_andSet = () => {
  if (localStorage.getItem("setImage") === null) {
    document.getElementById("msgInfo").style.color = "red";
    document.getElementById("msgInfo").style.fontWeight = "bold";
    document.getElementById("msgInfo").innerHTML =
      "Please Assign avatar before to continue";
  } else {
    const currentID = bookmarksarray.length + 1;
    bookmarksarray.push({
      id: currentID,
      name: localStorage.getItem("title"),
      webName: localStorage.getItem("webname"),
      Category_id: 1,
      Category_name: localStorage.getItem("categ"),
      avatar_source: localStorage.getItem("setImage"),
      link: localStorage.getItem("link"),
      description: localStorage.getItem("description"),
    });

    const ExportContent = bookmarksarray
      .sort(function compareFn(a, b) {
        return parseInt(b.id) - parseInt(a.id);
      })
      .map((item, index) => {
        return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
      });

    localStorage.removeItem("setImage");
    localStorage.removeItem("link");
    localStorage.removeItem("title");
    localStorage.removeItem("description");
    localStorage.removeItem("categ");
    localStorage.removeItem("webname");

    document.querySelector(".BooksCont").innerHTML = ExportContent;

    document.getElementById("Whole").style.display = "none";
    document.getElementById("AddingForm").style.display = "none";
    document.getElementById("AvatarForm").style.display = "none";
  }
};

const seemovies = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "Movies";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seecoding = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "Coding";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seeVideo = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "Video";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seeNews = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "News";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seeSport = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "Sport";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seeIdeas = () => {
  const ExportContentNow = bookmarksarray
    .filter((item) => {
      return item.Category_name == "New Ideas";
    })
    .map((item, index) => {
      return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
    });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

const seeAll = () => {
  const ExportContentNow = bookmarksarray.map((item, index) => {
    return `
      <div class="Books">
      <div class="p1">
          <div class="ifoto">
              <img src="${item.avatar_source}"
                  alt="" width="100px" />
          </div>
      </div>
  
      <div class="p2">
          <div class="infos">
              <h2>${item.name}</h2>
              <p>${item.webName}</p>
              <p class="cattc">${item.Category_name}</p>
          </div>
      </div>
  
      <div class="p3">
          <div class="actions">
              <button class="btn-view" onclick="openView(${item.id})">VIEW</button>
              <a href="${item.link}" target="_blank"><button class="btn-visit"">VISIT</button></a>
          </div>
      </div>
  </div>
      `;
  });

  document.querySelector(".BooksCont").innerHTML = ExportContentNow;

  document.getElementById("Whole").style.display = "none";
  document.getElementById("AddingForm").style.display = "none";
  document.getElementById("AvatarForm").style.display = "none";
};

//End App Here
//This Codes Made by Pacis Jules ISHIMWE for assignment in Andela
