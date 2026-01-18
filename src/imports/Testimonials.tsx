import svgPaths from "./svg-a7rte1l7fc";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[20px] text-white">Manuel Rikob</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[17.59%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.556">
        <g id="Group">
          <path d={svgPaths.p1426a480} fill="var(--fill-0, #002B6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SystemArrowLeftLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="system/arrow-left-line">
      <Group />
    </div>
  );
}

function IconoirArrowUpRight() {
  return (
    <div className="bg-[#edeef0] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[100px] shrink-0" data-name="iconoir:arrow-up-right">
      <SystemArrowLeftLine />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[17.59%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.556">
        <g id="Group">
          <path d={svgPaths.p12c5be00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SystemArrowRightLine() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="system/arrow-right-line">
      <Group1 />
    </div>
  );
}

function IconoirArrowUpRight1() {
  return (
    <div className="bg-[#06f] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[100px] shrink-0" data-name="iconoir:arrow-up-right">
      <SystemArrowRightLine />
    </div>
  );
}

function ButtonsArrow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Buttons Arrow">
      <IconoirArrowUpRight />
      <IconoirArrowUpRight1 />
    </div>
  );
}

function TestimonialText() {
  return (
    <div className="bg-[#1e242c] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="Testimonial Text">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[16px] py-[48px] relative size-full">
          <Frame />
          <div className="font-['General_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[40px] text-center text-white w-[528px]">
            <p className="css-4hzbpn mb-0">“Working with Master in me</p>
            <p className="css-4hzbpn mb-0">has been an incredibly</p>
            <p className="css-4hzbpn mb-0">painless and enjoyable</p>
            <p className="css-4hzbpn">experience.”</p>
          </div>
          <ButtonsArrow />
        </div>
      </div>
    </div>
  );
}

function TestimonialTextVideo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Testimonial Text & Video">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TestimonialText />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[40px] items-center px-[100px] py-[88px] relative size-full" data-name="Testimonials">
      <p className="css-4hzbpn font-['General_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e242c] text-[56px] w-full">What our clients say</p>
      <TestimonialTextVideo />
    </div>
  );
}