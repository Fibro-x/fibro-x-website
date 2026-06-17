import Link from "next/link"

export default function RequestAQuotePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            Request a Quote
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight">
            Tell us about your underground utility or civil project.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Share a few details about your project and Fibro X will be in touch
            to discuss the scope, location, timing and delivery requirements.
          </p>

          <form className="mt-10 grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Project Location
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                  placeholder="City / region / site address"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Service Required
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none">
                  <option>HDD / directional drilling</option>
                  <option>Excavation near utilities</option>
                  <option>Utility locating / verification</option>
                  <option>Vacuum excavation / potholing</option>
                  <option>Service installation</option>
                  <option>Site preparation / reinstatement</option>
                  <option>Other civil works</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/75">
                Project Details
              </label>
              <textarea
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none"
                placeholder="Tell us about your project scope, timing, site conditions, utility risks and any known requirements"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="rounded-2xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Submit Enquiry
              </button>

              <div className="text-sm text-white/50">
                For now, this is a visual enquiry form. We can connect it to email after launch.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}