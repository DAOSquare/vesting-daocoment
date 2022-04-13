
module.exports = {
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "en-US",
      title: "DAOSquare",
      description: "DAOSquare's Vesting",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'DAOSquare',
      description: "DAOSquare's Vesting",
    },
  },
  // plugins: [["@vuepress/plugin-search"]],
  themeConfig: {
    logo: "/images/DAOSquareLogo_Round.svg",
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectText: 'Languages',
        label: 'English',
        lang: "en-US",
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
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectText: '选择语言',
        label: '简体中文',
        lang: "zh-CN",
        sidebar: [
          {
            text: "Vesting",
            link: "/zh/README.md",
            children: [
              {
                text: "关于Vesting",
                link: "/zh/guide/vp.md",
              },
              {
                text: "关于网络和钱包",
                link: "/zh/guide/Network_Wallet.md",
              },
              {
                text: "如何认领代币",
                link: "/zh/guide/Claim_Token.md",
              },
              {
                text: "名词解释",
                link: "/zh/guide/Explanation_of_terms.md",
              },
            ],
          },
          {
            text: "公告",
            children: [
              {
                text: "vesting 社区测试体验活动",
                link: "/zh/guide/20220412.md",
              },
            ],
          },
          {
            text: "关于版本",
            children: [
              {
                text: "版本日志",
                link: "/zh/guide/Version_Record.md",
              },
            ],
          },
        ],
      },
    },


  }


}  
