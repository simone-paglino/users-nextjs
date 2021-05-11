import Head from "next/head";

const HeadMeta = ({ description, title, email }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="your, tags" />
        <meta name="description" content={description} />
        <meta name="subject" content="Test for Genuino company" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta name="Classification" content="Information Technology" />
        <meta name="author" content="Simone Paglino, simpag99@gmail.com" />
        <meta name="designer" content="Simone Paglino, simpag99@gmail.com" />
        <meta name="owner" content="Simone Paglino, simpag99@gmail.com" />
        <meta name="url" content="http://www.websiteaddrress.com" />
        <meta name="og:title" content={title} />
        {/* <!-- Facebook --> */}
        <meta name="og:type" content="Information Technology Test" />
        <meta name="og:site_name" content={title} />
        <meta name="og:description" content={description} />
        <meta name="fb:page_id" content="43929265776" />
        {email ? <meta name="og:email" content="me@example.com" /> : null}
      </Head>
    </div>
  );
};

export default HeadMeta;
