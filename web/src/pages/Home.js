import HeadComponent from "../components/HeadComponent";
import StoryComponent from "../components/StoryComponent";
import ServiceComponent from "../components/ServiceComponent";
import PricingComponent from "../components/PricingComponent";
import FooterComponent from "../components/FooterComponent";
import Scroll from "react-scroll";

export default function Home(){


    let Element=Scroll.Element


    return (
        <div className='min-h-screen bg-red-100 font-pop'>
            <Element name={'landing'}>
                <HeadComponent/>
            </Element>
            <StoryComponent/>
            <Element name={'service'}>
                <ServiceComponent/>
            </Element>
            <Element name={'pricing'}>
                <PricingComponent/>
            </Element>
            <FooterComponent/>
        </div>
    )
}