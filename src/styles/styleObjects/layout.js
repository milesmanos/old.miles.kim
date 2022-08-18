export const breakpoints = {
  lg_md: "@media only screen and (max-width: 1280px)",
  md_sm: "@media only screen and (max-width: 720px)",
}

const basePadding = {
  horizLg: "24px",
  vertiLg: "96px",
  horizSm: "24px",
  vertiSm: "48px",
}

export const pagePadding = {
  ...basePadding,
  complete: {
    lg: `
    padding: ${basePadding.vertiLg} ${basePadding.horizLg}
    `,
    sm: `
    padding: ${basePadding.vertiSm} ${basePadding.horizSm}
    `,
  },
}
