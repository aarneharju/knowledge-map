import React from "react";
import SkillLevelEntry from "../SkillLevelEntry/SkillLevelEntry";


const TechSkillListMain = props => {
    const arrayOfTechOrSkillItemsForRender = props.techOrSkillList.map(techOrSkillItem => {
        return (
            <li key={techOrSkillItem.id}>
                <span className='technology-skill-name'>{techOrSkillItem.techOrSkillName}</span>
                <div className='skill-indicator'>
                    <SkillLevelEntry skillLevelSetterOfNewOrExistingItems={props.skillLevelSetterOfExistingItems} techOrSkillItem={techOrSkillItem} />
                </div>
            </li>
        )
    });

    return (
        <section id='section-technologies-skills'>
            <h2>Technologies / skills</h2>
            <p className='sort-text'>Sort by: <span className='sort-by-functionality'>name</span></p>
            <ul className='technology-skill-list'>
                {arrayOfTechOrSkillItemsForRender}
            </ul>
        </section>
    )
}

export default TechSkillListMain;