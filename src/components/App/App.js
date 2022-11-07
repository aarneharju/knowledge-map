import './App.css';
import Button from '../common/Button';
import KnowledgeMapLogo from '../KnowledgeMapLogo/KnowledgeMapLogo';
import Settings from '../Settings/Settings';
import Logout from '../Logout/Logout';
import SkillLevel from '../common/SkillLevel';
import { ReactComponent as SkillIconFilled } from '../../assets/images/vectors/bulb.svg';
import { ReactComponent as SkillIconOutline } from '../../assets/images/vectors/bulb-outline.svg';


function App() {

  const onChange = (event) => {
    return
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
              <Button text='Search' className='button-secondary' />
              <Button text='Manage' className='button-secondary' />
            </nav>
          </div>
          <div id='content-main'>
            <section id='section-add-skills'>
              <h2>Add technology / skill</h2>
              <form className='form-tech-skill-input'>
                <div className='input-tech-skill'>
                  <label htmlFor='skill-input' className='form-label'>Technology / skill:</label>
                  <input type='text'
                    name='skill-input'
                    id='skill-input'
                  // value=''
                  // onChange={onChange}
                  />
                </div>
                <div className='input-skill-level'>
                  <div className='form-label'>Skill level:</div>
                  <div className='skill-indicator'>
                    <SkillLevel />
                  </div>
                </div>
                <Button text='Add' className='button-secondary' />
              </form>
            </section>
            <section id='section-technologies-skills'>
              <h2>Technologies / skills</h2>
              <p className='sort-text'>Sort by: <span className='sort-by-functionality'>name</span></p>
              <ul className='technology-skill-list'>
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
                </li>
              </ul>
            </section>
          </div>
        </main>
        {/* <footer id='footer'>footer</footer> */}
      </div>
      {/* <img src='images/photos/johannes-plenio-voQ97kezCx0-unsplash.jpg' /> */}
    </div>
  );
}

export default App;
