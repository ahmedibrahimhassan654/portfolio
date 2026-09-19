import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Atom,
  Boxes,
  Braces,
  Briefcase,
  Building2,
  Calendar,
  Cloud,
  CloudCog,
  Database,
  FlaskConical,
  Globe,
  GraduationCap,
  Hexagon,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Palette,
  Phone,
  Plug,
  Radio,
  Route,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Triangle,
  Wind,
} from 'lucide-react'
import { LinkedinIcon } from '@/components/icons'

export const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL ?? ''
export const WHATSAPP_MESSAGE =
  import.meta.env.VITE_WHATSAPP_MESSAGE ?? 'Hello Ahmed, I found your portfolio.'

export const whatsappLink = (() => {
  if (!WHATSAPP_URL) return ''
  if (!WHATSAPP_MESSAGE) return WHATSAPP_URL
  const base = WHATSAPP_URL.split('?')[0]
  return `${base}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
})()

export type NavItem = { id: string; label: string }

export type Social = {
  label: string
  value: string
  href: string
  icon: ComponentType<{ className?: string }>
}

export type Skill = { name: string; icon: LucideIcon }

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  accent: string
  skills: Skill[]
}

export type ExperienceRole = {
  title: string
  type: string
  bullets: string[]
}

export type ExperienceItem = {
  company: string
  location: string
  period: string
  blurb?: string
  icon: LucideIcon
  roles: ExperienceRole[]
}

export type Project = {
  title: string
  subtitle: string
  description: string
  href: string
  image: string
  tags: string[]
  featured?: boolean
}

export type EducationItem = {
  degree: string
  school: string
  period: string
  description: string
  icon: LucideIcon
}

export const profile = {
  name: 'Ahmed Ibrahim',
  firstName: 'Ahmed',
  role: 'Full Stack MERN Developer',
  roles: [
    'Full Stack MERN Developer',
    'React & Next.js Specialist',
    'Node.js Backend Engineer',
    'Linux System Administrator',
  ],
  tagline:
    'I design and ship scalable, end-to-end web applications — from pixel-perfect interfaces to secure, production-ready APIs.',
  summary:
    'Results-driven Full-Stack MERN Developer with over 5 years of experience designing and deploying robust, end-to-end web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, with a deep understanding of both client-side experiences and server-side architecture. Adept at translating business requirements into scalable systems, with a portfolio of real-world projects including transportation booking platforms, car rental systems, and multivendor ecommerce applications.',
  summarySecondary:
    'Strong command of frontend development using React.js, Next.js, Tailwind CSS, and Material UI, focusing on responsive, intuitive, and accessible user interfaces. Equally skilled in backend development, implementing RESTful APIs, authentication (JWT, social login), role-based permissions, and MongoDB sharding for high scalability. Experienced in Linux, AWS EC2 deployment, and server optimization — passionate about building real-world solutions with clean code, performance-first thinking, and a business-oriented mindset.',
  years: '5+',
  location: 'Elobour City, Cairo, Egypt',
  availability: 'Open to new opportunities',
  email: 'ahmedibrahimhassan654@gmail.com',
  phones: [
    { label: 'Mobile', value: '01501158003', href: 'tel:+201501158003' },
    { label: 'Mobile 2', value: '01040100788', href: 'tel:+201040100788' },
  ],
  portfolio: 'https://portfolio-gules-two-d8kt6mg2gz.vercel.app/',
  linkedin: 'https://linkedin.com/in/ahmed-ibrahim5588',
  resume: '/Ahmed-Ibrahim-CV.pdf',
  avatar: '/profile.jpg',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const socials: Social[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  ...profile.phones.map((phone) => ({
    label: phone.label,
    value: phone.value,
    href: phone.href,
    icon: Phone,
  })),
  {
    label: 'WhatsApp',
    value: profile.phones[0].value,
    href: whatsappLink,
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    value: 'ahmed-ibrahim5588',
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'Portfolio',
    value: 'portfolio-gules-two.vercel.app',
    href: profile.portfolio,
    icon: Globe,
  },
  {
    label: 'Location',
    value: profile.location,
    href: 'https://maps.google.com/?q=Elobour+City,Cairo,Egypt',
    icon: MapPin,
  },
]

export const stats = [
  { label: 'Years of experience', value: '5+' },
  { label: 'Production projects', value: '10+' },
  { label: 'Stack focus', value: 'MERN' },
  { label: 'Based in', value: 'Cairo, EG' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces with modern React.',
    icon: LayoutDashboard,
    accent: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'React.js', icon: Atom },
      { name: 'Next.js', icon: Triangle },
      { name: 'TypeScript', icon: Braces },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Material UI', icon: Palette },
      { name: 'Responsive Design', icon: Smartphone },
    ],
  },
  {
    title: 'Backend',
    description: 'Secure REST APIs, auth and real-time services.',
    icon: Server,
    accent: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'Node.js', icon: Hexagon },
      { name: 'Express.js', icon: Route },
      { name: 'MongoDB', icon: Database },
      { name: 'REST APIs', icon: Plug },
      { name: 'JWT & OAuth', icon: ShieldCheck },
      { name: 'Socket.IO', icon: Radio },
      { name: 'Postman', icon: FlaskConical },
      { name: 'Role-Based Access', icon: Lock },
    ],
  },
  {
    title: 'DevOps & Systems',
    description: 'Linux administration, cloud and deployment.',
    icon: Terminal,
    accent: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'Linux', icon: Terminal },
      { name: 'AWS EC2', icon: CloudCog },
      { name: 'Networking', icon: Network },
      { name: 'Virtualization', icon: Boxes },
      { name: 'PM2', icon: Activity },
      { name: 'Cloud Deploy', icon: Cloud },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'NANSC',
    location: 'Cairo, Egypt',
    period: '08/2024 – Present',
    blurb: 'National Air Navigation Service Company',
    icon: Terminal,
    roles: [
      {
        title: 'Linux System Administrator — Radar Systems',
        type: 'Full-time',
        bullets: [
          'Administered and maintained Linux-based systems (CentOS/RedHat) supporting radar surveillance platforms and real-time air navigation infrastructure.',
          'Ensured system security, uptime, and performance for critical radar computing units (SDPS), with a focus on redundancy and disaster recovery.',
          'Collaborated with radar and air traffic teams to integrate Linux servers with surveillance sensors (PSR, SSR, ADS-B, MLAT, Mode-S).',
          'Diagnosed and resolved system-level issues, implemented patches, and documented procedures in line with aviation safety standards.',
        ],
      },
    ],
  },
  {
    company: 'Start-Tech',
    location: 'Remote',
    period: '12/2024 – 06/2025',
    blurb: 'Customer-centric tech startup delivering measurable, effective solutions.',
    icon: Building2,
    roles: [
      {
        title: 'Node.js Backend Developer',
        type: 'Contractor',
        bullets: [
          'Built server-side logic for chat applications using Socket.IO with Express.js and MongoDB.',
          'Deployed the application to an AWS EC2 production Linux server using PM2.',
          'Cooperated closely with the client-side mobile app developer to align APIs and data contracts.',
        ],
      },
      {
        title: 'Front End Developer (Next.js + TypeScript)',
        type: 'Contractor',
        bullets: [
          'Developed a customized Next.js (TypeScript) admin dashboard integrated with a backend REST API for managing internal workflows.',
          'Engineered a responsive, modular UI with Tailwind CSS, ensuring cross-device compatibility and modern design standards.',
          'Collaborated with backend developers to integrate dynamic data, optimize frontend performance, and maintain clean component architecture.',
          'Deployed the application to a production Linux environment using PM2 for stable, continuous uptime.',
        ],
      },
    ],
  },
  {
    company: 'Dcentrify',
    location: 'Remote — Beirut, Lebanon',
    period: '05/2024 – 01/2025',
    blurb: 'Digital agency providing custom web/app development and digital marketing.',
    icon: Briefcase,
    roles: [
      {
        title: 'Node.js Backend Developer',
        type: 'Part-time',
        bullets: [
          'Designed and developed a modular, secure backend architecture with Node.js, Express.js, and MongoDB for a dynamic car rental platform.',
          'Implemented core features including rental scheduling, pricing calculations, driver-client roles, and admin commission handling.',
          'Ensured system scalability, data validation, and API security using best practices for authentication, authorization, and input sanitization.',
          'Delivered fully documented RESTful APIs, enabling smooth integration with frontend and mobile teams.',
        ],
      },
      {
        title: 'Node.js Backend Developer — Multi-Vendor Ecommerce',
        type: 'Part-time',
        bullets: [
          'Developed and maintained high-performance server-side applications using Node.js and Express.',
          'Built an automotive listings platform with advanced filtering and search capabilities.',
          'Designed and implemented secure, validated APIs for an ecommerce application similar to Dubizzle.',
        ],
      },
    ],
  },
  {
    company: 'Freelance',
    location: 'Remote',
    period: 'Part-time',
    blurb: 'Independent full-stack delivery from idea to production.',
    icon: Cloud,
    roles: [
      {
        title: 'MERN Full Stack Web Developer',
        type: 'Part-time',
        bullets: [
          'Designed and developed a full-stack ticketing platform using Next.js, Node.js, Express, and MongoDB, enabling real-time issue tracking across departments.',
          'Implemented role-based access control (RBAC) for admins, managers, and employees to manage ticket creation, assignment, and resolution workflows.',
          'Built dynamic frontend interfaces with React (Next.js) and Tailwind CSS, ensuring responsive UI/UX for internal users.',
          'Created secure RESTful APIs with Express.js including ticket status updates, notifications, and department-based filtering.',
          'Deployed the app to a free, fast cloud environment (Netlify) with environment-based configuration and JWT/cookie authentication.',
        ],
      },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'EduCenter',
    subtitle: 'School Management System',
    description:
      'A school management system with role-based dashboards for administrators, teachers and students, covering attendance, grades and scheduling.',
    href: 'https://educenter-frontend.vercel.app/',
    image: '/projects/school.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Sky Line',
    subtitle: 'Car Rental Platform',
    description:
      'A car rental system featuring rental scheduling, dynamic pricing calculations and an admin dashboard for fleet and commission management.',
    href: 'https://skylinerental.net/',
    image: '/projects/skyline.svg',
    tags: ['React', 'Express', 'MongoDB', 'AWS'],
  },
  {
    title: 'BeirutMart',
    subtitle: 'Multi-Vendor Ecommerce Platform',
    description:
      'A multivendor ecommerce marketplace with vendor onboarding, product catalogs, advanced search, secure checkout and validated APIs.',
    href: 'https://beirutmart.com/',
    image: '/projects/beirutmart.svg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'REST API'],
    featured: true,
  },
  {
    title: 'Ezo App',
    subtitle: 'Transportation Car Rental Platform',
    description:
      'A transportation and car booking platform available on web and mobile, with booking flows, driver-client roles and real-time tracking.',
    href: 'https://ezo-app.netlify.app',
    image: '/projects/ezo.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
  },
  {
    title: 'YouTube Clone',
    subtitle: 'Video Streaming UI',
    description:
      'A responsive video streaming interface clone focused on layout, performance and a clean, reusable component architecture.',
    href: 'https://youtubeclonebyahmedev.netlify.app/',
    image: '/projects/youtube.svg',
    tags: ['React', 'Tailwind CSS', 'Netlify'],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Bachelor’s Degree in Electronics & Communication Engineering',
    school: 'El Shorouk Academy',
    period: '2007 – 2012',
    description:
      'A five-year college program focused on the conceptualization, design, and development of electronic, computer and communication products, systems, services and processes.',
    icon: GraduationCap,
  },
]

export const highlightIcons = {
  calendar: Calendar,
  whatsapp: MessageCircle,
}
