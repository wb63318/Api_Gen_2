export default {
    "title": " Api Generator",
    description: "An Api Generator Template ",
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/routes/intro.md' }
          ],
        sidebar:[
            {
                text: 'Documentation ',
                
                items:[
                   
                    {text:'Intro',link:'/routes/intro'},
                    {text:'Sample Queries',link:'/routes/sampleQueries'},
                    {text:'Sample Handler',link:'/routes/sampleHandler'},
                    {text:'Sample Examples',link:'/routes/sampleExamples'}


                ],
                
            },
            
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wb63318/Api_Gen_2.git' }
          ],
    }
}