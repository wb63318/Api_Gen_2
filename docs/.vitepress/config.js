export default {
  title: " Command Application Interface",
  description: "Command Application Interface ",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/routes/intro.md" },
    ],
    sidebar: [
      {
        text: "Documentation ",

        items: [
          { text: "Intro", link: "/routes/intro" },
          { text: "How it works", link: "/routes/howitworks" },
          { text: "GraphQl", link: "/routes/graphql" },
          { text: "GraphQl (cont.)", link: "/routes/mutation" },
          { text: "REST", link: "/routes/rest" },
          //   { text: "Sample Queries", link: "/routes/sampleQueries" },
          //   { text: "Sample Handler", link: "/routes/sampleHandler" },
          //   { text: "Sample Examples", link: "/routes/sampleExamples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/wb63318/Api_Gen_2.git" },
    ],
  },
};
