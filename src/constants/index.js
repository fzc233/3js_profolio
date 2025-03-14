export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Haolin Yang',
        position: 'Graduate Student',
        img: 'assets/review11.png',
        review:
            'During our time at university, Conor consistently demonstrated outstanding problem-solving and analytical skills. He was the go-to person in group projects, ensuring that our applications were well-structured and functional. His ability to clearly communicate technical concepts made collaboration effortless, and he always brought a positive energy to the team.',
    },
    {
        id: 2,
        name: 'Zacks',
        position: 'Software Engineer',
        img: 'assets/ffj.jpg',
        review:
            'Conor is a highly skilled and dependable software engineer with a strong grasp of full-stack development. While working together, I was impressed by his ability to break down complex problems and implement scalable solutions efficiently. He is also a great collaborator, always ready to support his teammates and ensure smooth project execution."',
    },
    {
        id: 3,
        name: 'Henry Quan',
        position: 'Mobile Engineer',
        img: 'assets/review13.png',
        review:
            'Zechuan is an outstanding recent graduate with exceptional skills in project structure arrangement, clean code practices, and the emphasis on the single responsibility principle and design patterns. His work is organized and efficient and focuses on collaboration and maintenance of multiple projects. His dedication to these principles makes him an aspiring developer who will continue to reach further in any field he pursues.',
    },
    {
        id: 4,
        name: 'Mark',
        position: 'Front end developer',
        img: 'assets/review14.png',
        review:
            'Conor was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Ryde App',
        desc: 'Independently developed a responsive Ride App using React Native,PostgreSQL, TypeScript, Stripe, Tailwind',
        subdesc:
            'Built a ride-hailing app with real-time driver-rider matching, utilizing Google Maps API for live route estimation, distance calculation, and optimized navigation, ensuring accurate fare computation and efficient ride coordination.',
        href: 'https://github.com/fzc233/RydeApp',
        texture: '/textures/project/project6.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Todo App - team project',
        desc: 'Collaborated with a small team to develop a todo-app with a clear separation between frontend and backend.',
        subdesc:
            'Developed a highly responsive frontend using React.js, implementing modular and reusable UI components for better maintainability and seamless user interactions. Ensured smooth communication with a separate backend API, enabling real-time task management and status updates.',
        href: 'https://github.com/fzc233/Todo-App',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Portfolio v1',
        desc: 'Build and Deploy a Fullstack Responsive Portfolio Website',
        subdesc:
            'A portfolio design by me, which is built with React.js, SCSS, Sanity. The portfolio is responsive and user-friendly, with a clean and modern design that highlights my skills and experience. And deployed to the Netlify',
        href: 'https://conorfei-portfolio.netlify.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'AI-powered traffic monitoring system',
        desc: 'Developed an AI-powered traffic monitoring system for the Guangzhou government to detect electric vehicle riders without helmets.',
        subdesc:
            'Designed and implemented responsive display pages using HTML, CSS, and JavaScript, ensuring seamless interaction with the Flask (Python) backend for real-time video data processing.',
        href: 'https://github.com/fzc233/yolov8Project',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Shopify clone',
        desc: 'Independently built a Shopify clone using Next.js, Cloudinary AI, Clerk, and Stripe.',
        subdesc:
            'Developed a Shopify clone with real-time product filtering, cart management, and secure payment integration, showcasing proficiency in Next.js, Cloudinary AI, Clerk, and Stripe.',
        href: 'https://vercel.com/docs/integrations/ecommerce/shopify',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.1 : isMobile ? 0.2: 0.15,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [9, -1, 0] : [9, -1, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [9, 4, 0] : [15, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 4, 0] : [-15, 4, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -9, -10] : [-13, -5, -10],
        hwPosition: isSmall ? [4, -5, 0] : isMobile ? [9, -5, 0] : isTablet ? [9, -5, 0] : [9, -5, 0],
    }
    ;
};



export const workExperiences = [
    {
        id: 1,
        name: 'Freelancer',
        pos: 'independent Web Developer',
        duration: '2024.07 - Present',
        title: "Building scalable full-stack web applications and contributing to open-source projects, leveraging expertise in modern frameworks and technologies such as React, .NET, Node.js, and cloud-based solutions to meet industry standards.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'China Mobile',
        pos: 'Software Engineer Intern',
        duration: '2023.11 - 2024.02',
        title: "Developed an AI-powered traffic monitoring system for the Guangzhou government to detect electric vehicle riders without helmets.",
        icon: '/assets/cm.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Web developer',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];