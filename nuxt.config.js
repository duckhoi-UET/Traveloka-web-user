require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

export default {
  dev: !isProduction,

  ssr: false,

  // When SPA
  loading: "@/components/shared/Loading.vue",

  // When SSR
  loadingIndicator: {
    name: "folding-cube",
    color: "#336CCE",
  },

  head: {
    title: "TAMCOC",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "@/assets/main.scss",
    "@/assets/ant/main.less",
    "@fortawesome/fontawesome-free/css/all.css",
    "@/assets/css/tailwind.css",
  ],

  plugins: [
    "@/plugins/api",
    { src: "@/plugins/axios", mode: "client" },
    "@/plugins/ant-design",
    "@/plugins/filters",
    "@/plugins/global-components",
    "@/plugins/swiper",
  ],

  robots: [
    {
      UserAgent: "*",
      Disallow:
        process.env.APP_ENV === "production" ? ["/*.json", "/*.xml"] : "/",
    },
  ],

  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3000",
  },

  render: {
    http2: {
      push: true,
    },
  },

  buildModules: [
    "@nuxtjs/fontawesome",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
  ],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  axios: {
    baseURL: process.env.API_HOST,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "data.idToken",
          type: "Bearer",
          name: "Authorization",
          maxAge: 3600,
        },
        refreshToken: {
          property: "data.refreshToken",
          data: "refresh_token",
          maxAge: 30 * 24 * 60 * 60,
        },
        user: {
          property: "data",
        },
        endpoints: {
          login: false,
          logout: false,
          user: false,
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
  },

  router: {
    middleware: ["auth"],
  },

  build: {
    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: "tailwind.config.js",
    //       autoprefixer: {},
    //       ...(process.env.APP_ENV === "production" ? { cssnano: {} } : {}),
    //     },
    //   },
    // },
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "ant-design-vue",
            libraryDirectory: "es",
            style: true,
          },
          "ant-design-vue",
        ],
      ],
    },
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },

  env: {
    API_HOST: process.env.API_HOST || "localhost",
    RSA_PUBLIC_KEY: process.env.RSA_PUBLIC_KEY,
    API_KEY_FIREBASE: process.env.API_KEY_FIREBASE,
  },
};

