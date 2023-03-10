//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Sabali Mthunzi", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'mthunzisabali@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
       // phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        //countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/sabadevs20/', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/mthunzi-sabali-19a350113/', icon: faLinkedinIn },
       // { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Sabali.",
        subtitle: `
I'm a full stack web developer.




        `
    },
   
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {subtitle:` We cannot solve our problems with the same thinking we used when we created them." – Albert Einstein`},
        {
            category: "Frontend", // eg.frontend, backend, devops etc
            skills: ["Javascript(ES6+)", "Typescript", "React","Redux","Apollo-Client","Jest"] //eg. react, html, python etc.
        },
        {
            category: "Backend",
            skills: ["NodeJs", "SQL", "NoSQL","Docker","Graphql","Solidity"]
        },
        {
            category: "Platforms",
            skills: ["Apollo",'Foundry' ]
        },
        {
            // category: "Category",
            // skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: `let me tell you about this full stack developer we got here.  he's all about the web technologies including the decentralized web. I mean, he's so passionate about it, he probably dreams about it at night.

        
        He's got more frameworks and languages under his belt than a library. 
        

        
        `,
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: false, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', //eg. BTech in Compuster Engineering
                organization: 'School Name', //eg. VJTI, Mumbai
                description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
         
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Lifestyle Polo', //company name eg.Microsoft
                //companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Full Stack Engineer', //post you held eg.Senior SDE
                time: 'June 2022 - Jan 2023', //timespan
               // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Iplus Insurance',
                //companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Full Stack Developer',
                time: 'March 2021 - May 2022',
               // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Jendie Automobiles Limited',
               // companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Front End Developer',
                time: 'September 2020 - October 2020',
                //description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}
