import CertificateImage from "../assets/images/certificate.jpg";

export default function EarnCertificate() {
  return (
    <section className="py-4 px-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <h2 className="text-xl md:text-4xl font-semibold">Earn a Certificate That Matters</h2>
        <p className="text-center text-sm md:text-lg md:max-w-lg">
          Completing Prodefied isn't just about experience — it's about earning
          a professional certificate that showcases your real-world project
          management capabilities.
        </p>

        <img src={CertificateImage} alt="" />
      </div>
    </section>
  );
}
