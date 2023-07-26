/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")(
  // this is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
);

const nextConfig = withNextIntl({});

module.exports = nextConfig;
