const About = () => {
  return (
    <section id="about" className="paddingx paddingY columnOnLarge alignCenter">
      <h2 className="line width600">About Me</h2>
      <p className="greyText paddingTopMd maxWidth600 ">
        Hey there, my name is Ashton Bennett. I am a front end developer who
        loves crafting immersive digital experiences. I specialize in
        translating design concepts into beautifully responsive and
        user-friendly websites.
      </p>

      <p className="greyText paddingTopMd maxWidth600">
        I specialize in leveraging HTML, CSS, JavaScript, and React to develop
        clean and semantic code that guarantees optimal performance,
        accessibility, and user experiences. By staying up to date on the latest
        industry trends and adhering to best practices, I consistently deliver
        innovative and cutting-edge solutions that align with modern web
        development standards.
      </p>
      <p className="paddingTopMd width600 largeTextHeading">
        Personal Snapshots
      </p>
      <ul className="noMargin marginTop width600">
        <li className="greyText">
          <span role="img" aria-label="guitar">
            🎸 &nbsp;
          </span>
          Played guitar in a professional 10 piece soul band.
        </li>
        <li className="greyText">
          <span role="img" aria-label="surfer">
            🏄🏻‍♂️ &nbsp;
          </span>
          Spent a month in Bali learning to Surf.
        </li>
        <li className="greyText">
          <span role="img" aria-label="guitar">
            👨🏻‍🍳 &nbsp;
          </span>
          Was a Chef for 8 years.
        </li>
        <li className="greyText noMargin">
          <span role="img" aria-label="guitar">
            👍 &nbsp;
          </span>
          Hitch hiked thousands of miles while traveling throughout Europe.
        </li>
      </ul>
    </section>
  );
};

export default About;
