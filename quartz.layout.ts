import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const sidebarHeader = Component.Flex({
  components: [
    {
      Component: Component.PageTitle(),
      grow: true,
    },
    {
      Component: Component.Darkmode(),
    },
  ],
  direction: "row",
  gap: "0.75rem",
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      Neocities: "https://neocities.org",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    sidebarHeader,
    Component.Search(),
    Component.Explorer(),
    Component.MobileOnly(
      Component.Spacer()
    ),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  pageBody: Component.Content(),
  afterBody: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    sidebarHeader,
    Component.Search(),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  pageBody: Component.Content(),
  afterBody: [],
}
