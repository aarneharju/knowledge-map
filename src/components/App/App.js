import './App.css';
import Button from '../common/Button';
import KnowledgeMapLogo from '../KnowledgeMapLogo/KnowledgeMapLogo';
import Settings from '../Settings/Settings';
import Logout from '../Logout/Logout';
import TechSkillListMain from '../TechSkillListMain/TechSkillListMain';
import SkillLevelEntry from '../SkillLevelEntry/SkillLevelEntry';
import { useState } from 'react';


function App() {
  // States
  const [techOrSkillList, setTechOrSkillList] = useState([]);
  const [newTechOrSkill, setNewTechOrSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(1);

  // Functions
  const skillLevelSetterOfNewItems = skillLevel => setNewSkillLevel(skillLevel);

  const skillLevelSetterOfExistingItems = (skillLevel, techOrSkillID) => {
    console.log({ skillLevel });
    console.log({ techOrSkillID });
    const updatedTechOrSkill = techOrSkillList.filter(techOrSkill => techOrSkill.id === techOrSkillID).skillLevel;
    setTechOrSkillList(techOrSkillList.map(techOrSkill => techOrSkill.id === techOrSkillID ? updatedTechOrSkill : techOrSkill));
    return 'Skill level updated.'
  };

  const isntInTechSkillList = techOrSkillToMatch => {
    if (techOrSkillList.length === 0) return true;
    return techOrSkillList.find(techOrSkillInList => {
      console.log({ techOrSkillInList, techOrSkillToMatch });
      return techOrSkillInList.techOrSkillName === techOrSkillToMatch ? false : true
    });
  }

  const resetAddTechOrSkillInputFields = () => {
    setNewTechOrSkill('');
    setNewSkillLevel(1);
  }

  // Event handlers
  const onChangeNewTechOrSkill = event => setNewTechOrSkill(event.target.value);

  const addNewTechSkill = event => {
    // event.preventDefault();

    if (isntInTechSkillList(newTechOrSkill)) {
      const newTechOrSkillObject = {
        id: newTechOrSkill,
        techOrSkillName: newTechOrSkill,
        skillLevel: newSkillLevel
      };
      setTechOrSkillList(techOrSkillList.concat([newTechOrSkillObject]));
      resetAddTechOrSkillInputFields();
      return 'New tech / skill added.';
    } else {
      const modalMessage = `${newTechOrSkill} is already in the list.`
      // TODO: implement function openModal(modalMessage);
      window.confirm(modalMessage);
    }
  }

  return (
    <div className='App' id='page'>
      <div id='container'>
        <header id='header'>
          <KnowledgeMapLogo />
          <div id='settings-and-logout'>
            <Settings />
            <Logout className='button-primary button-logout' />
          </div>
        </header>
        <main id='main'>
          <div id='profile-and-navigation'>
            <div id='profile-image-and-name'>
              <img src='images/Aarne-200722-square-500px.jpg' alt='profile image' id='profile-image' />
              <h2 id='name-under-profile-image'>Aarne Harju</h2>
            </div>
            <nav id='main-navigation'>
              <Button text='Search' className='button-secondary' onClick={addNewTechSkill} />
              <Button text='Manage' className='button-secondary' />
            </nav>
          </div>
          <div id='content-main'>
            <section id='section-add-skills'>
              <h2>Add technology / skill</h2>
              <form className='form-tech-skill-input' action='POST'>
                <div className='input-tech-skill'>
                  <label htmlFor='skill-input' className='form-label'>Technology / skill:</label>
                  <input type='text'
                    name='skill-input'
                    id='skill-input'
                    value={newTechOrSkill}
                    onChange={onChangeNewTechOrSkill}
                  />
                </div>
                <div className='input-skill-level'>
                  <div className='form-label'>Skill level:</div>
                  <div className='skill-indicator'>
                    <SkillLevelEntry skillLevelSetterOfNewOrExistingItems={skillLevelSetterOfNewItems} />
                  </div>
                </div>
                <Button text='Add' className='button-secondary' onClick={addNewTechSkill} />
              </form>
            </section>
            <TechSkillListMain techOrSkillList={techOrSkillList} skillLevelSetterOfExistingItems={skillLevelSetterOfExistingItems} />
          </div>
        </main>
        {/* <footer id='footer'>footer</footer> */}
      </div>
      {/* <img src='images/photos/johannes-plenio-voQ97kezCx0-unsplash.jpg' /> */}
    </div>
  );
}

export default App;
