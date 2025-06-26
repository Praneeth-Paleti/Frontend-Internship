const videos = [
  {
    title: "Introduction to JavaScript | Frontend Video #1",
    cName: "DevGnan",
    views: 86000,
    monthsOld: 10,
    duration: "08:12",
    thumbnail: "Youtube image.png",
  },
  {
    title: "Variables & Data Types in JavaScript | Frontend Video #2",
    cName: "DevGnan",
    views: 132000,
    monthsOld: 9,
    duration: "14:03",
    thumbnail: "Youtube image.png",
  },
  {
    title: "Functions in JavaScript | Frontend Video #3",
    cName: "DevGnan",
    views: 194000,
    monthsOld: 8,
    duration: "18:47",
    thumbnail: "Youtube image.png",
  },
  {
    title: "Arrays & Objects in JavaScript | Frontend Video #4",
    cName: "DevGnan",
    views: 252000,
    monthsOld: 7,
    duration: "22:05",
    thumbnail: "Youtube image.png",
  },
  {
    title: "DOM Manipulation in JavaScript | Frontend Video #5",
    cName: "DevGnan",
    views: 305000,
    monthsOld: 6,
    duration: "25:39",
    thumbnail: "Youtube image.png",
  },
  {
    title: "Events in JavaScript | Frontend Video #6",
    cName: "DevGnan",
    views: 341000,
    monthsOld: 5,
    duration: "20:11",
    thumbnail: "Youtube image.png",
  },
  {
    title: "ES6 Features in JavaScript | Frontend Video #7",
    cName: "DevGnan",
    views: 395000,
    monthsOld: 4,
    duration: "19:33",
    thumbnail: "Youtube image.png",
  },
  {
    title: "JavaScript Promises & Async/Await | Frontend Video #8",
    cName: "DevGnan",
    views: 482000,
    monthsOld: 3,
    duration: "28:14",
    thumbnail: "Youtube image.png",
  },
  {
    title: "JavaScript Fetch API & JSON | Frontend Video #9",
    cName: "DevGnan",
    views: 515000,
    monthsOld: 2,
    duration: "17:44",
    thumbnail: "Youtube image.png",
  },
  {
    title: "Advanced JavaScript Concepts | Frontend Video #10",
    cName: "DevGnan",
    views: 680000,
    monthsOld: 1,
    duration: "32:09",
    thumbnail: "Youtube image.png",
  },
];

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewStr;
  if (views < 1000000) {
    viewStr = views / 1000 + "K";
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }

  return ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
                
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                </div>
            
        </div>`;
}

const AllCards = videos
  .map((video) => {
    return createCard(
    video.title,
    video.cName,
    video.views,
    video.monthsOld,
    video.duration,
    video.thumbnail,
    );
  }).join("")
  ;

document.querySelector(".container").innerHTML = AllCards;
