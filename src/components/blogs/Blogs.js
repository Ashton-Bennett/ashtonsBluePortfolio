import { Card, Grid, Row, Text, Image } from "@nextui-org/react";
import callBackImg from "public/images/blogs/callbackImage.jpg";
import chainImg from "public/images/blogs/chain_img.jpg";
import hookImg from "public/images/blogs/hookImg.jpg";
import siblingImg from "public/images/blogs/sibling_pic.jpg";
import memoImg from "public/images/blogs/usememo_pic.jpg";
import contextImg from "public/images/blogs/contextImg.jpg";
import Link from "next/link";

const Blogs = () => {
  const list = [
    {
      title: "UseCallback Hook",
      img: callBackImg,
      date: "April,27,2023",
      readTime: "2m",
      link: "/blogPosts/useCallbackBlog",
    },
    {
      title: "UseMemo Hook",
      img: memoImg,
      date: "April,10,2023",
      readTime: "3m",
      link: "/blogPosts/useMemoBlogPost",
    },
    {
      title: "CSS Selector (~)",
      img: siblingImg,
      date: "March,2,2023",
      readTime: "2m",
      link: "/blogPosts/cssSelectorBlogPost",
    },
    {
      title: "React's UseContext()",
      img: contextImg,
      date: "March,17,2023",
      readTime: "3m",
      link: "/blogPosts/reactsUseContextBlogPost",
    },
    {
      title: "useField Custom Hook",
      img: hookImg,
      date: "February,1,2023",
      readTime: "2m",
      link: "/blogPosts/useFieldCustomHookBlogPost",
    },
    {
      title: "Optional Chaining",
      img: chainImg,
      date: "February,16,2023",
      readTime: "3m",
      link: "/blogPosts/optionalChainingBlogPost",
    },
  ];

  return (
    <section id="blogs" className="paddingx paddingY columnOnLarge alignCenter">
      <h2 className="width600 line">Blogs</h2>
      <p className="greyText paddingTopMd paddingBottom3 maxWidth600">
        I&apos;m passionate about sharing my knowledge and experience with
        others. That&apos;s why I maintain a section on technical blogs, where I
        write about web development.
      </p>

      <Grid.Container gap={2} justify="flex-start" className="maxWidth900">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card className="opacityChangeOnHover" isPressable>
              <Link href={item.link}>
                <Card.Body css={{ p: 0 }}>
                  <Image
                    src={item.img.src}
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{item.title}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.readTime} read
                    </Text>
                  </Row>
                </Card.Footer>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </section>
  );
};
export default Blogs;
