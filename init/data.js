const sampleBlogs = [
  {
    title: "Mastering JavaScript Closures",
    description: "A deep dive into closures in JavaScript — what they are, how they work, and when to use them.",
    category: "Programming",
    image: {
      url: "https://images.unsplash.com/photo-1581090700227-1e8b362f3153?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1581090700227"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "The Power of React Hooks",
    description: "An introduction to React Hooks and how they simplify state management and lifecycle methods.",
    category: "Web Development",
    image: {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1555066931"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "Top 10 VSCode Extensions for Developers",
    description: "Boost your productivity with these must-have Visual Studio Code extensions.",
    category: "Tools",
    image: {},
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "Understanding MongoDB Aggregation Framework",
    description: "Learn how to use MongoDB's powerful aggregation pipeline to analyze your data efficiently.",
    category: "Database",
    image: {
      url: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1573496529574"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "A Beginner’s Guide to Node.js",
    description: "Everything you need to know to get started with Node.js and build scalable web apps.",
    category: "Backend",
    image: {},
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "How to Build RESTful APIs with Express",
    description: "Learn to build scalable and maintainable APIs using Express.js in this step-by-step guide.",
    category: "Backend",
    image: {
      url: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1603791440384"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What?",
    description: "Explore the differences between CSS Grid and Flexbox with practical use-cases.",
    category: "Frontend",
    image: {
      url: "https://images.unsplash.com/photo-1505682634904-d7c0e56a2f2d?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1505682634904"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "Boost Your App Performance with Lazy Loading",
    description: "Reduce load time and improve UX with lazy loading techniques for images and components.",
    category: "Performance",
    image: {},
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "Deploying Full-Stack Apps on Render",
    description: "Step-by-step deployment guide for MERN stack apps using Render hosting.",
    category: "DevOps",
    image: {
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1543269865"
    },
    reviews: [],
    date: new Date(),
    author: "685699f46c38c03177b6d371",
    __v: 0
  },
  {
    title: "JWT Authentication Explained Simply",
    description: "Understand how JSON Web Tokens (JWT) work and how to implement them for secure login.",
    category: "Security",
    image: {
      url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1556740749"
    },
    reviews: [],
    date: new Date(),
    author: "6856ad549cef3745740b191c",
    __v: 0
  },
  {
    title: "Understanding Async/Await in JavaScript",
    description: "Simplify asynchronous code with async/await and avoid callback hell.",
    category: "JavaScript",
    image: {},
    reviews: [],
    date: new Date(),
    author: "6856ad549cef3745740b191c",
    __v: 0
  },
  {
    title: "Intro to Tailwind CSS",
    description: "Learn how to rapidly build modern websites using utility-first Tailwind CSS framework.",
    category: "CSS",
    image: {
      url: "https://images.unsplash.com/photo-1555617981-e7b5b8c46b2b?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1555617981"
    },
    reviews: [],
    date: new Date(),
    author: "6856ad549cef3745740b191c",
    __v: 0
  },
  {
    title: "Getting Started with TypeScript",
    description: "Learn why TypeScript is essential for scalable JavaScript projects and how to use it.",
    category: "Programming",
    image: {},
    reviews: [],
    date: new Date(),
    author: "68569924b1ffc04bc58ea78a",
    __v: 0
  },
  {
    title: "Debugging Node.js Apps Like a Pro",
    description: "Tools, techniques, and tips to debug Node.js applications effectively.",
    category: "Backend",
    image: {
      url: "https://images.unsplash.com/photo-1590608897129-79da91cb3d3a?auto=format&fit=crop&w=800&q=60",
      filename: "unsplash-1590608897129"
    },
    reviews: [],
    date: new Date(),
    author: "68569924b1ffc04bc58ea78a",
    __v: 0
  },
  {
    title: "What’s New in ES2024?",
    description: "A summary of the newest features introduced in the ES2024 JavaScript standard.",
    category: "JavaScript",
    image: {},
    reviews: [],
    date: new Date(),
    author: "68569924b1ffc04bc58ea78a",
    __v: 0
  },
  {
    title: 'roya Roya02 Roya02 Roya02',
    description: 'Roya02 Roya02 Roya02Roya02Roya02Roya02',
    category: 'Roya02 Roya02 Roya02',
    image: {
      url: 'https://res.cloudinary.com/dwzk5ytq6/image/upload/v1750604986/Blogpost_dev/g8sxhgqpsa2y5dqnr4x3.png',
      filename: 'Blogpost_dev/g8sxhgqpsa2y5dqnr4x3'
    },
    reviews: [],
    date: new Date(),
    author: '685699f46c38c03177b6d371',
    __v: 0
  }
];

module.exports = { data: sampleBlogs };


// Programming

// Web Development

// Tools

// Database

// Backend

// Frontend

// Performance

// DevOps

// Security

// JavaScript

// CSS





