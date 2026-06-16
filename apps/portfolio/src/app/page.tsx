import { SmoothScrollHero } from "@/components/ui/smoothScroll";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#09090B]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />

      <SmoothScrollHero />
    </div>
  );
}
