import Image from "next/image";
import Link from "next/link";
import hookImg from "public/images/blogs/hookImg.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import xIcon from "public/images/blogs/iconmonstr-x-mark-1-240.png";
import checkIcon from "public/images/blogs/iconmonstr-check-mark-15-240.png";
import AvatarAshton from "@/components/blogs/Avatar";
import { Card } from "@nextui-org/react";

const exampleSyntaxCode = `const App = () => {
    const [name,setName] = useState("")
    
    return(
        <div>
            <form>
                name:
                <input
                type="text"
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
            </form>
        </div>
    )
}
export default App;`;
const exampleCodeOne = `const App = () => {
    const name = usefield("text")
    
    return(
        <div>
            <form>
                name:
                <input
                {...name}
                />
            </form>
        </div>
    )
}
export default App;`;

const exampleCodeTwo = `import { useState } from "react";

const useField = (type) => {
    const [value, setValue] = useState("")

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onResetHandler = () => {
        setValue("")
    }

    return [{type, value, onChange}, onResetHandler]
};

export default useField;`;

const exampleCodeThree = `import {useField} from "../../hooks/useField
// in the component
useField("HTML input type as string")`;

const exampleCodeFour = `const username = useField();
const password = useField("password");
const email = useField("email");
const url = useField("url");
const birthdate = useField("date")`;

const excFive = `const clearForm = (event) => {
    event.preventDefault();
    usernameResetHandler();
    passwordResetHandler();
    emailResetHandler();
    urlResetHandler();
    birthDateHandler();
}`;

const useFieldCustomHookBlogPost = () => {
  return (
    <div className="rowOnLgScreen spaceAround">
      <div className="padding maxWidth1300">
        <section className="column alignCenter paddingBottom">
          <h1 className="paddingBottomSm">UseField Custom Hook</h1>
          <Card css={{ width: "fit-content" }}>
            <Card.Body css={{ p: 0 }}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width="100%"
                height={400}
                src={hookImg}
                alt="a hook"
              />
            </Card.Body>
          </Card>
          <AvatarAshton date={"February, 2023"} />
        </section>
        <section>
          <p>
            <strong>What: &nbsp;</strong> A custom hook that works great on
            input fields.
          </p>
          <br></br>
          <p>
            <strong>When: &nbsp;</strong> When you have a form with multiple
            inputs with each input being saved to state.
          </p>
          <br></br>
          <p>
            <strong>Where: &nbsp;</strong>Can be imported from
            ../../hooks/usefield, all hook rules apply.
          </p>
          <br></br>
          <p>
            <strong>Why: &nbsp;</strong>To reduce the amount of event handlers
            needed for input fields.
          </p>
          <br></br>
          <p>
            <strong>How: &nbsp;</strong>Import, set a variable to hook, use
            variable in an input tag, call variable using .value or
            .onResetHandler().
          </p>
          <br></br>
          <div className="row">
            <div>
              <h2>
                <strong>This:</strong>
              </h2>
            </div>
            <Image
              width={32}
              height={"auto"}
              className="marginLeft"
              src={xIcon}
              alt="X"
            ></Image>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleSyntaxCode}
        </SyntaxHighlighter>
        <br></br>
        <section className="column">
          <div className="row">
            <div>
              <h2>
                <strong>Becomes:</strong>
              </h2>
            </div>
            <Image
              width={32}
              height={"auto"}
              className="marginLeft"
              src={checkIcon}
              alt="check icon"
            ></Image>
          </div>
        </section>
        <SyntaxHighlighter language="javascript">
          {exampleCodeOne}
        </SyntaxHighlighter>
        <section className="column">
          <br></br>
          <div>
            <br></br>
            <h2>Syntax of the hook itself:</h2>
            <br></br>
            <p>
              Needs to be passed a string and will return an array. The first
              index of that array is an object that holds the value. The second
              index is a function that will reset the value when called.
              operator:
            </p>
            <br></br>
          </div>
        </section>

        <SyntaxHighlighter language="javascript">
          {exampleCodeTwo}
        </SyntaxHighlighter>
        <br></br>
        <h2>To use it:</h2>
        <br></br>

        <SyntaxHighlighter language="javascript">
          {exampleCodeThree}
        </SyntaxHighlighter>

        <br></br>
        <h2 className="addYPadding">Examples:</h2>
        <br></br>

        <SyntaxHighlighter language="javascript">
          {exampleCodeFour}
        </SyntaxHighlighter>
        <br></br>
        <section className="addXPadding column">
          <div className="whiteColor addYPadding">
            <p>
              Once the variable is set to the hook, that variable can be used in
              an input tag. The parameter is not required, but if used should
              always be a string. Passing a parameter is beneficial for
              validation and easier user entry.
            </p>
            <br></br>
            <p>
              By passing “password” we are able to get an input field that shows
              dots.{" "}
            </p>
            <br></br>
            <p>
              {" "}
              By passing “email” we are able to get an input field that requires
              “@”
            </p>
            <br></br>
            <div>
              <p>
                {" "}
                For more examples on different input values that can be passed
                into useField() go to:
                <Link
                  title="go to mozilla website to learn more"
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                  target="_blank"
                  className=""
                >
                  {" "}
                  link
                </Link>
              </p>
            </div>
          </div>
        </section>
        <br></br>
        <SyntaxHighlighter language="javascript">{excFive}</SyntaxHighlighter>

        <section className="addXPadding ">
          <h2 className="marginTop">Form/input Example:</h2>
          <br></br>
          <p>
            As the user enters text into the field it will update state. That
            state can be accessed at username.value.Any variables set to
            useField() will have the property: “.onResetHandler()” This property
            is useful to clear the form once the data has been sent and stored
            elsewhere.{" "}
          </p>{" "}
          <br></br>
          <p>
            I have shared a practice app, to see useField in action, that can be
            found on Github at:{" "}
            <Link
              title="go to github"
              href="https://github.com/Ashton-Bennett/test_apps/tree/usefield"
              target="_blank"
            >
              link
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
export default useFieldCustomHookBlogPost;
