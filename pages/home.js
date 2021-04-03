import { useRouter } from "next/router";
import Banner from "../components/Banner/Banner";
import useLocale from "../hooks/useLocale";
import fetcher from "../utils/fetcher";

const Home = ({preContent}) => {

    const locale = useRouter().locale;

    const { content } = useLocale(locale, preContent);
    return (
        <Banner content={content}></Banner>
    )
}

export async function getStaticProps({ locale }) {
    //[SEO]: To create static pages for each locale at build time.
    const preContent = await fetcher(`http://localhost:3000/locale/${locale}.json`);
    return {
        props: {
            preContent
        }
    }
}

export default Home;