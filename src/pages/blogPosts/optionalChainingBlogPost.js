import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import chainImage from "public/images/blogs/chain_img.jpg";
import Image from "next/image";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";
import Head from "next/head";

const exampleSyntaxCode = `obj.val?.prop
obj.val?.[expr]
obj.func?.(args)`;
const exampleCodeOne = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician.instrument)
// console will throw an error`;

const exampleCodeTwo = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.instrument)
// console will show undefined`;

const exampleCodeThree = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone)
// console will show undefined
console.log(musician?.contact?.address?.street)
// console will show "68 Abby Road"`;

const exampleCodeFour = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone?.call())
// console will throw an error
console.log(musician?.contact?.phone?.call?.())
// console will show undefined`;

const excFive = `const musician = {
name: "Paul McCartney",
group: "The Beatles",
contact:{
 address:{
   street: "68 Abby Road",
   city: "London",
   country:"England"
} }
};
console.log(musician?.contact?.phone ?? "Like I would give you Paul
McCartney's number...")
// console would return the value of everything on the left of the ??
as long as its value isn't null or undefined. In our case it is
undefined, so the value to the right of the ?? is returned.`;
const optionalChainingBlogPost = () => {
  return (
    <div className="rowOnLgScreen spaceAround">
      <Head>
        <title>Ashton Bennett|Blog</title>
        <meta
          name="description"
          content="Ashton Bennett's Web Developer Portfolio"
          key="desc"
        />

        <meta property="og:title" content="Ashton Bennett's Portfolio" />
        <meta
          property="og:description"
          content="Access to projects, technical blogs, and information."
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </Head>
      <div className="padding maxWidth1300">
        <section className="column alignCenter paddingBottom">
          <h1 className="paddingBottomSm">
            Optional Chaining Operator in Javascript
          </h1>
          <Card css={{ width: "fit-content" }}>
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                src={chainImage}
                alt="a chain"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"February, 2023"} />
        </section>
        <section>
          <p>
            <strong>What: &nbsp;</strong>An operator that can reduce potential
            errors.
          </p>
          <br></br>
          <p>
            <strong>When: &nbsp;</strong>Accessing object values/properties that
            may or may not be defined.
          </p>
          <br></br>
          <p>
            <strong>Where: &nbsp;</strong>It&apos;s better to return undefined
            instead of throwing an error.
          </p>
          <br></br>
          <p>
            <strong>Why: &nbsp;</strong>To keep apps from crashing and provide
            cleaner code.
          </p>
          <br></br>
          <p>
            <strong>How: &nbsp;</strong>Add a question mark with a period in
            between nested object property names.
          </p>
          <br></br>
          <p>
            Optional Chaining was introduced in ES2020, and Is used like the{" "}
            <span className="blueBg">
              <strong>&nbsp;.&nbsp;</strong>
            </span>
            &nbsp; operator, but when a value is null or undefined it returns
            undefined rather than throwing an error. It&apos;s a defensive way
            of coding to reduce potential errors. Best used when unsure of the
            potential values/properties of a nested object (ex: calling to an
            api).
          </p>
          <br></br>
          <h2>Syntax</h2>
          <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="">
          <p>
            Translation: If obj.val exists return the value of prop within said
            val.
          </p>
          <br></br>
          <h2>Examples</h2>
          <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <br></br>

        <p>
          Same instance but with the optional chain{" "}
          <span className="blueBg">
            <strong>&nbsp;?.&nbsp;</strong>
          </span>{" "}
          operator:
        </p>
        <br></br>

        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <br></br>

        <p>
          Can be used multiple times, to access potential values, deep within an
          object:
        </p>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>
        <br></br>
        <p>
          It will also work with functions that may or may not be within the
          object:
        </p>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeFour}
        </SyntaxHighlighter>
        <br></br>
        <p className="whiteColor addYPadding">
          The last example shows how to use optional chaining{" "}
          <span className="blueBg">
            <strong>&nbsp;?.&nbsp;</strong>
          </span>{" "}
          with the nullish coalescing<br></br>operator{" "}
          <span className="blueBg">
            <strong>&nbsp;??&nbsp;</strong>
          </span>{" "}
        </p>
        <br></br>
        <SyntaxHighlighter language="javascript">{excFive}</SyntaxHighlighter>
        <br></br>
        <section>
          <h2 className="">Summary</h2>
          <br></br>
          <p>
            Optional chaining can be a great tool to use whenever you are using
            dot notation to access nested values within objects. Returning
            undefined rather than throwing an error can help keep your
            application intact. Though, still new and not all browsers have
            adopted it,&nbsp;
            <Link
              title="go to another site about optional chaining"
              className=""
              href="https://caniuse.com/?search=optional%20chaining"
              target="_blank"
            >
              (See more here.)
            </Link>{" "}
            It&apos;s still worth checking out.
          </p>
          <br></br>
          <Link
            title="go back to blog listing page"
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
        </section>
      </div>
    </div>
  );
};
export default optionalChainingBlogPost;
