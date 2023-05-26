import Image from "next/image";
import Link from "next/link";
import siblingImg from "public/images/blogs/sibling_pic.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
const exampleSyntaxCode = `former_element ~ target_element { style properties }`;

const exampleCodeOne = `
/*  CSS FILE */

h1 ~ p {
  color:blue;
}`;
const exampleCodeTwo = `<div>
<h1>CSS General Sibling Selector ~</h1>
<div>This element is not selected</div>
<p>This is a sibling</p>
<p>This is a sibling</p>
<h2>It is different than the + selector</h2>
<p>This is a sibling</p>
<p>This is a sibling</p>
</div>`;
const CssSelectorBlogPost = () => {
  return (
    <div className="rowOnLgScreen spaceAround">
      <div className="padding maxWidth1300">
        <section className="column alignCenter paddingBottom">
          <h1 className="paddingBottomSm">CSS General Sibling Operator (~)</h1>
          <Card css={{ width: "260px" }}>
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                src={siblingImg}
                alt="young siblings hugging each other"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"March, 3, 2023"} />
        </section>
        <section>
          <p>
            <strong>What: &nbsp;</strong>A CSS combinator.
          </p>
          <br></br>
          <p>
            <strong>When: &nbsp;</strong>You want to add styling to an element
            that proceeds a different element at some point.
          </p>
          <br></br>
          <p>
            <strong>Where: &nbsp;</strong>In your CSS stylesheet.
          </p>
          <br></br>
          <p>
            <strong>Why: &nbsp;</strong>To reduce unnecessary selectors, such as
            class and id.
          </p>
          <br></br>
          <p>
            <strong>How: &nbsp;</strong>By adding ~ in between two selectors in
            a CSS stylesheet that also have the same parent.
          </p>
          <br></br>
          <p>
            It is used allot like the adjacent sibling selector (+), but they
            can’t be used interchangeably. It will make your life easier knowing
            the difference.
          </p>
          <br></br>
          <p>
            The adjacent <strong>sibling selector</strong> will work when the
            second selector
            <em> immediately</em> follows the first selector. While the{" "}
            <strong>general selector </strong>
            will style all the target selectors even if they{" "}
            <em>are not immediately </em>
            after. The general selector tends to be able to target more
            elements.
          </p>
          <br></br>
          <h2>Syntax</h2> <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>

        <h2>Examples</h2>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <br></br>
        <p>
          Here all the p elements will be colored blue, even though they are not
          immediately following the h1 element and even if there is a h2 thrown
          in the middle of the four p tags. If we changed the CSS file to
          include the + instead of the ~ none of the tags will be selected and
          nothing would be the colored blue.
        </p>
        <br></br>
        <h2 className="">Summary</h2>
        <br></br>
        <p>
          The general sibling combinator aka selector (Pronounced TILL-duh or
          TILL-dee.) is a great tool to add to your belt. It will help you
          reduce the amount of HTML while providing specific CSS styling. Though
          it is used similarly as the adjacent selector (+) the outcomes are
          different. I have created a code pen to play around with. You can find
          it&nbsp;
          <Link
            title="go to codepen website"
            className=""
            href="https://codepen.io/Ashtonbennett801/pen/JjadKjg?editors=1100"
            target="_blank"
          >
            here.
          </Link>{" "}
        </p>
        <br></br>
        <Link
          title="go back to blog page"
          className="row opacityChangeOnHover"
          href="/#blogs"
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#214ce5"
            width={34}
          >
            <path
              d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z"
              fillRule="nonzero"
            />
          </svg>
          <h3 className="cssColor">back</h3>
        </Link>
      </div>
    </div>
  );
};
export default CssSelectorBlogPost;
