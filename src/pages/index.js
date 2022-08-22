import { useScrollRestoration } from "gatsby"
import React from "react"
import HomeLayout from "../components/HomeLayout"
import ProjectsList from "../components/ProjectsList"

export default function Home() {
  const homeScrollRestoration = useScrollRestoration(`homepage`)

  return (
    <HomeLayout {...homeScrollRestoration}>
      <ProjectsList />
    </HomeLayout>
  )
}
