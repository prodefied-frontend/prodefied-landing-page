export default function PortalPage() {
  return (
    <main className="-m-4">
      <div className="pl-4 mb-4">
        <div className="bg-[#E0FAE3] inline-flex gap-2 p-2">
            <img src="/green-mark.svg" alt="Green checkmark" className="w-4 h-4" />
            <span className="text-[#15480C] text-xs">Application status: Accepted</span>
        </div>
      </div>

      <section className="bg-[#001299] text-white p-4 py-6">
        <h1 className="font-semibold text-2xl">Welcome back, Peace</h1>
        <p className="text-[#E6E6E6] text-xs my-2">Kickstart your product management journey!</p>

        <div className="flex flex-col my-6">
            <span className="text-[#FF9D00] text-xs">Phase 1: Learning</span>
            
        </div>

        <button className="bg-[#FF9D00] text-sm py-2 px-4 rounded-md cursor-pointer">Continue Learning</button>
      </section>
    </main>
  );
}
