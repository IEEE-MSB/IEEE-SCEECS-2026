import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import PaperSubmission from "../components/callforpaper/PaperSubmission";
import Hero from "@/components/Hero";

function CallForPaper() {
  const quickLinks = [
    { text: "Important Dates", link: "#important-dates" },
    { text: "Tracks & Topics", link: "#cfp" },
    { text: "Author Guidelines", link: "#author-guidelines" },
    { text: "Submission Guidelines", link: "#submission-guidelines" },
    { text: "How to Submit", link: "#how-to-submit" },
  ];

  return (
    <div>
      <Hero 
        src="/background/9.jpg" 
        content="Call For Papers (CFP)" 
        dates="30th Jan - 31st Jan 2027, Bhopal, India." 
        buttonContent={quickLinks}
      />
      <HowItWorkTimeline />
      <TracksAndTopics />
      <PaperSubmission />
    </div>
  );
}

export default CallForPaper;
