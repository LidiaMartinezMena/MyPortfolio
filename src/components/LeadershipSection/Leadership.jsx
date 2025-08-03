import { useIsMobile } from "../hooks/useIsMobile";
import LeadershipDesktop from "./LeadershipSectionDesktop";
import LeadershipMobile from "./LeadershipSectionMobile";

export default function Leadership() {
  const isMobile = useIsMobile();

  return isMobile ? <LeadershipMobile /> : <LeadershipDesktop />;
}
