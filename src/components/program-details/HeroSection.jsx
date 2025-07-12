import herobanner from "../../assets/images/program-details/hero-banner.png"
import fact1 from "../../assets/images/program-details/fact-1.png"
import fact2 from "../../assets/images/program-details/fact-2.png"
import fact3 from "../../assets/images/program-details/fact-3.png"
import fact4 from "../../assets/images/program-details/fact-4.png"

export default function HeroSection () {
    return (
        <main className=" pt-[100px] md:pt-[160px]">
            <div className="flex lg:flex-row lg:flex-nowrap flex-col justify-between lg:mx-[8%] lg:pb-12">
                <div className="md:mt-12 mx-4">
                    <h1 className="md:text-4xl text-[18px] text-[#333333] lg:text-left text-center font-semibold leading-[140%] lg:w-[80%]">The Prodefied 20-Week Product Manangement Program</h1>
                    <p className="md:text-[28px] text-sm text-[#4D4D4D] lg:text-left text-center font-medium md:mt-6 mt-3">Get One Year of Product Management Experience in Just 20 Weeks</p>
                </div>
                <img src={herobanner} alt="Hero-banner" className="mt-4 md:mt-0 lg:max-w-[75%]"/>
            </div>
            <div className="px-4 lg:px-32 bg-[#E5E8FF] py-4 md:py-16">
                <p className="font-normal text-[#4D4D4D] text-center md:text-[22px] text-[11px] px-2 md:px-8">Our 20-week program is designed to simulate the real working world of Product Mnangement so you don’t just learn the skills, you become a Product Manager. Through mentorship, you’ll graduate ready to get hired and thrive in your role.</p>
                <div class="flex flex-col gap-4 md:gap-6 justify-between justify-center lg:flex-row lg:flex-wrap h-auto md:h-auto mt-4 md:mt-12 lg:mx-auto">
                    {/* Image 1 */}
                    <img
                        src={fact1}
                        alt="fact 1 about prodefied"
                        className="w-[48%] lg:w-auto flex-shrink-0"
                    />

                    {/* Image 2 (hidden on mobile) */}
                    <img
                        src={fact2}
                        alt="fact 2 about prodefied"
                        className="hidden lg:block lg:w-auto flex-shrink-0"
                    />

                    {/* Image 3 */}
                    <img
                        src={fact3}
                        alt="fact 3 about prodefied"
                        className="w-[48%] lg:w-auto -mt-[15%] self-end md:mt-0 lg:self-auto flex-shrink-0"
                    />

                    {/* Image 4 (hidden on mobile) */}
                    <img
                        src={fact4}
                        alt="fact 4 about prodefied"
                        className="hidden lg:block lg:w-auto flex-shrink-0"
                    />
                </div>
            </div>
        </main>
    );
};