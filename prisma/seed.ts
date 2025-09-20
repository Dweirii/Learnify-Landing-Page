import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample jobs
  const jobs = await Promise.all([
    prisma.job.create({
      data: {
        title: 'Senior Full-Stack Developer',
        description: 'We are looking for a passionate Senior Full-Stack Developer to join our team and help build the future of education technology. You will work on our core platform, building features that impact thousands of learners across the MENA region.',
        requirements: [
          '5+ years of experience in full-stack development',
          'Proficiency in React, Node.js, and TypeScript',
          'Experience with PostgreSQL and Redis',
          'Knowledge of cloud platforms (AWS, Vercel)',
          'Strong problem-solving and communication skills',
          'Experience with educational technology is a plus'
        ],
        location: 'Remote',
        type: 'FULL_TIME',
        status: 'ACTIVE',
        salaryMin: 80000,
        salaryMax: 120000,
        currency: 'USD',
        experience: '5+ years',
        department: 'Engineering',
        isRemote: true,
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Flexible working hours',
          'Professional development budget',
          'Stock options'
        ],
        skills: [
          'React',
          'Node.js',
          'TypeScript',
          'PostgreSQL',
          'AWS',
          'Docker'
        ]
      }
    }),
    prisma.job.create({
      data: {
        title: 'Product Marketing Manager',
        description: 'Join our marketing team to help grow Learnify\'s presence in the MENA region. You will be responsible for developing and executing marketing strategies that drive user acquisition and engagement.',
        requirements: [
          '3+ years of experience in product marketing',
          'Experience in the EdTech or SaaS industry',
          'Strong analytical and communication skills',
          'Proficiency in marketing tools and platforms',
          'Understanding of the MENA market',
          'Bachelor\'s degree in Marketing or related field'
        ],
        location: 'Dubai, UAE',
        type: 'FULL_TIME',
        status: 'ACTIVE',
        salaryMin: 60000,
        salaryMax: 90000,
        currency: 'USD',
        experience: '3+ years',
        department: 'Marketing',
        isRemote: false,
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Transportation allowance',
          'Professional development opportunities',
          'Team building events'
        ],
        skills: [
          'Product Marketing',
          'Digital Marketing',
          'Analytics',
          'Content Creation',
          'Market Research',
          'Social Media'
        ]
      }
    }),
    prisma.job.create({
      data: {
        title: 'Frontend Developer Intern',
        description: 'Perfect opportunity for a recent graduate or student to gain hands-on experience in modern frontend development. You will work alongside our experienced developers to build user-facing features for our platform.',
        requirements: [
          'Basic knowledge of HTML, CSS, and JavaScript',
          'Familiarity with React or willingness to learn',
          'Understanding of responsive design principles',
          'Strong attention to detail',
          'Good communication skills',
          'Currently enrolled in or recently graduated from a computer science program'
        ],
        location: 'Remote',
        type: 'INTERNSHIP',
        status: 'ACTIVE',
        salaryMin: 2000,
        salaryMax: 3000,
        currency: 'USD',
        experience: 'Entry level',
        department: 'Engineering',
        isRemote: true,
        benefits: [
          'Mentorship program',
          'Flexible schedule',
          'Certificate of completion',
          'Potential full-time offer',
          'Learning resources'
        ],
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Git',
          'Responsive Design'
        ]
      }
    }),
    prisma.job.create({
      data: {
        title: 'UX/UI Designer',
        description: 'We are seeking a creative UX/UI Designer to join our design team. You will be responsible for creating intuitive and engaging user experiences that make learning accessible and enjoyable for our users.',
        requirements: [
          '3+ years of experience in UX/UI design',
          'Proficiency in Figma, Sketch, or Adobe Creative Suite',
          'Experience with user research and testing',
          'Strong portfolio showcasing design skills',
          'Understanding of accessibility principles',
          'Experience with mobile and web design'
        ],
        location: 'Cairo, Egypt',
        type: 'FULL_TIME',
        status: 'ACTIVE',
        salaryMin: 50000,
        salaryMax: 75000,
        currency: 'USD',
        experience: '3+ years',
        department: 'Design',
        isRemote: false,
        benefits: [
          'Competitive salary',
          'Health insurance',
          'Design tools subscription',
          'Professional development budget',
          'Creative freedom'
        ],
        skills: [
          'Figma',
          'User Research',
          'Prototyping',
          'Accessibility',
          'Mobile Design',
          'Web Design'
        ]
      }
    })
  ])

  console.log(`✅ Created ${jobs.length} jobs`)

  // Create sample contact submissions
  const contactSubmissions = await Promise.all([
    prisma.contactSubmission.create({
      data: {
        name: 'Ahmed Hassan',
        email: 'ahmed.hassan@example.com',
        subject: 'Partnership Inquiry',
        message: 'Hi, I represent a coding bootcamp in Saudi Arabia and would like to explore partnership opportunities with Learnify. We have 500+ students who could benefit from your platform.',
        company: 'Tech Academy KSA',
        phone: '+966501234567',
        status: 'NEW'
      }
    }),
    prisma.contactSubmission.create({
      data: {
        name: 'Sarah Al-Mahmoud',
        email: 'sarah.almahmoud@example.com',
        subject: 'Feature Request',
        message: 'I love using Learnify for my studies! Could you please add support for Arabic subtitles in the video lessons? This would be very helpful for Arabic-speaking students.',
        status: 'IN_PROGRESS'
      }
    })
  ])

  console.log(`✅ Created ${contactSubmissions.length} contact submissions`)

  // Create sample newsletter subscriptions
  const newsletterSubscriptions = await Promise.all([
    prisma.newsletterSubscription.create({
      data: {
        email: 'student@example.com',
        source: 'Website footer',
        isActive: true
      }
    }),
    prisma.newsletterSubscription.create({
      data: {
        email: 'teacher@example.com',
        source: 'Join page',
        isActive: true
      }
    })
  ])

  console.log(`✅ Created ${newsletterSubscriptions.length} newsletter subscriptions`)

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
