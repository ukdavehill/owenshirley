const videoArea = document.querySelector(".video-area");

const videos = [
    {
        name: "https://player.vimeo.com/video/294531001",
        order: "v-1",
        title: "Full audio post-production",
        description: "",
        clientName: "Shunk Films",
        clientLink: "https://www.shunkfilms.co.uk/"
    },
    {
        name: "https://player.vimeo.com/video/206720872",
        order: "v-2",
        title: "Sound Editing",
        description: "The short film 'Breakdown' won the award for Best Sound (Drama) at the <a href='https://rts.org.uk/article/rts-west-england-awards-winners-announced' target='_blank'>Royal Television Society West of England Awards 2018.</a>\
            <br> I sound edited the film, which was mixed in 5.1 by Andrew Wilson at Real World Studies.Original score by <a href='https://www.scotthazell.com/' target='_blank'>Scott Hazell</a> and Directed by <a href = 'https://davemackie.co.uk/'>Dave Mackie</a>",
        clientName: "Dave Mackie",
        clientLink: "https://davemackie.co.uk/"

    },
    {
        name: "https://player.vimeo.com/video/245042663",
        order: "v-3",
        title: "Sound Design",
        description: "Collaboration with motion graphics designer, Matt Gilligan. Voice Over taken from <a href='https://play.acast.com/s/distractionpieces/blindboyofrubberbandits-distractionpiecespodcastwithscroobiuspip-89' target='_blank'>Scroobius Pip’s Distraction Pieces podcast #89</a>",
        clientName: "Matt Gilligan",
        clientLink: "https://www.mattgilligan.com/"

    },
    {
        name: "https://www.youtube.com/embed/HOIA6YOJfTo",
        order: "v-4",
        title: "Full audio post-production",
        description: "I edited and mixed the sound for epsidoes 1 to 6 of “The Drunk’ webseries, starring Seann Walsh.",
        clientName: "Gabriel Foster-Prior",
        clientLink: "http://www.fosterprior.co.uk/"

    },
    {
        name: 'https://player.vimeo.com/video/175214101',
        order: "v-5",
        title: "Music & Sound Design",
        description: "For this work, I was given a brief of providing a clean, slick and contemporary soundtrack, working to the movement of the animated font.",
        clientName: "Chris Joyce",
        clientLink: "https://www.velvetbadger.com/info"
    },
    {
        name: "https://www.youtube.com/embed/g7N8sG1VahQ",
        order: "v-6",
        title: "Full audio post-production",
        description: "This is the fifth and final episode of the ‘One lapse can last a lifetime’ series for Mitie.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://player.vimeo.com/video/148634793",
        order: "v-7",
        title: "Sound Design & Mix",
        description: "",
        clientName: "Scubaboy Inc",
        clientLink: "http://www.scubaboyinc.co.uk/"
    },
    {
        name: "https://player.vimeo.com/video/158911645",
        order: "v-8",
        title: "Music & Sound Design",
        description: "",
        clientName: "Al Boardman",
        clientLink: "https://www.alboardman.com/"
    },

    {
        name: "https://www.youtube.com/embed/Q20fx2BJJbI",
        order: "v-9",
        title: "Full audio post-production",
        description: "The first in a new series of short films.",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },

    {
        name: "https://player.vimeo.com/video/144639395",
        order: "v-10",
        title: "Full audio post-production",
        description: "For this short, I edited the sync sound, added atmospheres and FX, and mixed with the music cues provided by the composer.",
        clientName: "Jonathan Hardy",
        clientLink: "http://www.jonathanhardyfilm.com/"
    },

    {
        name: "https://www.youtube.com/embed/jwv4wZsohjU",
        order: "v-11",
        title: "Sound Design & Mix",
        description: "For this video I laid out the sound design elements and mixed these with the Voice Over and music track provided by the client.",
        clientName: "Scubaboy Inc",
        clientLink: "http://www.scubaboyinc.co.uk/"
    },
    {
        name: "https://player.vimeo.com/video/146177453",
        order: "v-12",
        title: "Full audio post-production",
        description: "This is a trailer for a short film that will be released in 2016, which I have sound designed, edited and mixed.  [WARNING: Contains potty mouth]",
        clientName: "Matty Groves",
        clientLink: "https://mattygroves.co.uk/"
    },
    {
        name: "https://www.youtube.com/embed/ZhxRnjB8F3I",
        order: "v-13",
        title: "Sound Design & Mix",
        description: "",
        clientName: "Al Boardman",
        clientLink: "https://www.alboardman.com/"
    },
    {
        name: "https://www.youtube.com/embed/nRfhYTcr43U",
        order: "v-14",
        title: "Sound Design & Mix",
        description: "",
        clientName: "JS Productions",
        clientLink: "https://www.jsproductions.tv/"
    },
    {
        name: "https://player.vimeo.com/video/124807425",
        order: "v-15",
        title: "Sound Design",
        description: "I worked as the Sound Designer on this submission to the 2015 <a href='http://sci-fi-london.com/48-hour-film-challenge' target='_blank'>48 HOUR FILM CHALLENGE.</a> This film was written, shot and edited between 11-13 April 2015. Post-production began 16 hours before the submission deadline and was completed with time to spare!",
        clientName: "Robot Dinsosaur",
        clientLink: "http://www.robot-dinosaur.co.uk/"
    },
    {
        name: "",
        order: "v-16",
        title: "",
        description: "",
        clientName: "",
        clientLink: ""
    },
    {
        name: "",
        order: "v-17",
        title: "",
        description: "",
        clientName: "",
        clientLink: ""
    }


];



function populateVideos() {
    var html = videos
        .map(video => {
            return `
      <div class="item ${video.order}">
      <div class="text">
        <h4>${video.title}</h4>
        <p>${video.description}
        <br>Client: <a href="${video.clientLink}" target="_blank">${video.clientName}</a>
        </p>
        
        
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


