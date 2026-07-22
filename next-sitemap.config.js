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
      '/blog': 0.8,
      '/gas-water-heaters': 0.9,
      '/tankless-water-heaters': 0.9,
      '/ac-repair': 0.9,
      '/riverside': 0.8,
      '/redlands': 0.8,
      '/service-area': 0.8,
      '/hvac-services': 0.9,
      '/ac-services': 0.9,
      '/heating-services': 0.9,
      '/indoor-air-quality': 0.9,
      '/ac-installation': 0.9,
      '/furnace-repair': 0.9,
      '/heat-pump-systems': 0.9,
      '/mini-split-installation': 0.9,
      '/air-filtration': 0.9,
      '/ac-maintenance': 0.8,
      '/thermostat-installation': 0.8,
      '/furnace-installation': 0.8,
      '/furnace-maintenance': 0.8,
      '/whole-home-humidifier': 0.8,
      '/whole-home-dehumidifier': 0.8,
      '/hvac-maintenance-plan': 0.8,
    };

    // Individual blog posts get a slightly-elevated priority
    const isBlogPost = path.startsWith('/blog/') && path !== '/blog';

    return {
      loc: path,
      changefreq: isBlogPost ? 'monthly' : config.changefreq,
      priority: priorities[path] || (isBlogPost ? 0.7 : config.priority),
      lastmod: new Date().toISOString(),
    };
  },
};
