import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeImage from "public/images/blogs/contextImg.jpg";
import Image from "next/image";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";

const exampleSyntaxCode = `const VariableName1 = createContext(defaultValue);

const VariableName2 = useContext(VariableName1);`;

const exampleCodeOne = `import { createContext, useState } from "react";
// inside the component 
export const UserContext = createContext(null);`;

const exampleCodeTwo = `Parent component {
  const [user, setUser] = useState("");
  return(
    <UserContext.Provider value={user}>
      <Component>
        <ChildComponent>
          <GrandChildComponent/>   
        </ChildComponent>
      </Component>
    </UserContext.Provider>
 );
}
`;

const exampleCodeThree = `import { UserContext } from "../src/app/page";
import { useContext } from "react";

const GrandChildComponent = () => {
  const user = useContext(UserContext);
  return (
      <p>
        	Current User:{user}
      </p>
  );
};
export default ComponentC;`;
const reactUseContextBlogPost = () => {
  return (
    <div className="rowOnLgScreen spaceAround">
      <div className="padding maxWidth1300">
        <section className="column alignCenter paddingBottom">
          <h1 className="paddingBottomSm">React&apos;s useContext hook</h1>
          <Card className="maxWidth600">
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                src={codeImage}
                alt="code on a computer"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"March, 17, 2023"} />
        </section>

        <section>
          <p>
            <strong>What: &nbsp;</strong>A tool used to help manage state.
          </p>
          <br></br>
          <p>
            <strong>When: &nbsp;</strong>You want to share state among multiple
            components.
          </p>
          <br></br>
          <p>
            <strong>Where: &nbsp;</strong>It&apos;s ok for said state to be
            re-rendered without having a large hit on performance.
          </p>
          <br></br>
          <p>
            <strong>Why: &nbsp;</strong>To avoid prop drilling / sending props
            to components that don&apos;t use them directly.
          </p>
          <br></br>
          <p>
            <strong>How: &nbsp;</strong>Wrap the parent component with a
            provider, then call the consumer for the current value.
          </p>
          <br></br>
          <p>
            The useContext hook is a great tool for managing state. In some
            simple cases it can be used to replace state managing tools like
            Redux, and GraphQL. Before going that route, I would recommend
            considering how many different places your shared states will be
            re-rendered with every update. If it&apos;s a large amount it could
            slow your app&apos;s performance.
          </p>
          <br></br>
          <h2>Syntax</h2> <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section>
          <p>
            To get started import and create your context in the parent of the
            components that will use the shared value..
          </p>
        </section>
        <br></br>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section>
          <br></br>
          <p>
            Then wrap your parent component with the provider and set the state
            of the variable that will be used. Make sure to give your provider
            component a value of the shared state.
          </p>
          <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <br></br>
        <section>
          <p>
            In this case we want to share the value of user only with the
            GrandChildComponent. If we needed the value in Component, and
            ChildComponent, as well, then it would be best to pass props, and
            not use Context. Now that we have the provider set up its time to
            import the value of user into our GrandChildComponent. By using the
            useContext() hook we are able to grab the value and set it to a
            local variable name. In our case it&apos;s set to user.
          </p>
          <br></br>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>
        <br></br>
        <section>
          <h2>Summary</h2>
          <br></br>
          <p>
            It&apos;s important to understand that the outermost component (the
            provider) declares and sets the desired shared state. That state can
            be shared to any child/nested component of the provider directly,
            without passing it through multiple layers of the component tree.
            Some common use cases are logged in / current user information and
            toggling different styling themes.&nbsp;
          </p>
          <br></br>
          <p>
            Check out the full code on&nbsp;
            <Link
              title="go to github"
              href="https://github.com/Ashton-Bennett/test_apps/tree/context_practice"
              target="_blank"
            >
              Github
            </Link>{" "}
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
export default reactUseContextBlogPost;
