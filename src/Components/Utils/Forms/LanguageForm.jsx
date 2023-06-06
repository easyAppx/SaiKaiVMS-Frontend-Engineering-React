import React from "react";
import "./lang.css";
import { useCallback, useState } from "react";
import flagFrance from "Assets/Svg/flag_france.svg";
import flagGerman from "Assets/Svg/flag_german.svg";
import flagUnitedKingdom from "Assets/Svg/flag_united_kingdom.svg";
import dropToggle from "Assets/Svg/toggleVector.svg";
import PrimaryDropdown from "Components/Utils/Dropdowns/PrimaryDropdown";
import DropdownButton from "Components/Utils/Buttons/DropdownButton";
import { LanguageFormItem } from "Components/Utils/Forms";

function LanguageForm() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleChange = useCallback((e) => {
    setSelectedLanguage(e.target.value);
  });
  const getImageForLanguage = useCallback((language) => {
    switch (language) {
      case "English":
        return flagUnitedKingdom;

      case "Francais":
        return flagFrance;

      case "Deutch":
        return flagGerman;

      default:
        return "";
    }
  });

  return (
    <PrimaryDropdown
      button={
        <DropdownButton className="justify-center bg items-center gap-1 min-w-max">
          <img
            className="w-8 h-8"
            src={getImageForLanguage(selectedLanguage)}
            alt=""
          />
          <img
            src={dropToggle}
            alt="dropToggle"
            className="w-3 h-3 dropToggle"
          />
        </DropdownButton>
      }
      isLeft={false}
    >
      <LanguageFormItem
        flagImageUrl={flagUnitedKingdom}
        language="English"
        isDefaultChecked={true}
        handleChange={handleChange}
      />

      <LanguageFormItem
        flagImageUrl={flagFrance}
        language="Francais"
        handleChange={handleChange}
      />

      <LanguageFormItem
        flagImageUrl={flagGerman}
        language="Deutch"
        handleChange={handleChange}
      />
    </PrimaryDropdown>
  );
}

export default LanguageForm;
