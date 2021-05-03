---
title: 'My Self-taught Developer Journey: Part 2'
date: '2020-05-02'
---

Continued from [Part 1](https://nicksymon.dev/blog/my-self-taught-developer-journey-part-1)

## Two Steps Forward, One Step Forward with Django; Or, the Importance of Balancing Theory & Practice

So after finishing the Udemy course and poking around the MDN Web Docs, I was ready to finally start building stuff! Towards the end of the course I had gotten a bit antsy just doing practice problems and wanted to get my hands dirty writing some code.

I had decided that I wanted to be a back-end developer and I had already learned Python, so when I saw that Mozilla had a whole tutorial on the Django web framework, I thought that learning Django would be the perfect next step for me!

Well, after struggling through the tutorial and building a basic ‘polling’ app, I was left a little bit deflated. I was feeling super pumped after the Udemy course and the Mozilla docs and thought I was ready to conquer the world! The reality was a bit different however.

The thing that was really confusing me were all of these `class` statements I saw everywhere in Django. What did those mean? I realized that there was a lot about the Python language I really didn’t understand, and decided that I had to dig deeper.

I got my hands on a copy of [ Learning Python ](https://www.oreilly.com/library/view/learning-python-5th/9781449355722/ ) by Mark Lutz and completely devoured it over my lunch breaks at work. It filled in so many gaps and introduced me to the Object-Oriented Programming paradigm. 

Once I had finished that book, I revisited Django with much more confidence and actually understood what I was doing. 

The point I want to make here is that I personally learn best by balancing theory and practice. I love burying my nose in an O’Reilly book, or reading the docs for a library or framework, but I also love writing software and building things. Eventually I will get bored of one, and want to do the other. If you choose to go the self-taught route, you will find the balance that works best for you.

When I was first starting out, I saw a stack overflow post that said the best way to learn programming is to ditch the books and tutorials and just build something and figure it out as you go along. I completely disagree with this approach. I think that you do need to know the basics and understand the larger context of what you’re doing. Otherwise, you will just be copy-pasting stack overflow out of frustration to get something to work, without really knowing what you’re doing. And while that happens to everyone, if that’s ALL you’re doing, it’s not a good sign.  

## Tools to Learn

In addition to the Intro to CS course, I took a few more courses around this time. These were:

- [ Linux Command Line Basics ](https://classroom.udacity.com/courses/ud595 )

- [ Intro to Relational Databases ](https://classroom.udacity.com/courses/ud197 )

- [ Version Control with Git ](https://classroom.udacity.com/courses/ud123 )


These were great beginner-friendly courses that gave me an excellent overview of tools that I literally **use every day** at work. Why did I choose to take these specific courses? These were tools that came up constantly in conversations and my studies. Based on how frequently I read about them, or used them, I knew that they were important. And I was right!

After getting a bit familiar with programming basics, definitely invest the time to learn the command line (be it Linux, macOS, or even Windows! I’ve heard great things about PowerShell). But don’t feel like you have to be a bash wizard -- just learn the basics for now. Also learn Git. 

I guess my point here is you should learn some of the key, foundational tools early on in your programming journey. The command line and git aren’t going anywhere. But if you’re just starting out, I wouldn’t recommend spending too much time on this. It’s easier to learn if you try to focus and concentrate on a few areas. It’s easy to go down rabbit holes -- don’t feel like you have to learn the entire developer keychain right away!

As a final note on this topic -- there is a fantastic resource called [Missing Semester](https://missing.csail.mit.edu/) which covers all of the super important tools that you’ll be using as a software developer. I highly recommend checking this out after you’ve gotten your feet wet with programming.

## Developer Community

While all of this was going on, I started to attend some local developer meet-ups. One of the reasons Python is a great language for newbies is because of the *incredible* community built around the language and ecosystem. The meet-ups I attended were hosted by [ChiPy](https://www.chipy.org/ ), the Chicago Python User Group, which is one of the largest, best-organized community organizations in Chicago based around a specific language. 

I also joined local slack groups -- the ChiPy group, the general Chicago Tech Slack, and a few others. Ultimately, I found the opportunity that would become my first developer job through the Chicago Tech Slack. 

I guess the point of all of this is to say -- participate in your local tech community! Most likely you will find your first developer through these local networks, or through the relationships you develop through them. My only advice here is to stay with it -- keep going to the meet-ups and such even if you don’t know what the heck is going on -- and don’t be afraid to be open about your level of experience. There are tons of people willing to help those just starting out in the field, so put yourself out there and ask questions!

## Projects

So let’s recap. I finished my Intro to CS course. I read *Learning Python* and was revisiting Django. And I knew a little bit about the command line and how to use git. At this point, I knew I was ready to start work on a personal project. My thinking was that I needed a solid portfolio project to really showcase my skills, since I didn’t have a credential like a CS degree or a bootcamp certificate.

I was, and still am, a huge fan of podcasts, so I decided that my project should center around them. I was also a big fan of [Letterboxd](https://letterboxd.com/), a social media application built around films. I came up with the idea for [Pod People](www.podpeople.app) by simply combining these two interests. It met all of the criteria I set out for the project, so it seemed like a perfect fit!

I won’t go into the gory details of how I built and deployed Pod People, but I will share some things you might want to consider as you build your showcase projects:

- **Pick something you’re passionate about**. This may seem obvious, but working on a project that you’re passionate about will make all the difference when you inevitably run into a bug that seems impossible to fix, or any other kind of obstacle. 

- **Go full-stack**. While working on Pod People, I got exposure to every layer of the stack, from the Database (PostgresQL), the Backend (Django), and Frontend (React). Understanding how all of the puzzle pieces fit together at a high level will be incredibly helpful no matter what area you might end up specializing in. It also has the added benefit of helping you understand what you enjoy working on the most, which can clarify what jobs you ultimately end up applying for. 

- **Get a domain name**.  Spend the money to get a real domain name -- it’s worth it! Using a generic heroku link or something like that just doesn’t have the kind of ‘wow’ factor that a memorable domain name will deliver.

- **Don’t be afraid to refactor/start over**. This is what version control is for! I went through several significant changes throughout the life of Pod People, and I’m about to embark on another one (converting it to a rails app). The biggest, and most challenging, was when I converted the entire front-end to a React app. Even though you may feel like you’re taking a step backward, the process of making these significant changes to an existing app will be a learning opportunity in itself.

## Roadmaps

You may come across ‘Developer Roadmaps like [this](https://roadmap.sh/) at some point. I think that these can be very helpful in charting out a sequence of things to learn. However, like all advice you will come across, it is opinionated and isn’t 100% objective truth. The roadmaps I linked above are very helpful by clearly indicating what recommendations are personal opinions of the authors. Basically, these roadmaps are very useful, but don’t feel like you need to follow them exactly! 

## Polishing the Project 

So after a few months working on the project part-time, my employment situation changed and I was able to devote myself full-time to the project. I  concluded that I needed to build my skills in the front-end, so I took the following Udemy courses:

* [The Complete JavaScript Course 2021: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)

* [Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/course/advanced-css-and-sass/)

Both of these courses were taught by Jonas Schmedtmann. I took the JavaScript course first, and it was a huge milestone in my learning journey as it represented my first real exposure to a programming language outside of Python. I can’t recommend Jonas’ courses enough -- he really takes the time to provide a helpful learning context to help you understand the big picture and explain *why* instead of just focusing on *how*. I can easily say that I use the lessons I learned from Jonas’ every day on the job!

After the JS course, I began to build out the front end of my application in React. Up to this point, I had relied on Bootstrap exclusively for my styling; after getting frustrated with my lack of knowledge in CSS, I took Jonas’ course on that topic. 

One of the great things about Jonas’ courses is his focus on the fundamentals. He teaches ‘vanilla’ JavaScript and CSS. While frameworks and trends in these areas will come and go, it’s most important to learn the basics so that you can utilize any of the tools that might come along.

## Deploying my Project and The Job Hunt

After getting my project to a state I was happy with, I deployed it on Heroku, built my blog, and began my job search in earnest. While I had been applying before this point, I felt much more confident with these examples to showcase my skills.

By far, this step was the hardest part of the process. I applied to **145** jobs in total. And while many of these might have definitely been long-shots, my experience is definitely not unusual. Not only was applying to these jobs a lot of work, it was emotionally gruelling. But the worst part by far of this process was, by far, the dreaded coding assessment! 

(Ok, maybe the worst part of the process was writing cover letters. Honestly, why are these still a thing?)

When I took my first assessment (for a Dropbox apprenticeship, I believe), I was pretty confident in my abilities. However, after I completely bombed the assessment, I felt pretty defeated.

After talking to a few folks in my network, including my mentor, I learned that this experience was extremely common. The thing you need to understand about these assessments is that all it really proves is whether you know how to do these assessment problems. Don’t take it as a reflection of your skills or abilities. 

At this time, I signed up for another  Udemy course [The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/), which I also highly recommend . One of the most helpful things about the course was the knowledge that **everyone** gets tripped up by these problems, and almost no one is really able to solve these problems on a first try. The important thing to understand with these assessment problems is that practice is key. 

## Getting the Job 

Ok, I promise I’ll wrap this up soon. Anyways, I saw a job posting for a junior developer position on the Chicago Tech Slack, and immediately applied to it. The posting specified that the company used Ruby. While I didn’t have experience with the language, I described my own experience with Python and how because of this I’d be able to pick up Ruby fairly quickly. The company focused on e-commerce and I highlighted my previous industry experience as an asset for the position.

Soon after, I was interviewing with folks from the company. I walked them through my Pod People application, described how my previous career and experience as a self-taught developer would make me a great fit for the team, and successfully fumbled through a Ruby coding exercise using my knowledge of object oriented programming principles. Shortly after, I was offered a job and the rest is history!

## In Conclusion

Well, I’ve gone on far longer than I previously planned, but wanted to conclude with some closing thoughts…

- **Patience.** If you decide to go on this self-taught journey, you will reach many points where you might think of quitting, or aren’t able to envision how you’ll reach your goals. You will have to get through it yourself. The only thing I can offer is the knowledge that everyone feels this way! You’re not alone.

- **Perseverance.** After a few months on the job, I’ve learned that the main difference between being a professional software developer and a hobbyist is that now I’m able to dive into projects full-time and I’m surrounded by awesome, more experienced colleagues  who can help me grow as a software developer. But apart from this, I’m still on my own largely when it comes to developing solutions, finding fixes to bugs, etc. Once you get hired, you won’t suddenly have someone looking over your shoulder telling you exactly what to do. Perseverance is one of the most important traits you can develop as a software developer. 

- **Support Networks.** One element of my story that I really want to emphasize is all of the  wonderful folks who helped me every step of the way. I was introduced to many of these people through my wife; many of these individuals were her co-workers or former classmates who worked as developers. I met others through the local dev community. I spoke to all of them at one point or another to get advice or just learn about their stories. Trust me when I say that you won’t be able to do this alone -- build a support network. People are nearly always willing to help, so just ask!

- **It’s ok to not know everything at once.** Starting out today as a software developer, the amount of stuff you have to know just to get a demo app up and running is overwhelming. Just remember that it’s impossible to know everything at once. You have to pick your battles in that regard. It’s easy to get pulled in a hundred different directions at once. Focus on learning foundational things when you’re starting out. 

Well I hope that these series of blog posts were helpful, informative, or amusing! If you’re thinking of starting the journey or currently in the middle of it, just know that you’re not alone!

## Bonus Tips - Touch Typing and Vim

Seriously. Take the time to learn touch typing and Vim at some point. The investment in time you put into this will pay off tremendously in the long run. 
