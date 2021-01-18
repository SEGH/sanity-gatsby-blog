export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6005d12f34bcdad212b346a9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1p5hqcuj',
                  apiId: '73498f12-08f9-4f1b-b59b-cc48c4d6e385'
                },
                {
                  buildHookId: '6005d12f9d0752af772e9f8e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xuhkkacz',
                  apiId: '33a75c7d-00e0-4526-8d93-595228228f4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SEGH/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xuhkkacz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
