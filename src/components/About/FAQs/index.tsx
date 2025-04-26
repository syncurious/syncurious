import React from "react";
import SectionHeader from "../../section/SectionHeader";
import Accordion from "@/components/ui/Accordion";

export default function FAQsSection() {
  return (
    <SectionHeader button="FAQs" heading="Frequently Asked Questions">
      <div className="flex justify-center w-full">
        <div className="flex w-full md:max-w-[55%]  gap-5">
          <Accordion
          className="w-full"
            data={[
              {
                questions: "What industries does MevensMind specialize in?",
                answer:
                  "We specialize in IT hardware, ICT, and EV industries...",
              },
              {
                questions: "How can you help elevate our digital presence?",
                answer:
                  "Our digital strategy experts can boost your online visibility...",
              },
              {
                questions: "Do you offer customized strategies?",
                answer: "Yes, we offer tailored solutions...",
                disabled: true,
              },
            ]}
            defaultExpandedIndex={0}
            // onToggle={(indices) => console.log("Toggled:", indices)}
          />
        </div>
      </div>
    </SectionHeader>
  );
}
