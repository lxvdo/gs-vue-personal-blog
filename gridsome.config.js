// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "LXVDO | Alex van Domburg",
  siteDescription: "Alex van Domburg - Meditations on sustainability, technology and the mind",
  icon: "src/assets/site_icon.png",
  templates: {
    Tag: "/tag/:id",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "content/posts",
        path: "*.md",
        typeName: "Post",
        pathPrefix: "/posts",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-disqus",
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-116832031-1",
      },
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
