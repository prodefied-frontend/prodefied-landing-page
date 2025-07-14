const ProgramEnd = () => {
    return (
        <div className="mx-4 lg:mx-28 py-8 lg:py-16 grid md:grid-cols-2 lg:gap-24 gap-6">
            <div>
                <h2 className="text-[#333333] font-medium md:text-[32px] text-[16px] leading-[140%] mb-1">By the end of the program, You’ll be: </h2>
                <ul className="list-disc list-inside text-[#4D4D4D] md:text-[28px] text-[14px] ml-4 space-y-1 font-normal">
                    <li>70% job-ready and rising fast</li>
                    <li>Confident in your skills and your story</li>
                    <li>Fluent in the tools and language of product teams</li>
                    <li>Ready to enter any product interview with confidence</li>
                    <li>Able to present a complete case study and portfolio</li>
                    <li>Positioned as a visible, standout Product Manager</li>
                </ul>
            </div>
            <div className="lg:w-[88%]">
                <h2 className="text-[#333333] font-semibold md:text-[32px] text-[16px] leading-[140%] mb-1 md:mb-2">Ready to transform you career?</h2>
                <p className="text-[#4D4D4D] md:text-[22px] text-[11px] font-normal leading-[140%] tracking-[0.01em]">Join the next cohort of Prodefied and turn <span className="font-medium">20 weeks</span> into a Product Manangement Career</p>
                <button className="bg-[#000F84] rounded-md lg:rounded-3xl p-3 md:p-6 px-8 md:px-16 my-4 md:my-8 text-white md:text-[22px] text-[11px] font-semibold hover:scale-110 hover:bg-[#000E73]">Apply Now</button>
            </div>
        </div>
    );
};

export default ProgramEnd;