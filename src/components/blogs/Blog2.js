import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Blog2 = () => {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Investing Goals in 2024: Strategies for Financial Growth
        </h1>

        {/* Introduction Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-8">
          <img
            src="https://media4.manhattan-institute.org/sites/cj/files/economic-growth-is-still-our-best-hope.jpg"
            alt="Banner"
            className="w-full rounded-md mb-4"
          />
          <p className="text-lg leading-relaxed">
            As we step into 2024, setting clear investing goals becomes
            paramount for financial success. Whether you're aiming for wealth
            creation, retirement planning, or diversifying your portfolio, a
            well-defined strategy can pave the way for achieving your financial
            aspirations.
          </p>
        </section>

        {/* Wealth Creation Goals Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Wealth Creation Goals</h2>
          <img
            src="https://ichef.bbci.co.uk/images/ic/1200xn/p0dx4pp0.jpg"
            alt="Wealth Creation"
            className="w-full rounded-md mb-4"
          />
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <FaCheckCircle className="inline text-green-500 mr-2" />
              <span>
                Build a diversified investment portfolio to capitalize on market
                opportunities and generate long-term wealth.
              </span>
            </li>
            {/* Add more wealth creation goals */}
          </ul>
        </section>

        {/* Retirement Planning Goals Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Retirement Planning Goals
          </h2>
          <img
            src="https://parade.com/.image/t_share/MTkwNTgwOTM3NjIzMzQ5MTE2/retirement-wishes-feat.jpg"
            alt="Retirement Planning"
            className="w-full rounded-md mb-4"
          />
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <FaCheckCircle className="inline text-green-500 mr-2" />
              <span>
                Allocate funds towards retirement accounts and investment
                vehicles that offer tax benefits and long-term growth potential.
              </span>
            </li>
            {/* Add more retirement planning goals */}
          </ul>
        </section>

        {/* Diversification Goals Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Diversification Goals</h2>
          <img
            src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/09/Blog_Paytm_Portfolio-Diversification.jpg"
            alt="Diversification"
            className="w-full rounded-md mb-4"
          />
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <FaCheckCircle className="inline text-green-500 mr-2" />
              <span>
                Spread investments across various asset classes to mitigate risk
                and optimize returns based on market conditions.
              </span>
            </li>
            {/* Add more diversification goals */}
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Setting clear investing goals for 2024 is crucial for financial
            growth and stability. Whether you're focusing on wealth creation,
            retirement planning, or diversification, align your strategies with
            your risk tolerance, time horizon, and long-term aspirations to
            maximize your investment journey.
          </p>
          {/* Add final thoughts */}
        </section>
      </div>
    </div>
  );
};

export default Blog2;
