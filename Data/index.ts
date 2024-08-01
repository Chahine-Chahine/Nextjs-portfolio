export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
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
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
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
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
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
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
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
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];