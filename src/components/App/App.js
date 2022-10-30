import './App.css';
import Button from '../common/Button';
import KnowledgeMapLogo from '../KnowledgeMapLogo/KnowledgeMapLogo';
import Settings from '../Settings/Settings';
import Logout from '../Logout/Logout';

function App() {
  return (
    <div className='App' id='page'>
      <div id='container'>
        <header id='header'>
          <KnowledgeMapLogo />
          <div id='settings-and-logout'>
            <Settings />
            <Logout />
          </div>
        </header>
        <main>
          <div id='profile-and-navigation'>
            <div id='profile-image-and-name'>
              <img src='images/Aarne-200722-square-500px.jpg' alt='profile image' id='profile-image' />
              <h2 id='name-under-profile-image'>Aarne Harju</h2>
            </div>
            <nav id='main-navigation'>
              <Button text='Search' />
              <Button text='Manage' />
            </nav>
          </div>
          <div id='content-main'>
            <section id='add-skills'>
              <h2>Add technology / skill</h2>
              <form>
                <label htmlFor='skill-input' className='form-label'>Technology / skill:</label>
                <input type='text'
                  name='skill-input'
                  id='skill-input'
                  value='skill-input'
                  onChange=''
                />
                <label className='form-label'>Skill level:</label>
                <div className='skill-indicator'></div>
                <Button text='Add' />
              </form>
            </section>
            <section>
              <h2>Technologies / skills</h2>
              <p className='sort-text'>Sort by: <span className='sort-by-functionality'>name</span></p>
              <ul>
                <li><span className='skill-item'></span><span className='skill-level'></span></li>
              </ul>
            </section>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
