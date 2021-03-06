import Head from "next/head";
import Link from "next/link";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <h1 className={css.title}> Welcome to the Ninja List Test</h1>
        <p className={css.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non fugit,
          et quisquam qui necessitatibus autem soluta deleniti eum, inventore
          sapiente ea libero quod animi mollitia excepturi iure veritatis.
          Ratione exercitationem porro obcaecati tempora temporibus, tempore eum
          dolore blanditiis distinctio quis unde rerum quibusdam doloremque
          laudantium qui est corporis cumque. Nisi unde velit, qui culpa maiores
          laborum vitae temporibus libero vero.
        </p>
      </main>
      <Link href="/ninjas">
        <a className={css.btn}>See all ninjas</a>
      </Link>
    </>
  );
}
