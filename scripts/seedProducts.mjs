import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: String,
  price: { type: Number, required: true },
  compareAtPrice: Number,
  category: { type: String, required: true },
  brand: String,
  sku: String,
  image: { type: mongoose.Schema.Types.ObjectId, ref: 'media', default: null },
  gallery: [{ image: { type: mongoose.Schema.Types.ObjectId, ref: 'media', default: null } }],
  shortDescription: String,
  description: String,
  features: [{ feature: String }],
  specs: [{ label: String, value: String }],
  inStock: { type: Boolean, default: true },
  status: { type: String, default: 'published' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema, 'products')

const dummyProducts = [
  {
    title: 'Dell OptiPlex 7010 Desktop',
    slug: 'dell-optiplex-7010-desktop',
    price: 849.0,
    compareAtPrice: 999.0,
    category: 'hardware',
    brand: 'Dell',
    sku: 'HW-DEL-7010',
    shortDescription: 'Reliable business desktop built for everyday productivity.',
    description:
      'The Dell OptiPlex 7010 delivers enterprise-grade performance in a compact form factor. Powered by the latest Intel Core processors with fast SSD storage, it is designed for seamless multitasking in demanding office environments.',
    features: [
      'Intel Core i5 13th Gen processor',
      '16GB DDR5 RAM',
      '512GB NVMe SSD',
      'Windows 11 Pro',
      '3-year on-site warranty',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i5-13500' },
      { label: 'Memory', value: '16GB DDR5' },
      { label: 'Storage', value: '512GB NVMe SSD' },
      { label: 'Operating System', value: 'Windows 11 Pro' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'HP LaserJet Pro M428dw Printer',
    slug: 'hp-laserjet-pro-m428dw',
    price: 429.0,
    category: 'hardware',
    brand: 'HP',
    sku: 'HW-HP-M428',
    shortDescription: 'Fast monochrome multifunction printer for workgroups.',
    description:
      'Print, scan, copy and fax with confidence. The HP LaserJet Pro M428dw handles high-volume printing with automatic two-sided printing and enterprise security features built in.',
    features: [
      'Print speed up to 40 ppm',
      'Automatic two-sided printing',
      'Ethernet and Wi-Fi connectivity',
      'HP Wolf Security',
    ],
    specs: [
      { label: 'Print Speed', value: '40 ppm (mono)' },
      { label: 'Connectivity', value: 'USB, Ethernet, Wi-Fi' },
      { label: 'Duty Cycle', value: '80,000 pages/month' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Lenovo ThinkPad E14 Laptop',
    slug: 'lenovo-thinkpad-e14',
    price: 1099.0,
    compareAtPrice: 1249.0,
    category: 'hardware',
    brand: 'Lenovo',
    sku: 'HW-LEN-E14',
    shortDescription: 'Business laptop with legendary ThinkPad durability.',
    description:
      'The ThinkPad E14 combines military-grade durability with modern performance. Ideal for professionals who work from anywhere, with all-day battery life and a crisp Full HD display.',
    features: [
      'Intel Core i7 processor',
      '16GB RAM / 512GB SSD',
      '14" Full HD anti-glare display',
      'Backlit keyboard',
      'Up to 12 hours battery life',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i7-1355U' },
      { label: 'Display', value: '14" FHD (1920x1080)' },
      { label: 'Weight', value: '1.44 kg' },
      { label: 'Warranty', value: '1-year carry-in' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Microsoft 365 Business Standard',
    slug: 'microsoft-365-business-standard',
    price: 12.5,
    category: 'software',
    brand: 'Microsoft',
    sku: 'SW-MS-365BS',
    shortDescription: 'Productivity apps and cloud services per user/month.',
    description:
      'Microsoft 365 Business Standard gives your team desktop versions of Office apps, business email, cloud file storage and collaboration tools — accessible on up to 5 devices per user.',
    features: [
      'Word, Excel, PowerPoint, Outlook',
      '1TB OneDrive storage per user',
      'Microsoft Teams for business',
      'Web and mobile versions of Office apps',
    ],
    specs: [
      { label: 'Licensing', value: 'Per user, per month' },
      { label: 'Users', value: '1–300 users' },
      { label: 'Platforms', value: 'Windows, macOS, iOS, Android' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Microsoft Windows 11 Pro Licence',
    slug: 'windows-11-pro-licence',
    price: 99.0,
    category: 'software',
    brand: 'Microsoft',
    sku: 'SW-MS-W11PRO',
    shortDescription: 'Full retail licence for Windows 11 Professional.',
    description:
      'Upgrade your workstation with Windows 11 Pro — with BitLocker encryption, Remote Desktop, Hyper-V virtualisation and comprehensive device management, ideal for business machines.',
    features: [
      'Digital licence delivered by email',
      'BitLocker device encryption',
      'Remote Desktop host support',
      'Hyper-V and Windows Sandbox',
    ],
    specs: [
      { label: 'Edition', value: 'Windows 11 Pro' },
      { label: 'Licence Type', value: 'Retail, 1 device' },
      { label: 'Delivery', value: 'Digital key via email' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Cisco Catalyst C2960-X Switch',
    slug: 'cisco-catalyst-c2960-x',
    price: 1450.0,
    category: 'networking',
    brand: 'Cisco',
    sku: 'NW-CSC-2960X',
    shortDescription: '48-port managed Gigabit switch for campus networks.',
    description:
      'The Cisco Catalyst 2960-X delivers reliable Layer 2 and basic Layer 3 switching with advanced security and energy-efficient operations — the backbone of small and mid-size campus networks.',
    features: [
      '48x Gigabit Ethernet ports',
      '4x 10G SFP+ uplinks',
      'Energy Efficient Ethernet',
      'Cisco IOS with advanced QoS',
    ],
    specs: [
      { label: 'Ports', value: '48x 1GbE + 4x 10G SFP+' },
      { label: 'Switching Capacity', value: '176 Gbps' },
      { label: 'Form Factor', value: '1U rack-mount' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'TP-Link Omada EAP670 Access Point',
    slug: 'tp-link-omada-eap670',
    price: 179.0,
    compareAtPrice: 209.0,
    category: 'networking',
    brand: 'TP-Link',
    sku: 'NW-TP-EAP670',
    shortDescription: 'Wi-Fi 6 business access point with seamless roaming.',
    description:
      'The EAP670 delivers AX5400 dual-band Wi-Fi 6 with OFDMA and MU-MIMO, managed centrally through the Omada controller for effortless scaling across offices and venues.',
    features: [
      'Wi-Fi 6 AX5400 dual band',
      'PoE+ powered',
      'Omada centralised cloud management',
      'Seamless roaming',
    ],
    specs: [
      { label: 'Wireless Standard', value: 'Wi-Fi 6 (802.11ax)' },
      { label: 'Speed', value: '574 Mbps + 4804 Mbps' },
      { label: 'PoE', value: '802.3at PoE+' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'MikroTik hEX S Router',
    slug: 'mikrotik-hex-s-router',
    price: 69.0,
    category: 'networking',
    brand: 'MikroTik',
    sku: 'NW-MTK-HEXS',
    shortDescription: 'Compact Gigabit router with SFP for small offices.',
    description:
      'A budget-friendly wired router running RouterOS, with five Gigabit Ethernet ports and an SFP cage — perfect for branch offices and small business gateways.',
    features: [
      '5x Gigabit Ethernet ports',
      'SFP fibre uplink',
      'RouterOS v7 with firewall',
      'IPsec hardware encryption',
    ],
    specs: [
      { label: 'Ports', value: '5x GbE, 1x SFP' },
      { label: 'CPU', value: '880 MHz, 256MB RAM' },
      { label: 'Form Factor', value: 'Desktop' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'HPE ProLiant DL380 Gen11 Server',
    slug: 'hpe-proliant-dl380-gen11',
    price: 6890.0,
    category: 'cloud-servers',
    brand: 'HPE',
    sku: 'CS-HPE-DL380',
    shortDescription: '2U rack server for data-centre workloads and virtualisation.',
    description:
      'The HPE ProLiant DL380 Gen11 is a scalable 2U rack server supporting the latest Intel Xeon processors, DDR5 memory and PCIe Gen5 — built for virtualisation, databases and hybrid cloud.',
    features: [
      'Intel Xeon Silver 4410Y',
      '32GB DDR5 ECC memory',
      '8x SFF hot-plug drive bays',
      'HPE iLO advanced remote management',
    ],
    specs: [
      { label: 'Form Factor', value: '2U rack-mount' },
      { label: 'Processor', value: 'Intel Xeon Silver 4410Y' },
      { label: 'Memory', value: '32GB DDR5 ECC' },
      { label: 'Warranty', value: '3-year next-business-day' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Compulink Cloud Backup — Annual Plan',
    slug: 'compulink-cloud-backup-annual',
    price: 299.0,
    category: 'cloud-servers',
    brand: 'Compulink',
    sku: 'CS-CLK-BKUP1Y',
    shortDescription: 'Managed offsite backup with daily snapshots for 5 devices.',
    description:
      'Protect your business data with encrypted offsite backups stored in regional data centres. Includes daily snapshots, 30-day retention and assisted restore by our engineers.',
    features: [
      'Up to 5 devices / 2TB',
      'AES-256 encryption at rest',
      '30-day point-in-time retention',
      'Assisted restore included',
    ],
    specs: [
      { label: 'Duration', value: '12 months' },
      { label: 'Storage', value: '2TB total' },
      { label: 'RPO', value: '24 hours' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Fortinet FortiGate 60F Firewall',
    slug: 'fortinet-fortigate-60f',
    price: 745.0,
    category: 'security',
    brand: 'Fortinet',
    sku: 'SEC-FTN-FG60F',
    shortDescription: 'Next-generation firewall for small businesses and branches.',
    description:
      'The FortiGate 60F delivers compact, high-performance threat protection with SSL inspection, application control and SD-WAN — securing your perimeter without slowing you down.',
    features: [
      'Up to 10 Gbps threat protection',
      'SD-WAN built in',
      'SSL inspection',
      '1-year Unified Threat Protection bundle',
    ],
    specs: [
      { label: 'Throughput', value: '10 Gbps firewall' },
      { label: 'Interfaces', value: '10x GE RJ45, 2x GE SFP' },
      { label: 'Bundles', value: '1Y UTP included' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Hikvision 4-Camera CCTV Kit',
    slug: 'hikvision-4-camera-cctv-kit',
    price: 560.0,
    compareAtPrice: 640.0,
    category: 'security',
    brand: 'Hikvision',
    sku: 'SEC-HIK-4CAM',
    shortDescription: '4MP IP surveillance kit with NVR and mobile access.',
    description:
      'Complete turnkey surveillance kit including four 4MP IP cameras, an 8-channel NVR, 2TB hard drive and remote viewing via the Hik-Connect app. Professional installation available.',
    features: [
      '4x 4MP IP cameras',
      '8-channel NVR with 2TB HDD',
      'Night vision up to 30m',
      'Remote viewing via Hik-Connect',
    ],
    specs: [
      { label: 'Resolution', value: '4MP (2560x1440)' },
      { label: 'Storage', value: '2TB surveillance HDD' },
      { label: 'Warranty', value: '1-year' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Logitech MK540 Wireless Combo',
    slug: 'logitech-mk540-wireless-combo',
    price: 59.0,
    category: 'accessories',
    brand: 'Logitech',
    sku: 'ACC-LG-MK540',
    shortDescription: 'Full-size wireless keyboard and mouse combo.',
    description:
      'The MK540 combo brings familiar, quiet typing and a precision mouse together on a single Unifying receiver — with up to 36 months of battery life and spill-resistant design.',
    features: [
      'Full-size keyboard with number pad',
      'Precision mouse',
      '2.4 GHz Unifying receiver',
      'Up to 36-month battery life',
    ],
    specs: [
      { label: 'Connectivity', value: '2.4 GHz wireless' },
      { label: 'Battery', value: '3x AA (keyboard), 1x AA (mouse)' },
      { label: 'Compatibility', value: 'Windows, Chrome OS' },
    ],
    inStock: true,
    status: 'published',
  },
  {
    title: 'Dell P2422H 24" Business Monitor',
    slug: 'dell-p2422h-monitor',
    price: 219.0,
    category: 'accessories',
    brand: 'Dell',
    sku: 'ACC-DEL-P2422H',
    shortDescription: '24-inch Full HD IPS monitor with comfort-view features.',
    description:
      'A reliable 24-inch Full HD IPS panel with wide viewing angles, height-adjustable stand and ComfortView low blue-light technology — the everyday office monitor done right.',
    features: [
      '23.8" Full HD IPS display',
      'Height, tilt, swivel adjustability',
      'ComfortView low blue light',
      'USB hub with 3x USB ports',
    ],
    specs: [
      { label: 'Panel', value: '23.8" IPS, 1920x1080' },
      { label: 'Refresh Rate', value: '75 Hz' },
      { label: 'Ports', value: 'HDMI, DisplayPort, VGA' },
    ],
    inStock: false,
    status: 'published',
  },
]

async function seedProducts() {
  try {
    const mongoUri =
      process.env.DATABASE_URI || process.env.MONGODB_URL || 'mongodb://127.0.0.1/payload-compulink'
    await mongoose.connect(mongoUri)
    console.log('Connected to MongoDB')

    await ProductModel.deleteMany({})
    console.log('Cleared existing products')

    const docs = dummyProducts.map((product) => ({
      ...product,
      features: (product.features || []).map((feature) => ({ feature })),
      specs: (product.specs || []).map((spec) => ({ label: spec.label, value: spec.value })),
    }))

    const result = await ProductModel.insertMany(docs)
    console.log(`Successfully seeded ${result.length} products`)

    result.forEach((product) => {
      console.log(`- ${product.title} ($${product.price}) [${product.category}]`)
    })

    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.error('Error seeding products:', error)
    process.exit(1)
  }
}

seedProducts()
