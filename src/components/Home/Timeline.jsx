import React from 'react'
import { Timeline } from '../ui/timeline';

const HowItWorkTimeline = () => {
    const data = [
        {
            title: "SUBMISSIONS OPEN",
            date: "10 Oct 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Paper Submissions Open via Microsoft CMT
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Authors are invited to submit their original, unpublished research papers through the Microsoft CMT submission portal. Submissions must strictly follow IEEE formatting guidelines.
                    </p>
                </div>
            ),
        },
        {
            title: "SUBMISSION DEADLINE",
            date: "30 Nov 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-2">
                        Full Paper Submission Deadline
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Last date for submitting full-length research manuscripts (maximum 6 pages in PDF format) on Microsoft CMT. All submissions must be received by 23:59 IST.
                    </p>
                </div>
            ),
        },
        {
            title: "Acceptance Notification",
            date: "18 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Accepted papers will be notified through email.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Authors of accepted papers will receive formal notification via email along with detailed instructions for preparing the camera-ready version. The notification will include reviewer comments, required revisions, and important deadlines for camera-ready submission and registration. Please ensure your contact email is up-to-date in the submission system.
                    </p>
                </div>
            ),
        },
        {
            title: "Camera Ready Submissions",
            date: "25 Dec 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Camera Ready Submission and Registration will be open for accepted papers.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        Authors of accepted papers must submit the final camera-ready version incorporating all reviewer comments and following the IEEE conference template guidelines. The camera-ready submission must include all required forms, copyright transfer agreement, and proofreading. Simultaneously, at least one author from each accepted paper must register for the conference to ensure paper inclusion in the proceedings.
                    </p>
                </div>
            ),
        },
        {
            title: "Paper Presentation",
            date: "30 Jan-31st Jan 2027",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Accepted Papers will be presented in conference in hybrid mode.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        The conference will be conducted in hybrid mode, allowing authors to present their research either in-person at the conference venue or remotely via virtual platforms. Each presentation will be allocated a specific time slot within technical sessions, followed by a Q&A session where authors can interact with the audience and receive feedback.
                    </p>
                </div>
            ),
        },
        {
            title: "PUBLISH",
            date: "WILL BE INFORMED",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold">
                        Accepted papers will be published in the SCEECS 2027 Conference Proceedings and submitted to IEEE Xplore.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <section id="important-dates" className="w-full bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center mb-8">
                <p className="text-purple-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
                    Schedule & Milestones
                </p>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                    Important Dates
                </h2>
                <div className="flex justify-center mb-4">
                    <svg
                        className="w-32 h-2 text-pink-400"
                        viewBox="0 0 128 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto font-medium">
                    Conference Dates: <span className="text-purple-700 font-bold">30th Jan – 31st Jan 2027</span> | MANIT Bhopal, India
                </p>
            </div>
            <Timeline data={data} />
        </section>
    )
}

export default HowItWorkTimeline
