import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, Download, X, Calendar, Building2, Shield, FileText } from 'lucide-react';

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

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [filter, setFilter] = useState('All');

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Dasar Perancangan Aplikasi Web (Basic Web Application Design)',
      organization: 'Universitas Gunadarma',
      issueDate: 'September 2025',
      credentialId: '670266',
      verificationUrl: '#',
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
      verificationUrl: '#',
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
      verificationUrl: '#',
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
      description: 'Comprehensive course covering relational database systems, basic SQL queries, joins, filtering, and data aggregation.',
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
      verificationUrl: '#',
      category: 'Frontend',
      description: 'JavaScript syntax training including functions, arrays, objects, loops, and handling basic logical flows.',
      image: '/certificates/Sertifikat Workshop Gundar JavaScript.png',
      certificateUrl: '/certificates/Sertifikat Workshop Gundar JavaScript.pdf',
    },
    {
      id: 11,
      title: 'Dasar Pemrograman Berbasis Web (Fundamental Web Programming)',
      organization: 'Universitas Gunadarma',
      issueDate: 'February 2023',
      credentialId: '764687',
      verificationUrl: '#',
      category: 'Frontend',
      description: 'Introductory course covering fundamental web development technologies including Web Programming basics, Go, J2EE, C# .NET, and JSP.',
      image: '/certificates/Cert-Dasar-Pemrograman.png',
      certificateUrl: '/certificates/Cert-Dasar-Pemrograman.pdf',
    },
    {
      id: 12,
      title: 'Pemrograman Go Untuk Tingkat Pemula (Go-lang for Beginner)',
      organization: 'Universitas Gunadarma',
      issueDate: 'February 2024',
      credentialId: '508543',
      verificationUrl: '#',
      category: 'Backend',
      description: 'Basic Go programming training covering variables, control flows, data types, pointers, structs, Web Server, JSON, and client-side integration using Polymer.',
      image: '/certificates/Cert-Pemrograman-GO.png',
      certificateUrl: '/certificates/Cert-Pemrograman-GO.pdf',
    },
    {
      id: 13,
      title: 'Dasar Pemrograman Berbasis Desktop (Fundamental Desktop Programming)',
      organization: 'Universitas Gunadarma',
      issueDate: 'August 2023',
      credentialId: '707931',
      verificationUrl: '#',
      category: 'Backend',
      description: 'Fundamental desktop programming training covering Delphi, .NET (VB.NET), Java (AWT & Swing), and Oracle PL/SQL.',
      image: '/certificates/Cert-Pemrograman-Dekstop.png',
      certificateUrl: '/certificates/Cert-Pemrograman-Dekstop.pdf',
    },
  ];

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Cloud',
    'Database',
    'Data Science',
    'Frontend',
  ];

  const filteredCertifications =
    filter === 'All'
      ? certifications
      : certifications.filter((cert) => cert.category === filter);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials and professional certifications from leading technology companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg scale-105'
                  : 'bg-card border border-border hover:border-primary/50 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 bg-muted flex items-center justify-center overflow-hidden border-b border-border">
                {cert.image.startsWith('/') ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-6xl">{cert.image}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                  <Award className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Building2 className="w-4 h-4 text-secondary" />
                  <span className="line-clamp-1">{cert.organization}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{cert.issueDate}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Shield className="w-4 h-4" />
                  <span className="line-clamp-1">ID: {cert.credentialId}</span>
                </div>

                <div className="flex gap-2">
                  {cert.verificationUrl !== '#' ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(cert.verificationUrl, '_blank');
                      }}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all text-sm flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(cert.certificateUrl, '_blank');
                      }}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all text-sm flex items-center justify-center gap-1"
                    >
                      <FileText className="w-4 h-4" />
                      View
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="flex-1 px-3 py-2 border border-border hover:border-primary/50 rounded-lg transition-all text-sm flex items-center justify-center gap-1"
                  >
                    <FileText className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold">Certificate Details</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-[22rem] md:h-[26rem] bg-muted rounded-2xl flex items-center justify-center border border-border overflow-hidden">
                  {selectedCert.image.startsWith('/') ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-9xl">{selectedCert.image}</span>
                  )}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium border border-border">
                    {selectedCert.category}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-2">{selectedCert.title}</h4>
                  <div className="flex items-center gap-2 text-lg text-primary mb-4">
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
                  <h5 className="font-semibold mb-2">Description</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all text-center flex items-center justify-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Verify Certificate
                  </a>
                  <a
                    href={selectedCert.certificateUrl}
                    download
                    className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all text-center flex items-center justify-center gap-2 font-medium"
                  >
                    <Download className="w-5 h-5" />
                    Download
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
