const Faq = () => {
  return (
    <div className="lg:max-w-6xl mx-auto mt-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <h3 className="mt-4 mb-8 dark:text-gray-600 md:w-1/2 mx-auto">
          Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
          orci at lacus amet bibendum.
        </h3>
      </div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
            alt="Awesome hero page image"
            width="500"
            height="488"
          />
        </div>
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <section className="dark:bg-gray-100 dark:text-gray-800 w-full">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <div className="space-y-4 w-full">
                <details className="w-full border rounded-lg bg-[#77B0AA]">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    How can I join StudySquadron?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4  dark:text-gray-600">
                    Joining StudySquadron is easy! Simply visit our website and
                    sign up for an account. Once registered, you will have
                    access to our range of services and resources.
                  </p>
                </details>
                <details className="w-full border rounded-lg bg-[#77B0AA]">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    What subjects does Study Squadron cover?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Study Squadron offers tutoring and support in a wide range
                    of subjects, including math, science, language arts,
                    history, and more. Our team of experienced tutors can assist
                    with various academic needs.
                  </p>
                </details>
                <details className="w-full border rounded-lg bg-[#77B0AA]">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    Is StudySquadron suitable for all academic levels?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Absolutely! Whether you are a high school student preparing
                    for exams, a college student needing assistance with
                    coursework, or an adult learner seeking to enhance your
                    skills, StudySquadron caters to learners of all levels and
                    ages.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Faq;
