export const servicesData = [
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    slug: "criminal-defense",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_1.svg",
    shortDescription:
      "Aggressive defense for all criminal charges in Alabama. Thorough case investigation and strategic defense planning. Expert representation at trial.",
    fullDescription:
      "Criminal defense law is a critical area of legal practice that protects individuals accused of crimes. Our experienced criminal defense attorneys understand the complexities of Alabama's criminal justice system and work tirelessly to protect your rights and freedom. We handle all types of criminal cases with the dedication and expertise you deserve.",
    secondDescription:
      "Understanding your rights and the criminal justice process is essential when facing criminal charges. Our attorneys provide comprehensive defense strategies tailored to your specific case, ensuring the best possible outcome for your situation.",
    features: [
      "DUI Defense",
      "Drug Crime Defense",
      "Assault & Battery",
      "Theft & Burglary",
      "White Collar Crimes",
      "Domestic Violence",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "criminal@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
  {
    id: "business-law",
    title: "Business Law",
    slug: "business-law",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_2.svg",
    shortDescription:
      "Complete business legal services including contracts, mergers, acquisitions, and compliance. Protecting your business interests across Alabama.",
    fullDescription:
      "Business law encompasses a wide range of legal issues that affect corporations, partnerships, and sole proprietorships. Our business attorneys provide comprehensive legal support to help your business thrive while ensuring compliance with Alabama state and federal regulations. We understand the unique challenges facing Alabama businesses.",
    secondDescription:
      "From startup formation to complex mergers and acquisitions, our business law team provides strategic legal counsel that protects your interests and supports your business goals throughout Alabama.",
    features: [
      "Business Formation",
      "Contract Negotiation",
      "Mergers & Acquisitions",
      "Corporate Compliance",
      "Employment Law",
      "Intellectual Property",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "business@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_3.svg",
    shortDescription:
      "Compassionate representation in divorce, custody, adoption, and domestic relations. Protecting families across Alabama with personalized care.",
    fullDescription:
      "Family law matters are among the most personal and emotionally challenging legal issues you may face. Our compassionate family law attorneys understand the sensitivity required when dealing with divorce, child custody, adoption, and other family matters. We provide personalized legal representation throughout Alabama.",
    secondDescription:
      "Our family law practice focuses on achieving the best outcomes for you and your family while minimizing conflict and emotional stress during difficult times.",
    features: [
      "Divorce & Separation",
      "Child Custody",
      "Child Support",
      "Adoption Services",
      "Prenuptial Agreements",
      "Domestic Relations",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "family@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
  {
    id: "real-estate-law",
    title: "Real Estate Law",
    slug: "real-estate-law",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_4.svg",
    shortDescription:
      "Full-service real estate legal support including closings, title disputes, and property transactions throughout Alabama.",
    fullDescription:
      "Real estate transactions involve complex legal processes that require experienced legal guidance. Our real estate attorneys handle all aspects of residential and commercial real estate transactions throughout Alabama, ensuring your property interests are protected and transactions proceed smoothly.",
    secondDescription:
      "Whether you're buying your first home, selling commercial property, or resolving title disputes, our real estate team provides comprehensive legal support for all your property needs.",
    features: [
      "Property Closings",
      "Title Examinations",
      "Contract Review",
      "Zoning Issues",
      "Property Disputes",
      "Commercial Transactions",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "realestate@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
  {
    id: "personal-injury",
    title: "Personal Injury",
    slug: "personal-injury",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_5.svg",
    shortDescription:
      "Maximum compensation for accident victims. Car accidents, medical malpractice, and workplace injuries. No fee unless we win.",
    fullDescription:
      "Personal injury law protects individuals who have been injured due to someone else's negligence or wrongdoing. Our personal injury attorneys fight aggressively to secure maximum compensation for accident victims throughout Alabama. We understand the physical, emotional, and financial impact of serious injuries.",
    secondDescription:
      "Our personal injury team works on a contingency fee basis, meaning you pay nothing unless we win your case. We handle all aspects of your claim while you focus on recovery.",
    features: [
      "Car Accidents",
      "Medical Malpractice",
      "Workplace Injuries",
      "Slip & Fall",
      "Product Liability",
      "Wrongful Death",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "injury@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    slug: "estate-planning",
    image: "/assets/img/service/service_details.jpg",
    icon: "/assets/img/icon/service_card_1_6.svg",
    shortDescription:
      "Comprehensive estate planning services including wills, trusts, and probate. Secure your family's future with Verdicta's expertise.",
    fullDescription:
      "Estate planning is essential for protecting your assets and ensuring your wishes are carried out after your death. Our estate planning attorneys help Alabama families create comprehensive plans that minimize taxes, avoid probate, and provide security for future generations.",
    secondDescription:
      "Proper estate planning gives you peace of mind knowing your loved ones will be provided for and your legacy will be preserved according to your wishes.",
    features: [
      "Wills & Testaments",
      "Trust Creation",
      "Probate Administration",
      "Power of Attorney",
      "Healthcare Directives",
      "Tax Planning",
    ],
    detailImage1: "/assets/img/service/service_inner_1.jpg",
    phone: "(205) 555-1234",
    email: "estate@verdictalegal.com",
    address: "2121 8th Avenue North, Birmingham, AL 35203",
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return servicesData.find((service) => service.slug === slug);
};

// Helper function to get all service slugs for static generation
export const getAllServiceSlugs = () => {
  return servicesData.map((service) => service.slug);
};
