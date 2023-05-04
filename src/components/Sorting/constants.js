import { ReactComponent as Clock } from "assets/clock.svg";
import { ReactComponent as ArrowUpRight } from "assets/arrow-up-right.svg";
import { ReactComponent as Hot } from "assets/hot.svg";
import { ReactComponent as CheckCircle } from "assets/check-circle.svg";

export const sortItems = [
  {
    Icon: Clock,
    name: "New",
    type: "date",
  },
  {
    Icon: ArrowUpRight,
    name: "Top",
    type: "activity",
  },
  {
    Icon: Hot,
    name: "Hot",
    color: "#FF6B00",
    type: "title",
  },
  {
    Icon: CheckCircle,
    name: "Closed",
    type: "closed",
  },
];
