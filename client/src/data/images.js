// ---------------------------------------------------------------------------
// Every fixed image on the site, in one place.
//
// Files live in client/public/img/, so '/img/page-banners/about.jpg' is the
// file client/public/img/page-banners/about.jpg. To change a picture, replace
// the file (same name) or point the path below at a new file.
//
// Images that belong to a content item (a programme, news story, beneficiary
// story, gallery photo or staff member) are set next to that item's text in
// data/site.js or data/content.js, inside the matching folder:
//   /img/programs/   /img/news/   /img/stories/   /img/gallery/   /img/team/
// ---------------------------------------------------------------------------

export const images = {
  // Logo and favicon (also referenced in client/index.html)
  brand: {
    logo: '/img/brand/logo.png', // full logo with name, used in the footer
    emblem: '/img/brand/emblem.png', // round symbol, used in the header, home banner and browser tab
  },

  // Large photo behind the title at the top of each page, named after the page's address
  banners: {
    about: '/img/page-banners/about.jpg',
    team: '/img/page-banners/team.jpg',
    impact: '/img/page-banners/impact.jpg',
    partners: '/img/page-banners/partners.jpg',
    careers: '/img/page-banners/careers.jpg',
    programs: '/img/page-banners/programs.jpg',
    news: '/img/page-banners/news.jpg',
    stories: '/img/page-banners/stories.jpg',
    events: '/img/page-banners/events.jpg',
    gallery: '/img/page-banners/gallery.jpg',
    getInvolved: '/img/page-banners/get-involved.jpg',
    donate: '/img/page-banners/donate.jpg',
    getHelp: '/img/page-banners/get-help.jpg',
    faq: '/img/page-banners/faq.jpg',
    contact: '/img/page-banners/contact.jpg',
    policies: '/img/page-banners/policies.jpg', // Privacy, Safeguarding and Terms pages
  },

  // Photos inside page sections, named page-section
  sections: {
    homeWhoWeAre: '/img/sections/home-who-we-are.jpg',
    homeFeaturedStory: '/img/sections/home-featured-story.jpg', // also on the Stories page
    aboutOurStory: '/img/sections/about-our-story.jpg',
    aboutHowWeWork: '/img/sections/about-how-we-work.jpg',
    getInvolvedVolunteer: '/img/sections/get-involved-volunteer.jpg',
    careersWorkingHere: '/img/sections/careers-working-here.jpg',
    donateWhereItGoes: '/img/sections/donate-where-it-goes.jpg',
    teamJoinUs: '/img/sections/team-join-us.jpg',
  },
}
