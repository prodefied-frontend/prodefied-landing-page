import BookOpenIcon from "../../assets/icons/program-details/BookOpen.svg"
import LinkedinIcon from "../../assets/icons/program-details/LinkedinLogo.svg"
import NewJobIcon from "../../assets/icons/program-details/new-job.svg"
import DurationIcon from "../../assets/icons/program-details/appointment-02.svg"
import Banner1 from "../../assets/images/program-details/program-structure-banner1.png"
import Banner2 from "../../assets/images/program-details/program-structure-banner2.png"
import Banner3 from "../../assets/images/program-details/program-structure-banner3.png"

const CustomDivider = () => (
  <div className="relative lg:w-20 w-10 lg:h-6 h-3 flex items-center justify-center">
    {/* Circle */}
    <div className="lg:w-4 lg:h-4 w-2 h-2 rounded-full border border-[#000F84] bg-white z-10"></div>
    {/* Horizontal line behind the circle */}
    <div className="absolute w-full lg:h-0.5 h-[1px] bg-[#000F84]"></div>
  </div>
);

export default function ProgramStructure () {
    return (
        <div className="py-4 lg:py-16 px-4 lg:px-auto">
            <h2 className="text-center text-[#001299] font-medium leading-[140%] text-base lg:text-[32px]">Program Struture</h2>
            <p className="text-center text-[#4D4D4D] font-normal text-[11px] lg:text-[22px] lg:my-6 my-2 lg:w-[45%] mx-auto">The program is divided into 3 key phases each carefully built to accelerate your learning, confidence, and career readiness.</p>
            <div className="flex justify-center items-center text-[11px] lg:text-[22px] font-medium space-x-4">
                <span>Learning</span>
                <CustomDivider />
                <span>Intership</span>
                <CustomDivider />
                <span>Career</span>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-6 md:mt-12">
                <div className="hover:scale-110">
                    <div className="flex items-end gap-2 text-[14px] md:text-[18px] font-normal leading-[140%]">
                        <span>Phase</span>
                        <span className="text-white md:text-[30px] text-[23px] bg-[#001299] leading-[140%] font-medium rounded-full w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 flex justify-center items-center md:-mb-[15px] -mb-[10px]">
                            01
                        </span>
                    </div>
                    <div className="max-w-[413px] md:min-h-[630px] rounded-2xl border border-[#6678FF] shadow-md p-4 space-y-4 text-sm font-sans">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <span className="text-[#001299] font-normal md:text-[18px] text-[14px] flex items-center gap-1"><img src={BookOpenIcon} alt="Linkedin Icon"/>Learning Phase</span>
                            <div className="flex items-center font-normal gap-1 text-[#4D4D4D] md:text-[14px] text-[11px]">
                                <img src={DurationIcon} alt="Duration Icon"/>
                                <span>10 weeks</span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full rounded-xl overflow-hidden items-start">
                            <img
                                src={Banner1}
                                alt="Learning banner"
                                className="w-full object-cover h-auto -mt-[20px]"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="font-medium text-[#333333] md:text-[18px] text-[14px] leading-[140%] mb-2">
                                The Prodefied PM Training
                            </h3>
                            <p className="text-[#4D4D4D] md:text-[16px] text-[11px] mb-2 font-normal">
                                Learn and apply the foundations of product manangement through hands-on training, tasks and projects. We combine theortical clarity with practical action
                            </p>
                            <h4 className="font-medium text-[#4D4D4D] md:text-[18px] text-[14px] leading-[140%] mb-1">What You’ll Gain</h4>
                            <ul className="list-disc list-inside text-[#4D4D4D] md:text-[16px] text-[11px] ml-4 space-y-1 font-normal">
                                <li>Ideate and validate your personal product idea</li>
                                <li>Write a PRD and design simple flows</li>
                                <li>Create your final portfolio entry</li>
                                <li>Get trained on how to talk about your project</li>
                            </ul>
                        </div>

                        {/*Bottom Buttons*/}
                        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4">
                            <button className="p-4 rounded-lg bg-[#FF9D00] flex-1 text-white font-medium md:text-[16px] text-[14px] leading-[140%] hover:scale-110 hover:bg-[#FD9C37]">View Full Curriculm</button>
                            <button className="p-4 rounded-lg bg-[#001299] flex-1 text-white font-medium md:text-[16px] text-[14px] leading-[140%] hover:scale-110 hover:bg-[#031144]">Start learning</button>
                        </div>
                    </div>
                </div>
                <div className="hover:scale-110">
                    <div className="flex items-end gap-2 text-[14px] md:text-[18px] font-normal leading-[140%]">
                        <span>Phase</span>
                        <span className="text-white md:text-[30px] text-[23px] bg-[#001299] leading-[140%] font-medium rounded-full w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 flex justify-center items-center md:-mb-[15px] -mb-[10px]">
                            02
                        </span>
                    </div>
                    <div className="max-w-[413px] md:min-h-[630px] rounded-2xl border border-[#6678FF] shadow-md p-4 space-y-4 text-sm font-sans">
                        {/* Header */}
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-[#001299] font-normal md:text-[18px] text-[14px] flex items-center gap-1"><img src={LinkedinIcon} alt="Linkedin Icon"/> Internship Phase</span>
                            <div className="flex items-center font-normal gap-1 text-[#4D4D4D] md:text-[14px] text-[11px]">
                                <img src={DurationIcon} alt="Duration Icon"/>
                                <span>8 weeks</span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full rounded-xl overflow-hidden">
                            <img
                                src={Banner2}
                                alt="Internship banner"
                                className="w-full object-cover h-auto"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="font-medium text-[#333333] md:text-[18px] text-[14px] leading-[140%] mb-2">
                                Learning Meets Experience
                            </h3>
                            <p className="text-[#4D4D4D] md:text-[16px] text-[11px] mb-2 font-normal">
                                Collaborate with cross-functional team of designers and developers to work on real-life projects. This is where theory becomes skill.
                            </p>
                            <h4 className="font-medium text-[#4D4D4D] md:text-[18px] text-[14px] leading-[140%] mb-1">What You’ll Gain</h4>
                            <ul className="list-disc list-inside text-[#4D4D4D] md:text-[16px] text-[11px] ml-4 space-y-1 font-normal">
                                <li>Work on real business problems</li>
                                <li>Build and test actual features</li>
                                <li>Conduct usability tests and product tear-downs</li>
                                <li>Deepen your command of PM tools</li>
                                <li>Communicate like a professional PM</li>
                                <li>Improve your presentation, collaboration, and decision-making skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hover:scale-110">
                    <div className="flex items-end gap-2 text-[14px] md:text-[18px] font-normal leading-[140%]">
                        <span>Phase</span>
                        <span className="text-white md:text-[30px] text-[23px] bg-[#001299] leading-[140%] font-medium rounded-full w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 flex justify-center items-center md:-mb-[15px] -mb-[10px]">
                            03
                        </span>
                    </div>
                    <div className="max-w-[413px] md:min-h-[630px] rounded-2xl border border-[#6678FF] shadow-md p-4 space-y-4 text-sm font-sans">
                        {/* Header */}
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-[#001299] font-normal md:text-[18px] text-[14px] flex items-center gap-1"><img src={NewJobIcon} alt="Linkedin Icon"/>Career Acceleration Phase</span>
                            <div className="flex items-center font-normal gap-1 text-[#4D4D4D] md:text-[14px] text-[11px]">
                                <img src={DurationIcon} alt="Duration Icon"/>
                                <span>2 weeks</span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full rounded-xl overflow-hidden">
                            <img
                                src={Banner3}
                                alt="Career Acceleration banner"
                                className="w-full object-cover h-auto"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="font-medium text-[#333333] md:text-[18px] text-[14px] leading-[140%] mb-2">
                                Branding and Positioning
                            </h3>
                            <p className="text-[#4D4D4D] md:text-[16px] text-[11px] mb-2 font-normal">
                                Collaborate with designers and developers to work on real-life projects. This is where theory becomes skill.
                            </p>
                            <h4 className="font-medium text-[#4D4D4D] md:text-[18px] text-[14px] leading-[140%] mb-1">What You’ll Gain</h4>
                            <ul className="list-disc list-inside text-[#4D4D4D] md:text-[16px] text-[11px] ml-4 space-y-1 font-normal">
                                <li>Personal branding and online presence</li>
                                <li>Resume optimization and portfolio polish</li>
                                <li>Brand visibility and thought leadership</li>
                                <li>Job search strategies, networking, and interview prep.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};