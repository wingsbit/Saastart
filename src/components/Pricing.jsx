const plans = [
    { name: "Starter", price: "$9/mo", features: ["1 Project", "Email Support"] },
    { name: "Pro", price: "$29/mo", features: ["10 Projects", "Priority Support"] },
    { name: "Enterprise", price: "$99/mo", features: ["Unlimited", "Dedicated Support"] },
  ];
  
  export default function Pricing() {
    return (
      <section className="bg-gray-100 text-gray-900 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Simple pricing for everyone</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-8">
              <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => <li key={i}>✅ {f}</li>)}
              </ul>
              <button className="bg-cyan-500 px-4 py-2 rounded text-black font-bold hover:bg-cyan-400">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  