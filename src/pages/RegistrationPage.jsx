import { Link } from "react-router-dom";
import FullIcon from "../assets/icons/registration/full-icon.svg";

const paymentPlanData = [
  {
    type: "Full Payment",
    icon: FullIcon,
    details:
      "Pay the full program fee upfront and focus fully on your learning",
  },
  {
    type: "2-Part Installment ",
    icon: FullIcon,
    details:
      "Secure your spot with a N100,000 deposit and pay the balance within 8 weeks (with weekly reminders from our team)",
  },
  {
    type: "Bi-Weekly Plan",
    icon: FullIcon,
    details:
      "Spread your payments over 8 weeks, paying every 2 weeks (available on request)",
  },
];

const listItems = [
  {
    id: 1,
    text: "Payment Completion: All fees must be fully paid before th program starts, unless you're on an approved payment plan",
  },
  {
    id: 2,
    text: "Seat Reservation: An initial deposit of N100,000 is required to secure your spot",
  },
  {
    id: 3,
    text: "Refunds and Deferrals: All payments are non-refundable. Deferrals are allowed only within the first week if the program and require team approval",
  },
  {
    id: 4,
    text: "Late Payments: Payments made more than 7 days after the due date may result in suspension until settled",
  },
  {
    id: 5,
    text: "Currency: All fees are in Naira and include program materials unless otherwise stated. For international participants, payments can be made in USD, GBP, or EUR. Exchanges rates will be based on the prevailing market rate at the time of payment",
  },
];

export default function RegistrationPage() {
  return (
    <main className="text-[#000000] pt-[80px] md:pt-[120px] px-8 pb-8 md:px-22">
      <h1 className="text-2xl text-[#1A1A1A] text-center font-medium mb-6 md:hidden">
        Registration
      </h1>

      <section className="pb-4 space-y-2">
        <div className="flex items-center justify-between text-[#333333] text-lg md:text-3xl">
          <span className="">Registration Fee:</span>
          <span className="font-bold lg:text-4xl">N 200,000</span>
        </div>

        <p className="text-[#4D4D4D] text-xs md:text-base">
          At Prodefied, we believe nothing should stop you from starting your
          career in product management not even payment. That's why we offer
          flexible options designed to fit your budget and timeline
        </p>
      </section>

      <section className="py-4">
        <h2 className="text-lg text-[#001299] font-medium pb-4 md:text-3xl">
          Payment Plan
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {paymentPlanData.map((detail, index) => (
            <div key={index + 1} className="flex flex-col items-start md:w-md">
              <span className="text-base mb-2 md:text-xl">{detail.type}</span>

              <div className="flex items-center gap-2">
                <img src={detail.icon} alt={detail.type} />
                <div>
                  <span className="text-base md:text-lg">{detail.details}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="py-8 md:text-center">
          We accept bank transfers, debit/credit cards, and Paypal
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-14 md:flex-row">
          <Link to="/payment-registration" className="bg-[#000F84] text-white text-center py-3 px-8 rounded-md w-full">Proceed</Link>
          <Link to="/program-details" className="bg-[#E4E4E4] text-[#1A1A1A] text-center py-3 px-8 rounded-md w-full">View Program Details</Link>
        </div>
      </section>

      <section className="py-4">
        <h3 className="text-[#001299] text-base py-4 md:text-2xl">Payment Policy</h3>

        <p className="text-[#4D4D4D] text-sm md:text-lg pb-2">If you register for Prodefied, you agree to the following:</p>
        <ol>
          {listItems.map((li) => (
              <li key={li.id} className="mb-2 md:mb-4">
                <span>{li.id}. </span>
                <span>{li.text}</span>
              </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
