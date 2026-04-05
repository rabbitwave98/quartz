import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "ｒａｂｂｉｔｗａｖｅ９８",
    pageTitleSuffix: " · lavender spark",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "rabbitwave98.neocities.org",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "DM Serif Display",
    body: "Inter",
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light: "#fcf8ff",
      lightgray: "#e9daf7",
      gray: "#c8b2de",
      darkgray: "#705d84",
      dark: "#3b2d4d",
      secondary: "#b784ff",
      tertiary: "#ffc7f2",
      highlight: "rgba(183, 132, 255, 0.16)",
      textHighlight: "#f6d8ff88",
    },
    darkMode: {
      light: "#1b1624",
      lightgray: "#31273f",
      gray: "#5a4d6c",
      darkgray: "#d4c8e6",
      dark: "#f7f2ff",
      secondary: "#d2a8ff",
      tertiary: "#ffc7f2",
      highlight: "rgba(210, 168, 255, 0.18)",
      textHighlight: "#f6d8ff55",
    },
  },
},
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks(),
      Plugin.Description(),
      Plugin.Latex(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
