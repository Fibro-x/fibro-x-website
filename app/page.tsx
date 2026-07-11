import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const partners = [
    { name: "Downer", file: "/downer-logo.png" },
    { name: "Ventia", file: "/ventia-logo.png" },
    { name: "Entelar Group", file: "/entelar-logo.png" },
    { name: "UCG", file: "/ucg-logo.png" },
    { name: "Genesis", file: "/genesis-logo.png" },
  ]

  const services = [
    {
      title: "Horizontal Directional Drilling",
      description:
        "HDD works for underground service installation, including drilling, tracking, reaming, pipe pullback and reinstatement support.",
    },
    {
      title: "Excavation Near Utilities",
      description:
        "Controlled excavation around underground services using safe work methods, utility verification, potholing and service protection controls.",
    },
    {
      title: "Utility Locating & Verification",
      description:
        "Utility plan review, GPR, CAT & Genny locating, mark-outs and verification activities before ground-breaking works commence.",
    },
    {
      title: "Service Installation",
      description:
        "Installation support for underground utility and network services, including conduit, pipe, trenching and civil infrastructure works.",
    },
    {
      title: "Vacuum Excavation",
      description:
        "Non-destructive excavation and potholing to expose underground services safely and reduce the risk of service strikes.",
    },
    {
      title: "Site Preparation & Reinstatement",
      description:
        "Site setup, access preparation, backfilling, surface reinstatement, clean-up and demobilisation after works are complete.",
    },
  ]
const visualServices = [
  {
    title: "Horizontal Directional Drilling",
    image: "/service-hdd.jpg",
  },
  {
    title: "Excavation & Trenching",
    image: "/service-excavation.jpg",
  },
  {
    title: "Utility Locating & Potholing",
    image: "/service-installation.jpg",
  },
  {
    title: "Site Preparation & Reinstatement",
    image: "/service-reinstatement.jpg",
  },
]
  const advantages = [
    {
      title: "Safety-Led Delivery",
      text:
        "We plan and deliver works with clear risk controls, site inspections, pre-starts, toolbox meetings and stop-work authority built into the way projects are managed.",
    },
    {
      title: "Underground Utility Expertise",
      text:
        "Our work is centred on underground services, HDD, excavation, utility locating, potholing, service exposure and protection of existing networks.",
    },
    {
      title: "Competent People & Plant",
      text:
        "Fibro X places strong focus on competent operators, verified training, maintained plant, daily pre-start checks and fit-for-purpose equipment.",
    },
    {
      title: "Reliable Civil Outcomes",
      text:
        "We combine practical field delivery with disciplined coordination to support efficient, compliant and professional project outcomes.",
    },
  ]

  const commitments = [
    "Protect workers, contractors, clients and the public",
    "Protect existing underground services and essential networks",
    "Maintain strong safety leadership and practical risk controls",
    "Use competent people and well-maintained plant",
    "Deliver efficient, compliant and professional project outcomes",
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/fibrox-logo.png"
              alt="Fibro X logo"
              width={190}
              height={70}
              className="h-auto w-[150px] sm:w-[190px]"
              priority
            />
          </Link>

         <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
  <a href="#who-we-are" className="transition hover:text-white">
    Who We Are
  </a>
  <a href="#services" className="transition hover:text-white">
    Services
  </a>
  <a href="#advantages" className="transition hover:text-white">
    Advantages
  </a>
  <a href="#partners" className="transition hover:text-white">
    Partners
  </a>
  <a href="#contact" className="transition hover:text-white">
    Contact
  </a>

</nav>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-300/15 bg-cyan-400/10 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-cyan-200">
              Underground utility & civil infrastructure
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
              Safe, reliable civil works for essential underground networks.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Fibro X delivers underground utility and civil infrastructure
              services across HDD, excavation, utility locating, service
              installation, site preparation and reinstatement works.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">
              We support resilient communities and essential networks through
              strong safety leadership, competent people, well-maintained plant
              and practical risk controls.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/request-a-quote"
                className="rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Request a Quote
              </Link>

              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-neutral-900/80 p-5">
                <div className="text-sm text-white/50">Core Work</div>
                <div className="mt-2 text-2xl font-semibold">
                  HDD & Excavation
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Practical delivery for underground utility and civil
                  infrastructure projects.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-900/80 p-5">
                <div className="text-sm text-white/50">Approach</div>
                <div className="mt-2 text-2xl font-semibold">
                  Safety First
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Strong controls for workers, contractors, the public,
                  services and the environment.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-900/80 p-5 sm:col-span-2">
                <div className="text-sm text-white/50">Mission</div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  To deliver safe, reliable and high-quality underground utility
                  and civil infrastructure services that support resilient
                  communities and essential networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="border-b border-white/10 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-6 text-sm uppercase tracking-[0.25em] text-cyan-300/75">
            Industry Partners
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5"
              >
                <Image
                  src={partner.file}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={40}
                  className="h-auto max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-we-are" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Who We Are
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A practical underground utility and civil infrastructure company
              built around safe delivery.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Fibro X is a New Zealand civil infrastructure company specialising
              in underground utility works, HDD, excavation, utility locating,
              service installation, site preparation and reinstatement.
            </p>

            <p>
              Our work supports the development and maintenance of essential
              networks, including communications, water, power and broader civil
              infrastructure environments where careful planning, accurate
              locating and safe ground works are critical.
            </p>

            <p>
              We combine field capability with disciplined project coordination,
              focusing on safety, compliance, communication, competent people and
              reliable project outcomes.
            </p>
          </div>
        </div>
      </section>
<section className="border-y border-white/10 bg-neutral-950">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="mb-12">
      <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
        What We Do
      </div>

      <h2 className="mt-4 text-4xl font-semibold leading-tight">
        Practical civil capability for underground infrastructure.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
        Fibro X supports underground utility and civil works through safe
        planning, competent delivery, strong controls and reliable site
        execution.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-2">
      {visualServices.map((item) => (
        <div
          key={item.title}
          className="group border-t border-white/15 pt-8"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
            <img
  src={item.image}
  alt={item.title}
  className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
/>
          </div>

          <h3 className="mt-6 text-3xl font-semibold leading-tight text-white">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Our Commitment
            </div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Professional delivery with practical risk controls.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Fibro X is committed to protecting people, existing services,
              client assets and the environment while delivering efficient and
              compliant civil infrastructure outcomes.
            </p>
          </div>

          <div className="grid gap-4">
            {commitments.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-neutral-950/60 px-5 py-4 text-sm leading-7 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Services
          </div>

          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Underground utility and civil infrastructure services.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65">
            Fibro X supports projects from planning and site setup through to
            ground works, utility verification, service installation and final
            reinstatement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/request-a-quote"
            className="inline-block rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section id="advantages" className="border-y border-white/10 bg-neutral-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Our Advantages
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title}>
                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-3xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-white/65">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section id="contact" className="bg-neutral-950">
  <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
    <div>
      <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
        Contact
      </div>

      <h2 className="mt-4 text-4xl font-semibold leading-tight">
        Let’s discuss your next underground utility or civil project.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
        Whether you require HDD, excavation, service installation, utility
        locating, site preparation or reinstatement support, Fibro X can
        discuss the right delivery approach for your project.
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <div className="space-y-5 text-sm leading-7 text-white/75">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45">
            Company
          </div>
          <div className="mt-1 text-base font-medium text-white">
            Fibro X Limited
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45">
            Email
          </div>
          <div className="mt-1 text-base text-white/90">
            fibro.xxx@gmail.com
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/45">
            Location
          </div>
          <div className="mt-1 text-base text-white/90">
            Auckland, New Zealand
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/request-a-quote"
            className="inline-block rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-400 px-5 py-3 text-sm font-semibold text-black"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}