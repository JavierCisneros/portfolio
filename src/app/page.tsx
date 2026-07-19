import DarkMode from "@/components/DarkMode";

const caseStudies = [
  {
    title: "Savings App",
    summary: "A savings application built for more than 10,000 credit union members.",
    role: "I took the application from technical discovery through production support, working across the client, AWS, and core banking systems.",
    constraint: "Authentication and financial data had to move between several systems: our application, the external online banking platform, and the core banking system.",
    decision: "I used Cognito to manage authentication and authorization across the systems connected to the application.",
    flow: ["Banno (Online Banking)", "Savings App", "Internal API", "Core Banking System"],
    result: "I built a cross-platform application that promotes savings within online banking while meeting compliance and security requirements across the connected banking systems.",
    stack: "React, TypeScript, Node.js, Python, API Gateway, Cognito, DynamoDB",
  },
  {
    title: "Embedded Online Banking Integration",
    summary: "A third-party financial product embedded in an existing online banking application.",
    role: "I led the production launches and managed the authentication workflow between the online banking platform and the embedded application.",
    constraint: "The product ran in an iframe, and third-party cookie restrictions broke session creation in some browsers, particularly on Apple devices using WebKit.",
    decision: "I reproduced the failures across browsers, traced them to the cookie dependency, and worked with the vendor to change how sessions were created. I also advised the vendor on authentication for their server-side rendered application.",
    flow: ["Online Banking (Q2)", "Q2 SDK", "Embedded Application", "Vendor Application"],
    result: "I integrated the third-party product into the online banking platform and worked around cookie restrictions with a different authentication and session management approach.",
    stack: "Python, HTML, CSS, JavaScript, Server-side Rendering, iframe messaging",
  },
  {
    title: "Time Reporting Application",
    summary: "A serverless application that replaced manual time reporting for more than 50 employees.",
    role: "I built the application and moved the team from manual reports to one shared workflow.",
    constraint: "Employees worked across time zones, countries, and roles. The team needed a standardized reporting workflow that would reduce reporting time by 66%.",
    decision: "Rather than recreating each department's manual process, we designed one centralized workflow with the stakeholders and employees who would use it. Employees entered time through a weekly interface, while project managers, accounting, and leadership received the level of detail required for approvals, billing, and financial reporting.",
    flow: ["Employees", "Time App", "Project Managers", "Managers", "Accounting", "Billing", "Executive Leadership"],
    result: "I created a centralized time-reporting workflow that reduced manual reporting time by 50% at launch and 75% within six months while improving accuracy and reducing errors.",
    stack: "React, Node.js, Cognito, AWS Lambda, API Gateway, RDS, PostgreSQL, AWS",
  },
] as const;

const supportingWork = [
  ["Treasury check verification", "Integrated a U.S. Treasury API through AWS Lambda to identify mismatched, previously paid, or potentially invalid checks."],
  ["Production fee remediation", "Built a Python and Lambda process that corrected fee-related records for more than 200 credit union members."],
  ["Financial operations tools", "Built tools for member maintenance, transaction search, share conversion, and loan workflows that reduced tellers' workloads and manual steps."],
  ["Reporting and automation", "Maintained scheduled AWS jobs for reports and recurring internal work, using .NET and MySQL connected to Snowflake."],
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
              <a className="transition-colors hover:text-foreground" href="#experience">Experience</a>
              <a className="transition-colors hover:text-foreground" href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
              <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
            </nav>
            <DarkMode />
          </div>
        </header>

        <section id="top" className="grid min-h-[78vh] content-center gap-10 border-b border-border py-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl">Full-Stack Software Engineer</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I build web applications, from the first technical discussion through production.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-semibold">
              <a className="border-b border-foreground pb-1 transition-opacity hover:opacity-60" href="mailto:hi@javiercisneros.me">Start a conversation</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="/resume" target="_blank" rel="noopener noreferrer">View resume</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://linkedin.com/in/javiercisnerosavila" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://github.com/JavierCisneros" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <p className="max-w-64 text-sm leading-6 text-muted-foreground md:text-right">
            Based in Guadalajara, Mexico. I've worked remotely with clients, vendors, and engineering teams across North America.
          </p>
        </section>

        <section id="work" className="py-24 md:py-32">
          <div className="mb-20 grid gap-5 md:grid-cols-[1fr_2fr]">
            <h2 className="text-lg font-semibold text-accent">Work</h2>
            <p className="max-w-2xl text-2xl leading-9 tracking-tight md:text-3xl">Some projects and the decisions behind them.</p>
          </div>

          <div>
            {caseStudies.map((project) => (
              <article key={project.title} className="grid gap-10 border-t border-border py-12 md:grid-cols-2 md:gap-14 md:py-16">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-lg leading-7 text-muted-foreground">{project.summary}</p>
                </div>
                <div className="space-y-6 text-[0.95rem] leading-7">
                  <p>{project.role}</p>
                  <p className="text-muted-foreground">{project.constraint}</p>
                  <p>{project.decision}</p>
                  <div aria-label={`${project.title} simplified architecture`}>
                    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
                      {project.flow.map((step, index) => (
                        <li key={step} className="flex items-center gap-2">
                          <span>{step}</span>
                          {index < project.flow.length - 1 && <span aria-hidden="true" className="text-accent">→</span>}
                        </li>
                      ))}
                    </ol>
                    {project.result && <p className="text-sm text-muted-foreground mt-4">{project.result}</p>}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-lg font-semibold text-accent">Other work</h2>
              <p className="mt-5 max-w-xs leading-7 text-muted-foreground">Smaller production systems I've built or maintained.</p>
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
            <h2 className="text-lg font-semibold text-accent">Tools I use</h2>
            <p className="mt-6 max-w-md text-2xl leading-9 tracking-tight">The stack I use most is React, TypeScript, Node.js, and AWS.</p>
            <div className="mt-10 space-y-5 text-sm leading-7 text-muted-foreground">
              <p><strong className="text-foreground">Cloud:</strong> Lambda, API Gateway, Cognito, DynamoDB, RDS, EventBridge, VPC, serverless architecture</p>
              <p><strong className="text-foreground">Application:</strong> React, Next.js, TypeScript, Node.js, REST APIs</p>
              <p><strong className="text-foreground">Also:</strong> Python, C#/.NET, SQL, IaC, CI/CD</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-accent">Experience</h2>
            <div className="mt-6 divide-y divide-border border-t border-border">
              <div className="py-7">
                <div className="flex justify-between gap-5"><h3 className="font-semibold">TekChoice</h3><span className="text-sm text-muted-foreground">2024 to present</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Full-Stack Software Engineer</p>
                <a className="mt-3 inline-block border-b border-border pb-1 text-sm transition-colors hover:border-foreground" href="https://tekchoice.com" target="_blank" rel="noopener noreferrer">Company website</a>
              </div>
              <div className="py-7">
                <div className="flex justify-between gap-5"><h3 className="font-semibold">Tianguiza</h3><span className="text-sm text-muted-foreground">2023 to 2024</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Independent academic project</p>
                <a className="mt-3 inline-block border-b border-border pb-1 text-sm transition-colors hover:border-foreground" href="https://tianguiza.com" target="_blank" rel="noopener noreferrer">Visit Tianguiza</a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="border-y border-border py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-lg font-semibold text-accent">Education</h2>
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
                <p className="text-sm text-muted-foreground">Certification</p>
                <h3 className="mt-3 text-lg font-semibold">AWS Certified Cloud Practitioner</h3>
                <a className="mt-3 inline-block border-b border-border pb-1 text-sm transition-colors hover:border-foreground" href="https://www.credly.com/badges/be3a5594-9c7d-402b-aeda-e10403a388fd/linked_in_profile" target="_blank" rel="noopener noreferrer">Verify credential</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Contact me.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">The easiest way to reach me is by email.</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-semibold">
            <a className="border-b border-foreground pb-2 transition-opacity hover:opacity-60" href="mailto:hi@javiercisneros.me">hi@javiercisneros.me</a>
            <a className="border-b border-foreground pb-2 transition-opacity hover:opacity-60" href="/resume" target="_blank" rel="noopener noreferrer">Résumé</a>
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
