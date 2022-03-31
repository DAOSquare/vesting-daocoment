module.exports = {
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: " DAOSquare Portfolios",
      title: "DAOSquare Portfolios",
      description: "DAOSquare's Portfolios",
    },
  },
  plugins: [["@vuepress/plugin-search"]],
  themeConfig: {
    logo: "/images/logoMadbell.svg",
    sidebar: [
      {
        text: "IQ Protocol",
        link: "/",
        children: [
          {
            text: "Vesting Period",
            link: "/guide/iq.md",
          },
        ],
      },

    ]
  }


}  
