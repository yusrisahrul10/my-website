module.exports={
  "title": "Yusri Sahrul",
  "tagline": "Yusri Sahrul Personal Website",
  "url": "https://yusrisahrul.engineer",
  "baseUrl": "/",
  "organizationName": "yusrisahrul10",
  "projectName": "my-website",
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
      // "logo": {
      //   "src": "img/profile.jpg"
      // },
      "items": [
        {
          "to": "about/",
          "label": "Tentang",
          "position": "left",
        },
        {
          "to": "projects/",
          "label": "Project",
          "position": "right",
        },
        {
          href: "https://yusrisahrul.engineer/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
        {
          href: "https://github.com/yusrisahrul10/",
          position: "right",
          className: "header-github-link",
        },
      ]
    },
    "image": "img/blank_profile.png",
    footer: {
      links: [

        {
          title: 'Kontak',
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
          title: 'Lainnya',
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