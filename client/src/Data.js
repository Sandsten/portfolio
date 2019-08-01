export const PROJECTS = [
  {
    title: 'Online reaction game',
    date: '9/3 - 10/3 - 2019',
    bgUrl: 'shooting-range.png',
    tools: ['react', 'nodejs', 'socket-io'],
    description:
      'During the weekend I decided to learn how to use sockets.io with nodejs. I came up with a concept of a online game in which you compete against each other to hit appearing targets as fast as possible. The game is hosted on Heroku.',
    website: 'http://shootingrange.herokuapp.com/',
    groupSize: 1
  },
  {
    title: 'Three.js shader exploration',
    date: '2/2 - 2019',
    bgUrl: 'WebGL.png',
    tools: ['react', 'threejs', 'blender'],
    description:
      "I've recently started learning WebGL using the library three.js. In this small application a simple 3d model is loaded into the scene and its material is altered through the use of a fragment shader.",
    website: 'christmas',
    groupSize: 1
  },
  {
    title: 'BandMate',
    date: 'Jan - 2019',
    bgUrl: 'bandmate.png',
    tools: ['react', 'redux', 'nodejs', 'mongodb'],
    description:
      'Me and a friend launched our website we call BandMate. BandMate is a tool designed for musicians to find a band to join, and for bands to find musicians. We saw a lack of such services in Sweden where current ones were either outdated or over complicated according to us.',
    website: 'http://bandmate.xyz',
    groupSize: 2
  },
  {
    title: 'Bear with me',
    date: 'Global Game Jam 2019',
    bgUrl: 'bear-with-me.png',
    tools: ['unity', 'c-sharp'],
    description:
      'A game that I and two friends made during Global Game Jam 2019. Together we came up with an idea around the given topic and then split the work between us. I decided to work with player movement and player interaction with objects.',
    website: 'https://pjheden.github.io/bearwithme-gamejam-2019/',
    groupSize: 3
  },
  {
    title: 'Card tracking',
    date: 'KTH: Nov-Dec - 2018',
    bgUrl: 'tracking-cards.png',
    tools: ['unity', 'vuforia', 'c-sharp', 'firebase'],
    description:
      'Tracking physical cards on a game board with the help of image recognition. The system detects who played what card and when, the data is stored in a database to allow for later analysis of games played. I worked on all parts of the project, focusing on the programing side of it.',
    website: 'https://github.com/Sandsten/DM2799-TAH',
    groupSize: 3
  },
  {
    title: 'Style transfer',
    date: 'KTH: May - 2018',
    bgUrl: 'lion.png',
    tools: ['python', 'tensorflow'],
    description:
      "A re-implementation of the original style transfer algorithm using a convolutional neural network, as presented by Gatys et al. Additional experiments with different total loss functions and wether or not there's a correlation between content loss and our subjective perception.",
    website: 'https://github.com/Sandsten/Pixicasso',
    groupSize: 3
  },
  {
    title: 'Away from home',
    date: 'KTH: Feb-Apr - 2018',
    bgUrl: 'away-from-home.png',
    tools: ['d3js', 'html', 'javascript', 'css'],
    description:
      'A web application that visualizes the refugee population from 1951 to 2016 in an unbiased way, using data from The UN Refugee Agency. I mainly worked with programming the grid and bar-charts using javascript with d3.',
    website: 'https://sonia-ch.github.io/ivis-project/#',
    groupSize: 8
  },
  {
    title: 'Storylines',
    date: 'KTH: Mar-Apr - 2017',
    bgUrl: 'storylines.png',
    tools: ['angular', 'd3js'],
    description:
      'Project in a web development course. The application uses the Trello api in order to give the user an overview of their Trello projects and the ability to create new ones. I worked on all parts of the project.',
    website: 'https://martin36.github.io/StoryLines/app/#!/login',
    groupSize: 4
  },
  {
    title: 'Haptic curling',
    date: 'KTH: Nov-Dec - 2016',
    bgUrl: 'haptic-curling.png',
    tools: ['novint-falcon', 'cpp'],
    description:
      'Virtual curling with haptic feedback. Feel the weight of the stone as you push it along the ice. Novint falcon provides haptic feedback in three dimensions which we utilize to make the feedback feel as realistic as possible.',
    website: 'https://github.com/Sandsten/DT2140_HapticProject',
    groupSize: 4
  },
  {
    title: 'bARk',
    date: 'KTH: Nov-Dec - 2016',
    bgUrl: 'birch-tree.png',
    tools: ['unity', 'vuforia', 'c-sharp', 'firebase'],
    description:
      'The goal with this project was to explore AR technology and enable users to leave a personal mark in the world and share it with others. In the form of designing your own tree.',
    website: 'https://apan1000.github.io/bARk/',
    groupSize: 6
  },
  {
    title: 'SounDark',
    date: 'KTH: Sep-Okt - 2016',
    bgUrl: 'soundark.png',
    tools: ['oculus-rift', 'unity', 'c-sharp'],
    description:
      'A Virtual Reality game in which the player with the use echolocation, navigate through procedurally generated maces. Sound is picked up by oculus rift and translated into sound waves that enables the player to see.',
    website: 'https://hubris37.github.io/Sonar/',
    groupSize: 6
  },
  {
    title: 'Crowd simulation',
    date: 'KTH: Mar-May - 2016',
    bgUrl: 'crowdsim.png',
    tools: ['unity', 'c-sharp'],
    description: 'We explored simulation of group formations in Unity using the RVO algorithm. ',
    website: 'https://crowdsimulationproject.blogspot.com/',
    groupSize: 2
  },
  {
    title: 'Last ship standing',
    date: 'KTH: Mar-Apr - 2016',
    bgUrl: 'lastShip.png',
    tools: ['html', 'javascript', 'css'],
    description: 'A local multiplayer game in which you battle each other with pirate ships.',
    website: 'http://martin36.github.io/LastShipStanding/LastShipStanding/',
    groupSize: 4
  },
  {
    title: 'Godball',
    date: 'KTH: Nov-Dec - 2015',
    bgUrl: 'godball.png',
    tools: ['unity', 'c-sharp'],
    description:
      'An online 1v1 smartphone game in which you play football against each other in a mythological greek setting.',
    website: 'http://godball.github.io/',
    groupSize: 5
  }
];
