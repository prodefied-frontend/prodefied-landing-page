import { Link } from "react-router-dom";
import ArrowIcon from "../assets/icons/arrow-right-blue.svg";
import LearningPathImage2 from "../assets/images/learning-path2.jpg";

export default function LearningPathSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-xl md:text-4xl font-semibold text-[#1A1A1A]">
          Your Learning Path
        </h2>

        <div className="rounded-lg shadow-md">
          <img
            src={LearningPathImage2}
            alt="Prodefied Learners"
            className="w-full max-h-[500px] object-cover rounded-t-lg"
          />

          <div className="text-left mt-4 p-4 px-6">
            <p className="text-[#4D4D4D] font-medium mb-4">
              Watch how learners at Prodefied build real products, collaborate
              across teams, and gain job-ready experience.
            </p>

            <Link
              to="/curriculum"
              className="inline-flex items-center text-[#000F84] hover:underline font-semibold"
            >
              <span>View curriculum</span>
              <img src={ArrowIcon} alt="" className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
