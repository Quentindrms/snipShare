import CodeArea from "../components/SnippetDetails/CodeArea/CodeArea";
import Commentary from "../components/SnippetDetails/Commentary/Commentary";
import DescriptionArea from "../components/SnippetDetails/DescriptionArea/DescriptionArea";
import { useParams } from "react-router";
import Tags from "../components/SnippetDetails/Tags/Tags";
import Title2 from "../components/Titles/Title-2"
import { useEffect } from "react";
import { useApiFetch } from "../hooks/useApiFetch";
import type { Snippet } from "../types/Types";

export function SnippetDetails() {

    const {identifiant} = useParams();
    const {fetchApi, isLoading, result} = useApiFetch<Snippet[]>();

    useEffect(() => {
        const init = async () => {
            try{
                const res = await fetchApi({
                    method: 'GET',
                    path: `/snippets/fetch-snippet/${identifiant}`,
                    credentials: 'include',
                });
            } catch(err){
                console.error(err);
            }
        };
        init();
    }, []);

    
    return (
        <>
            <Title2 center={true} text={result?.data[0].titre} />

            <DescriptionArea text={result?.data[0].description} />

            <div className="snippet-contents">

                <CodeArea code={result?.data[0].code} />

                <div className="snippet-tag-area ">
                    <Tags text='Javascript' />
                    <Tags text='Javascript' />
                    <Tags text='Javascript' />
                </div>

                <div className="commentary-area">

                    <Commentary contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque augue, malesuada lobortis placerat eget, molestie sit amet nulla. Quisque quis justo semper, consectetur mi quis, dignissim quam. Integer tristique et nunc ac ultrices. Sed sed leo sollicitudin, semper massa sed, condimentum risus. Curabitur dignissim bibendum leo ac gravida. Nulla quis elit mi. Vestibulum dui mauris, euismod vitae lacus id, luctus posuere tortor. Proin scelerisque ut velit eu fermentum."
                        username="Digidix"
                        publishDate="29/10/2025" />

                    <Commentary contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque augue, malesuada lobortis placerat eget, molestie sit amet nulla. Quisque quis justo semper, consectetur mi quis, dignissim quam. Integer tristique et nunc ac ultrices. Sed sed leo sollicitudin, semper massa sed, condimentum risus. Curabitur dignissim bibendum leo ac gravida. Nulla quis elit mi. Vestibulum dui mauris, euismod vitae lacus id, luctus posuere tortor. Proin scelerisque ut velit eu fermentum."
                        username="Digidix"
                        publishDate="29/10/2025" />

                </div>

            </div>
        </>
    )

}

export default SnippetDetails;