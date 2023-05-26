import Image from "next/image";
import Link from "next/link";
import useMemoImg from "public/images/blogs/usememo_pic.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";

const exampleSyntaxCode = `const cachedValue = useMemo(calculateValue, dependencies)`;

const exampleCodeOne = `function App() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("white");
  
    const squareRoot = slowFunction(counter);
  
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
    const handleChangeColor = () => {
      setColor(color === "white" ? "aqua" : "white");
    };
    // more in the component but this is what matters most. `;

const exampleCodeTwo = `import { useMemo } from "react";
const UseMemoComponent = () => {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("white");
  
    const squareRoot = useMemo(() => slowFunction(counter), [counter]);
     // the dependency array is the [counter] part.
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
    const handleChangeColor = () => {
      setColor(color === "white" ? "aqua" : "white");
    };
  
    // more below but this is the import part`;

const useMemoBlogPost = () => {
  return (
    <div className="rowOnLgScreen spaceAround">
      <div className="maxWidth1300">
        <section className="column alignCenter paddingxMd">
          <h1 className="paddingYSm">UseMemo Hook</h1>
          <Card className="maxWidth600">
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                src={useMemoImg}
                alt="code on a computer"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"April, 10, 2023"} />
        </section>

        <section className="paddingxMd paddingY2">
          <p>
            <strong>What: &nbsp;</strong>A tool provided by React to help reduce
            unnecessary re-renders.
          </p>
          <br></br>
          <p>
            <strong>When: &nbsp;</strong>A function takes along time to complete
            and is possibly slowing down other parts of the component.
          </p>
          <br></br>
          <p>
            <strong>Where: &nbsp;</strong>Needs to be inside of a react
            component, wrapped around the function it is trying to improve.
          </p>
          <br></br>
          <p>
            <strong>Why: &nbsp;</strong>To help improve performance and UI of an
            application.
          </p>
          <br></br>
          <p>
            <strong>How: &nbsp;</strong> It works by caching the value(s) of the
            dependency array. If the given value or values change then it will
            rerun the slow/expensive function.
          </p>
          <br></br>
          <p>
            This hook is something that you probably won&apos;t use often, but
            will be very valuable in certain cases. Keep in mind if used too
            much it can overfill cache and slow performance. This post is about
            using UseMemo to improve performance. Though, It can also be used to
            ensure referential equality, I won&apos;t be going over that here.
            To see more use cases click
            <Link
              title="go to react page with more details"
              href="https://react.dev/reference/react/useMemo"
              target="_blank"
            >
              {" "}
              here
            </Link>
            .
          </p>
          <br></br>
          <h2>Syntax</h2>
          <br></br>
          <SyntaxHighlighter language="javascript">
            {exampleSyntaxCode}
          </SyntaxHighlighter>
        </section>
        <br></br>
        <section className="paddingxMd">
          <p>
            {" "}
            The example component below is NOT using the useMemo hook. It has a
            couple of state setting hooks and event handlers that are
            called/changed on the click of two different buttons. There is a
            slow function that will be called every time the user clicks the
            button to increase the counter. This slow function will make the
            handleChangeColor function also run slow.
          </p>
          <br></br>
          <SyntaxHighlighter language="javascript">
            {exampleCodeOne}
          </SyntaxHighlighter>
        </section>
        <br></br>
        <br></br>
        <section className="paddingxMd">
          <p>
            The next example is the same component with a different name and is
            using the useMemo hook. The hook wraps around the function that
            needs the performance boost. Keep in mind once wrapped this function
            won&apos;t slow the handleChangeColor function. When the
            value/values of the dependency array change it will trigger the slow
            function to be called again and will be it&apos;s usual slow speed.
            The benefit here is useMemo will make that slow function
            independently slow.
          </p>
          <br></br>
          <SyntaxHighlighter language="javascript">
            {exampleCodeTwo}
          </SyntaxHighlighter>
        </section>
        <br></br>
        <section>
          <h2 className="paddingxMd">Example App</h2>
          <br></br>
          <iframe
            src="https://codesandbox.io/embed/usememo-hook-example-kju4s6?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title="useMemo Hook Example"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </section>
        <br></br>
        <section className="paddingxMd ">
          <h2>Summary</h2>
          <br></br>
          <p>
            The useMemo hook is a tool all React developers will want to keep in
            their back pocket. It can help isolate functions that will take a
            long time to complete, and if that function isn&apos;t being used
            allot, why let it slow down the whole component? The example given
            is very basic, but when needed in a complex situation useMemo can be
            a real life saver.
          </p>
          <br></br>
          <p>
            Check out the example app code on&nbsp;
            <Link
              href="https://github.com/Ashton-Bennett/test_apps/tree/usememo"
              target="_blank"
            >
              Github
            </Link>{" "}
          </p>
          <br></br>
          <div>
            <Link
              title="go back to blog listing page"
              className="row paddingBottom opacityChangeOnHover"
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
              <h3 className="cssColor ">back</h3>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
export default useMemoBlogPost;
