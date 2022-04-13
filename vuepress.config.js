
module.exports = {
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "DAOSquare",
      title: "DAOSquare",
      description: "DAOSquare's Vesting",
    },
  },
  // plugins: [["@vuepress/plugin-search"]],
  themeConfig: {
    logo: "/images/DAOSquareLogo_Round.svg",
    sidebar: [
      {
        text: "Vesting",
        link: "/",
        children: [
          {
            text: "About Vesting",
            link: "/guide/vp.md",
          },
          {
            text: "About Network and Wallet",
            link: "/guide/Network_Wallet.md",
          },
          {
            text: "How To Claim Token",
            link: "/guide/Claim_Token.md",
          },
          {
            text: "Explanation Of Terms",
            link: "/guide/Explanation_of_terms.md",
          },
        ],
      },
      {
        text: "Announcement",
        children: [
          {
            text: "Vesting Test Experience Event",
            link: "/guide/20220412.md",
          },
        ],
      },
      {
        text: "About Version",
        children: [
          {
            text: "Version Record",
            link: "/guide/Version_Record.md",
          },
        ],
      },
    ],
  }


}  
