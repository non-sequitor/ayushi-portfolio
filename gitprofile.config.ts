// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'non-sequitor', // GitHub user name. duhhhh
  },
 
  base: '/ayushi-portfolio/', // can't belive i'm using my actual name. *vomits out of anxiety*
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'. I ain't got no stars, people. gimme some pweeeassee :(
        limit: 4, // How many projects to display. welp, not like I have a lotta COMPLETE projects deployed anyway :')
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true. yeaaahh, as if anyone's ever going to fork my project -_-
          projects: [], // These projects will not be displayed. example: ['non-seq/my-project1', 'non-seq/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['non-sequitor/gitprofile', 'non-sequitor/pandora'], // List of repository names to display. example: ['non-seq/my-project1', 'non-seq/my-project2']
      },
    },
    external: {
      header: 'Work in Progress',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'NLP Trading Bot',
          description:
            'A bot built using NLP to perform sentiment analysis on news and predict stock prices.', //pray I finish this, at least. Gotta publish a paper on this too *sigh* academic pressure is real, folks
          imageUrl:
            ' https://ai-signals.com/wp-content/uploads/2025/05/AI-Day-Trading-Bots.webp',
          link: 'https://example.com',
        },
        {
          title: 'Conversation Radar',
          description:
            'Would be disclosed soon...', // a kinda unique social media web app I had in mind and was motivated to build @2 am on 30th of July, 2025. lesseeee where this goes
          imageUrl:
            '',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Your Friendly Neighbourhood Dev', description: '', imageURL: '' }, // don't judge me. been playing Miles Morales (again). Awesome, chill game
  social: {
    // linkedin: '',    bwahahah, as if i'd share it here
    
    // mastodon: '',
    // researchGate: '',
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: '',
    dev: 'commit_issues',
    discord: '@sleep__404',
    website: '',
    phone: '',
    email: 'yushivig1@gmail.com',
  },
  resume: {    // to be added later. the updated resume
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // nah man resume's too personal to be posted public. ask me for the link :)
  },
  skills: [
    'Java',
    'MySQL',
    'Python',
    'Springboot',
    'Git',
    'JavaScript',
    'React.js',
    'Node.js',
     'CSS',
    
    // 'Docker',
    // 'Tailwind',
  ],

  
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],

  
  certifications: [
    {
      name: 'Cisco Python Essentials',
      // body: 'rando desc.',
      year: 'June 2025',
      // link: 'https://example.com',
    },
    {
      name: 'CCNA Network Essentials',
      year: 'May 2025',
    },
    {
      name: 'Java Masterclass- Udemy', // I mean... yet to finish the last couple lessons... but uh, okay
      year: 'May 2023',
    },
  ],
  educations: [
    {
      institution: 'APJ Abdul Kalam Technical University',
      degree: 'B.Tech in CSE(Data Science)',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Army Public School',
      degree: 'Intermediate',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: 'Deepfake Detection: Leveraging CNN-LSTM Architectures for Enhanced Spatial-Temporal Analysis',
      conferenceName: 'ICRAAI 2025',
      journalName: '',
      authors: 'Ayushi V., Devansh Pratap Singh, Ameya K., Diwakar Mishra', // sorry amigos, had to put your names out there 
      link: 'https://drive.google.com/file/d/1y3nqMWjdoPmnrfDfqbLdQlBnUGiLTo8e/view?usp=sharing',
      description:
        'A hybrid deepfake detection model combining ResNeXt-50 CNN for spatial feature extraction and LSTM for temporal analysis. Achieved 80% accuracy on DFDC and FaceForensics++ datasets, effectively identifying frame-level inconsistencies and manipulation artifacts. Designed for scalable, real-time detection with future scope in explainable AI and media provenance.',
    },
    // {
    //   title: 'Publication Title',               // the trading bot paper... hopefully, some day
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description: '', 
    // },
  ],

  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {    // yeah well, this got complicated. not implementing.
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,   // kinda looks tacky .. but lowkey cool, at the same time?

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      // 'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/non-sequitor/ayushi-portfolio"
      target="_blank"
      rel="noreferrer"
    >non-sequitor</a>, out of spite and pure neccessity *sigh* `,

  enablePWA: true,
};

export default CONFIG;
