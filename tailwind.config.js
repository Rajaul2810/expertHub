/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var(--color-text-muted)',
          inverted:'var(--color-text-inverted)',
        }
      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
          'button-accent':'var(--color-button-accent)',
          'button-accent-hover':'var(--color-button-accent-hover)',
          'button-muted':'var(--color-button-muted)',
          'button-muted-hover':'var(--color-button-muted-hover)',
        }
      }
    },
  },
  plugins: [require("daisyui")],
};
