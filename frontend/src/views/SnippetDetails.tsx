import CodeArea from "../components/SnippetDetails/CodeArea/CodeArea";
import DescriptionArea from "../components/SnippetDetails/DescriptionArea/DescriptionArea";
import Tags from "../components/SnippetDetails/Tags/Tags";
import Title2 from "../components/Titles/Title-2"

export function SnippetDetails() {



    return (
        <>
            <Title2 center={true} text="Le super snippet destructeur de projet" />

            <DescriptionArea text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque augue, malesuada lobortis placerat eget, molestie sit amet nulla. Quisque quis justo semper, consectetur mi quis, dignissim quam. Integer tristique et nunc ac ultrices. Sed sed leo sollicitudin, semper massa sed, condimentum risus. Curabitur dignissim bibendum leo ac gravida. Nulla quis elit mi. Vestibulum dui mauris, euismod vitae lacus id, luctus posuere tortor. Proin scelerisque ut velit eu fermentum." />

            <div className="snippet-contents">

                <CodeArea code=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque augue, malesuada lobortis placerat eget, molestie sit amet nulla. Quisque quis justo semper, consectetur mi quis, dignissim quam. Integer tristique et nunc ac ultrices. Sed sed leo sollicitudin, semper massa sed, condimentum risus. Curabitur dignissim bibendum leo ac gravida. Nulla quis elit mi. Vestibulum dui mauris, euismod vitae lacus id, luctus posuere tortor. Proin scelerisque ut velit eu fermentum.

                Aenean sit amet elementum orci. Integer pretium suscipit metus a volutpat. Maecenas sed ex nisi. Donec in elementum mi. Vivamus suscipit purus eget turpis tempor posuere. Suspendisse elit erat, egestas ac mi sit amet, blandit mattis purus. Donec blandit lobortis hendrerit. Donec ligula diam, iaculis non maximus id, ornare non urna. Phasellus nisi velit, bibendum id nisi a, convallis tristique nisl. Nunc lacus nisi, finibus et rutrum nec, luctus eu est. Curabitur fermentum est vel lorem congue, vel aliquam est scelerisque. Vestibulum et mi elit. Suspendisse sit amet libero velit. Nullam eu erat et turpis efficitur viverra. Sed sed blandit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Etiam condimentum imperdiet urna sit amet gravida. Fusce cursus justo nec metus finibus venenatis. Donec eget sem lacinia, gravida ex et, semper justo. Nulla convallis pretium turpis, vitae ullamcorper mauris. Suspendisse ac feugiat libero. Morbi vitae neque egestas, blandit tellus a, venenatis tellus. Fusce turpis augue, blandit id condimentum eu, placerat ut libero. Vivamus maximus sit amet dui nec viverra. Maecenas efficitur dictum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio dui, tincidunt dictum iaculis vel, mollis ac tellus. '/>

                <div className="snippet-tag-area ">
                    <Tags text='Javascript' />
                    <Tags text='Javascript' />
                    <Tags text='Javascript' />
                </div>

            </div>
        </>
    )

}

export default SnippetDetails;