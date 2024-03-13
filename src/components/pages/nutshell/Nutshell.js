import './Nutshell.css';
import SocialMediaLinks from '../../ui/socialMediaLinks/socialMediaLinks';
import mypics from '../../assets/images/mypics.jpeg';
import AdditionalInformation from '../additionalInformation/AdditionalInformation';



const Nutshell = () => {
    return (
        <div>
            <div className='container'>
                <div className='content'>
                    <div>
                        <img src={mypics} alt='hello' className='image' />
                    </div>
                    <div className='write-ups'>
                        <h4> Hello, I'm Sandra </h4>
                        <h1 className='name'> Frontend Developer </h1>
                        <p className='words'>
                            Highly skilled at design enhancements and committed to <br />
                            delivering high quality products with hands-on experience<br />
                            in development of enterprise applications giving the users <br />
                            a beautiful experience.
                        </p>
                        <SocialMediaLinks />
                    </div>
                </div>
                <AdditionalInformation />
            </div>
         
        
        </div>
        
    );
}

export default Nutshell;
