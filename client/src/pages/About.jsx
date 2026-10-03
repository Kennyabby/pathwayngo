import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, photo } from '../components/ui'
import { org, values, milestones, pillars } from '../data/site'
import { staff } from '../data/content'
import { images } from '../data/images'

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="We help people find their way through hard times."
        intro="Pathway Finders is a Nigerian non-profit. We help families in communities across the country with healthcare, food, school and work, and we stay with them until they can stand on their own."
        image={images.banners.about}
        fallback="var(--fb-green)"
      />

      <section className="section--tight bg-cream">
        <div className="wrap mini-nav">
          <a href="#story">Our story</a>
          <a href="#mission">Mission & vision</a>
          <a href="#values">Values</a>
          <a href="#approach">How we work</a>
          <a href="#where">Where we work</a>
          <a href="#history">History</a>
          <Link to="/team">Our team</Link>
          <Link to="/impact">Impact & reports</Link>
        </div>
      </section>

      {/* ---------- Our story ---------- */}
      <section className="section" id="story">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>It started with a few friends and a bag of groceries.</h2>
            <p>
              In 2018, a small group of friends in Lagos noticed how many widows, older people and sick
              neighbours were going without food or medicine. They started visiting on weekends with groceries and
              whatever medicine they could afford.
            </p>
            <p>
              Word spread. Doctors offered to come along. Teachers asked how they could help children who had dropped
              out. Young people asked for training. Within a year, those weekend visits had become our first free
              medical outreach, and Pathway Finders Empowerment Initiative was born.
            </p>
            <p>
              Before long, volunteers in other parts of the country asked us to come to them. Today we run
              programmes in eight states, from Lagos to Kaduna, Gombe and the FCT.
            </p>
            <p>
              Our name says what we do. We help people <strong>find a path</strong>: to a doctor when they are sick,
              to support when they are struggling, to a classroom when they are young, and to a living when they are
              ready to work.
            </p>
          </div>
          <div className="media media--tall" style={photo(images.sections.aboutOurStory, 'var(--fb-blue)')}>
            <div className="media__badge">
              <strong>150+</strong>
              <span>volunteers give their time every year</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Mission & vision ---------- */}
      <section className="section bg-navy" id="mission">
        <div className="wrap grid-2">
          <div className="feature">
            <div className="feature__icon"><Icon name="target" size={26} /></div>
            <h3>Our mission</h3>
            <p>
              To improve the health and wellbeing of vulnerable people and families by giving them access to
              healthcare, welfare support, education and skills, so they can live with dignity and support themselves.
            </p>
          </div>
          <div className="feature">
            <div className="feature__icon"><Icon name="eye" size={26} /></div>
            <h3>Our vision</h3>
            <p>
              A Nigeria where every person, whatever their background, has good health, hope and a fair chance
              to build a good life and give back to their community.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- What we focus on ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">What we focus on</span>
            <h2>Four words from our logo, four parts of our work.</h2>
            <p className="lead">Health, Support, Empower and Transform aren’t just words on a logo. Every programme we run fits under one of them.</p>
          </div>
          <div className="grid-4">
            {pillars.map((p) => (
              <div className="feature" key={p.key} style={{ borderTop: `4px solid ${p.color}` }}>
                <div className="feature__icon" style={{ color: p.color, background: `color-mix(in srgb, ${p.color} 12%, white)` }}><Icon name={p.icon} size={26} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="section bg-green" id="values">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Our values</span>
            <h2>What we hold ourselves to.</h2>
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div className="feature" key={v.title}>
                <div className="feature__icon"><Icon name={v.icon} size={26} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="section" id="approach">
        <div className="wrap split split--wide">
          <div>
            <span className="eyebrow">How we work</span>
            <h2>Help today. Independence tomorrow.</h2>
            <p className="lead">
              We meet urgent needs quickly, then stay long enough to help people build something that lasts.
            </p>
            <ul className="checklist">
              <li><strong>We listen first.</strong> Community leaders, schools, health workers and places of worship tell us where the need is.</li>
              <li><strong>We check every case.</strong> A staff member visits each family so help goes to the people who need it most.</li>
              <li><strong>We act fast.</strong> Food, medicine and school fees get to families quickly and respectfully.</li>
              <li><strong>We build skills.</strong> Training, mentoring and grants help people earn and support others.</li>
              <li><strong>We report back.</strong> We track results and share them openly with donors and the community.</li>
            </ul>
          </div>
          <div className="media media--tall" style={photo(images.sections.aboutHowWeWork, 'var(--fb-warm)')} />
        </div>
      </section>

      {/* ---------- Where we work ---------- */}
      <section className="section bg-navy" id="where">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Where we work</span>
            <h2>Eight states and growing.</h2>
            <p className="lead" style={{ color: '#b9c7dd' }}>We work through local volunteers, community leaders and partners, so we can reach families wherever the need is greatest.</p>
          </div>
          <div className="grid-4">
            {org.states.map((s) => (
              <div className="feature" key={s.name}>
                <div className="feature__icon"><Icon name="pin" size={24} /></div>
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="section bg-cream" id="history">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 60 }}>
            <span className="eyebrow">Our history</span>
            <h2>How we got here.</h2>
          </div>
          <div className="timeline">
            {milestones.map((m) => (
              <div className="tl-item reveal" key={m.year}>
                <div className="tl-year">{m.year}</div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team preview ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our people</span>
              <h2>A small team with a lot of heart.</h2>
              <p>Our staff work alongside a Board of Trustees and over 150 volunteers.</p>
            </div>
            <Link className="btn btn--navy" to="/team">Meet the whole team</Link>
          </div>
          <div className="grid-4">
            {staff.slice(0, 4).map((t, i) => (
              <div className="team-card" key={t.role}>
                <div className="team-card__photo" style={photo(t.image, ['var(--fb-blue)', 'var(--fb-green)', 'var(--fb-warm)', 'var(--fb-blue)'][i % 4])} />
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Accountability ---------- */}
      <section className="section bg-navy">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Accountability</span>
            <h2>We take your trust seriously.</h2>
            <p>
              A Board of Trustees oversees our strategy, money and safeguarding. Here is what we promise donors and
              the people we serve:
            </p>
          </div>
          <div className="grid-2">
            {[
              ['file', 'Open reporting', 'A short report after every outreach and a yearly summary of income and spending.'],
              ['shield', 'Safeguarding', 'A clear policy that protects children and vulnerable adults.'],
              ['users', 'Fair selection', 'Every family is visited and assessed before they receive support.'],
              ['heart', 'Safe giving', 'We only accept donations through official, confirmed channels.'],
            ].map(([icon, title, text]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3 style={{ fontSize: '1.15rem' }}>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Walk this road with us." />
    </>
  )
}
