import { spawn } from "child_process";
import { cls } from "../../utilies";

interface CommonSectionHeaderProps {
  type?: "common" | "schedule";
  mainText: string;
  subText?: string;
}

export default function CommonSectionHeader({
  type = "common",
  mainText,
  subText,
}: CommonSectionHeaderProps) {
  const scheduleText = type === "schedule" ? subText!.split("/") : ["", ""];
  return (
    <div
      className={cls(
        type === "schedule" ? "type__schedule__wrapper" : "",
        "common__section__header__wrapper"
      )}
    >
      <span className="header__main">{mainText}</span>
      {subText && <span className="only-web header__sub">{subText}</span>}
      {type === "schedule" && (
        <div className="only-mobile type__schedule__sub__text__wrapper">
          <span>{scheduleText[0]}</span>
          <span>{scheduleText[1]}</span>
        </div>
      )}
    </div>
  );
}
