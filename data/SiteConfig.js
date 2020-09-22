const config = {
  siteTitle: 'মাদ্‌রাসাতুল ইল্‌ম', // Site title.
  siteTitleShort: 'মাদ্‌রাসাতুল ইল্‌ম', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteSlogan: 'বিশুদ্ধ ইসলামি জ্ঞানের এক নির্ভরযোগ্য প্রতিষ্ঠান', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'মাদ্‌রাসাতুল ইল্‌ম', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteImage: '/assets/images/madrasatul-ilm.jpg', // Logo used for SEO and manifest.
  siteUrl: 'https://dev.madrasatulilm.com/', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'বিশুদ্ধ ইসলামি জ্ঞানের এক নির্ভরযোগ্য প্রতিষ্ঠান', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-129538625-1', // GA tracking ID.
  postDefaultCategoryID: 'Blog', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'editor', // Username to display in the author segment.
  userEmail: 'contact@madrasatulilm.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Dhaka, Bangladesh', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: '',
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/wgao19/gatsby-starter-multiple-author',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/wgao19',
      iconClassName: 'fa fa-twitter',
    },
  ],
  copyright: 'Copyright © 2019. Advanced User', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#7950F2', // Used for setting manifest and progress theme colors.
  backgroundColor: '#212529', // Used for setting manifest background color.
  baseEditURL:
    'https://github.com/sh4hids/madrasatulilm.com/edit/develop/content',
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
