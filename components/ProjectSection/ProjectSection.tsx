import { Project } from "./ProjectSubsection.tsx";
export function ProjectSection() {
  return (
    <>
      <Project
        heading="Company Website"
        iconNames={["wordpress", "figma"]}
        imgSrc="/projects/priopartners.svg"
        alt="triangle with the company logo in the middle of it"
      >
        <p>s</p>
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
    </>
  );
}
