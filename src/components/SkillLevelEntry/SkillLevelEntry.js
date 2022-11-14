import React from "react";
import { useState } from "react";

import { ReactComponent as SkillIconFilled } from '../../assets/images/vectors/bulb.svg';
import { ReactComponent as SkillIconOutline } from '../../assets/images/vectors/bulb-outline.svg';


const SkillLevelEntry = props => {
    const [hover, setHover] = useState(1); // 1 = at least first icon is always a filled icon
    const icons =
    {
        iconFilled: <SkillIconFilled
            fill='#ffca1b'
            title='skill level description here'
            height='24px'
            width='24px'
            className='skill-icon skill-icon-filled'
        // onMouseEnter={() => setHover(skillLevel)}
        // onMouseLeave={() => setHover(1)}
        />,
        iconOutline: <SkillIconOutline
            color='#4d5d6d'
            title='skill level description here'
            height='24px'
            width='24px'
            className='skill-icon skill-icon-outline'
        // onMouseEnter={() => setHover(skillLevel)}
        // onMouseLeave={() => setHover(1)}
        />
    }

    // Functions
    const handleSkillLevelSetting = level => {
        if (props.isNewSkillLevelItem) {
            return props.skillLevelSetterOfNewOrExistingItems(level);
        }
        return props.skillLevelSetterOfNewOrExistingItems(level, props.techOrSkillItem.id);
    }


    // Conditional rendering
    if (props.isNewSkillLevelItem) {
        return (
            <>
                {
                    [...Array(4)].map((skillIcon, i) => {
                        const skillLevelValue = i + 1;

                        return (
                            <label key={i}>
                                <input
                                    type='radio'
                                    name='radio-skill-level'
                                    className='radio-skill-level'
                                    value={skillLevelValue}
                                    onClick={() => handleSkillLevelSetting(skillLevelValue)}
                                />
                                {props.newSkillLevel >= skillLevelValue ? icons.iconFilled : icons.iconOutline}
                            </label>
                        );
                    })
                }
            </>
        )
    }
    if (!props.isNewSkillLevelItem) {
        return (
            <>
                {
                    [...Array(4)].map((skillIcon, i) => {
                        const skillLevelValue = i + 1;

                        return (
                            <label key={i}>
                                <input
                                    type='radio'
                                    name='radio-skill-level'
                                    className='radio-skill-level'
                                    value={skillLevelValue}
                                    onClick={() => handleSkillLevelSetting(skillLevelValue)}
                                />
                                {props.techOrSkillItem.skillLevel >= skillLevelValue ? icons.iconFilled : icons.iconOutline}
                            </label>
                        );
                    })
                }
            </>
        )
    }
}

export default SkillLevelEntry;