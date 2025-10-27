import heroBanner from '../assets/hero-banner.svg'
import '../style.css';
import PrimaryButton from '../components/Buttons/PrimaryButton';

export function Homepage() {

    return (
        <>
            <img src={heroBanner} alt="Hero banner" className="hero-banner" />
            <p className='homepage-presentation'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dolor fermentum, semper risus at, volutpat sapien. Mauris lobortis lectus et feugiat vulputate. Sed et mauris in elit luctus mattis non ac neque. Vivamus molestie ac orci eget imperdiet. Etiam fringilla felis sem, id congue quam sollicitudin eu. Mauris vulputate id velit nec pretium. Nullam congue sed nisl cursus vulputate. Nulla facilisi. Sed id malesuada lectus. Mauris fermentum accumsan erat quis suscipit. Integer eu rhoncus tortor. Morbi dictum eu velit in cursus. Curabitur dignissim erat pellentesque, placerat nulla sed, tincidunt erat.

                Duis quis viverra ante. Nunc nec sapien aliquet, vestibulum ex ac, imperdiet est. Curabitur vestibulum quam mauris, vel consequat nunc laoreet vitae. Vivamus quis dolor porta, fermentum diam sit amet, rhoncus orci. Quisque ante purus, fermentum sit amet metus nec, ultricies varius nulla. Cras pretium tellus molestie viverra lacinia. Proin erat mauris, sagittis id faucibus vestibulum, rhoncus tincidunt tellus.

                Nulla et semper lorem. Suspendisse potenti. Mauris non dui arcu. Proin porta sapien rhoncus sollicitudin volutpat. Donec sapien sem, dictum in sem ac, pulvinar rhoncus est. In eu enim nunc. Praesent placerat dictum nisl, vitae pretium magna. Cras eu nunc ante. Duis a bibendum lacus. Integer pellentesque vestibulum pulvinar. Integer nec accumsan arcu. Ut blandit, diam nec viverra vestibulum, est lorem sagittis dolor, vel vulputate est sapien sit amet felis. Nunc efficitur vulputate sem, ut gravida velit suscipit ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
        <div className="homepage-cta">
        <PrimaryButton buttonLink='/browse-snippets' buttonText='Découvrir les snippets'/>
        </div>
        </>
    )
}

export default Homepage;