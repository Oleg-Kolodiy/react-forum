import { ReactComponent as List } from "assets/list.svg";
import { ReactComponent as Tag } from "assets/tag.svg";
import { ReactComponent as Award } from "assets/award.svg";

import { ReactComponent as HelpCircle } from "assets/help-circle.svg";
import { ReactComponent as MessageCircle } from "assets/message-circle.svg";
import { ReactComponent as Heart } from "assets/heart.svg";

export const menuItems = [
  {
    Icon: List,
    name: "Questions",
    href: "/",
  },
  {
    Icon: Tag,
    name: "Tags",
    href: "/tags",
  },
  {
    Icon: Award,
    name: "Ranking",
    href: "/ranking",
  },
];

export const personalNavigatorItems = [
  {
    Icon: HelpCircle,
    name: "Your questions",
    href: "/your_questions",
  },
  {
    Icon: MessageCircle,
    name: "Your answers",
    href: "/your_answers",
  },
  {
    Icon: Heart,
    name: "Your likes & votes",
    href: "/your_likes_&_votes",
  },
];
