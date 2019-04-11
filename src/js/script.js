const videoArea = document.querySelector(".video-area");

const videos = [
    {
        name: "https://player.vimeo.com/video/294531001",
        order: "v-1",
        title: "title1",
        description: "The short film 'Breakdown’ won the award for Best Sound (Drama) at the Royal Television Society West of England Awards 2018."

    },
    {
        name: "https://player.vimeo.com/video/206720872",
        order: "v-2",
        title: "title2",
        description: "This is a description 2"
    },
    {
        name: "https://player.vimeo.com/video/245042663",
        order: "v-3",
        title: "title3",
        description: "This is a description 3"
    },
    {
        name: "https://www.youtube.com/embed/sx2HjuZBuo0",
        order: "v-4",
        title: "title4",
        description: "This is a description 4"
    },
    {
        name: "https://player.vimeo.com/video/158911645",
        order: "v-5",
        title: "title5",
        description: "This is a description 5"
    }
];



function populateVideos() {
    var html = videos
        .map(video => {
            return `
      <div class="item ${video.order}">
      <div class="text">
        <h4>${video.title}</h4>
        <p>${video.description}</p>
        <div class="icon"><i class="fas fa-caret-down"></i></div>
        </div>
        <div class = "video">
            <iframe
                src="${video.name}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
	`;
        })
        .join("");

    videoArea.innerHTML =
        html + `<div id="page-message"><h3>Welcome to my site</h3></div>`;
}

window.onload = function () {
    console.log("starting to populate");
    populateVideos();
    console.log("finished");
};

const items = document.querySelectorAll(".item");
console.log(items);

function dropDown(e) {
    console.log("helloDavid");
    console.log(e);
    item.classList.toggle("item1");
    item.querySelector(".video").classList.toggle("video1");
    item.querySelector('.text').classList.toggle('text2');
    item.querySelector('p').classList.toggle('active');
    const i = item.querySelector('i');
    i.classList.toggle('fa-rotate-180');
}

// items.forEach(item => {
//     item.addEventListener("click", e => {
//         console.log("DONE");
//         item.classList.toggle("item1");
//         item.querySelector(".video").classList.toggle("video1");
//         item.querySelector('.text').classList.toggle('text2');
//         item.querySelector('p').classList.toggle('active');
//         const i = item.querySelector('i');
//         i.classList.toggle('fa-rotate-180');

//     });
// });

var toggleItem, toggleText, toggleVideo, toggleActive, toggleIcon;

function getClickedElement(el) {
    const target = el.target;
    const parent = target.parentNode;
    const gparent = parent.parentNode;
    const ggparent = gparent.parentNode;


    if (target.matches('h4')) {
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = parent.querySelector('p');
        toggleIcon = gparent.querySelector('.icon');
    }

    else if (target.matches('i')) {
        console.log('i clicked!!');
        toggleItem = ggparent;
        toggleText = gparent;
        toggleVideo = ggparent.querySelector('.video');
        toggleActive = gparent.querySelector('p');
        toggleIcon = parent;
    }

    else if (target.matches('div.text')) {
        console.log('div.text clicked!!');
        toggleItem = parent;
        toggleText = target;
        toggleVideo = parent.querySelector('.video');
        toggleActive = target.querySelector('p');
        toggleIcon = parent.querySelector('.icon');
    }

    else if (target.matches('p')) {
        console.log('p clicked!!');
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = target;
        toggleIcon = gparent.querySelector('.icon');
    }

    else if (target.matches('div.icon')) {
        console.log('div.icon clicked!!');
        toggleItem = gparent;
        toggleText = parent;
        toggleVideo = gparent.querySelector('.video');
        toggleActive = parent.querySelector('p');
        toggleIcon = target;
    };

}

videoArea.addEventListener('click', (e) => {
    console.log('clicked element is:')
    console.dir(e.target);
    getClickedElement(e);

    toggleItem.classList.toggle('item1');
    toggleText.classList.toggle('text1');
    toggleVideo.classList.toggle('video1');
    toggleActive.classList.toggle('active');
    toggleIcon.classList.toggle('fa-rotate-180');

});


