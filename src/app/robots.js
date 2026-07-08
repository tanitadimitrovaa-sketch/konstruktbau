export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://konstruktbau.ch/sitemap.xml",
  };
}