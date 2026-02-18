import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, TrendingUp, Users, Cpu, Award, Mail, Phone, MapPin, Globe, Briefcase, Target, Shield } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'philosophy', 'profile', 'services', 'process', 'competencies', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Geschäftsentwicklung & Strategie",
      features: [
        "Analyse von Geschäftsfeldern und Wachstumspotenzialen",
        "Strategische Neuausrichtung und Change Management",
        "Geopolitische Einordnung von Märkten und Projekten",
        "Entwicklung nachhaltiger, skalierbarer Geschäftsmodelle"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Ressourcen & Einkauf",
      features: [
        "Strategischer Einkauf als Wachstumshebel",
        "Optimierung von Lieferketten und Partnerschaften",
        "Effizienzsteigerung in internationalen Strukturen"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Wirtschaftsberatung",
      features: [
        "Ökonomische Analysen und Impact Assessments",
        "Entscheidungsgrundlagen für Investitionen und Expansion",
        "Trend- und Marktanalysen für zukunftsfähige Unternehmungen"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Markteintritt Mittlerer Osten",
      features: [
        "Evaluierung von Standorten und Wirtschaftszonen",
        "Aufbau lokaler Strukturen und Organisationen",
        "Begleitung bei regulatorischen, kulturellen und strategischen Fragestellungen"
      ]
    }
  ];

  const processSteps = [
    {
      number: "I",
      title: "Analyse",
      description: "Umfassende Bestandsaufnahme Ihrer Situation und Herausforderungen"
    },
    {
      number: "II",
      title: "Strategie",
      description: "Entwicklung maßgeschneiderter, evidenzbasierter Lösungsansätze"
    },
    {
      number: "III",
      title: "Umsetzung",
      description: "Strukturierte Implementierung mit kontinuierlicher Begleitung"
    },
    {
      number: "IV",
      title: "Evaluation",
      description: "Systematisches Monitoring und kontinuierliche Optimierung"
    }
  ];

  const companies = [
    "EADS/Airbus",
    "Eurocopter",
    "MTU Aero Engines",
    "Eurofighter GmbH",
    "Cassidian",
    "Rheinmetall"
  ];

  const countries = [
    "Deutschland",
    "Frankreich",
    "Spanien",
    "Schweiz",
    "USA",
    "Kanada",
    "Saudi-Arabien",
    "Katar"
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        h1, h2, h3, .display-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        
        .text-balance {
          text-wrap: balance;
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #d4af37, transparent);
        }
        
        .border-gold {
          border-color: #d4af37;
        }
        
        .text-gold {
          color: #d4af37;
        }
        
        .bg-gold {
          background-color: #d4af37;
        }
        
        .hover-gold:hover {
          border-color: #d4af37;
          color: #d4af37;
        }
        
        .service-card {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .ornament {
          position: relative;
        }
        
        .ornament::before,
        .ornament::after {
          content: '◆';
          position: absolute;
          color: #d4af37;
          font-size: 0.75rem;
        }
        
        .ornament::before {
          left: -1.5rem;
        }
        
        .ornament::after {
          right: -1.5rem;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-sm shadow-sm' : 'bg-white border-b border-neutral-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3"
            >
              <div className="text-xl font-semibold tracking-wide">
                <span className="text-neutral-900">FPL</span>
                <span className="text-neutral-400 mx-2">·</span>
                <span className="text-neutral-600 font-normal">Consulting & Services</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'philosophy', label: 'Philosophie' },
                { id: 'profile', label: 'Profil' },
                { id: 'services', label: 'Leistungen' },
                { id: 'competencies', label: 'Kompetenzen' },
                { id: 'experience', label: 'Erfahrung' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'text-gold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-neutral-700"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-6 py-4 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'philosophy', label: 'Philosophie' },
                { id: 'profile', label: 'Profil' },
                { id: 'services', label: 'Leistungen' },
                { id: 'competencies', label: 'Kompetenzen' },
                { id: 'experience', label: 'Erfahrung' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm transition-all ${
                    activeSection === item.id
                      ? 'text-gold'
                      : 'text-neutral-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-12 h-px bg-gold mx-auto mb-8"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-semibold text-neutral-900 mb-6 leading-tight">
              Friedrich Philipp Lederer
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-8 font-light">
              Consulting & Services
            </p>
            
            <p className="text-xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Strategischer Partner für mittelständische Unternehmen im Aerospace- und Defence-Sektor – 
              mit ausgewiesener Expertise im Mittleren Osten.
            </p>
            
            <p className="text-lg text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              In einer zunehmend komplexen und geopolitisch geprägten Geschäftswelt benötigen Unternehmen 
              mehr als Beratung: Sie benötigen fundierte Expertise, strategische Einordnung und 
              nachgewiesene Umsetzungskompetenz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-neutral-900 text-white tracking-wide hover:bg-neutral-800 transition-all"
              >
                Erstgespräch anfragen
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-10 py-4 bg-white text-neutral-900 border border-neutral-300 tracking-wide hover-gold transition-all"
              >
                Leistungsportfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 lg:px-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Philosophie</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Ganzheitliche Beratung bedeutet<br />mehr als die Lieferung von Lösungen
            </h2>
            <div className="divider w-32 mx-auto mb-10"></div>
          </div>
          
          <div className="bg-white border border-neutral-200 p-12 lg:p-16">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8 text-center">
              Meine Beratungsphilosophie fundiert auf <strong>Fachexpertise</strong>, <strong>praktischer Erfahrung</strong>, <strong>Empathie</strong> und <strong>ausgewogener Balance</strong>.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed text-center">
              Jeder unternehmerischen Herausforderung liegt ein menschlicher Kontext zugrunde – 
              nachhaltiger Erfolg entsteht ausschließlich durch das Gleichgewicht von Strategie, 
              Organisation und Menschen.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Profil</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Senior Executive mit internationaler Expertise
            </h2>
            <div className="divider w-32 mx-auto mb-10"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-lg text-neutral-700 leading-relaxed space-y-6">
              <p>
                Als international erfahrener Senior Executive und Consultant verfüge ich über 
                fundierte Expertise in den Bereichen <strong>Defence</strong>, <strong>Aerospace</strong> 
                sowie <strong>industrieller Mittelstand</strong>.
              </p>
              <p>
                Über mehrere Dekaden habe ich Unternehmen in verschiedenen Ländern etabliert, 
                internationale Organisationen aufgebaut und komplexe, strategisch bedeutsame 
                Verträge erfolgreich zum Abschluss gebracht.
              </p>
            </div>
            
            <div className="bg-neutral-50 border border-neutral-200 p-10">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Kernkompetenzen im strategischen Einsatz:
              </h3>
              <ul className="space-y-4">
                {[
                  "Strategische Geschäftsentwicklung",
                  "Internationale Markteintrittsstrategien",
                  "Stakeholder- & Relationship-Management",
                  "Aufbau internationaler Organisationsstrukturen"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-gold mt-2.5 flex-shrink-0"></div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Leistungsportfolio</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Integrierte Beratungsleistungen
            </h2>
            <div className="divider w-32 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white border border-neutral-200 p-10"
              >
                <div className="w-12 h-12 border border-neutral-300 flex items-center justify-center text-neutral-700 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gold mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-neutral-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Vorgehen</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Ein bewährter Beratungsprozess
            </h2>
            <div className="divider w-32 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ein modularer, erprobter Ansatz gewährleistet Flexibilität, Effizienz und messbare Resultate. 
              Sie arbeiten durchgehend direkt mit einem erfahrenen Senior Consultant – von der initialen 
              Analyse bis zur erfolgreichen Implementierung und darüber hinaus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-semibold text-gold mb-6 ornament">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section id="competencies" className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Kompetenzen & Werte</div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
              Kernsäulen meiner Beratungsleistung
            </h2>
            <div className="divider w-32 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 border border-gold mx-auto flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Expertise & Erfahrung
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Umfassende fachliche Expertise verbunden mit jahrzehntelanger operativer Erfahrung 
                in hochkomplexen, internationalen Geschäftsumfeldern.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-gold mx-auto flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Balance & Empathie
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Erfolgreiche Projekte basieren auf Vertrauen. Empathie bildet das Fundament 
                effektiver Kommunikation und nachhaltiger, partnerschaftlicher Zusammenarbeit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 border border-gold mx-auto flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Executive Mentoring
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Ganzheitliches Mentoring zur strategischen Weiterentwicklung von Führungskräften 
                und Organisationen.
              </p>
              <ul className="text-sm text-neutral-400 space-y-2 text-left max-w-xs mx-auto">
                <li className="flex items-start space-x-2">
                  <span className="text-gold">·</span>
                  <span>Entwicklung von Führungskompetenzen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">·</span>
                  <span>Bewältigung komplexer strategischer Herausforderungen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold">·</span>
                  <span>Transformation auf persönlicher, organisatorischer und geschäftlicher Ebene</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-neutral-800">
            <div className="bg-neutral-800 border border-neutral-700 p-10 text-center">
              <Globe className="w-12 h-12 text-gold mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">
                Länder- & Marktexpertise Mittlerer Osten
              </h3>
              <p className="text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-6">
                Der Mittlere Osten bietet signifikante Wachstumschancen – deren Realisierung 
                jedoch fundiertes Verständnis voraussetzt. Ich biete aktuelle, belastbare Länder- 
                und Marktinformationen sowie strategische Einordnung kultureller, wirtschaftlicher 
                und politischer Rahmenbedingungen.
              </p>
              <p className="text-neutral-400 text-sm">
                Interkulturelle Kompetenz bildet den Schlüssel zu nachhaltigen Partnerschaften 
                und erfolgreicher grenzüberschreitender Zusammenarbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Erfahrung</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Internationale Expertise
            </h2>
            <div className="divider w-32 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ausbildung */}
            <div className="bg-neutral-50 border border-neutral-200 p-10">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-semibold text-neutral-900">Ausbildung</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Aerospace Engineer",
                  "Industrial Engineer",
                  "Master of Business Administration (MBA)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-gold mt-2.5 flex-shrink-0"></div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unternehmen */}
            <div className="bg-neutral-50 border border-neutral-200 p-10">
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-semibold text-neutral-900">Unternehmen</h3>
              </div>
              <ul className="space-y-3">
                {companies.map((company, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-gold mt-2.5 flex-shrink-0"></div>
                    <span className="text-neutral-700">{company}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Länder */}
            <div className="bg-neutral-50 border border-neutral-200 p-10 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <Globe className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-semibold text-neutral-900">Internationale Erfahrung</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {countries.map((country, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white border border-neutral-200 text-sm text-neutral-700"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs text-gold uppercase tracking-widest mb-6">Kontakt</div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-neutral-900 mb-8">
              Lassen Sie uns Ihre Strategie entwickeln
            </h2>
            <div className="divider w-32 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              Strategische Klarheit, internationale Expertise und partnerschaftliche Zusammenarbeit – 
              für nachhaltigen unternehmerischen Erfolg.
            </p>
          </div>

          <div className="border border-neutral-200 bg-white p-12 lg:p-16">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm text-neutral-700 mb-3 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 mb-3 uppercase tracking-wide">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 focus:border-gold focus:outline-none transition-colors"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 mb-3 uppercase tracking-wide">
                  Unternehmen
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 focus:border-gold focus:outline-none transition-colors"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-700 mb-3 uppercase tracking-wide">
                  Ihre Nachricht *
                </label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition-all tracking-wide"
              >
                Nachricht senden
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-neutral-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Mail className="w-6 h-6 text-gold mx-auto mb-4" />
                  <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">E-Mail</div>
                  <div className="text-neutral-700">FPL@consulting.com</div>
                </div>
                <div>
                  <Phone className="w-6 h-6 text-gold mx-auto mb-4" />
                  <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Telefon</div>
                  <div className="text-neutral-700">Auf Anfrage</div>
                </div>
                <div>
                  <MapPin className="w-6 h-6 text-gold mx-auto mb-4" />
                  <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">Verfügbarkeit</div>
                  <div className="text-neutral-700">International</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600">
              Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-neutral-800">
            <div>
              <div className="text-xl font-semibold mb-4">
                FPL <span className="text-neutral-500">Consulting & Services</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Friedrich Philipp Lederer – Ihr strategischer Partner für Aerospace, Defence und den Mittleren Osten.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                {['Philosophie', 'Profil', 'Leistungen', 'Kompetenzen', 'Erfahrung', 'Kontakt'].map((item) => (
                  <li key={item}>
                    <button className="text-neutral-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4">Kontakt</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>FPL@consulting.com</li>
                <li>www.FPLconsulting.com</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; 2026 FPL Consulting & Services. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <button className="hover:text-white transition-colors">Impressum</button>
              <button className="hover:text-white transition-colors">Datenschutz</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
