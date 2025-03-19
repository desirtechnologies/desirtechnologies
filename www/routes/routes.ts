import Hero from "@/includes/Hero/Hero"
import DefaultFallback from "@/components/fallbacks/default"
import RootLayout from "@/layouts/root/Root"

import { defineRoutes } from "@/definitions"

export const routes = defineRoutes({

  application: {
    layout: RootLayout,
    loading: DefaultFallback,
    error: DefaultFallback,
    metadata: {
      title: "Desir Technologies",
      description: "Empowering businesses with innovative technology solutions",
    }
  },

  "/": {
    name: "index",
    parameters: [{ slug: [] }],
    path: "/",
    views: [{ component: Hero, props: null }, { component: Hero }, { component: Hero }],
    data: {}, 
    controllers: {}  
  },


  about: {
    path: "/about",
    component: null
  },
  contact: {
    path: "/contact",
    component: null
  },
  pricing: {
    path: "/pricing",
    component: null
  },
  resources: {
    path: "/resources",
    component: null
  },
  itTriage: {
    path: "/it-triage",
    component: null
  },
  dataAnalytics: {
    path: "/data-analytics",
    component: null
  },
  securityConsulting: {
    path: "/security-consulting",
    component: null
  },
  aiSolutions: {
    path: "/ai-solutions",
    component: null
  },
  cloudServices: {
    path: "/cloud-services",
    component: null
  },
  uiDesign: {
    path: "/ui-design",
    component: null
  },
  mobileApps: {
    path: "/mobile-apps",
    component: null
  },
  webDevelopment: {
    path: "/web-development",
    component: null
  }
})