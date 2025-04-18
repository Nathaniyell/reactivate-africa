import { impactPathways } from "@/lib/data";

const Pathways = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#892626] mb-4">
            OUR FOUR-POINT IMPACT PATHWAYS
          </h2>
          <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {impactPathways.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-4 items-start"
            >
              <div className="p-3 bg-[#FEEBE1] rounded-full text-[#F08232]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#892626] mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathways;
