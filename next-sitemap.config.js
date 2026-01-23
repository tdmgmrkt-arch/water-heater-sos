/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://waterheatersos.com',
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/quote': 0.9,
      '/contact': 0.9,
      '/about': 0.8,
      '/gas-water-heaters': 0.9,
      '/tankless-water-heaters': 0.9,
      '/riverside': 0.8,
      '/redlands': 0.8,
      '/service-area': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
