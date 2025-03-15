const projectsData = {
    "web-development": {
      "ecommerce-platform": {
        title: "E-Commerce Platform",
        client: "RetailTech Inc.",
        date: "January 2023",
        duration: "3 months",
        description:
          "A comprehensive e-commerce solution built for a retail client, featuring product management, inventory tracking, secure checkout, and customer accounts.",
        longDescription:
          "This e-commerce platform was designed to provide a seamless shopping experience while giving the client powerful tools to manage their online store. The solution includes advanced product filtering, real-time inventory updates, secure payment processing with Stripe, and a customer account system with order history and saved payment methods.\n\nThe admin dashboard provides comprehensive analytics, order management, and product catalog tools. The platform was built with performance and SEO in mind, achieving excellent Core Web Vitals scores and high search engine rankings.",
        challenge:
          "The client needed a solution that could handle their extensive product catalog (10,000+ SKUs) while maintaining fast load times and providing a smooth user experience across all devices.",
        solution:
          "We implemented a hybrid rendering approach with Next.js, using static generation for product category pages and server-side rendering for individual product pages. This, combined with efficient data fetching patterns and image optimization, resulted in excellent performance metrics.",
        results: [
          "40% increase in conversion rate compared to the client's previous platform",
          "65% improvement in page load times",
          "25% reduction in cart abandonment",
          "Seamless integration with existing inventory management systems",
        ],
        technologies: {
          frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
          backend: ["Node.js", "Express", "PostgreSQL"],
          infrastructure: ["Vercel", "AWS S3", "Redis", "GitHub Actions"],
        },
        features: [
          "Responsive design optimized for all devices",
          "Advanced product filtering and search",
          "Secure payment processing with Stripe",
          "Customer accounts with order history",
          "Admin dashboard with analytics",
          "Inventory management system",
          "SEO optimization",
        ],
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
        videoSrc: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example/project",
        testimonial: {
          quote:
            "The e-commerce platform developed by Desir Technologies has transformed our online business. The attention to detail and focus on performance has resulted in a significant increase in sales and customer satisfaction.",
          author: "Sarah Johnson",
          position: "CTO, RetailTech Inc.",
        },
      },
      // Other projects...
    },
    "mobile-apps": {
      "fitness-tracker": {
        title: "Fitness Tracker App",
        client: "HealthFit",
        date: "March 2023",
        duration: "4 months",
        description:
          "A comprehensive fitness tracking mobile application for iOS and Android that helps users monitor workouts, nutrition, and health metrics.",
        longDescription:
          "The Fitness Tracker app was designed to provide users with a complete health and fitness solution in one application. It allows users to track workouts with detailed exercise instructions, monitor nutrition with a food database and barcode scanner, and record health metrics like weight, body measurements, and sleep quality.\n\nThe app integrates with HealthKit on iOS and Google Fit on Android to provide a comprehensive view of the user's health data. It also includes social features that allow users to connect with friends, share achievements, and participate in challenges.",
        challenge:
          "Creating a cross-platform solution that provides a native-feeling experience while maintaining consistent functionality across iOS and Android, with seamless health data integration.",
        solution:
          "We used React Native with TypeScript to build a performant cross-platform application, with native modules for platform-specific integrations. Custom UI components were created to ensure a native feel on each platform while maintaining a consistent brand identity. We implemented efficient state management with Redux and optimized data synchronization to work well even with intermittent connectivity.",
        results: [
          "85,000+ downloads within the first three months",
          "4.8/5 average rating on both App Store and Google Play",
          "78% user retention rate after 30 days",
          "Featured in the 'Health & Fitness' category on both app stores",
        ],
        technologies: {
          frontend: ["React Native", "TypeScript", "Redux", "Styled Components"],
          backend: ["Node.js", "Express", "MongoDB", "Socket.IO"],
          infrastructure: ["AWS Amplify", "Firebase", "App Center", "GitHub Actions"],
        },
        features: [
          "Workout tracking with 500+ exercises",
          "Nutrition tracking with barcode scanner",
          "Health metrics monitoring",
          "Social features and challenges",
          "Personalized workout recommendations",
          "Progress visualization with charts",
          "Offline functionality",
        ],
        images: [
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
          "/placeholder.svg?height=600&width=800",
        ],
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
        liveUrl: "https://example.com/app",
        githubUrl: "https://github.com/example/fitness-app",
        testimonial: {
          quote:
            "Working with Desir Technologies on our fitness app was a game-changer. Their technical expertise and understanding of the fitness industry resulted in an app that our users love.",
          author: "Michael Chen",
          position: "CEO, HealthFit",
        },
      },
      // Other projects...
    },
    // Other categories...
  }
  