module.exports = {
  // Tailwind v3+ / v4 config: use `content` instead of `purge` and
  // remove deprecated `future` flags
  content: ['./src/**/*.{js,jsx,ts,tsx}', './content/**/*.{md,mdx,markdown}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {},
  plugins: [],
};
