// ---------------------------------------------------------------------------
// News, stories, events, gallery, people, partners, jobs and reports.
// SAMPLE content throughout. Replace with real records before launch and only
// publish beneficiary names and photos with their written consent.
// ---------------------------------------------------------------------------

export const testimonials = [
  { quote: 'When my husband died, I didn’t know how I would feed my children. Pathway Finders brought us food every month and paid my daughter’s school fees. Today she is in SS2.', name: 'Mrs. Folake A.', role: 'Welfare and scholarship beneficiary' },
  { quote: 'The academy gave me more than a trade. I learnt how to price my work and keep records. Now I repair phones for half of my street.', name: 'Musa A.', role: 'Graduate, Youth Skills' },
  { quote: 'I’ve volunteered with a few groups. This team is organised, honest about money, and they treat every patient like family.', name: 'Dr. Chiamaka E.', role: 'Volunteer doctor' },
]

export const news = [
  {
    slug: 'gombe-outreach-1100-screened',
    tag: 'Health', color: 'var(--red)', image: '/img/news/gombe-outreach-1100-screened.jpg', fallback: 'var(--fb-blue)',
    date: '2026-08-23', author: 'Programmes Team',
    title: '1,100 people screened at our Gombe health outreach',
    excerpt: 'Our volunteer doctors found over 200 cases of high blood pressure that people didn’t know they had.',
    body: [
      'On Saturday, 23 August, the community hall in Tudun Wada, Gombe, was full before 8am. By the time we packed up in the evening, our team of 14 doctors, 22 nurses, 6 pharmacists and over 60 volunteers had seen 1,100 people.',
      'The most worrying finding was blood pressure. More than 200 adults had readings high enough to need treatment, and most of them had no idea. Each person left with medicine, advice on diet and salt, and a referral card for follow-up at a partner clinic.',
      'We also tested 380 children and adults for malaria, gave out 150 pairs of reading glasses, and ran health talks on hygiene, healthy eating and recognising signs of stroke.',
      'Our follow-up team has already started calling the people we referred. Thank you to every volunteer, to the community leaders who spread the word, and to the donors who paid for the medicines and test kits. Our next outreach is in November.',
    ],
  },
  {
    slug: 'aisha-tailoring-story',
    tag: 'Empower', color: 'var(--green)', image: '/img/news/aisha-tailoring-story.jpg', fallback: 'var(--fb-green)',
    date: '2026-09-12', author: 'Communications',
    title: 'From trainee to employer: how Aisha built her tailoring shop',
    excerpt: 'Two years after finishing our skills academy, Aisha now trains three apprentices of her own.',
    body: [
      'Aisha joined our skills academy in 2024 after two years at home with no job. She chose tailoring because she had always liked sewing her younger sisters’ clothes.',
      'Six months later she graduated with a sewing machine, a starter pack of fabric and thread, and a notebook full of pricing tips from our business class. She rented a small space on her street and started with school uniforms.',
      'Today, Aisha has three apprentices and a waiting list of customers before every festive season. “The machine helped, but what changed everything was learning to keep records,” she says. “Now I know if I’m making money.”',
      'Applications for our next academy intake open in January.',
    ],
  },
  {
    slug: 'back-to-school-2026',
    tag: 'Transform', color: 'var(--orange)', image: '/img/news/back-to-school-2026.jpg', fallback: 'var(--fb-warm)',
    date: '2026-09-05', author: 'Education Team',
    title: '120 children head back to school with fees paid',
    excerpt: 'Fees, uniforms and books were delivered before resumption so no child had to stay home.',
    body: [
      'This September, 120 children in our scholarship programme started the new session on time, with fees paid and full sets of uniforms, sandals, bags and textbooks.',
      'For many of these families, resumption used to be the hardest time of year. Parents told us they would choose which child goes to school and which one waits. That shouldn’t be a choice anyone has to make.',
      'Thank you to the individuals, churches and businesses that sponsored a child this year. If you would like to sponsor a child for the next term, visit our Donate page.',
    ],
  },
  {
    slug: 'flood-relief-kaduna',
    tag: 'Support', color: 'var(--blue)', image: '/img/news/flood-relief-kaduna.jpg', fallback: 'var(--fb-blue)',
    date: '2026-07-18', author: 'Welfare Desk',
    title: 'Flood relief reaches 85 families in Kaduna South',
    excerpt: 'Heavy rains flooded homes near the river. Our team delivered food, mats and hygiene kits within two days.',
    body: [
      'After three days of heavy rain in July, the river burst its banks and water entered dozens of homes in Kaduna South. Many families lost food, bedding and school books.',
      'Within 48 hours, our welfare team and volunteers delivered food packs, sleeping mats, mosquito nets and hygiene kits to 85 families. Community leaders helped us reach the homes that were hardest hit.',
      'We are now working with residents on drainage clean-ups to reduce flooding next season.',
    ],
  },
  {
    slug: 'women-grants-cohort-3',
    tag: 'Empower', color: 'var(--green)', image: '/img/news/women-grants-cohort-3.jpg', fallback: 'var(--fb-green)',
    date: '2026-06-02', author: 'Programmes Team',
    title: '45 women traders in Lagos and Osun receive interest-free grants',
    excerpt: 'Our third group of women traders finished business training and received their grants.',
    body: [
      'Forty-five women from markets in Lagos and Ile-Ife completed four weeks of business training in May. They learnt simple bookkeeping, pricing, saving and how to handle credit sales.',
      'Each woman then presented a short plan to our grants panel and received an interest-free grant. Over the next six months, they will meet monthly with mentors and their peer groups.',
      'Women from our first two groups have, on average, tripled their monthly income. We can’t wait to see what this group does.',
    ],
  },
  {
    slug: 'volunteer-appreciation-2026',
    tag: 'Community', color: 'var(--navy)', image: '/img/news/volunteer-appreciation-2026.jpg', fallback: 'var(--fb-warm)',
    date: '2026-05-10', author: 'Volunteer Team',
    title: 'Thank you to our 150+ volunteers',
    excerpt: 'We gathered our volunteers to say thank you and plan the year ahead.',
    body: [
      'None of our work happens without volunteers. In May we brought together volunteers from Lagos, Kaduna and Katsina: doctors, nurses, teachers, students, artisans and corps members who gave their time over the past year.',
      'We shared what their work made possible, listened to their ideas, and recognised a few people who went far beyond what we asked.',
      'If you have been thinking about volunteering, there has never been a better time to join us.',
    ],
  },
]

export const stories = [
  {
    name: 'Folake', age: 42, place: 'Ile-Ife, Osun', program: 'Food & Welfare Support', color: 'var(--blue)', image: '/img/stories/folake.jpg', fallback: 'var(--fb-blue)',
    headline: '“We stopped skipping meals.”',
    text: 'Folake lost her husband in 2022 and was left with three children and no steady income. Our welfare team enrolled her for monthly food packs and her eldest daughter joined our scholarship programme. Folake later took our business training and now sells provisions from her front room. “I can stand on my own now,” she says.',
  },
  {
    name: 'Musa', age: 23, place: 'Kaduna', program: 'Youth Skills & Digital Pathways', color: 'var(--green)', image: '/img/stories/musa.jpg', fallback: 'var(--fb-green)',
    headline: '“I used to sit at the junction all day.”',
    text: 'After secondary school, Musa spent three years doing odd jobs. A friend told him about our academy in Kaduna and he chose phone and electronics repair. Today he runs a small repair stand, pays his own rent and helps his younger brother with school fees.',
  },
  {
    name: 'Ifeoma', age: 14, place: 'Jos, Plateau', program: 'Back-to-School Scholarship', color: 'var(--orange)', image: '/img/stories/ifeoma.jpg', fallback: 'var(--fb-warm)',
    headline: '“I came second in my class.”',
    text: 'When Ifeoma’s father died, her mother couldn’t keep up with school fees and Ifeoma started hawking. Her school headteacher referred her to us. With fees paid and a mentor checking in, she is back in class and wants to become a nurse.',
  },
  {
    name: 'Mallam Ibrahim', age: 58, place: 'Kaduna', program: 'Community Health Outreach', color: 'var(--red)', image: '/img/stories/ibrahim.jpg', fallback: 'var(--fb-blue)',
    headline: '“They called to check on me.”',
    text: 'Mallam Ibrahim came to our outreach for a headache that wouldn’t go away. His blood pressure was dangerously high. He left with medicine and a referral, and our follow-up team called him twice. His pressure is now under control.',
  },
  {
    name: 'Ngozi', age: 37, place: 'Lagos', program: 'Women’s Livelihood Grants', color: 'var(--green)', image: '/img/stories/ngozi.jpg', fallback: 'var(--fb-green)',
    headline: '“I don’t have to borrow anymore.”',
    text: 'Ngozi sold tomatoes and pepper in small quantities and often borrowed at high interest to restock. With an interest-free grant and our bookkeeping training, she now buys in bulk, has doubled her profit and saves weekly with her peer group.',
  },
  {
    name: 'Blessing', age: 19, place: 'Keffi, Nasarawa', program: 'Mother & Child Wellness', color: 'var(--red)', image: '/img/stories/blessing.jpg', fallback: 'var(--fb-warm)',
    headline: '“The other mothers became my sisters.”',
    text: 'Blessing found out she was pregnant at 18 and felt completely alone. At our mothers’ circle she learnt about antenatal care and breastfeeding, and made friends who still check on her. Her son is healthy and fully immunised.',
  },
]

// SAMPLE events. Replace with real dates and venues.
export const events = [
  { slug: 'medical-outreach-nov', date: '2026-11-14', time: '8:00am to 4:00pm', title: 'Free Medical Outreach, Gombe', place: 'Community Hall, Tudun Wada, Gombe', pillar: 'Health', color: 'var(--red)', text: 'Free check-ups, malaria tests, eye checks, reading glasses and medicines for everyone. Volunteers needed for registration and crowd control.' },
  { slug: 'mothers-circle-nov', date: '2026-11-21', time: '10:00am to 12:30pm', title: 'Mothers’ Circle: Feeding Your Baby', place: 'Primary Health Centre, Keffi, Nasarawa', pillar: 'Health', color: 'var(--red)', text: 'A friendly session for pregnant women and new mothers on breastfeeding and weaning. Light refreshments and baby packs provided.' },
  { slug: 'graduation-dec', date: '2026-12-05', time: '11:00am', title: 'Skills Academy Graduation', place: 'Our training centre, Kaduna', pillar: 'Empower', color: 'var(--green)', text: 'Celebrate 60 young people in Kaduna finishing their six-month training. Graduates receive starter kits. Employers and partners are welcome.' },
  { slug: 'christmas-food-drive', date: '2026-12-19', time: '9:00am to 3:00pm', title: 'Christmas Food Drive for Widows and Older People', place: 'Communities in Lagos and Kaduna', pillar: 'Support', color: 'var(--blue)', text: 'We will deliver festive food hampers to 300 homes. Help us pack, deliver, or sponsor a hamper.' },
  { slug: 'back-to-school-jan', date: '2027-01-09', time: '10:00am', title: 'Back-to-School Pack Distribution', place: 'Partner schools, Jos, Plateau', color: 'var(--orange)', text: 'Scholarship children collect uniforms, bags and books ahead of the second term.' },
  { slug: 'academy-applications', date: '2027-01-20', time: 'All day', title: 'Skills Academy Applications Open', place: 'Online and at our training centres', pillar: 'Empower', color: 'var(--green)', text: 'Applications open for the next intake in tailoring, catering, phone repair and digital skills.' },
]

export const pastEvents = [
  { date: '2026-08-23', title: 'Free Medical Outreach, Gombe', result: '1,100 people seen, 200+ referred for blood pressure care' },
  { date: '2026-07-18', title: 'Flood Relief, Kaduna South', result: '85 families received food, mats and hygiene kits' },
  { date: '2026-06-02', title: 'Women’s Grants Ceremony, Lagos', result: '45 women traders from Lagos and Osun received interest-free grants' },
  { date: '2026-05-10', title: 'Volunteer Appreciation Day', result: '150+ volunteers recognised' },
]

// Gallery tiles. Drop real photos into client/public/img with these names.
export const gallery = [
  { image: '/img/gallery/01-blood-pressure-checks.jpg', cat: 'Health', caption: 'Blood pressure checks at an outreach in Kaduna', fallback: 'var(--fb-blue)' },
  { image: '/img/gallery/02-resumption-day.jpg', cat: 'Education', caption: 'Scholarship children on resumption day', fallback: 'var(--fb-warm)' },
  { image: '/img/gallery/03-tailoring-class.jpg', cat: 'Skills', caption: 'Tailoring class at the skills academy', fallback: 'var(--fb-green)' },
  { image: '/img/gallery/04-packing-food-packs.jpg', cat: 'Welfare', caption: 'Packing monthly food packs', fallback: 'var(--fb-green)' },
  { image: '/img/gallery/05-reading-glasses.jpg', cat: 'Health', caption: 'Free reading glasses for older residents', fallback: 'var(--fb-warm)' },
  { image: '/img/gallery/06-computer-class.jpg', cat: 'Skills', caption: 'Computer class at the skills academy', fallback: 'var(--fb-blue)' },
  { image: '/img/gallery/07-flood-relief.jpg', cat: 'Welfare', caption: 'Packing flood relief for Kaduna South', fallback: 'var(--fb-blue)' },
  { image: '/img/gallery/08-reading-clinic.jpg', cat: 'Education', caption: 'After-school reading clinic', fallback: 'var(--fb-green)' },
  { image: '/img/gallery/09-mothers-circle.jpg', cat: 'Health', caption: 'Mothers’ circle health talk', fallback: 'var(--fb-warm)' },
  { image: '/img/gallery/10-volunteers.jpg', cat: 'Community', caption: 'Volunteers before an outreach in Katsina', fallback: 'var(--fb-green)' },
  { image: '/img/gallery/11-graduation.jpg', cat: 'Skills', caption: 'Graduation and starter kits', fallback: 'var(--fb-blue)' },
  { image: '/img/gallery/12-community-leaders.jpg', cat: 'Community', caption: 'Meeting with community leaders in Kaduna', fallback: 'var(--fb-warm)' },
]

// SAMPLE people. Replace with real names, roles, bios and photos.
export const staff = [
  { name: 'Founder’s Name', role: 'Founder & Executive Director', image: '/img/team/staff-1.jpg', bio: 'Started Pathway Finders in 2018 after years of helping neighbours informally. Leads strategy, partnerships and fundraising.' },
  { name: 'Name Surname', role: 'Programmes Manager', image: '/img/team/staff-2.jpg', bio: 'Oversees all six programmes, from planning to reporting. Background in public health and community development.' },
  { name: 'Name Surname', role: 'Health Outreach Coordinator', image: '/img/team/staff-3.jpg', bio: 'A registered nurse who organises our outreaches and mothers’ circles and manages our medical volunteers.' },
  { name: 'Name Surname', role: 'Welfare Officer', image: '/img/team/staff-4.jpg', bio: 'Visits families, assesses needs and runs the monthly food pack programme.' },
  { name: 'Name Surname', role: 'Skills Academy Lead', image: '/img/team/staff-5.jpg', bio: 'Runs the academy timetable, trainers and job placements.' },
  { name: 'Name Surname', role: 'Volunteer & Partnerships Lead', image: '/img/team/staff-6.jpg', bio: 'Your first contact if you want to volunteer, partner or organise a staff service day.' },
  { name: 'Name Surname', role: 'Finance & Admin Officer', image: '/img/team/staff-7.jpg', bio: 'Keeps our books, processes donations and prepares our financial reports.' },
  { name: 'Name Surname', role: 'Communications Officer', image: '/img/team/staff-8.jpg', bio: 'Tells our story through photos, social media, newsletters and reports.' },
]

export const board = [
  { name: 'Name Surname', role: 'Chair, Board of Trustees', bio: 'Retired civil servant with over 30 years in public administration.' },
  { name: 'Name Surname', role: 'Trustee', bio: 'Medical doctor and consultant in family medicine.' },
  { name: 'Name Surname', role: 'Trustee', bio: 'Chartered accountant who chairs our finance and audit committee.' },
  { name: 'Name Surname', role: 'Trustee', bio: 'Lawyer with experience in non-profit governance.' },
  { name: 'Name Surname', role: 'Trustee', bio: 'Community leader and secondary school principal in Kaduna.' },
]

// SAMPLE partners. Replace with real partners and add their logos.
export const partnerGroups = [
  { title: 'Health partners', icon: 'heart', items: ['Partner Hospital', 'Partner Pharmacy', 'Primary Health Centres', 'Volunteer Doctors Network'] },
  { title: 'Faith and community', icon: 'users', items: ['Partner Church', 'Partner Mosque', 'Community Development Associations', 'Market Women Associations'] },
  { title: 'Corporate supporters', icon: 'briefcase', items: ['Corporate Sponsor', 'Corporate Sponsor', 'Corporate Sponsor', 'Corporate Sponsor'] },
  { title: 'Education partners', icon: 'book', items: ['Partner School', 'Partner School', 'Partner School', 'Local Education Authority'] },
]

export const sponsorships = [
  { title: 'Outreach Sponsor', amount: '₦500,000', items: ['Fund one full medical outreach day', 'Your logo on banners and volunteer shirts', 'Photo and impact report within two weeks', 'Option for your staff to volunteer on the day'] },
  { title: 'Scholarship Sponsor', amount: '₦1,500,000', items: ['Keep 10 children in school for a year', 'Termly progress updates', 'Invitation to our back-to-school day', 'Recognition on our website and annual report'] },
  { title: 'Academy Sponsor', amount: '₦3,000,000', items: ['Sponsor a full skills academy class', 'Name a training room', 'Meet the graduates at their ceremony', 'Detailed impact report at the end'] },
]

export const jobs = [
  { title: 'Programme Officer, Health', type: 'Full-time', place: 'Kaduna', text: 'Help plan and run our medical outreaches and mothers’ circles. You’ll need a health background and at least two years of community work.' },
  { title: 'Skills Academy Trainer, Catering', type: 'Part-time', place: 'Lagos', text: 'Teach catering and pastry three days a week. Proven experience and patience with young learners are a must.' },
  { title: 'Communications Intern', type: 'Internship, 6 months', place: 'Hybrid', text: 'Take photos, write stories and help run our social media. Great for recent graduates in mass communication or similar.' },
  { title: 'NYSC Corps Members', type: 'Placement / CDS', place: 'Lagos, Kaduna or Abuja', text: 'We welcome corps members for primary placement and CDS. Roles include teaching, health support, admin and media.' },
]

export const spending = [
  { label: 'Health programmes', value: 34, color: 'var(--red)' },
  { label: 'Food and welfare', value: 24, color: 'var(--blue)' },
  { label: 'Education and scholarships', value: 18, color: 'var(--orange)' },
  { label: 'Skills and women’s grants', value: 14, color: 'var(--green)' },
  { label: 'Admin and fundraising', value: 10, color: '#94a3b8' },
]

export const reports = [
  { year: '2025', title: 'Annual Report 2025', text: 'Our full year of work, stories and finances.' },
  { year: '2025', title: 'Audited Financial Statement 2025', text: 'Income, spending and the auditor’s opinion.' },
  { year: '2024', title: 'Annual Report 2024', text: 'The year our skills academy produced its first graduates.' },
  { year: '2024', title: 'Health Outreach Report 2024', text: 'Findings from four outreaches and 3,200 patients.' },
]

export const policies = {
  privacy: {
    title: 'Privacy Policy',
    updated: '1 October 2026',
    intro: 'This policy explains what personal information we collect through this website and our programmes, why we collect it, and how we keep it safe. We follow the Nigeria Data Protection Act 2023.',
    sections: [
      ['What we collect', 'When you fill a form on our website, we collect the details you give us, such as your name, phone number, email address and message. When you take part in our programmes, we may also collect information about your household and needs so we can help you properly.'],
      ['Why we collect it', 'We use your information to reply to you, process donations and pledges, arrange volunteering, deliver support and send updates you have asked for. We also use summary figures, without names, to report on our work.'],
      ['Who we share it with', 'We do not sell or rent your information. We only share it with partners when needed to deliver a service you asked for, for example a hospital referral, and only with your permission. We may share information if the law requires it.'],
      ['Photos and stories', 'We only publish photos and stories of beneficiaries with their written consent, or a parent’s consent for children. You can ask us to remove your photo or story at any time.'],
      ['How long we keep it', 'We keep information only as long as we need it for the purpose it was collected, or as the law requires for financial records.'],
      ['Your rights', 'You can ask to see the information we hold about you, correct it, or ask us to delete it. You can also unsubscribe from our newsletter at any time.'],
      ['Contact us', 'For any privacy question, call us on one of our official numbers or visit our office.'],
    ],
  },
  safeguarding: {
    title: 'Safeguarding Policy',
    updated: '1 October 2026',
    intro: 'Many of the people we serve are children and vulnerable adults. Keeping them safe from harm, abuse and exploitation comes before everything else we do.',
    sections: [
      ['Our commitment', 'We do not tolerate abuse, exploitation or harassment of any kind by our staff, volunteers, trustees or partners. Help from us is never conditional on anything in return.'],
      ['Who this applies to', 'This policy applies to everyone who works with or represents Pathway Finders, including staff, volunteers, trustees, interns, corps members, contractors and partners.'],
      ['Safe recruitment', 'Everyone working directly with children or vulnerable adults is interviewed, gives references, and signs our code of conduct before they start.'],
      ['Code of conduct', 'Staff and volunteers must never be alone with a child out of sight of others, must never ask for or accept favours from beneficiaries, and must never share beneficiaries’ personal details or photos without consent.'],
      ['Reporting a concern', 'If you are worried about the behaviour of anyone connected to our organisation, please tell us. Call any of our official numbers and ask for the Safeguarding Lead, or visit our office. Reports are treated in confidence and you will not be punished for raising a concern in good faith.'],
      ['How we respond', 'Every report is taken seriously. We protect the person at risk first, investigate fairly, and involve the police or relevant authorities when needed.'],
    ],
  },
  terms: {
    title: 'Terms of Use',
    updated: '1 October 2026',
    intro: 'By using this website you agree to these terms. Please read them carefully.',
    sections: [
      ['Using this website', 'This website shares information about our work and lets you contact us, pledge donations, volunteer and request help. Please don’t misuse it, send false information or try to disrupt it.'],
      ['Donations', 'Pledges made on this site are not payments. A member of our team will contact you to confirm our official account details. Only pay into accounts confirmed by our official phone numbers.'],
      ['Content', 'Text, images and logos on this site belong to Pathway Finders Empowerment Initiative unless stated otherwise. You may share our content for non-commercial purposes if you credit us.'],
      ['Accuracy', 'We work hard to keep information accurate, but programmes, dates and figures can change. Contact us if you need to confirm anything.'],
      ['Links', 'We are not responsible for the content of other websites we link to.'],
      ['Changes', 'We may update these terms from time to time. The date at the top shows the latest version.'],
    ],
  },
}

// Stock photos from Pexels (free to use under the Pexels License). Replace with
// photos of your own work over time.
export const photoCredits = [5409304, 6646882, 6647122, 6647178, 7156163, 7156168, 8042458, 8248290, 8248433, 9090746, 9159042, 10604063, 11645426, 12286603, 12672102, 14909652, 14935332, 16007661, 18449719, 23490764, 26855714, 27778441, 27874900, 28646079, 30110240, 30879378, 31528166, 31763369, 32423877, 32951012, 33127693, 33127835, 33132346, 33155767, 33489786, 33697013, 33823454, 33890101, 34264956, 34479480, 34598096, 36106923, 37285156, 37285163, 37285166, 37567064, 38500516, 38784177, 38909242, 39523812, 39523813, 39942530, 39942531]
