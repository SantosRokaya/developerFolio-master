/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Santosh Rokaya",
  title: "Hi all, I'm Santosh",
  subTitle: emoji(
      "A passionate Full Stack .NET Developer with hands-on experience in building scalable APIs and modern web applications using ASP.NET Web Forms, ASP.NET Core, Web API, and SQL Server. I also work with Angular, JavaScript, TypeScript, and Node.js, along with tools like Dapper, EF Core, and Autofac. Additionally, I have experience with Azure Functions and CI/CD pipelines for cloud-based application development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/SantosRokaya",
    linkedin: "https://np.linkedin.com/in/santos-rokaya",
    gmail: "santoshrokaya2022@gmail.com",
    gitlab: "https://gitlab.com/",
    facebook: "https://www.facebook.com/santosh123.rokaya/",
    medium: "https://medium.com/",
    stackoverflow: "https://stackoverflow.com/",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop scalable web applications and RESTful APIs using ASP.NET Core, Web API, and SQL Server"
    ),
    emoji("⚡ Build modern and responsive front-end applications using Angular, JavaScript, HTML5, CSS3, and Sass"),
    emoji(
      "⚡ Implement efficient data access using Dapper and Entity Framework Core"
      ),
      emoji(
          "⚡ Build and manage CI/CD pipelines and containerized applications using Docker"
      )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
    {
        skillName: "ASP.NET Web Forms",
        fontAwesomeClassname: "fab fa-microsoft"
    },
    {
        skillName: "ASP.NET Core",
        fontAwesomeClassname: "fab fa-microsoft"
    },
    {
        skillName: "Web API",
        fontAwesomeClassname: "fas fa-code"
    },
    {
        skillName: "Dapper",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "Ef Core",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "Azure Functions",
        fontAwesomeClassname: "fab fa-microsoft"
    },
    {
        skillName: "CI/CD Pipelines",
        fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
    }
      
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Purbanchal University",
      logo: require("./assets/images/pulogo.png"),
      subHeader: "Master of Computer Application",
      duration: "September 2022 - April 2024",
      desc: "Participated in the research of blockchain technology in e-commerce platforms.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Banglore University",
      logo: require("./assets/images/BULogo.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "April 2015 - Jun 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mid Level .Net Developer",
      company: "Codeology Tech Pvt Ltd.",
      companylogo: require("./assets/images/codeology_logo.png"),
      date: "Aug 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Jr. Dot Net Developer",
      company: "Sarvanam Software Pvt. Ltd",
        companylogo: require("./assets/images/sarvanam-logo.png"),
      date: "Sep 2021 – Jul 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Intern Software Developer",
      company: "Tech One Global Nepal(Pvt) Ltd",
        companylogo: require("./assets/images/techone_logo.png"),
      date: "Oct 2020 – Sep 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

//const bigProjects = {
//  title: "Big Projects",
//  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//  projects: [
//    {
//      image: require("./assets/images/saayaHealthLogo.webp"),
//      projectName: "Saayahealth",
//      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//      footerLink: [
//        {
//          name: "Visit Website",
//          url: "http://saayahealth.com/"
//        }
//        //  you can add extra buttons here.
//      ]
//    },
//    {
//      image: require("./assets/images/nextuLogo.webp"),
//      projectName: "Nextu",
//      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//      footerLink: [
//        {
//          name: "Visit Website",
//          url: "http://nextu.se/"
//        }
//      ]
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};

// Achievement Section
// Include certificates, talks etc

//const achievementSection = {
//  title: emoji("Achievements And Certifications 🏆 "),
//  subtitle:
//    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
//
//  achievementsCards: [
//    {
//      title: "Google Code-In Finalist",
//      subtitle:
//        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//      image: require("./assets/images/codeInLogo.webp"),
//      imageAlt: "Google Code-In Logo",
//      footerLink: [
//        {
//          name: "Certification",
//          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//        },
//        {
//          name: "Award Letter",
//          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//        },
//        {
//          name: "Google Code-in Blog",
//          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//        }
//      ]
//    },
//    {
//      title: "Google Assistant Action",
//      subtitle:
//        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//      image: require("./assets/images/googleAssistantLogo.webp"),
//      imageAlt: "Google Assistant Action Logo",
//      footerLink: [
//        {
//          name: "View Google Assistant Action",
//          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//        }
//      ]
//    },
//
//    {
//      title: "PWA Web App Developer",
//      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//      image: require("./assets/images/pwaLogo.webp"),
//      imageAlt: "PWA Logo",
//      footerLink: [
//        {name: "Certification", url: ""},
//        {
//          name: "Final Project",
//          url: "https://pakistan-olx-1.firebaseapp.com/"
//        }
//      ]
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};

// Blogs Section

//const blogSection = {
//  title: "Blogs",
//  subtitle:
//    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//  blogs: [
//    {
//      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//      description:
//        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//    },
//    {
//      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//      title: "Why REACT is The Best?",
//      description:
//        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/events/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+9779841871401",
  email_address: "santoshrokaya2022@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  /*bigProjects,*/
  /*achievementSection,*/
  /*blogSection,*/
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
