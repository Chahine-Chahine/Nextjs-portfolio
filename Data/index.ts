export const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Pricing", link: "#pricing" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on NextJs tech",
      description: "TypeScript",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Roam Rover Trip Planer",
      des: "It simplifies the decision-making process by leveraging AI for top recommendations.",
      img: "/RoamRover.svg",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
      link: "https://github.com/chahine-Chahine/Roamrover",
    },
    {
      id: 2,
      title: "Next portfolio",
      des: "Full portfolio implemented using Next js tech.",
      img: "/portfolio.jpeg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Chahine-Chahine/Nextjs-portfolio",
    },
    {
      id: 3,
      title: "ANFS Designs",
      des: "Degital marketing agency website fully responsive.",
      img: "/anfs.png",
      iconLists: ["/html.svg", "/css.svg", "/js.svg","/bootstrap.svg"],
      link: "https://github.com/chahine-Chahine/ANFS",
    },
    {
      id: 4,
      title: "QR menu",
      des: "QR design redirect to informative screen with menu option",
      img: "/qr.png",
      iconLists: ["/node.svg", "/html.svg", "/css.svg", "/js.svg"],
      link: "https://github.com/chahine-Chahine/menu-qr",
    },
    {
      id: 5,
      title: "Google Docs Clone",
      des: "Google Docs clone with clerk authentication and jsm editor package",
      img: "/google-docs.webp",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Chahine-Chahine/liveDocs",
    },
    {
      id: 6,
      title: "Simon Game",
      des: "Simon logic game using javaScript, HTML and Css",
      img: "/simon.jpg",
      iconLists: ["/html.svg", "/css.svg", "/js.svg"],
      link: "https://github.com/Chahine-Chahine/uber-clone",
    },
  ];
  
  export const testimonials =[
    {
      quote:
        "Collaborating with KreativeBrains was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. KreativeBrains' enthusiasm for every facet of development truly stands out. If you're seeking to elevate your digital presence, KreativeBrains is the ideal partner.",
      name: "ANFS Digital Marketing Agency",
      title: "Digital Marketing Specialist",
      image: "/profile.svg",
    },
    {
      quote:
        "Working with KreativeBrains on developing our QR code menu was a seamless experience. Their ability to translate our needs into a user-friendly and innovative solution was remarkable. KreativeBrains' creativity and technical expertise have significantly enhanced our customer experience at Nara Caffe.",
      name: "Nara Caffe",
      title: "Owner",
      image: "/stream.svg",
    },
    {
      quote:
        "KreativeBrains' work on our QR social media tree website was exceptional. Their attention to detail and understanding of our brand helped create a digital presence that truly reflects our pharmacy's values. We highly recommend KreativeBrains for anyone looking to innovate their online identity.",
      name: "Mar Mkhayel Pharmacy",
      title: "Pharmacist",
      image: "/stream.svg",
    },
    {
      quote:
        "KreativeBrains delivered an outstanding landing website for Chahine Travel, showcasing our services with clarity and style. Their commitment to quality and collaborative approach made the project a success. We are thrilled with the results and look forward to working with them again.",
      name: "Chahine Travel",
      title: "Travel Agency Manager",
      image: "/stream.svg",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Typescript",
      img: "/ts.svg",
    },
    {
      id: 2,
      name: "Javascript",
      img: "/js.svg",
    },
    {
      id: 3,
      name: "Nextjs",
      img: "/next.svg",
    },
    {
      id: 4,
      name: "TailwindCss",
      img: "/tail.svg",
    },
    {
      id: 5,
      name: "Laravel",
      img: "/laravel-logo.svg",
    },
  ];
  
  export const workExperience = [
      {
        id: 1,
        title: "Frontend Developer",
        desc: "Built responsive web applications using React.js for various clients, enhancing user interface design and improving user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
      },
      {
        id: 2,
        title: "Backend Developer",
        desc: "Designed and implemented server-side logic and APIs using Node.js or laravel for diverse projects, ensuring seamless data integration and app performance.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
      },
      {
        id: 3,
        title: "Database Specialist",
        desc: "Managed and optimized databases using SQL and NoSQL technologies for multiple clients, ensuring data security and high availability.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
      },
      {
        id: 4,
        title: "AI Developer",
        desc: "Developed mobile application with OpenAI integration for artificial assistance in decision making.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
      },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/chahine-Chahine", 
    },
    {
      id: 2,
      img: "/link.svg",
      url: "https://linkedin.com/in/chahine-chahine-5ba191276", 
    },
  ];
  
  export const plans = [
    {
      id: 1,
      title: "Basic",
      services: [
        "Up to 10 hours of development",
        "Simple website or app development (static site or basic CMS)",
        "Basic deployment and hosting setup",
        "Basic SEO setup (title and meta tags)",
        "Additional Service"
      ],
      Price: "$150 - $250 per project",
      color: "#FF9F00" 
    },
    {
      id: 2,
      title: "Standard",
      services: [
        "Up to 30 hours of development",
        "Dynamic website or app development (interactive pages forms and basic databases)",
        "Customizable templates and user interface",
        "Two rounds of revisions",
        "Cross-browser and mobile responsive design"
      ],
      Price: "$500 - $1000 per project",
      color: "#2C82F7" 
    },
    {
      id: 3,
      title: "Premium",
      services: [
        "Up to 50 hours of development",
        "Full-featured web app or custom website development",
        "Advanced UI/UX design (custom animations, interactive elements)",
        "Multi-page or multi-platform integration (API, cloud services, multi-database setup)",
        "Multiple rounds of revisions (up to 5)"
      ],
      Price: "$3,500 - $8,000 per project",
      color: "#F14BFF" 
    },
    {
      id: 4,
      title: "Hourly",
      services: [
        "Ad-hoc programming, bug fixing, and consulting",
        "Custom work on existing codebases (bug fixes, small feature development)",
        "No long-term commitments, flexible timelines",
        "Reporting and documentation on demand",
        "Additional Service"
      ],
      Price: "$30 - $60 per hour",
      color: "#27A88D" 
    }
  ];
  
  