import DarkMode from "@/components/DarkMode";

const caseStudies = [
  {
    number: "01",
    title: "VA Savings Builder",
    summary: "A secure, member-facing savings experience for credit unions.",
    role: "I led the architecture and implementation from technical discovery through production support, coordinating secure integrations across the client, AWS, and third-party platforms.",
    constraint: "Financial data and authentication crossed multiple platforms. The solution had to remain secure, support production operations, and avoid exposing confidential banking details.",
    decision: "I designed a lower-cost external-transfer workflow using existing platform capabilities and secure token exchange instead of adding another vendor dependency.",
    outcome: "Built for an audience of 10,000+ credit union members",
    flow: ["Member client", "Secure API layer", "Lambda services", "Data and banking platforms"],
    stack: "React, TypeScript, Node.js, Python, API Gateway, Cognito, DynamoDB",
  },
  {
    number: "02",
    title: "Q2 / FINOFR RateReset Integration",
    summary: "An embedded third-party platform launched inside enterprise online banking.",
    role: "I led the first two production launches, connecting Q2 SDK communication, iframe embedding, and session initialization across multiple environments.",
    constraint: "The vendor experience ran inside an iframe, while browser privacy protections and iOS restrictions limited third-party session behavior.",
    decision: "When sessions failed across browsers and iOS, I traced the issue to a third-party cookie dependency and helped drive a change in the vendor's session-handling approach.",
    outcome: "2 initial production launches",
    flow: ["Enterprise banking", "Q2 SDK", "Embedded experience", "Vendor platform"],
    stack: "Q2 SDK, JavaScript, iframe messaging, session security",
  },
  {
    number: "03",
    title: "Internal Time Tracker",
    summary: "A serverless operations tool that standardized reporting across time zones.",
    role: "I designed and delivered the application to replace manual reporting work and give employees a consistent workflow.",
    constraint: "The platform needed reliable date handling across time zones, controlled access, scheduled automation, and simple ongoing ownership.",
    decision: "The system used a focused serverless architecture with scheduled workflows and centralized date processing to keep operations simple and reliable.",
    outcome: "Adopted by 50+ employees",
    flow: ["Internal client", "Serverless API", "Relational data", "Scheduled workflows"],
    stack: "React, Vite, Lambda, API Gateway, Cognito, RDS, EventBridge",
  },
] as const;

const supportingWork = [
  ["Treasury check verification", "Integrated a U.S. Treasury API through AWS Lambda to identify mismatched, previously paid, or potentially invalid checks."],
  ["Production fee remediation", "Built a Python and Lambda process that corrected fee-related records for more than 200 credit union members."],
  ["Financial operations tools", "Delivered applications for member maintenance, transaction search, share conversion, and loan workflows."],
  ["Reporting and automation", "Supported scheduled .NET, SQL, and AWS processes for operational reporting and recurring internal workflows."],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <header className="flex items-center justify-between py-7 text-sm">
          <a href="#top" className="font-semibold tracking-tight">Javier Cisneros</a>
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-5 text-muted-foreground sm:flex" aria-label="Primary navigation">
              <a className="transition-colors hover:text-foreground" href="#work">Work</a>
              <a className="transition-colors hover:text-foreground" href="#approach">Approach</a>
              <a className="transition-colors hover:text-foreground" href="/resume" target="_blank" rel="noopener noreferrer">Résumé</a>
              <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
            </nav>
            <DarkMode />
          </div>
        </header>

        <section id="top" className="grid min-h-[78vh] content-center gap-10 border-b border-border py-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl">Full-Stack Software Engineer</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I design, build, and own cloud-native applications and complex platform integrations using React, TypeScript, Node.js, and AWS.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-semibold">
              <a className="border-b border-foreground pb-1 transition-opacity hover:opacity-60" href="mailto:fjca185@gmail.com">Start a conversation</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="/resume" target="_blank" rel="noopener noreferrer">View résumé</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://linkedin.com/in/javiercisnerosavila" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://github.com/JavierCisneros" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <p className="max-w-64 text-sm leading-6 text-muted-foreground md:text-right">
            Based in Guadalajara, Mexico. Experienced collaborating remotely with clients, vendors, and engineering teams across North America.
          </p>
        </section>

        <section aria-label="Professional and academic summary" className="border-b border-border py-10 md:py-12">
          <div className="grid gap-7 md:grid-cols-[2fr_1fr] md:items-center md:gap-12">
            <p className="max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl">
              Production experience across member-facing financial applications, internal operations platforms, secure integrations, and AWS serverless systems.
            </p>
            <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:py-1 md:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Education</p>
              <p className="mt-2 font-semibold">B.S. in Software Engineering</p>
              <p className="mt-1 text-sm text-muted-foreground">CETI, 2024</p>
            </div>
          </div>
        </section>

        <section id="work" className="py-24 md:py-32">
          <div className="mb-20 grid gap-5 md:grid-cols-[1fr_2fr]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Selected work</p>
            <p className="max-w-2xl text-2xl leading-9 tracking-tight md:text-3xl">Production systems where the hard part was not only writing code, but choosing the right architecture and carrying it through.</p>
          </div>

          <div>
            {caseStudies.map((project) => (
              <article key={project.number} className="grid gap-6 border-t border-border py-12 md:grid-cols-[5rem_1fr_1fr] md:gap-10 md:py-16">
                <p className="text-sm text-muted-foreground">{project.number}</p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h2>
                  <p className="mt-4 text-lg leading-7 text-muted-foreground">{project.summary}</p>
                  <p className="mt-8 inline-block border-b border-accent pb-2 text-sm font-semibold text-accent">{project.outcome}</p>
                </div>
                <div className="space-y-6 text-[0.95rem] leading-7">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Role and problem</p>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Constraint</p>
                    <p className="text-muted-foreground">{project.constraint}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Key decision</p>
                    <p>{project.decision}</p>
                  </div>
                  <div aria-label={`${project.title} simplified architecture`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Simplified architecture</p>
                    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
                      {project.flow.map((step, index) => (
                        <li key={step} className="flex items-center gap-2">
                          <span>{step}</span>
                          {index < project.flow.length - 1 && <span aria-hidden="true" className="text-accent">→</span>}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="border-y border-border py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">How I work</p>
              <p className="mt-5 max-w-xs leading-7 text-muted-foreground">I work comfortably in distributed teams and stay involved from the first question through production support.</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold">Own the whole path</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Turn ambiguous requirements into architecture, implementation, deployment, and measurable production outcomes.</p>
              </div>
              <div>
                <h3 className="font-semibold">Communicate across boundaries</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Work directly with clients, vendors, and platform engineers to resolve dependencies and keep delivery moving.</p>
              </div>
              <div>
                <h3 className="font-semibold">Stay responsible after launch</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Coordinate releases, monitor behavior, investigate failures, and improve systems after they reach production.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">More in production</p>
              <p className="mt-5 max-w-xs leading-7 text-muted-foreground">Smaller systems can still solve expensive, high-risk operational problems.</p>
            </div>
            <div className="divide-y divide-border">
              {supportingWork.map(([title, description]) => (
                <div key={title} className="grid gap-3 py-7 first:pt-0 last:pb-0 sm:grid-cols-[13rem_1fr]">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="grid gap-16 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Capabilities</p>
            <p className="mt-6 max-w-md text-2xl leading-9 tracking-tight">Strongest at the intersection of product delivery, secure integrations, and AWS architecture.</p>
            <div className="mt-10 space-y-5 text-sm leading-7 text-muted-foreground">
              <p><strong className="text-foreground">Cloud:</strong> Lambda, API Gateway, Cognito, DynamoDB, RDS, EventBridge, VPC, serverless architecture</p>
              <p><strong className="text-foreground">Application:</strong> React, Next.js, TypeScript, Node.js, REST APIs</p>
              <p><strong className="text-foreground">Additional:</strong> Python, C#/.NET, SQL, IaC, CI/CD</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Experience</p>
            <div className="mt-6 divide-y divide-border border-t border-border">
              <div className="py-7">
                <div className="flex justify-between gap-5"><h3 className="font-semibold">TekChoice</h3><span className="text-sm text-muted-foreground">2024 to present</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Full-Stack Software Engineer</p>
              </div>
              <div className="py-7">
                <div className="flex justify-between gap-5"><h3 className="font-semibold">Tianguiza</h3><span className="text-sm text-muted-foreground">2023 to 2024</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Independent academic project</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="border-y border-border py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Education &amp; credentials</p>
              <p className="mt-5 max-w-xs leading-7 text-muted-foreground">Formal software engineering training reinforced by current cloud certification and production ownership.</p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">B.S. in Software Engineering</h2>
                  <p className="mt-4 text-lg text-muted-foreground">Centro de Enseñanza Técnica Industrial (CETI)</p>
                </div>
                <span className="text-sm text-muted-foreground">Graduated 2024</span>
              </div>
              <div className="mt-10 border-t border-border pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Professional certification</p>
                <h3 className="mt-3 text-lg font-semibold">AWS Certified Cloud Practitioner</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Let&apos;s work together</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Looking for an engineer who can own the whole path to production?</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">I&apos;m open to remote full-time and contractor opportunities with international teams.</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-semibold">
            <a className="border-b border-foreground pb-2 transition-opacity hover:opacity-60" href="mailto:fjca185@gmail.com">fjca185@gmail.com</a>
            <a className="border-b border-foreground pb-2 transition-opacity hover:opacity-60" href="/resume" target="_blank" rel="noopener noreferrer">View résumé</a>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Javier Cisneros</p>
          <p>Based in Guadalajara, Mexico</p>
        </footer>
      </div>
    </main>
  );
}
