import svgPaths from "./svg-zjqn90r9o9";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Icon_2">
            <path d={svgPaths.p213bf800} stroke="var(--stroke-0, #0066FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.paf0b780} stroke="var(--stroke-0, #0066FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1991e700} stroke="var(--stroke-0, #0066FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TabActive() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-[1_0_0] from-[49.763%] from-[rgba(230,240,255,0)] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[12px] relative self-stretch to-[#e6f0ff]" data-name="Tab=Active">
      <div aria-hidden="true" className="absolute border-[#06f] border-b border-solid inset-0 pointer-events-none" />
      <Icon />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#06f] text-[16px]">English</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f947d00} id="Icon_2" stroke="var(--stroke-0, #6C7787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabDefault() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[12px] relative" data-name="Tab=Default">
      <Icon1 />
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6c7787] text-[16px]">Mathematics</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20659900} id="Icon_2" stroke="var(--stroke-0, #6C7787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabDefault1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[12px] relative" data-name="Tab=Default">
      <Icon2 />
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6c7787] text-[16px]">Science</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b72dd00} fill="var(--stroke-0, #6C7787)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function TabDefault2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[12px] relative" data-name="Tab=Default">
      <Icon3 />
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6c7787] text-[16px]">Logical Reasoning</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1a248480} id="Icon_2" stroke="var(--stroke-0, #6C7787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TabDefault3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[12px] relative" data-name="Tab=Default">
      <Icon4 />
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#6c7787] text-[16px]">Mechanical Technical</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#c6cad1] border-b border-solid inset-0 pointer-events-none" />
      <TabActive />
      <TabDefault />
      <TabDefault1 />
      <TabDefault2 />
      <TabDefault3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Manrope:Bold',sans-serif] font-bold relative shrink-0 text-[#1e242c] text-[20px] w-full">Reading Comprehension</p>
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px] w-full">Understanding passages by identifying main ideas, details, inferences, and author’s purpose.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[323px]">
      <Frame27 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">short passages</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">{` Inference`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">vocabulary in context</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Cards() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Cards">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame20 />
          <Frame16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Manrope:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#1e242c] text-[20px] w-[min-content]">Vocabulary</p>
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px] w-[360px]">Knowledge of word meanings, synonyms, antonyms, and commonly used English words in context.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[185px]">
      <Frame28 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#8ab9ff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">synonyms</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#8ab9ff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">antonyms</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#8ab9ff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">analogies</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Cards1() {
  return (
    <div className="bg-[#e6f0ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Cards">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame22 />
          <Frame17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8ab9ff] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[10px_25px_100px_0px_rgba(0,43,107,0.25)]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Manrope:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#1e242c] text-[20px] w-[min-content]">{`Grammar & Usage`}</p>
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px] w-[367px]">Correct use of tenses, subject–verb agreement, sentence structure, and error identification.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[185px]">
      <Frame29 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">tenses</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">subject-verb agreement</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">sentence correction</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0 w-[421px]">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame23 />
          <Frame18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Cards />
      <Cards1 />
      <Frame />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="css-g0mm18 font-['Manrope:Bold',sans-serif] font-bold overflow-hidden relative shrink-0 text-[#1e242c] text-[20px] text-ellipsis w-[282px]">Paragraph and essay writing</p>
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px] w-[426px]">Organizing ideas clearly to express thoughts, opinions, or experiences in written form.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[185px]">
      <Frame30 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">descriptive</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">argumentative</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">opinion essays</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Cards2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Cards">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame24 />
          <Frame19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[1.5] relative shrink-0 text-center w-full">
      <p className="css-4hzbpn font-['Manrope:Bold',sans-serif] font-bold relative shrink-0 text-[#1e242c] text-[20px] w-[368px]">Sentence completion and correction</p>
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[12px] w-[498px]">Choosing the word or phrase that best completes a sentence logically and grammatically based on context and meaning.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[185px]">
      <Frame31 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">context clues</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#323c4b] text-[12px]">identifying errors</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Cards3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Cards">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-center justify-center px-[16px] py-[24px] relative w-full">
          <Frame25 />
          <Frame26 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#edeef0] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Cards2 />
      <Cards3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="backdrop-blur-[5px] bg-white content-stretch flex items-center pl-[24px] pr-[4px] py-[4px] relative rounded-[100px] shrink-0 w-[124px]">
      <div aria-hidden="true" className="absolute border border-[#8ab9ff] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      <div className="css-g0mm18 flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#06f] text-[16px]">
        <p className="css-ew64yg leading-[1.5]">And More!</p>
      </div>
    </div>
  );
}

export default function JobSeekers() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[40px] items-center px-[100px] py-[88px] relative size-full" data-name="Job Seekers">
      <div className="css-g0mm18 flex flex-col font-['ABeeZee:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-black text-center">
        <p className="css-ew64yg leading-[1.2]">Learn the coverage for the exam</p>
      </div>
      <Tabs />
      <Frame21 />
      <Frame15 />
    </div>
  );
}