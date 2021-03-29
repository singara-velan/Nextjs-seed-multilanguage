import Banner from '../components/Banner/Banner';
import fetcher from '../utils/fetcher';
import useLocale from "../hooks/useLocale";

const Index = ({lang, preContent}) => {
    const { content } = useLocale(lang, preContent);
    return (
        <Banner content={content}></Banner>
    )
}

export async function getStaticProps() {
    const preContent = await fetcher('http://localhost:3000/locale/kannada.json');
    return {
        props: {
            preContent
        }
    }
  }

export default Index;