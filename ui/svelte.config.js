import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      sourceMap: !production,
      postcss: {
        plugins: [require('autoprefixer')()]
      }
    }),
  ],
};

export default config;
