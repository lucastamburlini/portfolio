import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from '@mui/icons-material/BugReport';
import BuildIcon from '@mui/icons-material/Build';

export const listProjects = [
    {
        id: 1,
        title: "Web Portfolio",
        description: "Initial version of my personal portfolio, built with React, SCSS, and HTML. Showcases my work and skills creatively and visually, with a detail-oriented approach.",
        img: "./assets/portfolio.jpg",
        url: "https://lucastamburliniold.vercel.app/",
        gh: "https://github.com/lucastamburlini/portfolio-viejo.git",
    }
];


export const tools = [
    {
        icon: <TerminalIcon />,
        category: "Front End",
        items: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Sass" },
            { name: "Bootstrap" },
            { name: "Material UI" },
        ],
    },
    {
        icon: <StorageIcon />,
        category: "Back End",
        items: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    },
    {
        icon: <LayersIcon />,
        category: "Design",
        items: [
            { name: "Adobe Photoshop" },
            { name: "Canva" },
            { name: "CorelDRAW" },
        ],
    },
    {
        icon: <BugReportIcon />,
        category: "Testing",
        items: [
            { name: "Exploratory Testing" },
            { name: "Conventional Testing Methodologies" },
        ],
    },
    {
        icon: <BuildIcon />,
        category: "Additional Tools",
        items: [
            { name: "Jira" },
            { name: "Postman" },
            { name: "Trello" },
            { name: "Agile Methodologies" },
        ],
    },
];