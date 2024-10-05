const Users = [
    {
      name: "Arjun Sharma",
      profession: "Software Engineer",
      image: "https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MHwwfHx8MA%3D%3D",
      desc: "Coding enthusiast | Love building web apps | Fitness geek 💻💪",
      followers: 1200,
      following: 350,
      username: "arjun.codes",
      posts: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHwwfDB8fHww",
          caption: "Just launched a new web app today! 🚀 #webdevelopment",
          likes: 320,
          postedDate: "2024-09-10"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1573167101669-476636b96cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfDB8MHx8fDA%3D",
          caption: "Debugging is like being a detective in a crime movie. 🕵️‍♂️ #codinglife",
          likes: 270,
          postedDate: "2024-09-05"
        },
        {
          id: 3,
          image: "https://plus.unsplash.com/premium_photo-1692241076210-9e696db67fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfDB8MHx8fDA%3D",
          caption: "Code review sessions are the best for learning new tricks. ✍️",
          likes: 210,
          postedDate: "2024-09-01"
        },
        {
          id: 4,
          image: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfDB8MHx8fDA%3D",
          caption: "Working on my fitness today! 💪 #FitnessGeek",
          likes: 180,
          postedDate: "2024-08-28"
        },
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHlwZXNjcmlwdHxlbnwwfDB8MHx8fDA%3D",
          caption: "Exploring TypeScript for the first time. Loving it so far! #typescript",
          likes: 290,
          postedDate: "2024-08-20"
        },
        {
          id: 6,
          image: "https://plus.unsplash.com/premium_photo-1663045331270-5bd51fd9a0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZyUyMGF0JTIwb3V0ZG9vcnN8ZW58MHwwfDB8fHww",
          caption: "Great day for coding outdoors. ☀️💻",
          likes: 150,
          postedDate: "2024-08-15"
        }
      ]
    },
    {
      name: "Priya Patel",
      profession: "Graphic Designer",
      image: "https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLYLLRv5GX8mz5haKp_yhqa_kAMopZ_0a9nEMDD--xo=",
      desc: "Bringing ideas to life through art 🎨 | Digital Designer | Traveler",
      followers: 1800,
      following: 500,
      username: "priya.designs",
      posts: [
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfDB8MHx8fDA%3D",
          caption: "Just completed a new logo design! 💡 #graphicdesign",
          likes: 540,
          postedDate: "2024-09-09"
        },
        {
          id: 8,
          image: "https://plus.unsplash.com/premium_photo-1685082778205-8665f65e8c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sb3JzfGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Playing around with colors today. 🌈 #artinprogress",
          likes: 480,
          postedDate: "2024-09-03"
        },
        {
          id: 9,
          image: "https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbGluZ3xlbnwwfDB8MHx8fDA%3D",
          caption: "Illustration inspired by my recent travels! 🌍✈️",
          likes: 600,
          postedDate: "2024-08-30"
        },
        {
          id: 10,
          image: "https://images.unsplash.com/photo-1515222410484-613a51c43721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGlnaXRhbCUyMHBhaW50aW5nfGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Digital painting is so therapeutic! 🎨✨",
          likes: 520,
          postedDate: "2024-08-25"
        },
        {
          id: 11,
          image: "https://images.unsplash.com/photo-1653971858474-4f2dfa7f4dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduJTIwY29uY2VwdHxlbnwwfDB8MHx8fDA%3D",
          caption: "The client loved this design concept! #branding",
          likes: 590,
          postedDate: "2024-08-18"
        },
        {
          id: 12,
          image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNrZXRjaGluZyUyMHNvbWUlMjBuZXclMjBpZGVhcyUyMHRvZGF5fGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Sketching some new ideas today. 🤓",
          likes: 440,
          postedDate: "2024-08-12"
        }
      ]
    },
    {
      name: "Rohit Kumar",
      profession: "Data Scientist",
      image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDB8MHx8fDA%3D",
      desc: "Data is the new oil ⛽ | Exploring AI & ML | Problem Solver",
      followers: 950,
      following: 420,
      username: "rohit.datasci",
      posts: [
        {
          id: 13,
          image: "https://media.istockphoto.com/id/943359588/photo/big-data-abstract-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=MKLeKSulRdPMChyQuVClz-OOLBZK-Ta1dtW8RKLLJKY=",
          caption: "Analyzing the latest dataset for a client. 📊 #datascience",
          likes: 210,
          postedDate: "2024-09-11"
        },
        {
          id: 14,
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YXxlbnwwfDB8MHx8fDA%3D",
          caption: "Data is powerful when it's clean and organized. #dataanalytics",
          likes: 190,
          postedDate: "2024-09-04"
        },
        {
          id: 15,
          image: "https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=-ctzkAbBt2DW7nRs6AklVuvVHdRfKbIZ3kKEa8skRZk=",
          caption: "Exploring a new algorithm for predictive modeling. 🤖",
          likes: 230,
          postedDate: "2024-08-31"
        },
        {
          id: 16,
          image: "https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHwwfDB8fHww",
          caption: "Data visualization is art! 🖼️ #dataviz",
          likes: 260,
          postedDate: "2024-08-26"
        },
        {
          id: 17,
          image: "https://plus.unsplash.com/premium_photo-1700482758020-6332a298ad09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFjaGluZSUyMGxlYXJuaW5nJTIwcHJvamVjdHxlbnwwfDB8MHx8fDA%3D",
          caption: "Just wrapped up an amazing ML project. 🚀",
          likes: 280,
          postedDate: "2024-08-21"
        },
        {
          id: 18,
          image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfDB8MHx8fDA%3D",
          caption: "Artificial intelligence is transforming the world! 🌍",
          likes: 300,
          postedDate: "2024-08-14"
        }
      ]
    },
     {
      name: "Ananya Singh",
      profession: "Project Manager",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D",
      desc: "Team player | Passionate about delivering projects on time 📈 | Book lover 📚",
      followers: 1300,
      following: 300,
      username: "ananya.pm",
      posts: [
        {
          id: 19,
          image: "https://plus.unsplash.com/premium_photo-1661963783275-dff88a0296f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvamVjdE1hbmFnZW1lbnR8ZW58MHwwfDB8fHww",
          caption: "Successfully delivered another project on time! 💪 #ProjectManagement",
          likes: 250,
          postedDate: "2024-09-10"
        },
        {
          id: 20,
          image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhbSUyMG1lZXRpbmdzfGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Team meetings are the key to success. 👥 #Teamwork",
          likes: 210,
          postedDate: "2024-09-06"
        },
        {
          id: 21,
          image: "https://plus.unsplash.com/premium_photo-1661386006325-1473b33e9728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGxhbm5pbmd8ZW58MHwwfDB8fHww",
          caption: "Planning is crucial to keep projects on track. 📅",
          likes: 190,
          postedDate: "2024-09-02"
        },
        {
          id: 22,
          image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFnaWxlJTIwbWV0aG9kb2xvZ2llc3xlbnwwfDB8MHx8fDA%3D",
          caption: "Just read a great book on agile methodologies. 📚 #ContinuousLearning",
          likes: 220,
          postedDate: "2024-08-29"
        },
        {
          id: 23,
          image: "https://plus.unsplash.com/premium_photo-1675731939080-ce61998c8d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1Y2Nlc3NmdWx8ZW58MHwwfDB8fHww",
          caption: "Efficient use of resources leads to successful projects. ⚙️",
          likes: 230,
          postedDate: "2024-08-20"
        },
        {
          id: 24,
          image: "https://plus.unsplash.com/premium_photo-1713443924234-7c9824616eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMGFjaGlldmluZyUyMG1pbGVzdG9uZXN8ZW58MHwwfDB8fHww",
          caption: "Proud of my team for achieving all the milestones. 🎉",
          likes: 270,
          postedDate: "2024-08-14"
        }
      ]
    },
    {
      name: "Vikram Gupta",
      profession: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1592827095305-68f21edefb82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfDB8MHx8fDA%3Dg",
      desc: "Crafting great user experiences ✨ | Design thinking advocate",
      followers: 1600,
      following: 380,
      username: "vikram.ux",
      posts: [
        {
          id: 25,
          image: "https://media.istockphoto.com/id/1483920446/photo/website-design-software-provide-modish-template-for-online-retail-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=OdWvda0L_oUuKffghINg9jTyjbvj8dFQCYDMvQZRq1M=",
          caption: "Just finished a user testing session! 🎯 #UXResearch",
          likes: 340,
          postedDate: "2024-09-11"
        },
        {
          id: 26,
          image: "https://plus.unsplash.com/premium_photo-1661429554727-43e63b8ddad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWZyYW1lc3xlbnwwfDB8MHx8fDA%3D",
          caption: "Sketching some new wireframes today. 📝 #UIDesign",
          likes: 310,
          postedDate: "2024-09-07"
        },
        {
          id: 27,
          image: "https://plus.unsplash.com/premium_photo-1661775083116-3e8fbb1d5a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzaWduVGhpbmtpbmd8ZW58MHwwfDB8fHww",
          caption: "Color theory is fascinating. 🖍️ #DesignThinking",
          likes: 360,
          postedDate: "2024-09-01"
        },
        {
          id: 28,
          image: "https://images.unsplash.com/photo-1715059250871-08786b8a884a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb3RvdHlwZXxlbnwwfDB8MHx8fDA%3D",
          caption: "Prototype ready for client feedback! 🚀",
          likes: 400,
          postedDate: "2024-08-27"
        },
        {
          id: 29,
          image: "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVzaWdufGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Design is not just what it looks like and feels like. Design is how it works. 💡",
          likes: 380,
          postedDate: "2024-08-19"
        },
        {
          id: 30,
          image: "https://media.istockphoto.com/id/1675579652/photo/stylish-japanese-young-woman-interacting-with-augmented-reality-platform-in-a-technologically.webp?a=1&b=1&s=612x612&w=0&k=20&c=iQKwC39x1NYcGjP1YJSHsGuquqbEihQkTbB7aUbtcmA=",
          caption: "A well-crafted user journey makes all the difference. ✨ #UserExperience",
          likes: 420,
          postedDate: "2024-08-13"
        }
      ]
    },
    {
      name: "Sneha Iyer",
      profession: "Content Writer",
      image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
      desc: "Words have power ✍️ | Creating engaging content | Coffee addict ☕",
      followers: 1400,
      following: 260,
      username: "sneha.writes",
      posts: [
        {
          id: 31,
          image: "https://images.unsplash.com/photo-1686061594179-4ac2edf0e13c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29udGVudENyZWF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
          caption: "Published a new blog today! 📝 #ContentCreation",
          likes: 320,
          postedDate: "2024-09-12"
        },
        {
          id: 32,
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V3JpdGluZyUyMHdpdGglMjBhJTIwY3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHwwfDB8fHww",
          caption: "Writing with a cup of coffee is bliss. ☕ #WritersLife",
          likes: 290,
          postedDate: "2024-09-08"
        },
        {
          id: 33,
          image: "https://images.unsplash.com/photo-1598646470058-34b001098987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Rvcnl0ZWxsaW5nfGVufDB8MHwwfHx8MA%3D%3D",
          caption: "The power of storytelling is unmatched. 📖",
          likes: 350,
          postedDate: "2024-09-03"
        },
        {
          id: 34,
          image: "https://images.unsplash.com/photo-1533750088811-7a8b16218df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJhaW5zdG9ybWluZ3xlbnwwfDB8MHx8fDA%3D",
          caption: "Brainstorming new content ideas. 💡 #CreativeProcess",
          likes: 310,
          postedDate: "2024-08-28"
        },
        {
          id: 35,
          image: "https://images.unsplash.com/photo-1654180084320-3d5dab69ae6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0ZSUyQyUyMGFuZCUyMGVudGVydGFpbnxlbnwwfDB8MHx8fDA%3D",
          caption: "Words can inspire, educate, and entertain. ✨",
          likes: 370,
          postedDate: "2024-08-22"
        },
        {
          id: 36,
          image: "https://images.unsplash.com/photo-1515253564590-b7ec416b06be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVkaXRpbmd8ZW58MHwwfDB8fHww",
          caption: "Finally finished editing my next article. 🚀",
          likes: 340,
          postedDate: "2024-08-15"
        }
      ]
    },
    {
      name: "Amit Verma",
      profession: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MHwwfHx8MA%3D%3D",
      desc: "Marketing wizard 🧙‍♂️ | Growth hacker | Helping brands grow 🚀",
      followers: 2100,
      following: 450,
      username: "amit.growth",
      posts: [
        {
          id: 1,
          image: "https://media.istockphoto.com/id/1325680818/photo/growth-arrow-up-and-progress-success-business-skill-increase-improvement-graph-on-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hh0LMxoDmfHboO1u6rsocPlBuU7LyN3ZKaGFfXSb2KE=",
          caption: "Just wrapped up a successful campaign! 🎉 #MarketingWins",
          likes: 450,
          postedDate: "2024-09-11"
        },
        {
          id: 2,
          image: "https://plus.unsplash.com/premium_photo-1723802491672-e6a5b5be29f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R3Jvd3RoJTIwaGFja2luZ3xlbnwwfDB8MHx8fDA%3D",
          caption: "Growth hacking is an art. 🎨 #GrowthMarketing",
          likes: 420,
          postedDate: "2024-09-05"
        },
        {
          id: 3,
          image: "https://plus.unsplash.com/premium_photo-1661726895242-600b8f3fb00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5hbHl6aW5nJTIwdGhlJTIwbWV0cmljc3xlbnwwfDB8MHx8fDA%3D",
          caption: "Analyzing the metrics for the latest strategy. 📊 #DataDriven",
          likes: 390,
          postedDate: "2024-08-31"
        },
        {
          id: 4,
          image: "https://plus.unsplash.com/premium_photo-1661763748867-ead1b63f9e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nJTIwdGVhbXxlbnwwfDB8MHx8fDA%3D",
          caption: "Marketing is all about understanding the customer. 👥",
          likes: 410,
          postedDate: "2024-08-25"
        },
        {
          id: 5,
          image: "https://media.istockphoto.com/id/1272969812/photo/light-bulb-puzzle-pieces-forming-the-word-brand-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=fbg7m1kYcAQQ4XIjL7RiuHg4slyYV16c-0hFvcwcrEE=",
          caption: "The right message can create wonders. 💬 #BrandCommunication",
          likes: 430,
          postedDate: "2024-08-18"
        },
        {
          id: 6,
          image: "https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zaXRpdmUlMjBncm93dGh8ZW58MHwwfDB8fHww",
          caption: "Seeing positive growth in engagement rates! 🚀",
          likes: 470,
          postedDate: "2024-08-10"
        }
      ]
    },
  ];
  
  export default Users;
  