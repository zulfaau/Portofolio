import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  X,
  Code2,
  Database,
  Layout,
  Award,
  Calendar,
  Building2,
  Shield,
  FileText,
  Download,
  Sparkles,
  Server,
  GitBranch,
  Laptop,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  images: string[]; // Supports emoji string placeholders or file paths
  techStack: string[];
  status: 'Completed' | 'Ongoing';
  liveUrl: string;
  githubUrl: string;
  features: string[];
  challenges: string;
}

interface Certification {
  id: number;
  title: string;
  organization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId: string;
  verificationUrl: string;
  category: string;
  description: string;
  image: string;
  certificateUrl: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'techstack'>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [techFilter, setTechFilter] = useState<'all' | 'frontend' | 'backend' | 'database'>('all');
  const [showAllTech, setShowAllTech] = useState(false);

  const handleOpenProject = (project: Project) => {
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  // ==========================================
  // DATA: PROJECTS
  // ==========================================
  const projects: Project[] = [
    {
      id: 7,
      title: 'ScholarBot (Scholar Finder)',
      category: 'Frontend',
      description: 'Platform AI Chatbot cerdas untuk pencarian beasiswa terintegrasi RAG',
      detailedDescription:
        'Platform pencarian beasiswa terintegrasi dengan AI Chatbot (ScholarBot). Menggunakan arsitektur RAG (Retrieval-Augmented Generation) dan Hybrid Retrieval untuk menemukan informasi beasiswa yang paling relevan. Terintegrasi dengan LLM Gemini 2.5 Flash Lite melalui platform OpenRouter.',
      images: ['/scholarbot-1.png', '/scholarbot-2.png', '/scholarbot-3.png'],
      techStack: ['Laravel', 'JavaScript & Alpine.js', 'PostgreSQL (via supabase)', 'pgvector', 'Python (v3)', 'OpenRouter API', 'Gemini 2.5 Flash Lite', 'Vite & Node.js (NPM)'],
      status: 'Completed',
      liveUrl: 'https://scholar-finder.zenith-dev.my.id/',
      githubUrl: 'https://github.com/zulfaau/SkripsiBea',
      features: [
        'AI Chatbot cerdas yang dapat menjawab pertanyaan seputar beasiswa secara real-time',
        'Implementasi RAG (Retrieval-Augmented Generation) untuk akurasi rekomendasi',
        'Sistem pencarian Hybrid Retrieval untuk memberikan hasil yang relevan',
        'Integrasi langsung dengan LLM Gemini 2.5 Flash Lite via OpenRouter',
        'Antarmuka pencarian dan filter beasiswa yang responsif',
      ],
      challenges:
        'Mengimplementasikan arsitektur RAG yang efisien dengan Hybrid Retrieval, serta menyambungkan API OpenRouter untuk Gemini 2.5 Flash Lite agar respon chatbot tetap cepat dan akurat untuk pengguna.',
    },
    {
      id: 1,
      title: 'TrashTracker',
      category: 'Frontend',
      description: 'An interactive community-driven waste reporting and monitoring system',
      detailedDescription:
        'A web application built to facilitate community-driven environmental monitoring. Users can pin trash locations on an interactive map, upload photo evidence, and track cleaning progress, while administrators can coordinate cleaning efforts and download reports.',
      images: ['/trashtrack-3.png', '/trashtrack-2.png', '/trashtrack-1.png'],
      techStack: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'Leaflet', 'Cloudinary'],
      status: 'Completed',
      liveUrl: 'https://github.com/zulfaau/trashtracker',
      githubUrl: 'https://github.com/zulfaau/trashtracker',
      features: [
        'Interactive Leaflet map integration for pinning waste locations',
        'Real-time report submission with details, category, and coordinate tagging',
        'Secure image upload and cloud storage integration using Cloudinary',
        'Comprehensive administration panel for processing, tracking, and validating cleanup tasks',
        'PDF export functionality for cleaning reports and offline coordination',
        'Seamless client-server integration utilizing Inertia.js and React components',
      ],
      challenges:
        'Integrating real-time map controls with Leaflet coordinates, organizing a secure two-tier role routing (User vs Admin), and managing image upload pipelines to Cloudinary storage within Inertia page transitions.',
    },
    {
      id: 2,
      title: 'SapaCoffe',
      category: 'Frontend',
      description: 'A web-based coffee supply inventory management system',
      detailedDescription:
        'A comprehensive inventory tracking and management system designed for coffee shops and suppliers. The system enables users to monitor stock levels, record incoming and outgoing stock movements, manage product databases, and export detailed Excel/PDF reports.',
      images: ['/sapacoffe-1.png', '/sapacoffe-2.png', '/sapacoffe-3.png', '/sapacoffe-4.png'],
      techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Chart.js', 'DomPDF', 'PhpSpreadsheet'],
      status: 'Completed',
      liveUrl: 'https://github.com/zulfaau/CoffeSupply-LSP',
      githubUrl: 'https://github.com/zulfaau/CoffeSupply-LSP',
      features: [
        'Real-time dashboard summarizing total items, incoming/outgoing stocks, and low stock warnings',
        'Stock movement logs (Riwayat Mutasi Persediaan) to track additions and reductions with notes',
        'Master data management for categorized coffee supplies and packaging products',
        'Visual charts illustrating 7-day stock movements using Chart.js',
        'User account administration with role controls (Admin & Super Admin)',
        'Exportable inventory reports to PDF and Excel formats',
      ],
      challenges:
        'Managing accurate state synchronization between the database and inventory transactions, implementing a reliable PDF rendering system using DomPDF for reports, and formatting Excel sheet structures dynamically using PhpSpreadsheet.',
    },
    {
      id: 3,
      title: 'JeWePe Wedding',
      category: 'Frontend',
      description: 'A comprehensive wedding organizer booking and catalog platform',
      detailedDescription:
        'A web application developed for JeWePe Wedding Organizer to present service catalogs, facilitate online wedding package bookings with detailed customer forms, and manage all orders through an administrative backoffice.',
      images: ['/wedding-1.png', '/wedding-2.png', '/wedding-3.png', '/wedding-4.png'],
      techStack: ['PHP', 'Laravel', 'Filament', 'MySQL', 'Tailwind CSS', 'Livewire', 'Alpine.js'],
      status: 'Completed',
      liveUrl: 'https://github.com/zulfaau/wedding-organizer',
      githubUrl: 'https://github.com/zulfaau/wedding-organizer',
      features: [
        'Responsive customer landing page and service profile catalog',
        'Interactive wedding package browser with price details and locations',
        'Online booking form for selecting packages, scheduling event dates, and inputting notes',
        'Robust admin panel powered by Filament PHP for processing customer requests',
        'Comprehensive status tracking (Request, Approved, Completed) for bookings',
        'Dynamic data synchronization with MySQL using Eloquent ORM',
      ],
      challenges:
        'Integrating Filament PHP framework to build a quick and secure administrative dashboard while keeping the frontend client-side light using pure blade and Tailwind styles, and managing transaction date conflicts for wedding bookings.',
    },
    {
      id: 4,
      title: 'MyNotes',
      category: 'Fullstack',
      description: 'A modern digital notebook web application',
      detailedDescription:
        'A web application developed for managing personal and academic notes. The system features a modern user interface where notes can be categorized, customized with different colors, and managed (CRUD) in real-time, connecting a React frontend with a Node.js/Express backend and a MySQL database.',
      images: ['/mernnotes-1-baru.png', '/mernnotes-2-baru.png', '/mernnotes-3-baru.png'],
      techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'Vite', 'React Hook Form'],
      status: 'Completed',
      liveUrl: 'https://mynotes-frontend-baru.vercel.app',
      githubUrl: 'https://github.com/zulfaau/mern-notes',
      features: [
        'Real-time note CRUD operations with soft delete (Trash management) functionality',
        'Advanced sorting and filtering (Newest, Oldest, Upcoming notes)',
        'Sticky note color customization and tagging system for categorization',
        'Note search functionality for quickly filtering logs by keywords',
        'Interactive forms for adding and editing notes built with React Hook Form',
        'Clean rest API communication between React and Express backend using Axios',
        'Dynamic data storage and relational management with MySQL',
      ],
      challenges:
        'Synchronizing state updates dynamically in React after notes are deleted, structuring validation using React Hook Form, and resolving CORS issues during cross-origin API calls between the Vite client and Express server.',
    },
    {
      id: 5,
      title: 'Kopi4',
      category: 'Frontend',
      description: 'An online coffee shop catalog and ordering platform',
      detailedDescription:
        'A web application developed for Toko Kopi "Kopi4" to display a premium catalog of coffee and drink items, provide product details and reviews, facilitate a shopping cart with real-time checkout summaries, and feature backend security measures.',
      images: ['/kopipour-1.jpg', '/kopipour-2.jpg', '/kopipour-3.jpg', '/kopipour-4.png'],
      techStack: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      status: 'Completed',
      liveUrl: 'https://github.com/zulfaau/Kopi4',
      githubUrl: 'https://github.com/zulfaau/Kopi4',
      features: [
        'Responsive store homepage featuring product banners and catalogs',
        'Product details view with review counts, pricing, and quantity adjustments',
        'Interactive shopping cart system calculating original prices, tax, and order totals',
        'Secure login page with a beautiful split layout and background cover',
        'Django administration backoffice configured with database migrations',
        'Robust PostgreSQL integration for handling inventory and users data',
      ],
      challenges:
        'Integrating Tailwind CSS with Django template architectures, configuring safe database connections for PostgreSQL, and handling persistent shopping cart states across user sessions.',
    },
    {
      id: 6,
      title: 'LAMAS KDW',
      category: 'Frontend',
      description: 'Layanan Aspirasi dan Pengaduan Masyarakat Kelurahan Kelapa Dua Wetan',
      detailedDescription:
        'A web application developed to handle public service requests, complaints, and aspiration reports for Kelurahan Kelapa Dua Wetan. Features a modern resident portal for report submission and tracking, an AI-powered virtual assistant, and a comprehensive administration dashboard for officers.',
      images: ['/lamas-1.png', '/lamas-2.png', '/lamas-3.png', '/lamas-4.png'],
      techStack: ['Next.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      status: 'Completed',
      liveUrl: 'https://lamas-kdw.vercel.app/',
      githubUrl: 'https://github.com/zulfaau/lamas-kdw',
      features: [
        'Resident portal for submitting and tracking public complaints and aspirations',
        'AI-powered virtual assistant for automated customer service responses',
        'Officer administration panel for validating, updating, and managing reports',
        'Real-time dashboard showing status counts (Active, In Progress, Completed, Rejected)',
        'Decoupled frontend built with Next.js and styled with Tailwind CSS',
        'Robust and secure REST API backend powered by Laravel PHP framework',
      ],
      challenges:
        'Developing a secure split frontend-backend authentication flow across different domains, managing CORS policies, and ensuring swift real-time status updates from Laravel to the Next.js client.',
    },
  ];



  // ==========================================
  // DATA: CERTIFICATES
  // ==========================================
  const certifications: Certification[] = [
    {
      id: 11,
      title: 'Dasar Pembuatan Aplikasi Web (Basic Web Application Development)',
      organization: 'Universitas Gunadarma',
      issueDate: 'June 2026',
      credentialId: '853127',
      verificationUrl: 'https://e-sert.gunadarma.ac.id/',
      category: 'Fullstack',
      description: 'Training covering system development, database implementation, user interface implementation, and programming languages.',
      image: '/certificates/Cert-Basic Web Application Development.png',
      certificateUrl: '/certificates/Cert-Basic Web Application Development.pdf',
    },
    {
      id: 1,
      title: 'Dasar Perancangan Aplikasi Web (Basic Web Application Design)',
      organization: 'Universitas Gunadarma',
      issueDate: 'September 2025',
      credentialId: '670266',
      verificationUrl: 'https://e-sert.gunadarma.ac.id/detail/51422690',
      category: 'Frontend',
      description: 'Training covering basic web application design principles, HTML, CSS, and structural design.',
      image: '/certificates/Cert-Basic Web Application.png',
      certificateUrl: '/certificates/Cert-Basic Web Application.pdf',
    },
    {
      id: 2,
      title: 'Pemrograman Go Untuk Tingkat Menengah (Go-lang for Intermediate)',
      organization: 'Universitas Gunadarma',
      issueDate: 'February 2025',
      credentialId: '907142',
      verificationUrl: 'https://e-sert.gunadarma.ac.id/detail/51422690',
      category: 'Backend',
      description: 'Intermediate programming course focusing on concurrent programming, structuring Go applications, and backend features.',
      image: '/certificates/Cert-GO Menengah.png',
      certificateUrl: '/certificates/Cert-GO Menengah.pdf',
    },
    {
      id: 3,
      title: 'Pemrograman C# Untuk Tingkat Pemula (C# for Beginner)',
      organization: 'Universitas Gunadarma',
      issueDate: 'August 2024',
      credentialId: '334382',
      verificationUrl: 'https://e-sert.gunadarma.ac.id/detail/51422690',
      category: 'Backend',
      description: 'Fundamental programming course covering object-oriented programming, syntax, and logic using C#.',
      image: '/certificates/Cert-Pemrograman CSharp.png',
      certificateUrl: '/certificates/Cert-Pemrograman CSharp.pdf',
    },
    {
      id: 4,
      title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      organization: 'Dicoding Indonesia',
      issueDate: 'December 2024',
      expirationDate: 'December 2027',
      credentialId: 'JLX146NJJX72',
      verificationUrl: 'https://www.dicoding.com/certificates/JLX146NJJX72',
      category: 'Cloud',
      description: 'AWS Academy course providing a detailed overview of cloud concepts, AWS services, security, architecture, pricing, and support.',
      image: '/certificates/Sertifikat AWS Cloud Dicoding.png',
      certificateUrl: '/certificates/Sertifikat AWS Cloud Dicoding.pdf',
    },
    {
      id: 5,
      title: 'Belajar Dasar Visualisasi Data',
      organization: 'Dicoding Indonesia',
      issueDate: 'July 2024',
      expirationDate: 'July 2027',
      credentialId: 'QLZ97O3LDP5D',
      verificationUrl: 'https://www.dicoding.com/certificates/QLZ97O3LDP5D',
      category: 'Data Science',
      description: 'Introduction to data analysis, cleaning, and creating impactful visual dashboards using Google Looker Studio.',
      image: '/certificates/Sertifikat Belajar Visualisasi Data.png',
      certificateUrl: '/certificates/Sertifikat Belajar Visualisasi Data.pdf',
    },
    {
      id: 6,
      title: 'Memulai Pemrograman dengan Python',
      organization: 'Dicoding Indonesia',
      issueDate: 'August 2024',
      expirationDate: 'August 2027',
      credentialId: '81P2NDO2OXOY',
      verificationUrl: 'https://www.dicoding.com/certificates/81P2NDO2OXOY',
      category: 'Backend',
      description: 'Fundamental Python programming course covering data structures, control flows, functions, OOP, and coding standards.',
      image: '/certificates/Sertifikat Dicoding Dasar Python.png',
      certificateUrl: '/certificates/Sertifikat Dicoding Dasar Python.pdf',
    },
    {
      id: 7,
      title: 'Belajar Dasar Structured Query Language (SQL)',
      organization: 'Dicoding Indonesia',
      issueDate: 'July 2024',
      expirationDate: 'July 2027',
      credentialId: 'NVP7Q660VZR0',
      verificationUrl: 'https://www.dicoding.com/certificates/NVP7Q660VZR0',
      category: 'Database',
      description: 'Relational database systems, basic SQL queries, joins, filtering, and data aggregation.',
      image: '/certificates/Sertifikat Dicoding SQL.png',
      certificateUrl: '/certificates/Sertifikat Dicoding SQL.pdf',
    },
    {
      id: 8,
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      organization: 'Dicoding Indonesia',
      issueDate: 'December 2024',
      expirationDate: 'December 2027',
      credentialId: '81P240VMNZOY',
      verificationUrl: 'https://www.dicoding.com/certificates/81P240VMNZOY',
      category: 'Frontend',
      description: 'Comprehensive front-end course covering DOM manipulation, events, web storage, and interactive web elements.',
      image: '/certificates/Sertifikat Membuat Web Pemula Dicoding.png',
      certificateUrl: '/certificates/Sertifikat Membuat Web Pemula Dicoding.pdf',
    },
    {
      id: 9,
      title: 'RevoU Software Engineering (2-Weeks Online Course)',
      organization: 'RevoU',
      issueDate: 'September 2023',
      credentialId: 'Attendance-SE',
      verificationUrl: 'https://revou.co',
      category: 'Frontend',
      description: 'Introductory course in software development covering fundamental programming syntax, web concepts, and basic logic.',
      image: '/certificates/Sertifikat Revou Software Engineering.png',
      certificateUrl: '/certificates/Sertifikat Revou Software Engineering.pdf',
    },
    {
      id: 10,
      title: 'Dasar Bahasa Pemrograman JavaScript',
      organization: 'Universitas Gunadarma',
      issueDate: 'September 2024',
      credentialId: '235576',
      verificationUrl: 'https://e-sert.gunadarma.ac.id/detail/51422690',
      category: 'Frontend',
      description: 'JavaScript syntax training including functions, arrays, objects, loops, and handling basic logical flows.',
      image: '/certificates/Sertifikat Workshop Gundar JavaScript.png',
      certificateUrl: '/certificates/Sertifikat Workshop Gundar JavaScript.pdf',
    },
  ];

  // ==========================================
  // DATA: TECH STACK
  // ==========================================
  const skills = [
    {
      name: 'CSS3',
      category: 'Frontend',
      color: '#1572B6',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-blue-500">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zm6.3 12.1h6.6l-.3 3.3-2.1.6-2.1-.6-.1-1.3H7.1l.2 3 4.7 1.3 4.7-1.3.6-6.7H10l-.2-2.2h6.9L17 4.2H7.3z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      color: '#F7DF1E',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <rect width="24" height="24" fill="#F7DF1E" rx="4"/>
          <text x="5" y="17" fill="#323330" fontWeight="bold" fontSize="12" fontFamily="sans-serif">JS</text>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      color: '#3178C6',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <rect width="24" height="24" fill="#3178C6" rx="4"/>
          <text x="5" y="17" fill="#FFFFFF" fontWeight="bold" fontSize="11" fontFamily="sans-serif">TS</text>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Frontend',
      color: '#00D8FF',
      icon: (
        <svg viewBox="-11.5 -10.23 23 20.47" className="w-10 h-10 stroke-current text-cyan-400" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
          <g stroke="#00D8FF" strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      color: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-foreground">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.2 16v-8h1.2l3.4 5.3v-5.3h1.2v8h-1.2l-3.4-5.3v5.3h-1.2z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: '#06B6D4',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-cyan-400">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: 'Vite',
      category: 'Tools',
      color: '#646CFF',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M12 2L2 5l10 17 10-17-10-3z" fill="url(#viteGradient)"/>
          <path d="M12 2v20L22 5z" fill="#BD34FE" opacity="0.8"/>
          <path d="M12 2L6 8h12z" fill="#FFD600"/>
          <defs>
            <linearGradient id="viteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41B883"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'Backend',
      color: '#FF2D20',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-red-500">
          <path d="M22.5 14.5l-9.1 5.3-9.1-5.3V8.8l9.1-5.3 9.1 5.3v5.7zm-9.1 3.5l6.1-3.6V9.9l-6.1 3.6v4.5zm-1.5-6.6l-6.1-3.6L12 4.3l6.1 3.5-6.1 3.6zM5.3 14.4l6.1 3.6v-4.5L5.3 9.9v4.5z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Backend',
      color: '#339933',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-green-600">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 14l-6.5 3.8L5.5 16V8l6.5-3.8L18.5 8v8z"/>
        </svg>
      )
    },
    {
      name: 'PHP',
      category: 'Backend',
      color: '#777BB4',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <ellipse cx="12" cy="12" rx="12" ry="8" fill="#777BB4"/>
          <text x="12" y="15" fill="#FFFFFF" fontWeight="bold" fontSize="9" textAnchor="middle" fontFamily="sans-serif">PHP</text>
        </svg>
      )
    },
    {
      name: 'Java',
      category: 'Backend',
      color: '#E67E22',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M6 3c.5-1 1-1 1.5 0s1 1 1.5 0M9 2c.5-1 1-1 1.5 0s1 1 1.5 0" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 9h12c0 0 0 7-6 7S4 9 4 9z" fill="#007396"/>
          <path d="M16 10c1.5 0 2 1 2 2s-.5 2-2 2" stroke="#007396" strokeWidth="2" strokeLinecap="round"/>
          <path d="M2 18h16" stroke="#95A5A6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Golang',
      category: 'Backend',
      color: '#00ADD8',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <rect width="24" height="24" fill="#00ADD8" rx="4"/>
          <text x="12" y="16" fill="#FFFFFF" fontWeight="bold" fontStyle="italic" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Go</text>
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: 'Database',
      color: '#4479A1',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <rect width="24" height="24" fill="#00758F" rx="4"/>
          <text x="12" y="15" fill="#F29111" fontWeight="bold" fontSize="8" textAnchor="middle" fontFamily="sans-serif">MySQL</text>
        </svg>
      )
    },
    {
      name: 'Supabase',
      category: 'Database',
      color: '#3ECF8E',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M12.5 1L3 12.5h8.5v10.5L21 11.5H12.5V1z" fill="#3ECF8E"/>
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      color: '#336791',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <rect width="24" height="24" fill="#336791" rx="4"/>
          <text x="12" y="15" fill="#FFFFFF" fontWeight="bold" fontSize="7.5" textAnchor="middle" fontFamily="sans-serif">Postgres</text>
        </svg>
      )
    },
    {
      name: 'Vercel',
      category: 'Tools',
      color: '#ffffff',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-foreground">
          <path d="M12 2L2 22h20L12 2z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      category: 'Tools',
      color: '#F05032',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current text-orange-600">
          <path d="M23.3 10.9L13.1.7C12.2-.2 10.8-.2 9.9.7L7.9 2.7l3.1 3.1c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.1 3.1c.8-.3 1.8-.1 2.5.6.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.7-.6-2.5L12.7 10c-.3.3-.7.5-1.1.6v6.9c.3.1.6.3.8.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.3-.3.7-.5 1.1-.6v-6.9c-.4-.1-.8-.3-1.1-.6L5.9 7.7.7 12.9c-.9.9-.9 2.4 0 3.3l10.2 10.2c.9.9 2.4.9 3.3 0l9.2-9.2c.8-.9.8-2.4-.1-3.3z"/>
        </svg>
      )
    }
  ];

  // ==========================================
  // RENDER FUNCTIONS FOR EACH TAB
  // ==========================================
  
  // 1. PROJECTS TAB RENDER
  const renderProjectsTab = () => (
    <div className="space-y-12">
      {/* Grid of Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            onClick={() => handleOpenProject(project)}
            className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
          >
            {/* Project Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center text-7xl overflow-hidden border-b border-border bg-card">
              {project.images[0].startsWith('/') || project.images[0].startsWith('http') ? (
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="transform group-hover:scale-110 transition-transform duration-300">{project.images[0]}</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Action Buttons & Tech */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-muted/60 text-xs rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 bg-muted/60 text-xs rounded text-muted-foreground font-semibold">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-2 border-t border-border/50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                    className="flex-1 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 hover:shadow-md transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="flex-1 py-2 border border-border hover:border-primary/50 text-foreground rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // 2. CERTIFICATES TAB RENDER
  const renderCertificatesTab = () => {
    const visibleCertifications = showAllCerts ? certifications : certifications.slice(0, 6);

    return (
      <div className="space-y-12">
        {/* Grid of Certificates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              {/* Cert Image */}
              <div className="relative h-40 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center overflow-hidden border-b border-border bg-card">
                {cert.image.startsWith('/') ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="transform group-hover:scale-110 transition-transform duration-300 text-6xl">{cert.image}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Cert Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="line-clamp-1">{cert.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4 flex-shrink-0" />
                    <span className="line-clamp-1">ID: {cert.credentialId}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.verificationUrl, '_blank');
                    }}
                    className="flex-1 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 hover:shadow-md transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify
                  </button>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2 border border-border hover:border-primary/50 text-foreground rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {certifications.length > 6 && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="px-8 py-3 bg-card/40 hover:bg-card/70 backdrop-blur-md border border-border hover:border-primary/50 text-foreground hover:text-primary rounded-xl font-bold transition-all duration-300 flex items-center gap-2 hover:shadow-lg shadow-sm cursor-pointer group"
            >
              {showAllCerts ? (
                <>
                  Show Less Certificates
                  <ChevronUp className="w-4.5 h-4.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Show More Certificates ({certifications.length - 6} More)
                  <ChevronDown className="w-4.5 h-4.5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  };

  // 3. TECH STACK TAB RENDER
  const renderTechStackTab = () => {
    // 1. Filter the skills array dynamically based on techFilter
    let filteredSkills = skills;
    if (techFilter === 'frontend') {
      filteredSkills = skills.filter(s => s.category === 'Frontend');
    } else if (techFilter === 'backend') {
      filteredSkills = skills.filter(s => s.category === 'Backend');
    } else if (techFilter === 'database') {
      filteredSkills = skills.filter(s => s.category === 'Database' || s.category === 'Tools');
    }

    // 2. Limit elements for 'all' tab if showAllTech is false
    const shouldLimit = techFilter === 'all' && !showAllTech;
    const displayedSkills = shouldLimit ? filteredSkills.slice(0, 5) : filteredSkills;

    // Define sub-filter tabs
    const subTabs = [
      { id: 'all', label: 'All Tech', count: skills.length },
      { id: 'frontend', label: 'Frontend', count: skills.filter(s => s.category === 'Frontend').length },
      { id: 'backend', label: 'Backend', count: skills.filter(s => s.category === 'Backend').length },
      { id: 'database', label: 'Database & Tools', count: skills.filter(s => s.category === 'Database' || s.category === 'Tools').length },
    ] as const;

    return (
      <div className="space-y-10">
        {/* Sub-Filter Switcher */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-card/30 backdrop-blur-md border border-border/50 rounded-2xl max-w-2xl mx-auto mb-10">
          {subTabs.map((tab) => {
            const isActive = techFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setTechFilter(tab.id);
                  setShowAllTech(false); // Reset expansion state when changing sub-tab
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'text-primary bg-primary/10 border border-primary/20 shadow-sm shadow-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-colors duration-300 ${
                  isActive ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Cards */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  boxShadow: `0 10px 25px -5px ${skill.color}35`,
                  borderColor: skill.color
                }}
                className="bg-card/25 backdrop-blur-md border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-muted/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-all duration-300">
                  {skill.icon}
                </div>
                
                {/* Name */}
                <span className="font-bold text-sm text-foreground text-center group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                
                {/* Tag */}
                <span className="text-[9px] text-muted-foreground mt-2 px-2.5 py-0.5 bg-muted/20 rounded-full font-semibold uppercase tracking-wider">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button (Only for 'all' filter and when more than 5 skills) */}
        {techFilter === 'all' && filteredSkills.length > 5 && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-8 py-3 bg-card/40 hover:bg-card/70 backdrop-blur-md border border-border hover:border-primary/50 text-foreground hover:text-primary rounded-xl font-bold transition-all duration-300 flex items-center gap-2 hover:shadow-lg shadow-sm cursor-pointer group"
            >
              {showAllTech ? (
                <>
                  Show Less Technologies
                  <ChevronUp className="w-4.5 h-4.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Show More Technologies ({filteredSkills.length - 5} More)
                  <ChevronDown className="w-4.5 h-4.5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 font-semibold text-sm">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfolio{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my learning path.
          </p>
        </motion.div>

        {/* Unified Custom Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Projects Tab */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('projects')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 text-foreground'
                : 'bg-card/20 border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Code2 className={`w-8 h-8 mb-3 ${activeTab === 'projects' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className="font-bold text-lg">Projects</span>
            <span className="text-xs text-muted-foreground mt-1 text-center">My coding creations & solutions</span>
          </motion.button>

          {/* Certificates Tab */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('certificates')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'certificates'
                ? 'bg-secondary/5 border-secondary shadow-lg shadow-secondary/5 text-foreground'
                : 'bg-card/20 border-border hover:border-secondary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Award className={`w-8 h-8 mb-3 ${activeTab === 'certificates' ? 'text-secondary' : 'text-muted-foreground'}`} />
            <span className="font-bold text-lg">Certificates</span>
            <span className="text-xs text-muted-foreground mt-1 text-center">Verified professional credentials</span>
          </motion.button>

          {/* Tech Stack Tab */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('techstack')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'techstack'
                ? 'bg-accent/5 border-accent shadow-lg shadow-accent/5 text-foreground'
                : 'bg-card/20 border-border hover:border-accent/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Laptop className={`w-8 h-8 mb-3 ${activeTab === 'techstack' ? 'text-accent' : 'text-muted-foreground'}`} />
            <span className="font-bold text-lg">Tech Stack</span>
            <span className="text-xs text-muted-foreground mt-1 text-center">My technical skills & expertise</span>
          </motion.button>
        </div>

        {/* Tab Content Area with Smooth Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'projects' && renderProjectsTab()}
            {activeTab === 'certificates' && renderCertificatesTab()}
            {activeTab === 'techstack' && renderTechStackTab()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ==========================================
      // DETAILS MODALS (ANALYTICS POPUPS)
      // ========================================== */}

      {/* 1. PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Sleek Framer Motion Image Slider / Carousel */}
                <div className="relative h-[350px] md:h-[550px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center border border-border overflow-hidden bg-card">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {selectedProject.images[currentImageIndex].startsWith('/') || selectedProject.images[currentImageIndex].startsWith('http') ? (
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-9xl transform scale-110 filter drop-shadow-md select-none">{selectedProject.images[currentImageIndex]}</span>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Arrow Buttons & Slide Indicators (Only shown if more than 1 image) */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg hover:scale-110 transition-all cursor-pointer z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg hover:scale-110 transition-all cursor-pointer z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Dots indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/20">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                              currentImageIndex === i ? 'bg-primary scale-125' : 'bg-foreground/40 hover:bg-foreground/60'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      selectedProject.status === 'Completed'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-muted/60 rounded-lg text-sm border border-border text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Challenges & Solutions</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 font-bold cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-center flex items-center justify-center gap-2 font-bold cursor-pointer"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CERTIFICATE DETAILS MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold">Certificate Details</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border overflow-hidden bg-muted">
                  {selectedCert.image.startsWith('/') ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-9xl">{selectedCert.image}</span>
                  )}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-semibold border border-border">
                    {selectedCert.category}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-2">{selectedCert.title}</h4>
                  <div className="flex items-center gap-2 text-lg text-primary mb-4 font-semibold">
                    <Building2 className="w-5 h-5" />
                    <span>{selectedCert.organization}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-xl border border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      Issue Date
                    </div>
                    <p className="font-semibold">{selectedCert.issueDate}</p>
                  </div>

                  {selectedCert.expirationDate && (
                    <div className="p-4 bg-muted/30 rounded-xl border border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        Expiration Date
                      </div>
                      <p className="font-semibold">{selectedCert.expirationDate}</p>
                    </div>
                  )}

                  <div className="p-4 bg-muted/30 rounded-xl border border-border md:col-span-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Shield className="w-4 h-4" />
                      Credential ID
                    </div>
                    <p className="font-semibold font-mono text-sm">{selectedCert.credentialId}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-lg mb-2">Description</h5>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all text-center flex items-center justify-center gap-2 font-bold cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Verify Certificate
                  </a>
                  <a
                    href={selectedCert.certificateUrl}
                    download
                    className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all text-center flex items-center justify-center gap-2 font-bold cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
