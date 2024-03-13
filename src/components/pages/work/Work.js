import React from 'react';
import './Work.css';
import { FaGithub } from 'react-icons/fa';
import exchangerate from '../../assets/images/exchangerate.png'; 
import editingapp from '../../assets/images/editingapp.png'; 
import bestFx from '../../assets/images/bestFx.png';


const school = [
  { photo: exchangerate, id: 1, title: 'EXCHANGE RATE CALCULATOR', course: 'For quick conversion of foreign exchange rates.', link: 'https://github.com/sandratech23/', Icon: FaGithub},
  { photo: editingapp, id: 2, title: 'TODO LIST', course: 'For easy noting and editing of daily activities.', link: ' ', Icon: FaGithub },
  { photo: bestFx, id: 3, title: 'Trading Academy Site', course: 'To help individuals take control of their financial future.', link: ' ',  Icon: FaGithub}
];

const Work = () => {
  return (
    <div>
      <div className='body'>
        <div className='subs'>
        <h3>Projects that I have built </h3>
        <h5>Apart from my professional work, these are some side projects that I've built in my spare time.</h5>
        </div>
        <section>
          <div className="workBox">
            {school.map(({ photo, id, title, course, link, Icon}) => (
              <div className="work-details" key={id}>
                <div className='workdetails'>
                  <div>
                    <img src={photo} alt='hello' className='work-view' />
                  </div>
                  <h3 className='work-heading'>{title}</h3>
                  <p>{course}</p>
                  <a href={link}>
                    <Icon size='1.2rem' style={{marginLeft:'10px', color:'var(--font-color)'}} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Work;
