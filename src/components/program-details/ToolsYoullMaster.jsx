import Figma from "../../assets/icons/program-details/Figma.svg";
import Trello from "../../assets/icons/program-details/Trello.svg";
import Slack from "../../assets/icons/program-details/Slack.svg";
import GoogleDocs from "../../assets/icons/program-details/GoogleDocs.svg";

const Tools = () => {
    const toolDetails = [
        {id: 1, icon: Figma, title: "Figma", Description: "Used to design wireframes and user flows "},
        {id: 2, icon: Trello, title: "Trello/Linear/Jira", Description: "Used for task and sprint manangement"},
        {id: 3, icon: Slack, title: "Slack", Description: "Team organization and communication"},
        {id: 4, icon: GoogleDocs, title: "Google Docs", Description: "For Docs, PRDs, slide decks, planning"}
    ];

    return (
        <div className="bg-[#FFF5E5] mx-4 lg:mx-28 px-4 py-4 lg:py-16 rounded-4xl">
            <h2 className="text-center text-[#333333] font-medium md:text-[32px] text-[16px] leading-[140%]">Tools You’ll Master</h2>
            <div className="grid md:grid-cols-2 place-items-center gap-4">{toolDetails.map((tool) => (
                <div key={tool.id} className="mt-4 lg:mt-12 grid grid-cols-2 gap-4 md:gap-8">
                    <div>
                        <img src={tool.icon} alt={`${tool.title} icon`} className="mx-auto scale-50 md:scale-100"/>
                        <p className="text-center text-[#333333] text-[14px] md:text-[28px] font-normal leading-[140%] mt-1 md:mt-4 break-words">{tool.title}</p>
                    </div>
                    <p className="text-left text-[#4D4D4D] text-[11px] md:text-[22px] font-normal lg:w-[80%] my-auto">{tool.Description}</p>
                </div>
            ))}</div>
        </div>
    );
};

export default Tools;