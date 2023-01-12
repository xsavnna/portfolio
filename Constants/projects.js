// import project demo images as follows.
import PROJECT1_1 from '../styles/habaah.png';
import PROJECT1_2 from '../styles/nftexp.png';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Haabah B2b', //project name
        description: 'B2B platform to help SME merchants sale their goods across Africa, it has a custom payment gateway using the Bitcoin lightening network', //project description
        githubLink: '', //github repo link
        projectLink: 'https://haabah.com/',
        tech: ['Nextjs', 'Graphql', 'Apollo'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1], //list of names of images from above imports.
    },
    {
        name: 'NFT exploer', //project name
        description: 'This platform allows users to browse and discover non-fungible tokens (NFTs) on various blockchain marketplaces.', //project description
        githubLink: 'https://github.com/sabadevs20/nft-explore', //github repo link
        projectLink: '#',
        tech: ['React', 'Nodejs'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_2], //list of names of images from above imports.
    },

]
