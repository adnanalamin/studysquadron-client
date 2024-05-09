import logo from "../../assets/images/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="dark:bg-[#1A1D2B] bg-[#003C43]">
      <footer className="dark:bg-[#1A1D2B] bg-[#003C43] lg:max-w-6xl mx-auto">
        <div className="container mx-auto p-0 md:p-8 xl:px-0">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <a href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span>
                        <img src={logo} alt="AI Logo" className="w-24" />
                      </span>
                      <span className="text-white">Study Squadron</span>
                    </div>
                  </a>
                </div>
                <div className="max-w-md pr-16 text-md text-gray-200">
                  StudySquadron: Empowering learners with personalized
                  education. Diverse courses, expert instructors, and innovative
                  resources for academic and professional success. Join us today
                  and reach your goals
                </div>
                <div className="flex space-x-2">
                  <a
                    href=""
                    target="_blank"
                    className="text-gray-200 hover:text-gray-200"
                  >
                    <FaFacebookSquare className="text-2xl"></FaFacebookSquare>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="text-gray-200 hover:text-gray-200"
                  >
                    <FaSquareTwitter className="text-2xl"></FaSquareTwitter>
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Our Solutions
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/aiplatform"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          AI Platform
                        </a>
                      </li>
                      <li>
                        <a
                          href="/aialgorithms"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          AI Algorithms
                        </a>
                      </li>
                      <li>
                        <a
                          href="/industryapplications"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Industry Applications
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Use Cases
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/predictiveanalysis"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Predictive Analysis
                        </a>
                      </li>
                      <li>
                        <a
                          href="/customerexperience"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Customer Experience
                        </a>
                      </li>
                      <li>
                        <a
                          href="/automation"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Automation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Resources
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/pricing"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="/casestudies"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Case Studies
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/aboutus"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/careers"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contactus"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white">
                Copyright © 2024 . Study Squadron
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
