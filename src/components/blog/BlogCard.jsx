import { Link } from "react-router-dom";

const BlogCard = ({ image, title, description, date, link }) => {
    return (
        <Link to={link} className="w-full md:p-6 p-3 border border-gray-200 rounded-md shadow-md hover:scale-105">
            <img src={image} alt="Blog Cover Image" className="w-full h-auto object-cover" />
            <h2 className="text-[#0018CC] text-[14px] md:text-[28px] font-medium leading-[140%] md:my-4 my-2">{title}</h2>
            <p className="text-[#333333] text-[11px] md:text-[22px] font-normal leading-[140%] md:my-4 my-2">{description}</p>
            <span className="text-[#999999] text-[9px] md:text-[18px] font-medium leading-[140%]">{date}</span>
        </Link>
    );
};

export default BlogCard;