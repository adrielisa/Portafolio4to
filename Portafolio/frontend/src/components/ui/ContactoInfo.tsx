import InstagramColor from '../../assets/instagramcolor.png';
import GitHub from '../../assets/github.png';
import LinkedinColor from '../../assets/linkedincolor.png'

const ContactoInfo = () => {
    return (
        <div className="absolute right-4 bottom-4 space-y-4 p-4 flex flex-col items-end">

            <a href="https://www.instagram.com/adrielissaa/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramColor} alt="Instagram" className="h-10 sm:h-14 w-auto" />
            </a>

            <a href="https://github.com/adrielisa">
                <img src={GitHub} alt="GitHub" className="h-10 sm:h-14 w-auto" />
            </a>

            <a href="https://www.linkedin.com/in/adriel-isai-rodriguez-pacheco-268693225/">
                <img src={LinkedinColor} alt="GitHub" className="h-10 sm:h-14 w-auto" />
            </a>

        </div>
    );
};

export default ContactoInfo;
