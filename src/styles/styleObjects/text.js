const baseProps = {
  fontSize: {
    lg: "32px",
    md: "21px",
    sm: "16px",
  },
  lineHeight: {
    lg: "48px",
    md: "32px",
    sm: "24px",
  },
  weight: {
    bold: 700,
    reg: 500,
  },
}

export const text = {
  ...baseProps,
  complete: {
    lg: `
        font-size: ${baseProps.fontSize.lg};
        line-height: ${baseProps.lineHeight.lg};
    `,
    md: `
        font-size: ${baseProps.fontSize.md};
        line-height: ${baseProps.lineHeight.md};
    `,
    sm: `
        font-size: ${baseProps.fontSize.sm};
        line-height: ${baseProps.lineHeight.sm};
    `,
  },
}
