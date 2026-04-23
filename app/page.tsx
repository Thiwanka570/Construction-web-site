import Image from "next/image";
import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Chandrasena Construction - Expert AC, Plumbing & Electrical Services",
  description: "Professional construction services including AC repair, AC implementation, plumbing, and electrical wiring. Trusted experts in Chandrasena Construction.",
  keywords: "construction, AC repair, AC implementation, plumbing service, electrical wiring, Chandrasena Construction",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen relative flex items-center overflow-hidden bg-white pt-20 pb-16 lg:pt-28"
        >
          {/* Background Video with Complex Overlay */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105"
              style={{ objectPosition: "center" }}
            >
              <source src="/bgimages/ac-vid.mp4" type="video/mp4" />
            </video>
            {/* Multiple Overlays for Light Theme */}
            <div className="absolute inset-0 bg-blue-50/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-blue-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            {/* Radial glow */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* Left Column - Text Content */}
              <FadeIn className="text-white max-w-2xl">
                {/* <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wide text-blue-100">
                    Established 1995 • Trusted Excellence
                  </span>
                </div> */}

                {/* <div className="mb-8 relative inline-block text-center md:text-left w-full md:w-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-2xl rounded-full"></div>
                  <Image
                    src="/logos/logo-2.png"
                    alt="Chandrasena Construction Logo"
                    width={320}
                    height={160}
                    className="relative z-10 drop-shadow-2xl brightness-110 object-contain h-auto w-auto max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0"
                    priority
                  />
                </div> */}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.15] tracking-tight text-blue-950 text-center md:text-left">
                  Reliable Solutions for Every <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Home & Building Need
                  </span>
                </h1>

                <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed font-light text-center md:text-left">
                  From air conditioning installation and repair to plumbing and electrical wiring, we deliver dependable, high-quality services you can trust. Built on expertise, powered by precision.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href="#services"
                    className="relative group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
                  >
                    <span className="absolute inset-0 w-[200%] h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    <span className="relative flex items-center">
                      Explore Services
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-50 backdrop-blur-md border border-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-gray-200">
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-black text-blue-950 mb-1 group-hover:text-blue-600 transition-colors">150<span className="text-blue-500">+</span></div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide uppercase">Projects Delivered</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-black text-blue-950 mb-1 group-hover:text-blue-600 transition-colors">25<span className="text-blue-500">+</span></div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide uppercase">Years Experience</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl md:text-4xl font-black text-blue-950 mb-1 group-hover:text-blue-600 transition-colors">50<span className="text-blue-500">+</span></div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide uppercase">Expert Team</div>
                  </div>
                </div>
              </FadeIn>

              {/* Right Column - Image Composition */}
              <div className="relative hidden lg:block h-[600px] w-full">

                <Image
                  src="/bgimages/chandrasena-promo.png"
                  alt="Modern Construction"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />

                {/* <div className="absolute inset-0 relative w-full h-full"> */}
                {/* Decorative background blur */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div> */}

                {/* Main large image */}
                {/* <div className="absolute top-4 right-0 w-[75%] h-[75%] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 group">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
                    <img
                      src="https://pixabay.com/images/download/jarmoluk-electrician-1080554_1920.jpg"
                      alt="Modern Construction"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div> */}

                {/* Secondary smaller image */}
                {/* <div className="absolute bottom-4 left-4 w-[60%] h-[55%] rounded-3xl overflow-hidden border-4 border-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 group">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
                    <img
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Architecture Design"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div> */}

                {/* Floating Glassmorphism Stat Card */}
                {/* <div className="absolute top-1/3 -left-8 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 border border-blue-400/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                      </div> */}
                {/* <div>
                        <div className="text-xl font-bold text-white">ISO 9001</div>
                        <div className="text-xs text-slate-300 font-medium">Certified Quality</div>
                      </div> */}
                {/* </div>
                  </div>
                </div> */}
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-xs text-white/50 tracking-widest uppercase font-semibold">Scroll</span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50 z-0">
            <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[100px] mix-blend-multiply"></div>
            <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-cyan-200/50 rounded-full blur-[120px] mix-blend-multiply"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="text-center mb-20">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6">
                Premium Services for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modern Living</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                We deliver end-to-end solutions combining technical excellence with unparalleled craftsmanship. Discover how we can elevate your next project.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: "/bgimages/technician-working-air-conditioner.jpg", // AC Repair image
                  title: 'AC Repair & Maintenance',
                  desc: 'Fast, reliable diagnostics and repairs to keep your environment perfectly controlled year-round.',
                  gradient: 'from-blue-500 to-cyan-400',
                  iconColor: 'text-blue-500 dark:text-blue-400',
                  bgLight: 'bg-blue-50',
                  bgDark: 'dark:bg-blue-900/20'
                },
                {
                  image: "/bgimages/about-us-bg.jpg", // AC Installation image
                  title: 'AC Installation',
                  desc: 'Energy-efficient air conditioning setups designed and installed seamlessly for any space.',
                  gradient: 'from-cyan-500 to-emerald-400',
                  iconColor: 'text-cyan-500 dark:text-cyan-400',
                  bgLight: 'bg-cyan-50',
                  bgDark: 'dark:bg-cyan-900/20'
                },
                {
                  image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop", // Plumbing image
                  title: 'Premium Plumbing',
                  desc: 'Advanced plumbing solutions, from luxury fixture installations to complex piping infrastructure.',
                  gradient: 'from-indigo-500 to-purple-500',
                  iconColor: 'text-indigo-500 dark:text-indigo-400',
                  bgLight: 'bg-indigo-50',
                  bgDark: 'dark:bg-indigo-900/20'
                },
                {
                  image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop", // Electrical wiring image
                  title: 'Electrical Wiring',
                  desc: 'Safe and efficient electrical wiring solutions, including single-phase and three-phase wiring for homes, offices, and commercial buildings. Designed for reliability, safety, and long-term performance.',
                  gradient: 'from-amber-500 to-orange-400',
                  iconColor: 'text-amber-500 dark:text-amber-400',
                  bgLight: 'bg-amber-50',
                  bgDark: 'dark:bg-amber-900/20'
                }
              ].map((service, index) => (
                <FadeIn
                  key={index}
                  className="group relative h-full"
                  delay={index * 0.15}
                >
                  {/* Glowing hover effect behind card */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>

                  <div className="relative h-full bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col overflow-hidden">

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex-1 relative">
                      {/* Top right decorative circle */}
                      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>

                      <div className="relative z-10 flex-1">
                        <h3 className="text-xl font-bold mb-4 text-blue-950 transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                          {service.desc}
                        </p>
                      </div>

                      <div className={`mt-8 flex items-center text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600`}>
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 px-4 flex items-center min-h-[800px]">
          {/* Parallax Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/bgimages/about-us-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          >
            {/* Light, airy overlay for better text contrast */}
            {/* <div className="absolute inset-0 bg-white/80 mix-blend-overlay"></div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 backdrop-blur-[2px]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left Column - Text Content */}
              <FadeIn>
                <span className="inline-block py-1 px-4 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wider mb-6">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-950 leading-tight">
                  Building Excellence <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Since 1998</span>
                </h2>

                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.3)]"></div>

                <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed">
                  <p className="mb-6 font-light text-lg md:text-xl">
                    Chandrasena Construction has been serving the community with top-quality construction services for over a decade. Our team of skilled professionals is dedicated to delivering exceptional results in AC repair, implementation, plumbing, and electrical work.
                  </p>
                  <p className="font-light text-lg md:text-xl">
                    We pride ourselves on our commitment to safety, reliability, and customer satisfaction, ensuring every project is completed to the highest standards of excellence and durability.
                  </p>
                </div>

                <div className="mt-12">
                  <a href="#contact" className="inline-flex items-center gap-3 text-blue-700 font-medium hover:text-blue-500 transition-colors group text-lg border-b border-transparent hover:border-blue-400 pb-1">
                    Discover our methodology
                    <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </FadeIn>

              {/* Right Column - Glassmorphic Stats */}
              <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
                {[
                  { title: 'Experience', value: '25+', suffix: 'Years', desc: 'Industry leadership', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  { title: 'Quality', value: '100', suffix: '%', desc: 'Certified professionals', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> },
                  { title: 'Projects', value: '150', suffix: '+', desc: 'Successfully delivered', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
                  { title: 'Clients', value: '100', suffix: '+', desc: 'Satisfied customers', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group bg-white/70 hover:bg-white backdrop-blur-xl border border-white/60 p-6 rounded-2xl transition-all duration-500 overflow-hidden shadow-xl"
                  >
                    {/* Subtle glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md -z-10"></div>

                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {stat.icon}
                        </svg>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-extrabold text-blue-950 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500">{stat.value}</span>
                        <span className="text-blue-600 font-bold text-lg">{stat.suffix}</span>
                      </div>
                      <h4 className="text-blue-900 font-semibold text-lg mb-1">{stat.title}</h4>
                      <p className="text-sm text-gray-500 font-light">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </FadeIn>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950 text-center">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
              <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
                Ready to start your project? Get in touch with us today for a free consultation.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <FadeIn delay={0.1}>
                <div className="bg-blue-50/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-950 flex items-center">
                    <span className="text-blue-600 mr-3">📞</span>
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold text-blue-900">Phone:</span> 077 20 57 817
                    </p>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold text-blue-900">Email:</span> malkapriyamal95@gmail.com
                    </p>
                    <p className="text-gray-600 text-lg">
                      {/* <span className="font-semibold text-blue-900">Address:</span> 123 Construction St, City, State 12345 */}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-blue-50/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-950 flex items-center">
                    <span className="text-blue-600 mr-3">🕐</span>
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold text-blue-900">Monday - Friday:</span> 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold text-blue-900">Saturday:</span> 9:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 text-lg">
                      {/* <span className="font-semibold text-blue-900">Sunday:</span> Closed */}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="text-center">
              <a
                href="mailto:malkapriyamal95@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send us an Email
              </a>
            </FadeIn>
          </div>
        </section>
        <BackToTopButton />
      </main>
    </div >
  );
}
