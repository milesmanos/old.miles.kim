// DEPRECATED

import React from "react"

// .layout {
//   max-width: 1200px;
//   margin: 0 auto;
// }
// nav {
//   display: grid;
//   grid-template-columns: 1fr 800px 1fr;
//   margin: 40px auto;
// }
// nav .links {
//   display: inline-block;
//   text-align: right;
// }
// nav a {
//   display: inline-block;
//   margin-left: 20px;
//   font-weight: 400;
//   padding-bottom: 8px;
//   border-bottom: 3px solid transparent;
// }

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <footer>
        <p>me</p>
      </footer>
    </div>
  )
}
