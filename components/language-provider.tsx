"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.companies": "Group Companies",
    "nav.clients": "Clients",
    "nav.management": "Management Team",
    "nav.contact": "Contact Us",

    // Hero Section
    "hero.title": "Leading the Future of",
    "hero.subtitle": "Petrochemicals",
    "hero.description":
      "Raymand GmbH - Your trusted partner in global petrochemical trading. Over 500,000 MT exported worldwide with excellence and reliability.",
    "hero.discover": "Discover Our Story",
    "hero.products": "View Products",
    "hero.stats.exported": "MT Exported",
    "hero.stats.volume": "Trade Volume",
    "hero.stats.companies": "Group Companies",

    // Values Section
    "values.title": "Our Core",
    "values.subtitle": "Values",
    "values.description":
      "The fundamental values on which our company is founded, guiding us in all business activities",

    // Philosophy Section
    "philosophy.title": "Our",
    "philosophy.subtitle": "Philosophy",
    "philosophy.text":
      "Raymand recognizes the increasing need for strategic planning in the rapidly changing business environment and by utilizing efficient, trustworthy and reliable services has achieved remarkable and significant achievements in trading oil, gas and petrochemical products.",
    "philosophy.text2":
      "As an independent trading company, Raymand GmbH has remarkable speed and agility to react to the market, scale the organizations and shift the strategy according to the new needs and demands.",

    // Product Showcase
    "showcase.title": "Featured",
    "showcase.subtitle": "Products",
    "showcase.description": "Discover our premium petrochemical products trusted by industries worldwide",
    "showcase.viewAll": "View All Products",

    // About Page
    "about.title": "Get to Know Our",
    "about.subtitle": "Company",
    "about.description":
      "Raymand GmbH, established in 2018, is a leading international trading company operating across Europe, UAE, and Turkey, specializing in petrochemical products and fertilizers.",
    "about.story": "Our Story",
    "about.mission": "Our Mission",
    "about.vision": "Our Vision",
    "about.mission.text":
      "We supply high quality petrochemical products at competitive prices with timely deliveries to our valuable chain of customers.",
    "about.vision.text":
      "To be a prominent independent company in Europe and the Middle East, providing superior services to customers around the world.",
    "about.business.areas": "Main Business Areas",
    "about.company.description": "Raymand GmbH Company established in 2018 under the Commercial Laws of Germany is a leading international trading company operating in Germany, UAE and Turkey, specializing in petrochemical products and fertilizers.",
    "about.company.details": "The company has exported more than 500,000 MT of Urea and over 100,000 MT of Anhydrous Ammonia and LPG worth over 150 million dollars, establishing itself as a reliable supplier in the global market.",
    "about.transparency.title": "Business Transparency",
    "about.transparency.text": "Business processes in Raymand are based on a structured system. The main priority in this structure, which is designed on the basis of experience gained, lessons learned and the competitive benchmarking conducted since the establishment of the company. Customers and business partners can connect with Raymand concerning their willingness for cooperation, either as a customer of various products or as a supplier.",
    "about.ethics.title": "Code of Ethics",
    "about.ethics.text": "We, the employees of Raymand, on the basis of exalted human values and dignity, place ourselves responsible for and committed to all stakeholders, our customers and employees. We also take this oath of responsibility and commitment to all our fellow companies, employers and competitors. We vow to be loyal to the requirements of all parties in the professional activities in which we are involved and to meet our ethical commitment which are listed in this document.",

    // Products Page
    "products.title": "Our",
    "products.subtitle": "Products",
    "products.description":
      "Premium petrochemical products and fertilizers sourced and distributed globally for agricultural, industrial, and commercial applications.",
    "products.fertilizers": "Fertilizers",
    "products.petrochemicals": "Petrochemicals",
    "products.quote": "Request Quote",
    "products.features": "Key Features",
    "products.applications": "Applications",

    // Clients Page
    "clients.title": "Our Major",
    "clients.subtitle": "Clients",
    "clients.description": "Building lasting partnerships with government and private sector organizations worldwide.",
    "clients.major": "Major",
    "clients.partnerships":
      "At our group we take pride in our longstanding partnerships with a diverse range of clients. Our commitment to excellence and unwavering dedication to quality have earned us the trust of both government and private sector organizations.",
    "clients.financial": "Financial",
    "clients.facilities": "Facilities",
    "clients.banking": "Our Banking",
    "clients.partners": "Partners",
    "clients.export.title": "Our Export",
    "clients.export.subtitle": "Countries",
    "clients.export.text":
      "Raymand GmbH group sources and distributes more than 500,000 tons of high-quality fertilizer raw materials, intermediate products, polymers and finished products including Urea, DAP, Phosphoric Acid, and Sulphur to communities growing sugar, corn, wheat, and barley each year.",
    "clients.financial.text1": "In our group, we value building robust and effective financial relationships with our business partners and employees. For this purpose, we have active accounts with various renowned and leading banks in the country and worldwide. Regarding financial transactions, our company offers bank guarantees with different specifications and conditions to our partners. This provision serves as one of our ways to create trust and facilitate business transactions.",
    "clients.financial.text2": "In the rapidly evolving landscape of global trade and business, having a reliable financial partner is of utmost importance. Recognizing this, our company is not only capable of handling various types of monetary transactions but also specializes in offering bank guarantees to our partners. These bank guarantees have various specifications and conditions tailored to the needs and requirements of our partners. By offering these guarantees, we strive to create greater confidence in our business relationships and ensure that all parties involved can work with peace of mind.",

    // Companies Page
    "companies.title": "Our Group",
    "companies.subtitle": "Companies",
    "companies.description":
      "A strategic network of companies operating across multiple countries, providing comprehensive petrochemical and fertilizer solutions worldwide.",
    "companies.operations": "Global Operations",
    "companies.expertise": "Industry Expertise",
    "companies.greengrow.description": "The company is active in the field of export and import of petrochemical products.",
    "companies.petrochem.description": "Active in the field of logistics and own warehouse operations.",
    "companies.technoturk.description": "Active in the field of import & export of petrochemical products in Turkey.",
    "companies.chempolska.description": "Active in the field of import, export & distribution of fertilizers and industrial raw materials in Poland, Central & Western Europe.",
    "companies.agrosol.description": "Active in the field of fertilizers and supply of goods to Moldova, Romania and Bulgaria.",

    // Management Page
    "management.title": "Our Management",
    "management.subtitle": "Team",
    "management.description":
      "Meet the experienced professionals leading Raymand GmbH to success across global markets with expertise and dedication.",
    "management.leadership": "Leadership",
    "management.excellence": "Excellence",

    // Contact Page
    "contact.title": "Get In",
    "contact.subtitle": "Touch",
    "contact.description":
      "Ready to discuss your petrochemical and fertilizer needs? Contact our team for personalized solutions and competitive pricing.",
    "contact.info": "Contact Information",
    "contact.form.title": "Send us a Message",
    "contact.form.description": "Fill out the form below and we'll get back to you shortly.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Business Hours",
    "contact.form.name": "Name Surname",
    "contact.form.phone": "Phone",
    "contact.form.email": "Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.placeholder.name": "Your full name",
    "contact.form.placeholder.phone": "Your phone number",
    "contact.form.placeholder.email": "your.email@example.com",
    "contact.form.placeholder.message": "Tell us about your requirements...",

    // Legal Page
    "legal.title": "Legal",
    "legal.subtitle": "Documents",
    "legal.description": "Our commitment to transparency and compliance with international standards.",
    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.description": "How we collect, use, and protect your personal information.",
    "legal.privacy.content":
      "<p>We are committed to protecting your privacy and personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p><p><strong>Data Collection:</strong> We collect information you provide directly, such as contact details and business inquiries.</p><p><strong>Data Use:</strong> Your information is used to respond to inquiries, provide services, and improve our offerings.</p><p><strong>Data Protection:</strong> We implement appropriate security measures to protect your personal information.</p>",
    "legal.terms.title": "Terms of Service",
    "legal.terms.description": "Terms and conditions governing the use of our services.",
    "legal.terms.content":
      "<p>These terms govern your use of our website and services. By accessing our site, you agree to these terms.</p><p><strong>Service Use:</strong> Our services are provided for business purposes related to petrochemical trading.</p><p><strong>Intellectual Property:</strong> All content on this site is owned by Raymand GmbH.</p><p><strong>Limitation of Liability:</strong> We provide services 'as is' and limit liability as permitted by law.</p>",
    "legal.data.title": "Data Protection",
    "legal.data.description": "Our commitment to protecting your data in compliance with GDPR and local laws.",
    "legal.data.content":
      "<p>We comply with GDPR and German data protection laws. Your rights include access, rectification, erasure, and portability of your personal data.</p><p><strong>Legal Basis:</strong> We process data based on legitimate business interests and consent.</p><p><strong>Data Retention:</strong> We retain data only as long as necessary for business purposes.</p><p><strong>Your Rights:</strong> You may request access, correction, or deletion of your personal data.</p>",
    "legal.cookies.title": "Cookie Policy",
    "legal.cookies.description": "Information about how we use cookies on our website.",
    "legal.cookies.content":
      "<p>We use cookies to improve your browsing experience and analyze website traffic.</p><p><strong>Essential Cookies:</strong> Required for basic website functionality.</p><p><strong>Analytics Cookies:</strong> Help us understand how visitors use our site.</p><p><strong>Cookie Control:</strong> You can manage cookie preferences through your browser settings.</p>",
    "legal.readFull": "Read Full Document",
    "legal.company.title": "Company Information",
    "legal.company.registration": "Registration Details",
    "legal.company.address": "Registered Address",

    // Featured Products
    "featured.urea.name": "Urea 46%",
    "featured.urea.description": "The most concentrated nitrogen fertilizer, essential for crop nutrition and growth.",
    "featured.urea.features.nitrogen": "High nitrogen content",
    "featured.urea.features.soluble": "Water soluble",
    "featured.urea.features.universal": "Universal application",
    "featured.urea.category": "Fertilizer",
    
    "featured.lpg.name": "Liquified Petroleum Gas (LPG)",
    "featured.lpg.description": "Clean-burning fuel for industrial and domestic applications.",
    "featured.lpg.features.clean": "Clean burning",
    "featured.lpg.features.efficiency": "High efficiency",
    "featured.lpg.features.versatile": "Versatile use",
    "featured.lpg.category": "Petrochemical",
    
    "featured.ammonia.name": "Anhydrous Ammonia",
    "featured.ammonia.description": "Essential chemical for fertilizer production and industrial processes.",
    "featured.ammonia.features.purity": "High purity",
    "featured.ammonia.features.industrial": "Industrial grade",
    "featured.ammonia.features.bulk": "Bulk supply",
    "featured.ammonia.category": "Chemical",

    // Quote Modal
    "quote.title": "Request a Quote",
    "quote.subtitle": "Get personalized pricing for your requirements",
    "quote.form.product": "Product",
    "quote.form.quantity": "Quantity (MT)",
    "quote.form.delivery": "Delivery Location",
    "quote.form.timeline": "Timeline",
    "quote.form.company": "Company Name",
    "quote.form.submit": "Submit Request",
    "quote.form.submitting": "Submitting...",
    "quote.form.select.product": "Select a product",
    "quote.form.select.timeline": "Select timeline",
    "quote.form.timeline.immediate": "Immediate (1-2 weeks)",
    "quote.form.timeline.month": "Within 1 month",
    "quote.form.timeline.quarter": "Within 3 months",
    "quote.form.timeline.flexible": "Flexible",
    "quote.form.placeholder.quantity": "e.g., 1000",
    "quote.form.placeholder.delivery": "City, Country",
    "quote.form.placeholder.company": "Your company name",
    "quote.form.placeholder.message": "Additional requirements or specifications...",

    // Confirmation Modal
    "confirmation.contact.title": "Message Sent Successfully!",
    "confirmation.contact.message": "Thank you for contacting us. We will get back to you within 24 hours.",
    "confirmation.quote.title": "Quote Request Submitted!",
    "confirmation.quote.message":
      "Your quote request has been received. Our team will prepare a detailed proposal and contact you soon.",
    "confirmation.newsletter.title": "Subscription Successful!",
    "confirmation.newsletter.message":
      "Thank you for subscribing to our newsletter. You'll receive updates about our latest products and industry insights.",

    // Urea Section
    "urea.title": "What is",
    "urea.subtitle": "Urea Fertilizer?",
    "urea.text1":
      "Urea is very useful in almost all kinds of crops and fertilization of tobacco seedlings to meet the nitrogen needs of plants. When urea is given insufficiently, the development of the plant slows down, the leaves turn yellow, and the yield decreases.",
    "urea.text2":
      "Urea can be used at all stages of plant development and is the most concentrated nitrogen fertilizer available, making it highly efficient for agricultural applications.",
    "urea.stat1": "Nitrogen Content",
    "urea.stat2": "Water Soluble",
    "urea.stat3": "Crop Types",
    "urea.stat4": "Global Distribution",
    "urea.learn.more": "Learn More About Urea",
    "urea.modal.title": "Complete Guide to",
    "urea.modal.subtitle": "Urea Fertilizer",
    "urea.modal.description": "Everything you need to know about the world's most popular nitrogen fertilizer",
    "urea.modal.benefits": "Key Benefits & Features",
    "urea.modal.high.nitrogen": "High Nitrogen Content",
    "urea.modal.high.nitrogen.desc": "46% nitrogen concentration for maximum efficiency",
    "urea.modal.water.soluble": "Water Soluble",
    "urea.modal.water.soluble.desc": "Easily dissolves in water for quick plant absorption",
    "urea.modal.universal": "Universal Application",
    "urea.modal.universal.desc": "Suitable for all crop types and growing conditions",
    "urea.modal.cost.effective": "Cost Effective",
    "urea.modal.cost.effective.desc": "Best value nitrogen source for agricultural use",
    "urea.modal.application.methods": "Application Methods",
    "urea.modal.soil.application": "Soil Application - Direct incorporation into soil",
    "urea.modal.foliar.spray": "Foliar Spray - Diluted solution for leaf application",
    "urea.modal.fertigation": "Fertigation - Through irrigation systems",
    "urea.modal.broadcast": "Broadcast - Surface spreading before planting",
    "urea.modal.technical.specs": "Technical Specifications",
    "urea.modal.nitrogen.content": "Nitrogen Content",
    "urea.modal.highest.solid": "Highest among all solid nitrogen fertilizers",
    "urea.modal.chemical.formula": "Chemical Formula",
    "urea.modal.pure.carbamide": "Pure carbamide compound",
    "urea.modal.solubility": "Solubility",
    "urea.modal.completely.soluble": "Completely water soluble",
    "urea.modal.recommended.crops": "Recommended for These Crops",
    "urea.modal.storage.safety": "Storage & Safety Guidelines",
    "urea.modal.store.cool": "Store in cool, dry place away from direct sunlight",
    "urea.modal.keep.away": "Keep away from heat sources and combustible materials",
    "urea.modal.protective.equipment": "Use appropriate protective equipment during handling",
    "urea.modal.follow.regulations": "Follow local regulations for transportation and storage",
    "urea.modal.interested": "Interested in learning more about our urea products?",

    // Stats and Numbers
    "stats.quality": "Quality",
    "stats.trust": "Trust",
    "stats.efficiency": "Efficiency",
    "stats.excellence": "Proven Track Record of",
    "stats.achievements": "Excellence",
    "stats.description": "Our achievements speak for themselves. Join us today and let us help you grow your business.",

    // Business Areas
    "business.lpg": "Liquified Petroleum Gas (LPG)",
    "business.ammonia": "Anhydrous Ammonia",
    "business.urea": "Prilled and Granular Urea",
    "business.polymer": "Polymer & PVC",
    "business.nitrate": "Ammonium Nitrate",
    "business.oil": "Oil and Gas Products",
    "business.materials": "Fertilizer Raw Materials",

    // Product Features
    "features.nitrogen": "High nitrogen content",
    "features.soluble": "Water soluble",
    "features.universal": "Universal application",
    "features.quick": "Quick release nitrogen",
    "features.solubility": "High solubility",
    "features.uptake": "Efficient uptake",
    "features.phosphorus": "Phosphorus rich",
    "features.starter": "Starter fertilizer",
    "features.root": "Root development",
    "features.balanced": "Balanced nutrition",
    "features.nutrients": "Multiple nutrients",
    "features.versatility": "Crop versatility",
    "features.clean": "Clean burning",
    "features.efficiency": "High efficiency",
    "features.versatile": "Versatile use",
    "features.purity": "High purity",
    "features.industrial": "Industrial grade",
    "features.bulk": "Bulk supply",
    "features.superior": "Superior quality",
    "features.grades": "Various grades",
    "features.reliable": "Reliable supply",

    // Footer
    "footer.description": "Leading international trading company specializing in petrochemical products and fertilizers with operations across Europe, UAE, and Turkey.",
    
    // FAQ Section
    "faq.title": "Frequently Asked",
    "faq.subtitle": "Questions",
    "faq.description": "Find answers to the most common questions about our products and services to help improve your experience with us.",
    "faq.question1": "What types of fertilizers do you supply?",
    "faq.answer1": "We supply a comprehensive range of fertilizers including Urea 46%, DAP, NPK compounds, Ammonium Nitrate, Potassium Chloride, and various specialty fertilizers. All our products meet international quality standards and are suitable for different crop types and soil conditions.",
    "faq.question2": "How do you ensure product quality?",
    "faq.answer2": "We maintain strict quality control measures throughout our supply chain. All products are sourced from certified manufacturers and undergo rigorous testing before shipment. We provide certificates of analysis and comply with international quality standards including ISO certifications.",
    "faq.question3": "What are your minimum order quantities?",
    "faq.answer3": "Minimum order quantities vary by product type. For fertilizers, we typically work with orders starting from 1,000 MT. For specialty products, minimum quantities may be lower. Contact our sales team for specific product requirements and competitive pricing.",
    "faq.question4": "Which countries do you export to?",
    "faq.answer4": "We export to over 12 countries including Turkey, Brazil, India, UAE, Oman, Poland, Moldova, Romania, Bulgaria, South Africa, China, and various European countries. Our logistics network ensures reliable delivery to major ports worldwide.",
    "faq.question5": "What payment terms do you offer?",
    "faq.answer5": "We offer flexible payment terms including Letters of Credit (LC), bank guarantees, and other trade finance instruments. Our banking partners include major international banks, ensuring secure and reliable financial transactions for all our customers.",
    "faq.question6": "How long does shipping typically take?",
    "faq.answer6": "Shipping times depend on the destination and product type. Typically, deliveries to European ports take 5-10 days, while shipments to other regions may take 15-30 days. We provide real-time tracking and updates throughout the shipping process.",
    "faq.contact.title": "Still have questions?",
    "faq.contact.description": "Our expert team is ready to help you with any specific questions about our products or services.",
    "faq.contact.button": "Contact Us",
    "faq.contact.phone": "Call Now",

    // Contact Location
    "contact.location.title": "Visit Our Office",
    "contact.location.description": "Find us at our headquarters in Frankfurt, Germany. We're here to help with all your petrochemical and fertilizer needs.",

    // Common Words
    "common.getQuote": "Get Quote",
    "common.learnMore": "Learn More",
    "common.contactUs": "Contact Us",
    "common.readMore": "Read More",
    "common.close": "Close",
    "common.ok": "OK",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.required": "Required",
    "common.optional": "Optional",

    // Product Descriptions
    "product.urea.description": "The most concentrated nitrogen fertilizer, essential for crop nutrition and growth.",
    "product.kcl.description": "Essential potassium source for plant growth and fruit development.",
    "product.dap.description": "High-analysis phosphorus fertilizer for root development.",
    "product.ammonium.nitrate.description": "Commonly used highly-concentrated nitrogen fertilizer for various crops.",
    "product.calcium.ammonium.description": "Advanced nitrogen fertilizer with calcium and sulphur for enhanced plant nutrition.",
    "product.npk.24.6.12.description": "Balanced fertilizer with high nitrogen content for vigorous plant growth.",
    "product.ammonium.sulphate.description": "Nitrogen and sulphur fertilizer ideal for acidic soil conditions.",
    "product.map.12.52.description": "Widely used granulated nitrate-free NP fertilizer for starter applications.",
    "product.npk.10.26.26.description": "Widely used complex NPK fertilizer for balanced plant nutrition.",
    "product.npks.22.7.12.2.description": "Complete fertilizer with nitrogen, phosphorus, potassium and sulphur.",
    "product.npks.8.20.30.2.description": "High potassium fertilizer with phosphorus, nitrogen and sulphur.",

    // Core Values 
    "values.customer.focus": "Customer Focus",
    "values.customer.focus.description": "Putting our clients at the center of everything we do",
    "values.teamwork": "Teamwork", 
    "values.teamwork.description": "Collaborating effectively to achieve common goals",
    "values.trust": "Trust",
    "values.trust.description": "Building lasting relationships through reliability and integrity",
    "values.respect": "Respect",
    "values.respect.description": "Treating everyone with dignity and professionalism",
    "values.environment": "Human and Environment",
    "values.environment.description": "Committed to environmental responsibility and human values",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.products": "Produkte",
    "nav.companies": "Konzernunternehmen",
    "nav.clients": "Kunden",
    "nav.management": "Führungsteam",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Die Zukunft der",
    "hero.subtitle": "Petrochemie anführen",
    "hero.description":
      "Raymand GmbH - Ihr vertrauensvoller Partner im globalen Petrochemiehandel. Über 500.000 MT weltweit exportiert mit Exzellenz und Zuverlässigkeit.",
    "hero.discover": "Unsere Geschichte entdecken",
    "hero.products": "Produkte ansehen",
    "hero.stats.exported": "MT Exportiert",
    "hero.stats.volume": "Handelsvolumen",
    "hero.stats.companies": "Konzernunternehmen",

    // Values Section
    "values.title": "Unsere Kern-",
    "values.subtitle": "Werte",
    "values.description":
      "Die grundlegenden Werte, auf denen unser Unternehmen gegründet ist und die uns in allen Geschäftstätigkeiten leiten",

    // Philosophy Section
    "philosophy.title": "Unsere",
    "philosophy.subtitle": "Philosophie",
    "philosophy.text":
      "Raymand erkennt den zunehmenden Bedarf an strategischer Planung in der sich schnell verändernden Geschäftsumgebung und hat durch die Nutzung effizienter, vertrauensvoller und zuverlässiger Dienstleistungen bemerkenswerte und bedeutende Erfolge im Handel mit Öl, Gas und petrochemischen Produkten erzielt.",
    "philosophy.text2":
      "Als unabhängiges Handelsunternehmen verfügt Raymand GmbH über bemerkenswerte Geschwindigkeit und Agilität, um auf den Markt zu reagieren, die Organisationen zu skalieren und die Strategie entsprechend den neuen Bedürfnissen und Anforderungen zu ändern.",

    // Product Showcase
    "showcase.title": "Ausgewählte",
    "showcase.subtitle": "Produkte",
    "showcase.description":
      "Entdecken Sie unsere hochwertigen Petrochemieprodukte, denen Industrien weltweit vertrauen",
    "showcase.viewAll": "Alle Produkte anzeigen",

    // About Page
    "about.title": "Lernen Sie unser",
    "about.subtitle": "Unternehmen kennen",
    "about.description":
      "Raymand GmbH, gegründet 2018, ist ein führendes internationales Handelsunternehmen mit Aktivitäten in Europa, den VAE und der Türkei, spezialisiert auf Petrochemieprodukte und Düngemittel.",
    "about.story": "Unsere Geschichte",
    "about.mission": "Unsere Mission",
    "about.vision": "Unsere Vision",
    "about.mission.text":
      "Wir liefern hochwertige Petrochemieprodukte zu wettbewerbsfähigen Preisen mit pünktlichen Lieferungen an unsere wertvollen Kunden.",
    "about.vision.text":
      "Ein führendes unabhängiges Unternehmen in Europa und dem Nahen Osten zu sein, das erstklassige Dienstleistungen für Kunden weltweit erbringt.",
    "about.business.areas": "Hauptgeschäftsbereiche",
    "about.company.description": "Die Raymand GmbH wurde 2018 nach dem deutschen Handelsrecht gegründet und ist ein führendes internationales Handelsunternehmen mit Aktivitäten in Deutschland, den VAE und der Türkei, spezialisiert auf petrochemische Produkte und Düngemittel.",
    "about.company.details": "Das Unternehmen hat mehr als 500.000 MT Harnstoff und über 100.000 MT wasserfreies Ammoniak und LPG im Wert von über 150 Millionen Dollar exportiert und sich als zuverlässiger Lieferant auf dem Weltmarkt etabliert.",
    "about.transparency.title": "Geschäftstransparenz",
    "about.transparency.text": "Die Geschäftsprozesse bei Raymand basieren auf einem strukturierten System. Die Hauptpriorität in dieser Struktur, die auf der Grundlage gesammelter Erfahrungen, gelernter Lektionen und dem seit der Unternehmensgründung durchgeführten Wettbewerbsbenchmarking entwickelt wurde. Kunden und Geschäftspartner können sich mit Raymand bezüglich ihrer Kooperationsbereitschaft in Verbindung setzen, entweder als Kunde verschiedener Produkte oder als Lieferant.",
    "about.ethics.title": "Verhaltenskodex",
    "about.ethics.text": "Wir, die Mitarbeiter von Raymand, auf der Grundlage erhabener menschlicher Werte und Würde, machen uns verantwortlich und verpflichten uns gegenüber allen Stakeholdern, unseren Kunden und Mitarbeitern. Wir leisten auch diesen Eid der Verantwortung und Verpflichtung gegenüber allen unseren Partnerunternehmen, Arbeitgebern und Wettbewerbern. Wir schwören, den Anforderungen aller Parteien in den beruflichen Aktivitäten, in die wir eingebunden sind, loyal zu bleiben und unsere ethische Verpflichtung zu erfüllen, die in diesem Dokument aufgeführt sind.",

    // Products Page
    "products.title": "Unsere",
    "products.subtitle": "Produkte",
    "products.description":
      "Premium-Petrochemieprodukte und Düngemittel, die global für landwirtschaftliche, industrielle und kommerzielle Anwendungen bezogen und vertrieben werden.",
    "products.fertilizers": "Düngemittel",
    "products.petrochemicals": "Petrochemikalien",
    "products.quote": "Angebot anfordern",
    "products.features": "Hauptmerkmale",
    "products.applications": "Anwendungen",

    // Clients Page
    "clients.title": "Unsere wichtigsten",
    "clients.subtitle": "Kunden",
    "clients.description": "Aufbau dauerhafter Partnerschaften mit Regierungs- und Privatorganisationen weltweit.",
    "clients.major": "Wichtigste",
    "clients.partnerships":
      "In unserer Gruppe sind wir stolz auf unsere langjährigen Partnerschaften mit einer vielfältigen Palette von Kunden. Unser Engagement für Exzellenz und unsere unerschütterliche Hingabe zur Qualität haben uns das Vertrauen sowohl von Regierungs- als auch von Privatorganisationen eingebracht.",
    "clients.financial": "Finanzielle",
    "clients.facilities": "Einrichtungen",
    "clients.banking": "Unsere Bank-",
    "clients.partners": "Partner",
    "clients.export.title": "Unsere Export-",
    "clients.export.subtitle": "Länder",
    "clients.export.text":
      "Die Raymand GmbH-Gruppe bezieht und vertreibt jährlich mehr als 500.000 Tonnen hochwertiger Düngemittel-Rohstoffe, Zwischenprodukte, Polymere und Fertigprodukte einschließlich Harnstoff, DAP, Phosphorsäure und Schwefel an Gemeinden, die Zucker, Mais, Weizen und Gerste anbauen.",
    "clients.financial.text1": "In unserer Gruppe legen wir Wert darauf, robuste und effektive Finanzbeziehungen mit unseren Geschäftspartnern und Mitarbeitern aufzubauen. Zu diesem Zweck haben wir aktive Konten bei verschiedenen renommierten und führenden Banken im Land und in der Welt. In Bezug auf Finanztransaktionen bietet unser Unternehmen unseren Partnern Bankgarantien mit unterschiedlichen Spezifikationen und Bedingungen an. Diese Bereitstellung dient als eine unserer Möglichkeiten, Vertrauen zu schaffen und Geschäftstransaktionen zu erleichtern.",
    "clients.financial.text2": "In der sich schnell entwickelnden Landschaft des globalen Handels und Geschäfts ist es von größter Bedeutung, einen zuverlässigen Finanzpartner zu haben. In Erkenntnis dessen ist unser Unternehmen nicht nur in der Lage, verschiedene Arten von Geldtransaktionen abzuwickeln, sondern spezialisiert sich auch darauf, unseren Partnern Bankgarantien anzubieten. Diese Bankgarantien haben verschiedene Spezifikationen und Bedingungen, die auf die Bedürfnisse und Anforderungen unserer Partner zugeschnitten sind. Durch das Anbieten dieser Garantien streben wir an, größeres Vertrauen in unsere Geschäftsbeziehungen zu schaffen und sicherzustellen, dass alle beteiligten Parteien mit Ruhe arbeiten können.",

    // Companies Page
    "companies.title": "Unsere Konzern-",
    "companies.subtitle": "Unternehmen",
    "companies.description":
      "Ein strategisches Netzwerk von Unternehmen, die in mehreren Ländern tätig sind und umfassende Petrochemie- und Düngemittellösungen weltweit anbieten.",
    "companies.operations": "Globale Operationen",
    "companies.expertise": "Branchenexpertise",
    "companies.greengrow.description": "Das Unternehmen ist im Bereich Export und Import von petrochemischen Produkten tätig.",
    "companies.petrochem.description": "Aktiv im Bereich Logistik und eigenes Lager.",
    "companies.technoturk.description": "Aktiv im Bereich Import & Export von petrochemischen Produkten in der Türkei.",
    "companies.chempolska.description": "Aktiv im Bereich Import, Export & Vertrieb von Düngemitteln und Industrierohstoffen in Polen, Mitteleuropa & Westeuropa.",
    "companies.agrosol.description": "Aktiv im Bereich Düngemittel und Lieferung der Waren nach Moldawien, Rumänien und Bulgarien.",

    // Management Page
    "management.title": "Unser Management-",
    "management.subtitle": "Team",
    "management.description":
      "Lernen Sie die erfahrenen Fachkräfte kennen, die Raymand GmbH mit Expertise und Hingabe zum Erfolg auf globalen Märkten führen.",
    "management.leadership": "Führungs-",
    "management.excellence": "Exzellenz",

    // Contact Page
    "contact.title": "Kontakt",
    "contact.subtitle": "aufnehmen",
    "contact.description":
      "Bereit, Ihre Petrochemie- und Düngemittelbedürfnisse zu besprechen? Kontaktieren Sie unser Team für personalisierte Lösungen und wettbewerbsfähige Preise.",
    "contact.info": "Kontaktinformationen",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.description": "Füllen Sie das untenstehende Formular aus und wir melden uns in Kürze bei Ihnen.",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.address": "Adresse",
    "contact.hours": "Geschäftszeiten",
    "contact.form.name": "Vor- und Nachname",
    "contact.form.phone": "Telefon",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Ihre Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.sending": "Wird gesendet...",
    "contact.form.placeholder.name": "Ihr vollständiger Name",
    "contact.form.placeholder.phone": "Ihre Telefonnummer",
    "contact.form.placeholder.email": "ihre.email@beispiel.com",
    "contact.form.placeholder.message": "Erzählen Sie uns von Ihren Anforderungen...",

    // FAQ Section
    "faq.title": "Häufig gestellte",
    "faq.subtitle": "Fragen",
    "faq.description": "Finden Sie Antworten auf die häufigsten Fragen zu unseren Produkten und Dienstleistungen, um Ihre Erfahrung mit uns zu verbessern.",
    "faq.question1": "Welche Arten von Düngemitteln liefern Sie?",
    "faq.answer1": "Wir liefern eine umfassende Palette von Düngemitteln einschließlich Harnstoff 46%, DAP, NPK-Verbindungen, Ammoniumnitrat, Kaliumchlorid und verschiedene Spezialdünger. Alle unsere Produkte erfüllen internationale Qualitätsstandards und sind für verschiedene Pflanzenarten und Bodenbedingungen geeignet.",
    "faq.question2": "Wie stellen Sie die Produktqualität sicher?",
    "faq.answer2": "Wir führen strenge Qualitätskontrollmaßnahmen in unserer gesamten Lieferkette durch. Alle Produkte werden von zertifizierten Herstellern bezogen und vor dem Versand rigoros getestet. Wir stellen Analysezertifikate zur Verfügung und erfüllen internationale Qualitätsstandards einschließlich ISO-Zertifizierungen.",
    "faq.question3": "Wie hoch sind Ihre Mindestbestellmengen?",
    "faq.answer3": "Mindestbestellmengen variieren je nach Produkttyp. Für Düngemittel arbeiten wir typischerweise mit Bestellungen ab 1.000 MT. Für Spezialprodukte können Mindestmengen niedriger sein. Kontaktieren Sie unser Verkaufsteam für spezifische Produktanforderungen und wettbewerbsfähige Preise.",
    "faq.question4": "In welche Länder exportieren Sie?",
    "faq.answer4": "Wir exportieren in über 12 Länder einschließlich Türkei, Brasilien, Indien, VAE, Oman, Polen, Moldawien, Rumänien, Bulgarien, Südafrika, China und verschiedene europäische Länder. Unser Logistiknetzwerk gewährleistet zuverlässige Lieferungen an wichtige Häfen weltweit.",
    "faq.question5": "Welche Zahlungsbedingungen bieten Sie an?",
    "faq.answer5": "Wir bieten flexible Zahlungsbedingungen einschließlich Akkreditiven (LC), Bankgarantien und anderen Handelsfinanzierungsinstrumenten. Unsere Bankpartner umfassen große internationale Banken, die sichere und zuverlässige Finanztransaktionen für alle unsere Kunden gewährleisten.",
    "faq.question6": "Wie lange dauert der Versand normalerweise?",
    "faq.answer6": "Versandzeiten hängen vom Zielort und Produkttyp ab. Typischerweise dauern Lieferungen zu europäischen Häfen 5-10 Tage, während Sendungen in andere Regionen 15-30 Tage dauern können. Wir bieten Echtzeitverfolgung und Updates während des gesamten Versandprozesses.",
    "faq.contact.title": "Haben Sie noch Fragen?",
    "faq.contact.description": "Unser Expertenteam ist bereit, Ihnen bei spezifischen Fragen zu unseren Produkten oder Dienstleistungen zu helfen.",
    "faq.contact.button": "Kontakt aufnehmen",
    "faq.contact.phone": "Jetzt anrufen",

    // Contact Location
    "contact.location.title": "Besuchen Sie unser Büro",
    "contact.location.description": "Finden Sie uns in unserem Hauptsitz in Frankfurt, Deutschland. Wir sind hier, um bei allen Ihren Petrochemie- und Düngemittelbedürfnissen zu helfen.",

    // Product Descriptions
    "product.urea.description": "Der konzentrierteste Stickstoffdünger, wesentlich für Pflanzenernährung und Wachstum.",
    "product.kcl.description": "Essenzielle Kaliumquelle für Pflanzenwachstum und Fruchtentwicklung.",
    "product.dap.description": "Hochanalytischer Phosphordünger für Wurzelentwicklung.",
    "product.ammonium.nitrate.description": "Häufig verwendeter hochkonzentrierter Stickstoffdünger für verschiedene Kulturen.",
    "product.calcium.ammonium.description": "Fortschrittlicher Stickstoffdünger mit Kalzium und Schwefel für verbesserte Pflanzenernährung.",
    "product.npk.24.6.12.description": "Ausgewogener Dünger mit hohem Stickstoffgehalt für kräftiges Pflanzenwachstum.",
    "product.ammonium.sulphate.description": "Stickstoff- und Schwefeldünger ideal für saure Bodenbedingungen.",
    "product.map.12.52.description": "Weitverwendeter granulierter nitratfreier NP-Dünger für Startanwendungen.",
    "product.npk.10.26.26.description": "Weitverwendeter komplexer NPK-Dünger für ausgewogene Pflanzenernährung.",
    "product.npks.22.7.12.2.description": "Vollständiger Dünger mit Stickstoff, Phosphor, Kalium und Schwefel.",
    "product.npks.8.20.30.2.description": "Hochkaliumdünger mit Phosphor, Stickstoff und Schwefel.",

    // Core Values 
    "values.customer.focus": "Kundenfokus",
    "values.customer.focus.description": "Unsere Kunden im Mittelpunkt all unserer Tätigkeiten zu stellen",
    "values.teamwork": "Teamarbeit", 
    "values.teamwork.description": "Effektive Zusammenarbeit zur Erreichung gemeinsamer Ziele",
    "values.trust": "Vertrauen",
    "values.trust.description": "Aufbau dauerhafter Beziehungen durch Zuverlässigkeit und Integrität",
    "values.respect": "Respekt",
    "values.respect.description": "Jeden mit Würde und Professionalität behandeln",
    "values.environment": "Mensch und Umwelt",
    "values.environment.description": "Verpflichtet zu Umweltverantwortung und menschlichen Werten",

    // Legal Page
    "legal.title": "Rechtliche",
    "legal.subtitle": "Dokumente",
    "legal.description": "Unser Engagement für Transparenz und Einhaltung internationaler Standards.",
    "legal.privacy.title": "Datenschutzrichtlinie",
    "legal.privacy.description": "Wie wir Ihre persönlichen Daten sammeln, verwenden und schützen.",
    "legal.privacy.content":
      "<p>Wir sind dem Schutz Ihrer Privatsphäre und persönlichen Daten verpflichtet. Diese Richtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.</p><p><strong>Datensammlung:</strong> Wir sammeln Informationen, die Sie direkt bereitstellen, wie Kontaktdaten und Geschäftsanfragen.</p><p><strong>Datenverwendung:</strong> Ihre Informationen werden verwendet, um auf Anfragen zu antworten, Dienstleistungen zu erbringen und unsere Angebote zu verbessern.</p><p><strong>Datenschutz:</strong> Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen.</p>",
    "legal.terms.title": "Nutzungsbedingungen",
    "legal.terms.description": "Bedingungen und Konditionen für die Nutzung unserer Dienstleistungen.",
    "legal.terms.content":
      "<p>Diese Bedingungen regeln Ihre Nutzung unserer Website und Dienstleistungen. Durch den Zugriff auf unsere Website stimmen Sie diesen Bedingungen zu.</p><p><strong>Dienstnutzung:</strong> Unsere Dienstleistungen werden für Geschäftszwecke im Zusammenhang mit dem Petrochemiehandel bereitgestellt.</p><p><strong>Geistiges Eigentum:</strong> Alle Inhalte auf dieser Website gehören Raymand GmbH.</p><p><strong>Haftungsbeschränkung:</strong> Wir stellen Dienstleistungen 'wie sie sind' zur Verfügung und beschränken die Haftung, soweit gesetzlich zulässig.</p>",
    "legal.data.title": "Datenschutz",
    "legal.data.description":
      "Unser Engagement zum Schutz Ihrer Daten in Übereinstimmung mit DSGVO und lokalen Gesetzen.",
    "legal.data.content":
      "<p>Wir halten uns an die DSGVO und deutsche Datenschutzgesetze. Ihre Rechte umfassen Zugang, Berichtigung, Löschung und Übertragbarkeit Ihrer persönlichen Daten.</p><p><strong>Rechtsgrundlage:</strong> Wir verarbeiten Daten basierend auf berechtigten Geschäftsinteressen und Einwilligung.</p><p><strong>Datenspeicherung:</strong> Wir speichern Daten nur so lange wie für Geschäftszwecke erforderlich.</p><p><strong>Ihre Rechte:</strong> Sie können Zugang, Korrektur oder Löschung Ihrer persönlichen Daten beantragen.</p>",
    "legal.cookies.title": "Cookie-Richtlinie",
    "legal.cookies.description": "Informationen darüber, wie wir Cookies auf unserer Website verwenden.",
    "legal.cookies.content":
      "<p>Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und Website-Traffic zu analysieren.</p><p><strong>Wesentliche Cookies:</strong> Erforderlich für grundlegende Website-Funktionalität.</p><p><strong>Analyse-Cookies:</strong> Helfen uns zu verstehen, wie Besucher unsere Website nutzen.</p><p><strong>Cookie-Kontrolle:</strong> Sie können Cookie-Einstellungen über Ihre Browser-Einstellungen verwalten.</p>",
    "legal.readFull": "Vollständiges Dokument lesen",
    "legal.company.title": "Unternehmensinformationen",
    "legal.company.registration": "Registrierungsdetails",
    "legal.company.address": "Registrierte Adresse",

    // Quote Modal
    "quote.title": "Angebot anfordern",
    "quote.subtitle": "Erhalten Sie personalisierte Preise für Ihre Anforderungen",
    "quote.form.product": "Produkt",
    "quote.form.quantity": "Menge (MT)",
    "quote.form.delivery": "Lieferort",
    "quote.form.timeline": "Zeitrahmen",
    "quote.form.company": "Firmenname",
    "quote.form.submit": "Anfrage senden",
    "quote.form.submitting": "Wird übermittelt...",
    "quote.form.select.product": "Produkt auswählen",
    "quote.form.select.timeline": "Zeitrahmen auswählen",
    "quote.form.timeline.immediate": "Sofort (1-2 Wochen)",
    "quote.form.timeline.month": "Innerhalb 1 Monat",
    "quote.form.timeline.quarter": "Innerhalb 3 Monate",
    "quote.form.timeline.flexible": "Flexibel",
    "quote.form.placeholder.quantity": "z.B. 1000",
    "quote.form.placeholder.delivery": "Stadt, Land",
    "quote.form.placeholder.company": "Ihr Firmenname",
    "quote.form.placeholder.message": "Zusätzliche Anforderungen oder Spezifikationen...",

    // Confirmation Modal
    "confirmation.contact.title": "Nachricht erfolgreich gesendet!",
    "confirmation.contact.message":
      "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
    "confirmation.quote.title": "Angebotsanfrage eingereicht!",
    "confirmation.quote.message":
      "Ihre Angebotsanfrage wurde erhalten. Unser Team wird ein detailliertes Angebot erstellen und Sie bald kontaktieren.",
    "confirmation.newsletter.title": "Anmeldung erfolgreich!",
    "confirmation.newsletter.message":
      "Vielen Dank für Ihr Abonnement unseres Newsletters. Sie erhalten Updates über unsere neuesten Produkte und Brancheneinblicke.",

    // Urea Section
    "urea.title": "Was ist",
    "urea.subtitle": "Harnstoffdünger?",
    "urea.text1":
      "Harnstoff ist sehr nützlich bei fast allen Arten von Kulturen und der Düngung von Tabaksämlingen, um den Stickstoffbedarf der Pflanzen zu decken. Wenn Harnstoff unzureichend gegeben wird, verlangsamt sich die Entwicklung der Pflanze, die Blätter werden gelb und der Ertrag sinkt.",
    "urea.text2":
      "Harnstoff kann in allen Stadien der Pflanzenentwicklung verwendet werden und ist der konzentrierteste verfügbare Stickstoffdünger, was ihn für landwirtschaftliche Anwendungen hocheffizient macht.",
    "urea.stat1": "Stickstoffgehalt",
    "urea.stat2": "Wasserlöslich",
    "urea.stat3": "Kulturarten",
    "urea.stat4": "Globale Verteilung",
    "urea.learn.more": "Mehr über Harnstoff erfahren",
    "urea.modal.title": "Vollständiger Leitfaden zu",
    "urea.modal.subtitle": "Harnstoffdünger",
    "urea.modal.description": "Alles, was Sie über den weltweit beliebtesten Stickstoffdünger wissen müssen",
    "urea.modal.benefits": "Hauptvorteile & Eigenschaften",
    "urea.modal.high.nitrogen": "Hoher Stickstoffgehalt",
    "urea.modal.high.nitrogen.desc": "46% Stickstoffkonzentration für maximale Effizienz",
    "urea.modal.water.soluble": "Wasserlöslich",
    "urea.modal.water.soluble.desc": "Löst sich leicht in Wasser für schnelle Pflanzenaufnahme",
    "urea.modal.universal": "Universelle Anwendung",
    "urea.modal.universal.desc": "Geeignet für alle Kulturarten und Anbaubedingungen",
    "urea.modal.cost.effective": "Kosteneffektiv",
    "urea.modal.cost.effective.desc": "Beste Stickstoffquelle für landwirtschaftliche Anwendungen",
    "urea.modal.application.methods": "Anwendungsverfahren",
    "urea.modal.soil.application": "Bodenanwendung - Direkte Einarbeitung in den Boden",
    "urea.modal.foliar.spray": "Blattspray - Verdünnte Lösung für Blattanwendung",
    "urea.modal.fertigation": "Fertigation - Über Bewässerungssysteme",
    "urea.modal.broadcast": "Breitstreuen - Oberflächenstreuen vor der Pflanzung",
    "urea.modal.technical.specs": "Technische Spezifikationen",
    "urea.modal.nitrogen.content": "Stickstoffgehalt",
    "urea.modal.highest.solid": "Höchster unter allen festen Stickstoffdüngern",
    "urea.modal.chemical.formula": "Chemische Formel",
    "urea.modal.pure.carbamide": "Reine Carbamid-Verbindung",
    "urea.modal.solubility": "Löslichkeit",
    "urea.modal.completely.soluble": "Vollständig wasserlöslich",
    "urea.modal.recommended.crops": "Empfohlen für diese Kulturen",
    "urea.modal.storage.safety": "Lagerungs- und Sicherheitsrichtlinien",
    "urea.modal.store.cool": "An einem kühlen, trockenen Ort fern von direktem Sonnenlicht lagern",
    "urea.modal.keep.away": "Von Wärmequellen und brennbaren Materialien fernhalten",
    "urea.modal.protective.equipment": "Angemessene Schutzausrüstung beim Umgang verwenden",
    "urea.modal.follow.regulations": "Lokale Vorschriften für Transport und Lagerung befolgen",
    "urea.modal.interested": "Interessiert, mehr über unsere Harnstoffprodukte zu erfahren?",

    // Stats and Numbers
    "stats.quality": "Qualität",
    "stats.trust": "Vertrauen",
    "stats.efficiency": "Effizienz",
    "stats.excellence": "Bewährte Erfolgsbilanz der",
    "stats.achievements": "Exzellenz",
    "stats.description":
      "Unsere Erfolge sprechen für sich. Schließen Sie sich uns heute an und lassen Sie uns Ihnen beim Wachstum Ihres Unternehmens helfen.",

    // Business Areas
    "business.lpg": "Flüssiggas (LPG)",
    "business.ammonia": "Wasserfreier Ammoniak",
    "business.urea": "Geprillter und granulierter Harnstoff",
    "business.polymer": "Polymer & PVC",
    "business.nitrate": "Ammoniumnitrat",
    "business.oil": "Öl- und Gasprodukte",
    "business.materials": "Düngemittel-Rohstoffe",

    // Product Features
    "features.nitrogen": "Hoher Stickstoffgehalt",
    "features.soluble": "Wasserlöslich",
    "features.universal": "Universelle Anwendung",
    "features.quick": "Schnelle Stickstofffreisetzung",
    "features.solubility": "Hohe Löslichkeit",
    "features.uptake": "Effiziente Aufnahme",
    "features.phosphorus": "Phosphorreich",
    "features.starter": "Starterdünger",
    "features.root": "Wurzelentwicklung",
    "features.balanced": "Ausgewogene Ernährung",
    "features.nutrients": "Mehrere Nährstoffe",
    "features.versatility": "Kulturvielseitigkeit",
    "features.clean": "Saubere Verbrennung",
    "features.efficiency": "Hohe Effizienz",
    "features.versatile": "Vielseitige Verwendung",
    "features.purity": "Hohe Reinheit",
    "features.industrial": "Industriequalität",
    "features.bulk": "Bulk-Versorgung",
    "features.superior": "Überlegene Qualität",
    "features.grades": "Verschiedene Qualitäten",
    "features.reliable": "Zuverlässige Versorgung",

    // Footer
    "footer.description": "Führendes internationales Handelsunternehmen spezialisiert auf petrochemische Produkte und Düngemittel mit Niederlassungen in Europa, VAE und der Türkei.",

    // Featured Products
    "featured.urea.name": "Harnstoff 46%",
    "featured.urea.description": "Der konzentrierteste Stickstoffdünger, wesentlich für Pflanzenernährung und Wachstum.",
    "featured.urea.features.nitrogen": "Hoher Stickstoffgehalt",
    "featured.urea.features.soluble": "Wasserlöslich",
    "featured.urea.features.universal": "Universelle Anwendung",
    "featured.urea.category": "Düngemittel",
    
    "featured.lpg.name": "Flüssiggas (LPG)",
    "featured.lpg.description": "Sauberer Brennstoff für industrielle und häusliche Anwendungen.",
    "featured.lpg.features.clean": "Saubere Verbrennung",
    "featured.lpg.features.efficiency": "Hohe Effizienz",
    "featured.lpg.features.versatile": "Vielseitige Verwendung",
    "featured.lpg.category": "Petrochemikalie",
    
    "featured.ammonia.name": "Wasserfreier Ammoniak",
    "featured.ammonia.description": "Essenzielle Chemikalie für Düngemittelproduktion und industrielle Prozesse.",
    "featured.ammonia.features.purity": "Hohe Reinheit",
    "featured.ammonia.features.industrial": "Industriequalität",
    "featured.ammonia.features.bulk": "Bulk-Versorgung",
    "featured.ammonia.category": "Chemikalie",

    // Common Words
    "common.getQuote": "Angebot erhalten",
    "common.learnMore": "Mehr erfahren",
    "common.contactUs": "Kontaktieren Sie uns",
    "common.readMore": "Weiterlesen",
    "common.close": "Schließen",
    "common.ok": "OK",
    "common.submit": "Absenden",
    "common.cancel": "Abbrechen",
    "common.loading": "Wird geladen...",
    "common.error": "Fehler",
    "common.success": "Erfolg",
    "common.required": "Erforderlich",
    "common.optional": "Optional",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>
    const result = translation[key]
    if (!result) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
