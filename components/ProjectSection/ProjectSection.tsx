import { LinkBlock } from "../LinkBlock.tsx";
import { Project } from "./ProjectSubsection.tsx";

export function ProjectSection() {
  return (
    <>
      <Project
        heading="peopen — People's Pen"
        iconNames={["python", "dspy", "typescript"]}
        imgSrc="/projects/peopen.png"
        alt="Logo of the peopen application, a Swiss person holding a pen"
      >
        <p>
          Crafted an AI-powered platform that enables Swiss citizens to draft
          popular initiatives through real-time human-AI collaboration,
          transforming direct democratic participation with cutting-edge
          language technology.
        </p>
        <p>
          Done as a Master's thesis in collaboration with the DDIS Lab at the
          University Zurich.
        </p>
      </Project>
      <Project
        heading="Informfully"
        iconNames={["typescript", "react"]}
        imgSrc="/projects/informfully.png"
        alt="Logo of the informfully application, an open Book with the UZH logo above it"
      >
        <p>
          Developed an open-source mobile platform that simplifies user studies
          by enabling researchers to deliver and monitor multimedia content in
          real-time, with a focus on news diversity and AI-driven content
          recommendations. Used in academic research to study how content
          diversity and exposure to minority voices affect user engagement.
        </p>
        <p>
          Done as a Master's project in collaboration with the DDIS Lab at the
          University of Zurich.
        </p>
      </Project>
      <Project
        heading="Semantic Job Search"
        iconNames={["php", "drupal", "typescript"]}
        imgSrc="/projects/mgb.png"
        alt="Icon saying Migros Gruppe Arbeitswelt"
      >
        <p>
          Developed a semantic search backend for Switzerland's largest
          employer, leveraging large language models and vector embeddings to
          match job seekers with relevant positions. The system understands the
          meaning behind job descriptions and search queries, enabling more
          intelligent job recommendations beyond keyword matching.
        </p>
      </Project>
      <Project
        heading="Prio Partners AG Website"
        iconNames={["wordpress", "figma"]}
        imgSrc="/projects/priopartners.svg"
        alt="triangle with the company logo in the middle of it"
      >
        <p>Redesigned the website of a wealth investment company.</p>
      </Project>
      <Project
        heading="Sequential Experiment Design"
        iconNames={["typescript", "react", "next.js", "Prisma"]}
        imgSrc="/projects/sed.svg"
        alt="two silhouttes of humans"
      >
        <p>
          Developed a web application to recommend the right statistical tool
          for sampling datapoints. The application was developed together with a
          Ph.D. student at the Zurich People and Computing lab.
        </p>
      </Project>
      <Project
        heading="VirtualWardrobe"
        iconNames={["swift", "swiftui", "coreml"]}
        imgSrc="/projects/virtualwardrobe.png"
        alt="picture of a mac and iphone with the virtualwardrobe application on their screens"
      >
        <p>
          VirtualWardrobe is a cross-platform application I created for my
          bachelor thesis. The premise is simple, make your wardrobe portable by
          digitally carrying your pictures of your clothing with you.
        </p>
        <p>
          A custom machine learning model processed the pictures to crop and
          categorize the clothes. Embedding the machine learning model ensured
          that the pictures stay private and never leave your own devices (iOS,
          iPadOS, macOS) or private cloud (iCloud).
        </p>
      </Project>
      <Project
        heading="Intelligent Purchase Prediction"
        iconNames={["python", "xgboost"]}
        imgSrc="/projects/bofrost.png"
        alt="figures from my scientific thesis"
      >
        <p>
          This project was done in a cooperation between my German university
          and a big german client. The goal was to predict the day the customer
          is most likely to purchase an item. The development of an artificial
          intelligence to solve this task was documented in a scientific thesis
        </p>
      </Project>
      <Project
        heading="Padessi"
        iconNames={["swift", "python", "tensorflow", "rpi"]}
        imgSrc="/projects/padessi.svg"
        alt="logo of the padessi application"
      >
        <p>
          Padessi is the outcome of an internal company hackathon. Our idea was
          a mobile application that showed employees of the company free parking
          spaces.
        </p>
        <p>
          A Raspberry Pi equipped with a camera periodically took pictures of
          the company parking lot. An artificial intelligence on the Pi analyzed
          the images and reported the free parking spaces to a server. Our team
          won third place out of more than 30 teams.
        </p>
      </Project>
    </>
  );
}
