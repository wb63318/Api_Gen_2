export default {
  title: " Command Application Interface",
  description: "Command Application Interface ",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/routes/intro.md" },
      { text: "Release Notes *", link: "/routes/intro.md" },
    ],
    sidebar: [
      {
        text: "Documentation ",

        items: [
          { text: "Intro", link: "/routes/intro" },
          { text: "How it works", link: "/routes/howitworks" },
          { text: "GraphQl (Query)", link: "/routes/graphql" },
          { text: "GraphQl (Mutation)", link: "/routes/mutation" },
          { text: "GraphQl (Subscription)", link: "/routes/subscription" },
          { text: "GraphQl (Handler)", link: "/routes/handler" },
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
