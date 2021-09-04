module.exports={
  "title": "Yusri Sahrul",
  "tagline": "Yusri Sahrul Personal Website",
  "url": "https://yusrisahrul.engineer",
  "baseUrl": "/",
  "organizationName": "yusrisahrul10",
  "projectName": "my-website",
  // "scripts": [
  //   {
  //     src: "https://tr.n4o.xyz/js/plausible.js",
  //     async: true,
  //     defer: true,
  //     "data-domain": "naoti.me"
  //   }
  // ],
  "favicon": "img/violet.png",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "sidebarPath": "sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve("./src/css/customTheme.css")],
        }
      }
    ]
  ],
  "themeConfig": {
    colorMode: {
      defaultMode: "dark"
    },
    "navbar": {
      "title": "Yusri Sahrul",
      "logo": {
        "src": "img/blank_profile.png"
      },
      "items": [
        {
          "to": "blog/",
          "label": "Blog",
          "position": "left",
        },
        {
          href: "https://github.com/yusrisahrul10/personal-website",
          position: "right",
          className: "header-github-link",
        },
      ]
    },
    "image": "img/blank_profile.png",
    footer: {
      links: [

        {
          title: 'Connect',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/yusri-sahrul/',
            },
            {
              label: 'Email',
              href: 'mailto:yusri10sahrul@gmail.com',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/yusri.666',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yusrisahrul10',
            },
          ],
        },
      ],
      "copyright": "Copyright © 2021 | Website Built with Docusaurus"
    }
  }
}