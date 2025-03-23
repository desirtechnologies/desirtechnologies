


export function definePages(pages: any) {
         return pages
}




export const pages = definePages({
    "/": {
        controllers: {
            update: async (data: any) => {
                console.log(data)
            }
        },
        models: {
            title: "Home",
            description: "Home page",
            keywords: ["home", "page", "home page"],
            image: "/images/home.jpg",
            url: "https://www.example.com",
            type: "website",
            locale: "en_US",
        },
        views: [{
            name: "hero",
            component: null,
            props: null
        }]
    },
    "/projects/:projectName": {}
})