// ---------------------------------------------------------------------------
// Core website content. Edit text here without touching the page layouts.
// Anything marked SAMPLE is a placeholder: swap in verified figures, real
// names (with consent) and real dates before the site goes live.
// ---------------------------------------------------------------------------

export const org = {
  name: 'Pathway Finders Empowerment Initiative',
  short: 'Pathway Finders',
  tagline: 'Giving Hope, Saving Lives.',
  address: '27, Isaac Adenuga Street, Agiliti Estate, Mile 12, Lagos State, Nigeria',
  addressLines: ['27, Isaac Adenuga Street', 'Agiliti Estate, Mile 12', 'Lagos State, Nigeria'],
  phones: ['07062340606', '07038193779', '07067576767'],
  whatsapp: '2347062340606',
  hours: 'Monday to Friday, 9am to 5pm. Saturday, 10am to 2pm.',
  mapQuery: '27 Isaac Adenuga Street, Agiliti Estate, Mile 12, Lagos',
  // Where programmes run. The street address above is only used for contact details and the map.
  states: [
    { name: 'Lagos', note: 'Head office. Health outreaches, welfare, skills academy and women’s grants.' },
    { name: 'Kaduna', note: 'Health outreaches, skills training and emergency relief.' },
    { name: 'Gombe', note: 'Health outreaches and home visits in rural communities.' },
    { name: 'Katsina', note: 'Volunteer network and community health education.' },
    { name: 'FCT Abuja', note: 'Skills academy and job placement support.' },
    { name: 'Nasarawa', note: 'Mothers’ circles and child health.' },
    { name: 'Plateau', note: 'Back-to-school scholarships.' },
    { name: 'Osun', note: 'Women’s livelihood grants and food support.' },
  ],
  // Add real handles when you have them. Empty links stay hidden.
  socials: { facebook: '', instagram: '', x: '', linkedin: '', youtube: '' },
}

export const formatPhone = (p) => `+234 ${p.slice(1, 4)} ${p.slice(4, 7)} ${p.slice(7)}`
export const telHref = (p) => `tel:+234${p.slice(1)}`

// Home page banner slideshow. Photos are in client/public/img/home-slideshow/.
// `position` is the part of the photo to keep in view on narrow screens.
export const heroSlides = [
  { image: '/img/home-slideshow/01-health-checks.jpg', label: 'Free health checks', position: 'center 35%' },
  { image: '/img/home-slideshow/02-children-in-school.jpg', label: 'Keeping children in school', position: 'center 30%' },
  { image: '/img/home-slideshow/03-women-traders.jpg', label: 'Backing women traders', position: '70% center' },
  { image: '/img/home-slideshow/04-volunteers.jpg', label: 'Volunteers in the community', position: 'center 40%' },
  { image: '/img/home-slideshow/05-skills-training.jpg', label: 'Skills that lead to work', position: '35% center' },
]

export const pillars = [
  { key: 'health', title: 'Health', color: 'var(--red)', icon: 'heart', text: 'Free medical outreaches, check-ups and health talks for families who cannot afford a hospital visit.' },
  { key: 'support', title: 'Support', color: 'var(--blue)', icon: 'hands', text: 'Food, welfare and emergency help for widows, older people and families going through hard times.' },
  { key: 'empower', title: 'Empower', color: 'var(--green)', icon: 'briefcase', text: 'Skills training, mentoring and small grants that help young people and women earn their own money.' },
  { key: 'transform', title: 'Transform', color: 'var(--orange)', icon: 'book', text: 'Scholarships and community projects that give children and neighbourhoods a better start.' },
]

// SAMPLE figures. Replace with your verified numbers.
export const stats = [
  { value: 12000, suffix: '+', label: 'People seen at our free health outreaches' },
  { value: 850, suffix: '+', label: 'Children kept in school with fees, books and uniforms' },
  { value: 1200, suffix: '+', label: 'Young people and women trained in a skill' },
  { value: 40, suffix: '+', label: 'Communities reached in 8 states across Nigeria' },
]

export const programs = [
  {
    slug: 'health-outreach',
    pillar: 'Health', color: 'var(--red)', icon: 'heart', image: '/img/programs/health-outreach.jpg', fallback: 'var(--fb-blue)',
    title: 'Community Health Outreach',
    summary: 'Free medical outreaches that bring doctors, nurses and pharmacists right into the neighbourhood.',
    body: 'In many low-income communities, families wait until an illness becomes an emergency before they see a doctor, mostly because of cost. So we take the clinic to them. We set up in community halls, schools, churches, mosques and market squares in towns and villages across Nigeria and offer check-ups, consultations, basic medicines and referrals, all at no cost.',
    who: 'Anyone in the community, with priority for older people, pregnant women, children and people living with long-term conditions like hypertension and diabetes.',
    activities: ['Blood pressure, blood sugar and BMI checks', 'Malaria testing and treatment', 'Eye checks and free reading glasses', 'Health talks on hygiene, diet and high blood pressure', 'Referrals to partner hospitals and follow-up calls'],
    steps: ['We announce each outreach through community leaders, places of worship and our WhatsApp line.', 'You come along on the day. No appointment or payment is needed.', 'Volunteers register you, take your vitals and send you to a doctor.', 'If you need further care, we refer you and check in afterwards.'],
    outcomes: ['Hundreds of people learn for the first time that they have high blood pressure or diabetes', 'Malaria is caught and treated early, especially in children', 'Families know where to go next instead of guessing'],
    facts: [['12', 'outreaches a year'], ['6,000+', 'patients a year'], ['₦0', 'cost to patients']],
    giving: [['₦5,000', 'covers check-ups and a malaria test for five people'], ['₦20,000', 'buys a month of blood pressure medicine for ten patients'], ['₦500,000', 'funds a full outreach day']],
    quote: { text: 'I had been having headaches for months. At the outreach they told me my blood pressure was very high and gave me medicine the same day. They even called me two weeks later to see how I was doing.', name: 'Mallam Ibrahim S.', role: 'Retired teacher, Kaduna' },
  },
  {
    slug: 'mother-child',
    pillar: 'Health', color: 'var(--red)', icon: 'heart', image: '/img/programs/mother-child.jpg', fallback: 'var(--fb-warm)',
    title: 'Mother & Child Wellness',
    summary: 'Antenatal classes, nutrition support and immunisation reminders for pregnant and nursing mothers.',
    body: 'Healthy mothers raise healthy children. Every month we gather pregnant women and new mothers into small groups led by trained health workers. We talk honestly about safe pregnancy, breastfeeding, baby nutrition and why every vaccine matters. Mothers who are struggling go home with a baby-care and nutrition pack.',
    who: 'Pregnant women and mothers of children under two, especially first-time and teenage mothers and those without family support.',
    activities: ['Monthly mothers’ circles', 'Nutrition and baby-care packs', 'Immunisation tracking with SMS reminders', 'Links to primary health centres for antenatal care', 'Home visits for mothers who need extra help'],
    steps: ['Register at our office, through a health worker, or at any outreach.', 'Join the next mothers’ circle near you.', 'We follow up through pregnancy and the first two years of your child’s life.'],
    outcomes: ['More mothers attend antenatal care regularly', 'More babies complete their immunisations on time', 'Mothers feel less alone and better prepared'],
    facts: [['12', 'circles a year'], ['600+', 'mothers supported'], ['1,000+', 'packs given out']],
    giving: [['₦8,000', 'provides a baby-care pack'], ['₦15,000', 'supports a mother’s nutrition for a month'], ['₦150,000', 'runs a full mothers’ circle']],
    quote: { text: 'I was 19 and scared. The other mothers became like sisters to me. My son has taken all his injections and he is strong.', name: 'Blessing N.', role: 'Young mother, Keffi, Nasarawa' },
  },
  {
    slug: 'food-welfare',
    pillar: 'Support', color: 'var(--blue)', icon: 'hands', image: '/img/programs/food-welfare.jpg', fallback: 'var(--fb-green)',
    title: 'Food & Welfare Support',
    summary: 'Monthly food packs and emergency help for widows, older people and families in crisis.',
    body: 'Food prices have climbed so fast that many homes now skip meals. Our welfare desk visits families, listens to their situation, and enrols the most vulnerable for a monthly food pack with rice, beans, garri, oil and other basics. When floods or fires hit, we work with community leaders to get help out within two days.',
    who: 'Widows, older people living alone, people with disabilities and households facing sudden hardship such as illness, job loss, fire or flooding.',
    activities: ['Monthly food packs for registered households', 'Home visits to older and housebound people', 'Emergency relief after floods and fires', 'Festive food drives at Christmas and Sallah'],
    steps: ['Fill the Get Help form, call us, or ask a community leader to refer you.', 'Our welfare officer visits to understand your situation.', 'If eligible, you are enrolled and told your monthly pickup date.'],
    outcomes: ['Families eat regularly while they get back on their feet', 'Older people get regular visits and someone to talk to', 'Emergency relief reaches homes within 48 hours'],
    facts: [['250', 'households monthly'], ['18,000+', 'meals provided'], ['48hrs', 'emergency response']],
    giving: [['₦10,000', 'gives a widow or older person a food pack for a month'], ['₦60,000', 'feeds a family for six months'], ['₦250,000', 'stocks an emergency relief run']],
    quote: { text: 'Since my husband passed, the food pack is what keeps us going at the end of the month. They also come to check on me. That means a lot.', name: 'Mama Risikat', role: 'Welfare beneficiary' },
  },
  {
    slug: 'education',
    pillar: 'Transform', color: 'var(--orange)', icon: 'book', image: '/img/programs/education.jpg', fallback: 'var(--fb-warm)',
    title: 'Back-to-School Scholarship',
    summary: 'School fees, uniforms, books and a mentor, so orphans and vulnerable children stay in class.',
    body: 'No child should drop out because their family can’t pay fees or buy books. We find orphans and children from struggling homes, pay their fees straight to the school, provide uniforms and learning materials, and match each child with a mentor who keeps an eye on attendance and grades through the year.',
    who: 'Orphans and children from very low-income homes in primary and secondary school, identified with schools, religious leaders and our welfare team.',
    activities: ['School fees paid directly to schools', 'Uniforms, sandals, bags and textbooks', 'After-school reading and maths clinics', 'Termly progress reviews', 'One-to-one mentoring'],
    steps: ['A school, parent or community leader refers the child.', 'We visit the home and confirm the need.', 'Fees are paid to the school and materials delivered before resumption.', 'A mentor checks in every term.'],
    outcomes: ['Children stay in school instead of hawking on the streets', 'Reading and maths scores go up over the year', 'Parents get some breathing room to work and save'],
    facts: [['850+', 'children supported'], ['30+', 'partner schools'], ['92%', 'stay in school']],
    giving: [['₦25,000', 'buys uniforms and books for two children'], ['₦50,000', 'pays a child’s fees for one term'], ['₦150,000', 'sponsors a child for a full school year']],
    quote: { text: 'My mother could not pay my fees after my father died. Now I am in JSS3 and I came second in my class.', name: 'Ifeoma, 14', role: 'Scholarship student' },
  },
  {
    slug: 'youth-skills',
    pillar: 'Empower', color: 'var(--green)', icon: 'briefcase', image: '/img/programs/youth-skills.jpg', fallback: 'var(--fb-blue)',
    title: 'Youth Skills & Digital Pathways',
    summary: 'Six months of hands-on trade and computer training that leads to real work.',
    body: 'Too many bright young people in our area are out of school and out of work. Our skills academy runs for six months. Trainees learn a trade and also get computer basics, CV writing, customer service and money management. When they graduate, they get a starter kit and we help connect them to jobs and apprenticeships.',
    who: 'Young people aged 16 to 30 who are out of school or unemployed, living near our training centres in Lagos, Kaduna and Abuja.',
    activities: ['Tailoring and fashion design', 'Catering and pastry', 'Phone and electronics repair', 'Basic computing and digital marketing', 'Starter kits and job placement support'],
    steps: ['Applications open twice a year. Watch our news page or call us.', 'Short interview and aptitude chat.', 'Six months of training, three days a week.', 'Graduation, starter kit and follow-up support for a year.'],
    outcomes: ['Graduates start earning from their trade', 'Young people gain confidence and a plan', 'Some go on to train apprentices of their own'],
    facts: [['6', 'month course'], ['700+', 'graduates'], ['65%', 'working or self-employed']],
    giving: [['₦30,000', 'covers one trainee’s materials for a month'], ['₦100,000', 'provides a graduate’s starter kit'], ['₦350,000', 'buys a new sewing machine set for the academy']],
    quote: { text: 'I used to sit at the junction all day. Now I repair phones and I pay my own rent.', name: 'Musa A.', role: 'Graduate, Kaduna, 2024 group' },
  },
  {
    slug: 'women-livelihood',
    pillar: 'Empower', color: 'var(--green)', icon: 'briefcase', image: '/img/programs/women-livelihood.jpg', fallback: 'var(--fb-green)',
    title: 'Women’s Livelihood Grants',
    summary: 'Small interest-free grants and business coaching for women traders.',
    body: 'Women traders in markets across Nigeria feed whole families, but very few can get a bank loan. We give small interest-free grants, teach simple bookkeeping and saving, and bring women together in peer groups where they share advice and hold each other accountable.',
    who: 'Women running small businesses or trading in local markets in Lagos, Osun, Kaduna and Abuja, with priority for widows and single mothers.',
    activities: ['Interest-free grants', 'Bookkeeping and savings training', 'Women’s cooperative and peer groups', 'Mentoring from established businesswomen'],
    steps: ['Attend an information session at our office.', 'Complete four weeks of business training.', 'Present a simple business plan to the grants panel.', 'Receive your grant and monthly mentoring for six months.'],
    outcomes: ['Women grow their stock and income', 'More families can pay school fees and rent on time', 'Peer groups keep saving long after the grant'],
    facts: [['500+', 'women supported'], ['₦0', 'interest charged'], ['3x', 'average income growth']],
    giving: [['₦50,000', 'funds one week of business training for a group'], ['₦150,000', 'gives a woman her starter grant'], ['₦250,000', 'covers a grant plus six months of mentoring']],
    quote: { text: 'With the grant I bought tomatoes and pepper in bulk. My profit doubled and I joined a savings group. I don’t have to borrow anymore.', name: 'Mrs. Ngozi E.', role: 'Pepper and tomato seller, Lagos' },
  },
]

export const values = [
  { icon: 'heart', title: 'Compassion', text: 'We treat everyone with dignity and respect, whatever their faith, tribe or background.' },
  { icon: 'shield', title: 'Integrity', text: 'We are careful with every naira you give us, and we tell you openly how it was spent.' },
  { icon: 'users', title: 'Community', text: 'We listen before we act. Local leaders and residents help shape what we do.' },
  { icon: 'leaf', title: 'Sustainability', text: 'We build skills and habits that keep working long after a programme ends.' },
]

// SAMPLE history. Replace with your real milestones.
export const milestones = [
  { year: '2018', title: 'Friends start helping neighbours', text: 'A small group of friends in Lagos began visiting widows and sick neighbours with food and medicine on weekends.' },
  { year: '2019', title: 'Our first free medical outreach', text: 'Volunteer doctors and nurses saw over 400 people in a single day in Lagos.' },
  { year: '2021', title: 'Welfare desk and scholarships', text: 'We formalised our welfare support and started paying school fees for orphans and vulnerable children.' },
  { year: '2022', title: 'Beyond Lagos', text: 'Volunteers in Kaduna and Gombe asked us to bring our health outreaches to their communities, and we did.' },
  { year: '2023', title: 'The skills academy opens', text: 'Our first group of young people graduated in tailoring, catering and phone repair.' },
  { year: '2026', title: 'More communities, more women', text: 'We now work in over 40 communities across 8 states and have added interest-free grants for women traders.' },
]

export const faqs = [
  { cat: 'About us', q: 'Is Pathway Finders a registered organisation?', a: 'Yes. Pathway Finders Empowerment Initiative is a registered non-profit in Nigeria. We are happy to share our registration details if you ask.' },
  { cat: 'About us', q: 'Are you linked to any religious or political group?', a: 'No. We are independent and we serve people of every faith and none. We do partner with churches and mosques because they are close to the community.' },
  { cat: 'About us', q: 'Which areas do you cover?', a: 'Our head office is in Lagos, and we currently run programmes in Lagos, Kaduna, Gombe, Katsina, Plateau, Nasarawa, Osun and the FCT. We go wherever local volunteers and partners can help us reach people well.' },
  { cat: 'Giving', q: 'How do I know my donation reaches people in need?', a: 'Every gift is recorded and linked to a programme. We share reports after each outreach and send donors a yearly summary of what came in and how it was used.' },
  { cat: 'Giving', q: 'How can I donate safely?', a: 'Use the pledge form on our Donate page or call one of our official numbers. A staff member will confirm our official bank details with you. We will never ask you to pay into a personal account.' },
  { cat: 'Giving', q: 'Can I give food, clothes or equipment instead of money?', a: 'Yes, please. Food items, school supplies, medical supplies and training equipment are always welcome. Call us to arrange drop-off or pickup.' },
  { cat: 'Giving', q: 'Can I give in memory of someone or for my birthday?', a: 'Yes. Many supporters ask friends to give instead of buying gifts. Tell us and we will send a thank-you note to the family or to your friends.' },
  { cat: 'Volunteering', q: 'Do I need to be a doctor or nurse to volunteer?', a: 'Not at all. We need people for registration, crowd control, teaching, mentoring, photography, social media and fundraising, as well as health workers.' },
  { cat: 'Volunteering', q: 'Can NYSC members or students volunteer with you?', a: 'Yes. We welcome corps members for CDS and placement, and we take students for internships and community service hours. See our Careers page.' },
  { cat: 'Getting help', q: 'How do I ask for help?', a: 'Fill the form on our Get Help page, call us, or walk into our office during working hours. Everything you tell us stays private.' },
  { cat: 'Getting help', q: 'How do you decide who gets support?', a: 'We work with community leaders, schools, health workers and places of worship, then a staff member visits to understand each situation. Help goes to those in greatest need first.' },
  { cat: 'Partnerships', q: 'Can my company or church partner with you?', a: 'Yes. We work with businesses, faith groups, schools, hospitals and foundations on sponsorships, staff volunteering, item donations and joint projects.' },
]

export const donationImpact = {
  5000: 'can pay for check-ups and a malaria test for five people at our next outreach.',
  10000: 'can give a widow or older person a food pack for a whole month.',
  25000: 'can buy uniforms, sandals, a bag and books for two children.',
  50000: 'can pay a child’s school fees for one term.',
  100000: 'can buy a starter kit for a skills academy graduate.',
  250000: 'can fund a woman’s business grant and six months of coaching.',
}
