import classNames from "classnames";

import { getCountryCodeForLocale } from "@/utils/language";
import "flag-icons/css/flag-icons.min.css";

export interface FlagIconProps {
  country?: string;
  langCode?: string;
}

export function FlagIcon(props: FlagIconProps) {
  let countryCode: string | null = props.country ?? null;
  if (props.langCode) countryCode = getCountryCodeForLocale(props.langCode);

  if (props.langCode === "tok")
    return (
      <div className="w-8 h-6 rounded bg-[#c8e1ed] flex justify-center items-center">
        <img src="/flags/tokiPona.svg" className="w-7 h-5" />
      </div>
    );

  if (props.langCode === "pirate")
    return (
      <div className="w-8 h-6 rounded bg-[#c8e1ed] flex justify-center items-center">
        <img src="/flags/skull.svg" className="rounded" />
      </div>
    );

  if (props.langCode === "minion")
    return (
      <div className="w-8 h-6 rounded bg-[#FFFFFF] flex justify-center items-center">
        <img src="/flags/IMG_5872.svg" className="rounded" />
      </div>
    );

  // Galicia - Not a country (Is a region of Spain) so have to add the flag manually
  if (props.langCode === "gl-ES")
    return (
      <div className="w-8 h-6 rounded bg-[#2E3439] flex justify-center items-center">
        <img src="/flags/galicia.svg" className="rounded" />
      </div>
    );

  let backgroundClass = "bg-video-context-flagBg";
  if (countryCode === "np") backgroundClass = "bg-white";

  return (
    <span
      className={classNames(
        "!w-8 min-w-8 h-6 rounded overflow-hidden bg-cover bg-center block fi",
        backgroundClass,
        countryCode ? `fi-${countryCode}` : undefined,
      )}
    />
  );
}
