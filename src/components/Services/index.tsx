import Arrow from "./components/ArrowRight";

export default function Services() {
    return (
        <section id="services" className="bg-yellow">
            <div className="z-20 relative max-w-[1142px] px-4 mx-auto pt-[101px] pb-[130px]">
                <h2 className="font-alata font-normal text-[90px] leading-[80px] text-black mb-[62px]">Services</h2>
                <div className="mb-[45px] h-1.5 w-[100px] bg-white" />
                <div className="max-w-[837px] font-sofia font-light text-[18px] leading-[26px] text-black mb-[47px]">
                    <p>
                        Our clients are at the forefront of energy transition and innovation. Their task is complex: balance reliability and cost effectiveness with new customer demands, investment decisions, decarbonization goals and an evolving menu of new technologies. We understand the task and bring deep expertise
                        to addressing these challenges.
                    </p>
                </div>
                <div className="flex gap-[30px]">
                    <div className="flex-1">
                        <h3 className="font-sofia font-bold text-[40px] leading-[42px] text-black max-w-72 mb-[33px]">Enterprise Strategy</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Procurement and investment diligence</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Customer engagement and retention</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Renewable, DER, and EV program structuring</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Reliability planning and reporting</li>
                        </ul>
                        <div className="mt-[40px] ml-[20px] inline-flex items-center gap-2 text-black"><Arrow /></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-sofia font-bold text-[40px] leading-[42px] text-black max-w-72 mb-[33px]">Wholesale Power</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Commodity advisory and RFPs</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Energy, capacity, REC, RIN, and LCFS placement</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Enterprise PPA structuring</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Contract extensions and re‑packaging</li>
                        </ul>
                        <div className="mt-[41px] ml-[20px] inline-flex items-center gap-2 text-black"><Arrow /></div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-sofia font-bold text-[40px] leading-[42px] text-black max-w-72 mb-[33px]">Market Development</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />New venture setup</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Demand planning and acquisition</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Project development and regulatory support</li>
                            <li className="flex items-start gap-[15px] font-sofia font-light text-[18px] leading-[20px] text-black"><span className="w-[6px] h-[6px] bg-white mt-2 inline-block" />Partnership structuring</li>
                        </ul>
                        <div className="mt-[41px] ml-[20px] inline-flex items-center gap-2 text-black"><Arrow /></div>
                    </div>
                </div>
                <div className="font-sofia font-light text-[18px] leading-[26px] text-black mt-[47px] max-w-[837px]">
                    <p>
                        Our clients are time constrained and under‑resourced. Agendas shift, budgets move and priorities change. We understand. We are agile, creative and immediately responsive to your various working styles, governance requirements and evolving needs.
                    </p>
                </div>
            </div>
        </section>
    );
}