import styles from './kit.module.css'


export default function Kit() {
  return (
    <>
      <h1>UI-Kit - Overview</h1>
      <div className={styles.descriptions}>
        <div className="block">
          <h2>Introduction</h2>
          <hr/>
          <p className={styles.subtitle}>Kit UI is an open-source React component library that implements Material
            Design.</p>
          <p className={styles.subtitle}>
            It includes a comprehensive collection of prebuilt components that are ready for use in production right out
            of
            the box.
          </p>
          <p className={styles.subtitle}>Kit UI is beautiful by design and features a suite of customization options
            that make it easy to implement your
            own custom design system on top of our components.</p>
        </div>
        <div className={styles.box}>
          Kit UI v5 supports Material Design v2. Adoption of v3 is tentatively planned for Kit UI v6—see the release
          schedule. You can follow this GitHub issue for future updates.
        </div>
        <div className="block">
          <h2>Advantages of Kit UI</h2>
          <hr/>
          <ul>
            <li><span>Ship faster: </span> Over 2,500 open-source contributors have poured countless hours into these
              components. Focus on your core business logic instead of reinventing the wheel—we've got your UI covered.
            </li>
            <li><span>Beautiful by default: </span> we're meticulous about our implementation of Material Design,
              ensuring that every Kit UI component meets the highest standards of form and function, but diverge from
              the official spec where necessary to provide multiple great options.
            </li>
            <li><span>Customizability: </span> the library includes an extensive set of intuitive customizability
              features. The templates in our store demonstrate how far you can go with customization.
            </li>
            <li><span>Cross-team collaboration: </span> Kit UI's intuitive developer experience reduces the barrier to
              entry for back-end developers and less technical designers, empowering teams to collaborate more
              effectively. The design kits streamline your workflow and boost consistency between designers and
              developers.
            </li>
            <li><span>Trusted by thousands of organizations: </span> Kit UI has the largest UI community in the React
              ecosystem. It's almost as old as React itself—its history stretches back to 2014—and we're in this for the
              long haul. You can count on the community's support for years to come (e.g. Stack Overflow).
            </li>
          </ul>
        </div>
        <div className="block">
          <h2>Kit UI vs. Base UI</h2>
          <hr/>
          <p className={styles.subtitle}>Kit UI and Base UI feature many of the same UI components, but Base UI comes
            without any default styles or styling solutions.</p>
          <p className={styles.subtitle}>
            Kit UI is comprehensive in that it comes packaged with default styles, and is optimized to work with Emotion
            (or styled-components).
          </p>
          <p className={styles.subtitle}>
            Base UI, by contrast, could be considered the "skeletal" or "headless" counterpart to Kit UI—in fact, future
            versions of Kit UI will use Base UI components and hooks for its foundational structure
          </p>
        </div>
      </div>
    </>
  );
}
