const baseProps = {
  fontSize: {
    xxl: "64px",
    xl: "48px",
    lg: "32px",
    md: "21px",
    sm: "16px",
    xs: "13px",
    mobText: "18px",
  },
  lineHeight: {
    xxl: "96px",
    xl: "72px",
    lg: "48px",
    md: "32px",
    sm: "24px",
    xs: "16px",
    mobText: "28px",
  },
  weight: {
    bold: 700,
    reg: 500,
  },
}

export const text = {
  ...baseProps,
  complete: {
    xxl: `
        font-size: ${baseProps.fontSize.xxl};
        line-height: ${baseProps.lineHeight.xxl};
    `,
    xl: `
        font-size: ${baseProps.fontSize.xl};
        line-height: ${baseProps.lineHeight.xl};
    `,
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
    xs: `
        font-size: ${baseProps.fontSize.xs};
        line-height: ${baseProps.lineHeight.xs};
    `,
    mobText: `
        font-size: ${baseProps.fontSize.mobText};
        line-height: ${baseProps.lineHeight.mobText};
    `,
  },
}
