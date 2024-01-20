type ProjectData = {
    title: string;
    summary: string;
    thumbnail: string;
    tools: string[];
    fullProjectPath?: string;
    page: string;
    date?: string;
    description?: string;
    website?: string;
    groupSize?: string;
    github?: string;
};

const data: ProjectData[] = [
    {
        title: "Master's Thesis",
        summary: "I built a VR driving simulator in Unity to investigate how drivers behave in a range critical situation",
        thumbnail: "thesis-thumbnail.webp",
        tools: [
            "Thesis",
            "VR",
            "Unity"
        ],
        fullProjectPath: "masters-thesis",
        page: "masters-thesis"
    },
    {
        title: "Shader Exploration",
        summary: "Exploring vertex and fragment shaders with Three.js",
        thumbnail: "webgl.webp",
        tools: [
            "GLSL",
            "Three.js"
        ],
        fullProjectPath: "shader-exploration",
        page: "shader-exploration"
    },
    // {
    //  "title: "Tracking Card Game with AR",
    //  "summary: "Using AR technology to track a card game",
    //  "thumbnail: "tracking-cards.webp",
    //  "tools: [
    //         "AR",
    //         "Unity"
    //     ],
    //  "page: "ar-card-game"
    // },
    {
        title: "Away From Home",
        summary: "Visualizing how many refugees are living in each country in an unbiased way.",
        thumbnail: "away-from-home.webp",
        tools: [
            "HTML",
            "Javascript",
            "D3.js",
        ],
        page: "away-from-home"
    },
    {
        title: "bARk",
        page: "bark",
        date: "KTH: Nov-Dec - 2016",
        thumbnail: "birch-tree.webp",
        tools: [
            "Unity",
            "Vuforia",
            "C#",
            "firebase"
        ],
        summary: "Watch your own tree grow in AR",
        description: "The goal with this project was to explore AR technology and enable users to leave a personal mark in the world and share it with others. In the form of designing your own tree.",
        website: "https://apan1000.github.io/bARk/",
        groupSize: "6 st",
    },
    {
        title: "Bear with me",
        page: "bear-with-me",
        date: "Global Game Jam 2019",
        thumbnail: "bear-with-me.webp",
        tools: [
            "Unity",
            "C#"
        ],
        summary: "A game made in Unity during Global Game Jam 2019",
        description: "A game that I and two friends made during Global Game Jam 2019. Together we came up with an idea around the given topic and then split the work between us. I decided to work with player movement and player interaction with objects.",
        website: "https://pjheden.github.io/bearwithme-gamejam-2019/",
        groupSize: "3 st",
    },
    {
        title: "Online reaction game",
        page: "online-reaction-game",
        date: "9/3 - 10/3 - 2019",
        thumbnail: "shooting-range.webp",
        tools: [
            "React.js",
            "Node.js",
            "Socket.IO"
        ],
        summary: "Compete against your friends on who has the fastest reaction time",
        description: "During the weekend I decided to learn how to use Socket.IO with Node.js. I came up with a concept of a online game in which you compete against each other to hit appearing targets as fast as possible. The game is hosted on Heroku.",
        website: "http://shootingrange.herokuapp.com/",
        github: "https://github.com/Sandsten/ShootingRange",
        groupSize: "1 st",
    },
    {
        title: "BandMate",
        page: "bandmate",
        date: "Jan - 2019",
        thumbnail: "bandmate.webp",
        tools: [
            "React.js",
            "Redux",
            "Node.js",
            "Mongodb"
        ],
        summary: "Online tool for finding bands and musicians in Sweden",
        description: "Me and a friend launched our website we call BandMate. BandMate is a tool designed for musicians to find a band to join, and for bands to find musicians. We saw a lack of such services in Sweden where current ones were either outdated or over complicated according to us.",
        website: "http://bandmate.xyz",
        groupSize: "2 st",
    },
    {
        title: "Style transfer",
        page: "Style-transfer",
        date: "KTH: May - 2018",
        thumbnail: "lion.webp",
        tools: [
            "Python",
            "TensorFlow"
        ],
        summary: "Styletransfer using a CNN in Python",
        description: "A re-implementation of the original style transfer algorithm using a convolutional neural network, as presented by Gatys et al. Additional experiments with different total loss functions and wether or not there's a correlation between content loss and our subjective perception.",
        github: "https: //github.com/Sandsten/Pixicasso",
        groupSize: "3 st",
    },
    {
        title: "SounDark",
        page: "soundark",
        date: "KTH: Sep-Okt - 2016",
        thumbnail: "soundark.webp",
        tools: [
            "Oculus Rift",
            "Unity",
            "C#"
        ],
        summary: "A VR game in which you see through echo location",
        description: "A Virtual Reality game in which the player with the use echolocation, navigate through procedurally generated maces. Sound is picked up by oculus rift and translated into sound waves that enables the player to see.",
        website: "https://hubris37.github.io/Sonar/",
        groupSize: "6 st",
    },
    {
        title: "Bachelor's Thesis",
        page: "crowd-simulation",
        date: "KTH: Mar-May - 2016",
        thumbnail: "crowdsim.webp",
        tools: [
            "Unity",
            "C#"
        ],
        summary: "Exploration of group formations using the RVO algorithm",
        description: "We explored simulation of group formations in Unity using the RVO algorithm. ",
        website: "https://crowdsimulationproject.blogspot.com/",
        groupSize: "2 st",
    },
    {
        title: "Haptic curling",
        page: "haptic-curling",
        date: "KTH: Nov-Dec - 2016",
        thumbnail: "haptic-curling.webp",
        tools: [
            "Novint Falcon",
            "C++"
        ],
        summary: "Curling game using the Novint Falcon for haptic feedback",
        description: "Virtual curling with haptic feedback. Feel the weight of the stone as you push it along the ice. Novint falcon provides haptic feedback in three dimensions which we utilize to make the feedback feel as realistic as possible.",
        github: "https://github.com/Sandsten/DT2140_HapticProject",
        groupSize: "4 st",
    },
    {
        title: "Last ship standing",
        page: "last-ship-standing",
        date: "KTH: Mar-Apr - 2016",
        thumbnail: "lastShip.webp",
        tools: [
            "HTML",
            "Javascript",
            "CSS"
        ],
        summary: "Local multiplayer game, last one alive wins",
        description: "A local multiplayer game in which you battle each other with pirate ships.",
        github: "http://martin36.github.io/LastShipStanding/LastShipStanding/",
        groupSize: "4 st",
    }
]

export default data;