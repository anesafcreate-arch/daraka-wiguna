export const company = {
  name: "CV. NISFI SABAR",
  tagline: "Professional Construction & Interior Website",
  shortTagline: "Kontraktor Profesional",
  whatsappDisplay: "0813-8185-3922",
  whatsappLink: "https://wa.me/6281381853922",
  address:
    "Kampung Pos Muara, Bojong Gede Village No. 36, Bojong Gede Subdistrict, Bojong Gede Regency, Bogor Regency, West Java Province.",
  hours: [
    "Monday - Saturday: 8:00 AM - 5:00 PM WIB",
    "Sunday: By appointment",
  ],
};

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/keunggulan", label: "Keunggulan" },
  { href: "/kontak", label: "Kontak" },
];

export const services = [
  {
    slug: "konstruksi-bangunan",
    title: "Konstruksi Bangunan",
    description:
      "Pembangunan struktur padat dengan perencanaan presisi untuk mewujudkan visi bangunan impian Anda, dari fondasi yang kokoh hingga atap.",
    icon: "Building2",
    image: "/picture/konstruksi-bangunan.PNG",
  },
  {
    slug: "renovasi-rumah",
    title: "Renovasi Rumah",
    description:
      "Transformasi ruang dengan desain modern dan fungsional, memberikan napas baru serta meningkatkan nilai estetika hunian Anda.",
    icon: "Hammer",
    image: "/picture/renovasi-rumah.PNG",
  },
  {
    slug: "rumah-kaca-aluminium",
    title: "Rumah Kaca Aluminium",
    description:
      "Desain dan instalasi struktur rumah kaca aluminium yang elegan, kuat, dan tahan cuaca untuk area santai atau taman indoor yang memukau.",
    icon: "Leaf",
    image: "/picture/rumah-kaca.PNG",
  },
  {
    slug: "partisi-wallpaper",
    title: "Partisi & Wallpaper",
    description:
      "Pembentukan ruang yang lebih terstruktur dengan partisi modern dan sentuhan akhir wallpaper premium yang diaplikasikan dengan presisi tinggi.",
    icon: "PanelsTopLeft",
    image: "/picture/wallpaper-partisi.PNG",
  },
  {
    slug: "pengecatan",
    title: "Pengecatan",
    description:
      "Pengecatan interior dan eksterior menggunakan material berkualitas tinggi untuk hasil akhir yang mulus, rapi, dengan warna yang tahan lama.",
    icon: "Paintbrush2",
    image: "/picture/pengecatan.PNG",
  },
  {
    slug: "kitchen-set",
    title: "Kitchen Set",
    description:
      "Perancangan dan pembuatan kitchen set ergonomis yang memaksimalkan fungsionalitas area masak tanpa mengorbankan estetika modern.",
    icon: "ChefHat",
    image: "/picture/kitchenset.jpg",
  },
  {
    slug: "instalasi-listrik",
    title: "Instalasi Listrik",
    description:
      "Pengerjaan sistem kelistrikan yang terstruktur, aman, dan sesuai standar untuk menjamin kenyamanan serta keamanan properti Anda.",
    icon: "Cable",
    image: "/picture/instalasi-listrik.PNG",
  },
  {
    slug: "service-ac",
    title: "Service AC",
    description:
      "Pemasangan, perawatan, dan perbaikan sistem pendingin ruangan secara profesional untuk memastikan sirkulasi udara yang bersih dan efisien.",
    icon: "AirVent",
    image: "/picture/service-ac.PNG",
  },
  {
    slug: "taman-landscape",
    title: "Taman & Landscape",
    description:
      "Penataan area hijau dan lanskap yang harmonis, menciptakan oasis luar ruangan yang menenangkan dan tertata rapi.",
    icon: "Trees",
    image: "/picture/taman-landscape.PNG",
  },
];

export const advantages = [
  {
    title: "Professional Team",
    description:
      "Kami bekerja dengan tim lapangan yang berpengalaman, komunikatif, dan terbiasa menjaga kualitas detail.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Timeline kerja disusun dengan jelas agar progress proyek lebih terukur dan penyelesaian lebih disiplin.",
  },
  {
    title: "Quality Materials",
    description:
      "Material dan finishing dipilih untuk menghadirkan hasil yang kuat secara fungsi dan berkelas secara visual.",
  },
  {
    title: "Design Awareness",
    description:
      "Kami tidak hanya membangun, tetapi juga memikirkan komposisi ruang, fasad, dan kesan akhir properti.",
  },
  {
    title: "Clear Communication",
    description:
      "Diskusi kebutuhan, estimasi, dan penyesuaian teknis dilakukan secara transparan agar keputusan lebih nyaman.",
  },
  {
    title: "Flexible Consultation",
    description:
      "Konsultasi proyek, survey, dan pembahasan kebutuhan dapat dilakukan dengan alur yang cepat lewat WhatsApp.",
  },
];

export const portfolioFilters = [
  "Semua",
  "Konstruksi",
  "Renovasi",
  "Interior",
  "Eksterior",
  "Landscape",
];

export const portfolioItems = [
  { title: "Modern Residential Build", category: "Konstruksi", image: services[0].image, height: "tall" },
  { title: "Contemporary Home Refresh", category: "Renovasi", image: services[1].image, height: "medium" },
  { title: "Aluminium Glasshouse Detail", category: "Konstruksi", image: services[2].image, height: "medium" },
  { title: "Wallpaper Feature Room", category: "Interior", image: services[3].image, height: "short" },
  { title: "Luxury Paint Finish", category: "Interior", image: services[4].image, height: "medium" },
  { title: "Kitchen Joinery Detail", category: "Interior", image: services[5].image, height: "tall" },
  { title: "Electrical Systems Upgrade", category: "Renovasi", image: services[6].image, height: "short" },
  { title: "AC Service & Installation", category: "Renovasi", image: services[7].image, height: "medium" },
  { title: "Landscape Composition", category: "Landscape", image: services[8].image, height: "tall" },
];

export const homeHighlights = [
  "Modern construction and interior execution",
  "Premium detailing with practical project planning",
  "Fast consultation through integrated WhatsApp contact",
];
