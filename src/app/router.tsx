import { h } from "preact"
import { DefaultHome } from "./components/home/Home"
import Page from "./components/page/Page"
import Nested from "./components/nested/Nested"
import { NotFound } from "./NotFound"


const routes = {
  "": {
    content: () => <DefaultHome />
  },
  "/page": {
    content: () => <Page />
  },
  "/page/nested": {
    content: () => <Nested />
  },
}


export function router (location: Location)
{
  const path = location.pathname.replace(/\/$/,"")

  const route = routes[path]

  const content = route ? route.content() : <NotFound />

  return content
}
