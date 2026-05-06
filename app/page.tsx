export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Scan Websites for{" "}
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Instantly detect missing cookie banners, absent privacy policies, and data processing gaps. Get a compliance score and actionable fixes — before regulators do.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Scanning — $19/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See What We Check
          </a>
        </div>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for demo · Cancel anytime</p>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🍪", title: "Cookie Banner Detection", desc: "Checks for consent management platforms, cookie notices, and opt-in/opt-out mechanisms on every page." },
            { icon: "📄", title: "Privacy Policy Audit", desc: "Verifies the presence, accessibility, and completeness of your privacy policy against GDPR Article 13/14 requirements." },
            { icon: "📊", title: "Data Processing Disclosures", desc: "Scans for third-party trackers, analytics scripts, and missing data processing agreements." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly · Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Cookie banner & consent checks",
              "Privacy policy verification",
              "Third-party tracker detection",
              "Compliance score & report",
              "Actionable fix recommendations",
              "Email scan reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What does the scanner actually check?",
              a: "It crawls your website and checks for cookie consent banners, privacy policy pages, GDPR-required disclosures, third-party tracking scripts, and data processing notices — then scores your compliance."
            },
            {
              q: "Do I need technical knowledge to use it?",
              a: "No. Just enter your website URL and we handle the rest. You receive a plain-English compliance report with specific issues and step-by-step recommendations to fix them."
            },
            {
              q: "Does this guarantee full GDPR compliance?",
              a: "Our scanner covers the most common and critical GDPR requirements automatically. For complex data processing activities, we recommend consulting a legal professional alongside using our tool."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        <p>© {new Date().getFullYear()} GDPR Compliance Checker. Built for EU-facing businesses.</p>
      </footer>
    </main>
  );
}
