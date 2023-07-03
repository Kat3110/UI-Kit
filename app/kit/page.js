import styles from './kit.module.css'


export default function Kit() {
  return (
    <>
      <h1>UI-Kit - Overview</h1>
      <div className={styles.descriptions}>
        <div className='block'>
          <h2>Introduction</h2>
          <hr/>
          <p className={styles.subtitle}>Kit UI&nbsp;is&nbsp;an&nbsp;open-source React component library that implements
            Material Design.</p>
          <p className={styles.subtitle}>
            It&nbsp;includes a&nbsp;comprehensive collection of&nbsp;prebuilt components that are ready for use
            in&nbsp;production right out of&nbsp;the box.
          </p>
          <p className={styles.subtitle}>Kit UI&nbsp;is&nbsp;beautiful by&nbsp;design and features a&nbsp;suite
            of&nbsp;customization options that make it&nbsp;easy to&nbsp;implement your
            own custom design system on&nbsp;top of&nbsp;our components.</p>
        </div>
        <div className={styles.box}>
          Kit UI&nbsp;v5&nbsp;supports Material Design v2. Adoption of&nbsp;v3&nbsp;is tentatively planned for Kit
          UI&nbsp;v6&mdash;see the release schedule. You can follow this GitHub issue for future updates.
        </div>
        <div className='block'>
          <h2>Advantages of Kit UI</h2>
          <hr/>
          <ul>
            <li><span>Ship faster: </span>
              Over&nbsp;2,500 open-source contributors have poured countless hours into these components. Focus
              on&nbsp;your core business logic instead of&nbsp;reinventing the wheel&mdash;we&amp;apos;ve got
              your&nbsp;UI covered.
            </li>
            <li><span>Beautiful by&nbsp;default:</span>
              we&amp;apos;re meticulous about our implementation of&nbsp;Material Design, ensuring that every Kit
              UI&nbsp;component meets the highest standards of&nbsp;form and function, but diverge from the official
              spec where necessary to&nbsp;provide multiple great options.
            </li>
            <li><span>Customizability: </span>
              the library includes an&nbsp;extensive set of&nbsp;intuitive customizability features. The templates
              in&nbsp;our store demonstrate how far you can go&nbsp;with customization.
            </li>
            <li><span>Cross-team collaboration: </span>
              Kit UI&amp;apos;s intuitive developer experience reduces the barrier to&nbsp;entry for back-end developers
              and less technical designers, empowering teams to&nbsp;collaborate more effectively. The design kits
              streamline your workflow and boost consistency between designers and
              developers.
            </li>
            <li>
              <span>
                Trusted by&nbsp;thousands of&nbsp;organizations:
              </span>
              Kit UI&nbsp;has the largest&nbsp;UI community in&nbsp;the React ecosystem. It&amp;apos;s almost
              as&nbsp;old as&nbsp;React itself&mdash;its history stretches back to&nbsp;2014&mdash;and we&amp;apos;re
              in&nbsp;this for the long haul. You can count on&nbsp;the community&amp;apos;s support for years
              to&nbsp;come (e.g. Stack Overflow).
            </li>
          </ul>
        </div>
        <div className='block'>
          <h2>Kit UI&nbsp;vs. Base&nbsp;UI</h2>
          <hr/>
          <p className={styles.subtitle}>
            Kit UI&nbsp;and Base UI&nbsp;feature many of&nbsp;the same&nbsp;UI components, but Base UI&nbsp;comes
            without any default styles or&nbsp;styling solutions.
          </p>
          <p className={styles.subtitle}>
            Kit UI&nbsp;is&nbsp;comprehensive in&nbsp;that it&nbsp;comes packaged with default styles, and
            is&nbsp;optimized to&nbsp;work with Emotion
            (or&nbsp;styled-components).
          </p>
          <p className={styles.subtitle}>
            Base&nbsp;UI, by&nbsp;contrast, could be&nbsp;considered
            the &rsquo;skeletal&rsquo; or &rsquo;headless&rsquo; counterpart to&nbsp;Kit UI&mdash;in fact, future
            versions of&nbsp;Kit UI&nbsp;will use Base UI&nbsp;components and hooks for its foundational structure
          </p>
        </div>
      </div>
    </>
  );
}
