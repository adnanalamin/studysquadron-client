const Feature = () => {
  return (
    <div>
      <div className="bg-gray-200 dark:bg-black px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="text-center dark:text-white font-display text-3xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Features
          </h2>
          <p className="text-center dark:text-white lg:w-3/5 lg:mx-auto mt-5 text-base font-semibold leading-7 text-primary-500">
            These feature sections aim to provide a comprehensive overview of
            the functionalities required for an effective Online Group-Study
            assignment platform, fostering collaboration, communication, and
            academic success among students
          </p>
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-xl bg-white dark:bg-[#31363F] px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium dark:text-white">
                Groups Management
              </h3>
              <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                Enable users to form study groups based on courses, topics, or
                shared interests.Provide features for group leaders to manage
                memberships, set group goals, and schedule study sessions
              </p>
            </li>
            <li className="rounded-xl bg-white dark:bg-[#31363F] px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display dark:text-white font-medium">
                Study Material Repository
              </h3>
              <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                Offer a repository where users can upload, share, and access
                study materials like notes, presentations, and reference
                materials.
              </p>
            </li>
            <li className="rounded-xl dark:bg-[#31363F] bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530444/availability.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display dark:text-white font-medium">
                Task Management and Progress Tracking
              </h3>
              <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                Send automated reminders for upcoming deadlines, meetings, or
                tasks to ensure accountability and timely completion. Allow
                users to track their progress on assigned tasks and view overall
                group progress.
              </p>
            </li>
            <li className="rounded-xl dark:bg-[#31363F] bg-white px-6 py-8 shadow-sm">
              <a href="/pricing" className="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display dark:text-white font-medium group-hover:text-primary-500">
                  Collaborative Tools and Communication
                </h3>
                <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                  Integrate video conferencing tools for virtual study sessions,
                  group meetings, and collaborative projects. Include discussion
                  forums where users can ask questions, share insights, and
                  engage in academic discussions.
                </p>
              </a>
            </li>
            <li className="rounded-xl dark:bg-[#31363F] bg-white px-6 py-8 shadow-sm">
              <a href="/templates" className="group">
                <img
                  src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 dark:text-white font-display font-medium group-hover:text-primary-500">
                  Learning Management Systems
                </h3>
                <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                  Integrate with existing Learning Management Systems used by
                  educational institutions to streamline access to course
                  materials and assignments.
                </p>
              </a>
            </li>
            <li className="rounded-xl dark:bg-[#31363F] bg-white px-6 py-8 shadow-sm">
              <a href="/download" className="group">
                <img
                  src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display dark:text-white font-medium group-hover:text-primary-500">
                  Peer Evaluation and Feedback
                </h3>
                <p className="mt-1.5 text-sm dark:text-white leading-6 text-secondary-500">
                  Provide metrics and insights based on peer evaluations to help
                  users identify areas for improvement and track their academic
                  growth.
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Feature;
