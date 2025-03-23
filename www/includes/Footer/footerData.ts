interface LinkItem {
  name: string;
  href: string;
  icon?: string;
  isNew?: boolean;
}

export const serviceLinks: LinkItem[] = [
  {
    name: "Web Development",
    href: "/services/web-development",
    icon: "code",
  },
  {
    name: "Mobile Apps",
    href: "/services/mobile-apps",
    icon: "globe",
  },
  {
    name: "Cloud Solutions",
    href: "/services/cloud",
    icon: "globe",
    isNew: true,
  },
];

export const resourceLinks: LinkItem[] = [
  {
    name: "Documentation",
    href: "/docs",
    icon: "fileText",
  },
  {
    name: "API Reference",
    href: "/api",
    icon: "code",
  },
  {
    name: "Tutorials",
    href: "/tutorials",
    icon: "fileText",
    isNew: true,
  },
];

export const quickLinks: LinkItem[] = [
  {
    name: "About Us",
    href: "/about",
    icon: "globe",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: "globe",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: "fileText",
  },
];

interface BlogPost {
  title: string;
  description: string;
  href: string;
}

interface NewService {
  title: string;
  description: string;
  href: string;
}

interface LatestUpdates {
  blogPost: BlogPost;
  newService: NewService;
}

export const latestUpdates: LatestUpdates = {
  blogPost: {
    title: "Introducing Our New Blog",
    description: "Stay up to date with our latest news, tutorials, and insights.",
    href: "/blog/introducing",
  },
  newService: {
    title: "Cloud Solutions",
    description: "Scale your applications with our new cloud infrastructure services.",
    href: "/services/cloud",
  },
}; 