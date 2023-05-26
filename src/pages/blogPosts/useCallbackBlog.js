import Image from "next/image";
import Link from "next/link";
import callbackImage from "public/images/blogs/callbackImage.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";
import Head from "next/head";

const exampleSyntaxCode = `
//Primitive comparisons:
const a = 1;
const b = 1;
const c = 2;
console.log(a === b); // true
console.log(b === c); // false

const d = 'hello';
const e = 'hello';
const f = 'bye';
console.log(d === e); // true
console.log(e === f); // false

// Objects are compared differently:
const obj1 = { animal: 'dog' };
const obj2 = { animal: 'dog' };
const obj3 = obj1

console.log(obj1 === obj1) // true
console.log(obj1 === obj2) // false
console.log(obj2 === obj3) // false
console.log(obj1 === obj3) // true`;

const exampleCodeOne = `const cachedFunction = useCallback(function, dependencyArray)`;

const exampleCodeTwo = `import {useState, useEffect, useCallback} from "react"

// Only showing the relevant parts of the app. 

const App = () => {
    const [result, setResult] = useState(0);
    const [num1] = useState(4);
    const [num2] = useState(5);

    const buildArray = () => [num1, num2];

    useEffect(()=> {
        setResult(buildArray());
    },[buildArray]);

    return...`;

const exampleCodeThree = `const buildArray = useCallback(() => [num1, num2], [num1,num2]);`;

const useCallbackBlog = () => {
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
          <h1 className="paddingBottomSm">UseCallback Hook</h1>
          <Card className="maxWidth600">
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                className=""
                src={callbackImage}
                alt="a person on the phone with sunset in background"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"April, 2023"} />
        </section>

        <section className="padding2">
          <p>
            <strong>What:&nbsp;</strong> A React hook that lets you cache a
            function definition between re-renders until its dependency changes.
          </p>
          <br></br>
          <p>
            <strong>When:&nbsp;</strong> Passing a function from parent to child
            or adding a function to a dependency array.
          </p>
          <br></br>
          <p>
            <strong>Where:&nbsp;</strong> Inside of a top level, functional,
            React component. Cant be conditional.
          </p>
          <br></br>
          <p>
            <strong>Why:&nbsp;</strong> To help prevent unnecessary re-renders
            or help with performance.
          </p>
          <br></br>
          <p>
            <strong>How:&nbsp;</strong> Wrap the hook around a function and add
            a dependency array at the end.
          </p>
          <br></br>
          <h2>Syntax:</h2>
          <br></br>
          <SyntaxHighlighter language="javascript">
            {exampleCodeOne}
          </SyntaxHighlighter>
          <br></br>
          <div>
            <p>
              One of the keys to understanding the useCallback hook is{" "}
              <Link
                title="go to another site detailing referential equality"
                target="_blank"
                href="https://dev.to/vicnovais/understanding-referential-equality-in-reacts-useeffect-2m7o"
              >
                referential equality
              </Link>
              . In a nutshell you need to know that two objects that have the
              same values and properties might not be equal. Javascript will
              determine if they are based on reference rather than values.
            </p>
            <br></br>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>

        <section>
          <div>
            <h2>Adding a function to a dependency array:</h2>
            <br></br>
            <p>
              In following example we would like to create an array based on the
              values of num 1 and 2. Then set that array to results.
              Unfortunately, we have created an infinite loop.
            </p>
            <br></br>
          </div>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <br></br>
        <section>
          <h2>Whats happing:</h2>
          <br></br>
          <p>
            The buildArray function is initially created with a new reference,
            causing the useEffect to run. Every time the useEffect runs it will
            update the state causing another re-render. Which creates a new
            reference for buildArray causing the useEffect to run again and
            again.
          </p>
          <br></br>
          <p>
            To fix the loop we can wrap our buildArray function in a useCallback
            hook and add a dependency array with the variables num1 and 2. This
            will cache the referential value of the buildArray function and
            prevent the useEffect from running more than once in our case.
          </p>
          <br></br>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>

        <section>
          <br></br>
          <h2>UseCallback VS UseMemo:</h2>
          <br></br>
          <p>
            UseCallback is very similar to useMemo. The main difference is that
            useCallback returns the function that it wraps. UseMemo returns the
            value of the function that it wraps.
          </p>
        </section>

        <section>
          <br></br>
          <h2>Summary</h2>
          <br></br>
          <p>
            The useCallback can be a tricky thing to wrap your mind around if
            you are new to Javascript. I hope the simple example above will help
            anyone who is new to the hook. Here is a{" "}
            <Link
              title="go react documentation on use callback"
              href="https://react.dev/reference/react/useCallback"
              target="_blank"
            >
              link
            </Link>{" "}
            to the react documents that have more use cases and detailed
            explanations.
          </p>{" "}
          <br></br>
          <div>
            <Link
              title="go back to blog listing page "
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
        </section>
      </div>
    </div>
  );
};
export default useCallbackBlog;
