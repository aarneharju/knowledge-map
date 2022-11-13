import React from "react";
import { ReactComponent as SkillIconFilled } from '../../assets/images/vectors/bulb.svg';
import { ReactComponent as SkillIconOutline } from '../../assets/images/vectors/bulb-outline.svg';
import SkillLevelEntry from "../SkillLevelEntry/SkillLevelEntry";


const TechSkillListMain = props => {
    const arrayOfTechOrSkillItemsForRender = props.techOrSkillList.map(techOrSkillItem => {
        console.log({ techOrSkillItem });
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
                {/* <li>
                    <span className='technology-skill-name'>React</span>
                    <div className='skill-indicator'>
                        <SkillLevelEntry skillLevelSetterOfExistingItems={props.skillLevelSetterOfExistingItems} />
                    </div>
                </li>
                <li>
                    <span className='technology-skill-name'>MySQL</span>
                    <span className='technology-skill-level'>
                        <input type="radio" name='skill-level-icon' id="skill-level-5" />
                        <label htmlFor="skill-level-5"></label>
                        <SkillIconFilled
                            fill={'#ffca1b'}
                            title={'skill level 1'}
                            height="24px"
                            width="24px"
                            onClick={() => console.log('im bulb')}
                        />
                        <SkillIconOutline
                            color={'#4d5d6d'}
                            title={'skill level 0'}
                            height="24px"
                            width="24px"
                            style={{ margin: 0, padding: 0 }}
                            onClick={() => console.log('I\'m outlinebul')}
                        />
                        <SkillIconOutline
                            color={'#4d5d6d'}
                            title={'skill level 0'}
                            height="24px"
                            width="24px"
                            onClick={() => console.log('I\'m outlinebul')}
                        />
                        <SkillIconOutline
                            color={'#4d5d6d'}
                            title={'skill level 0'}
                            height="24px"
                            width="24px"
                            style={{ margin: 0, padding: 0 }}
                            onClick={() => console.log('I\'m outlinebul')}
                        />
                    </span>
                </li> */}
            </ul>
        </section>
    )
}

export default TechSkillListMain;