/* соц.сети*/

import './index.scss';

export const SocialIcons = () => {
    return (
        <div className="social-icons">            
            <a className="icon facebook" href="https://facebook.com/umutbulagy.org/ " target='_blank' rel='noreferrer'>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="icon twitter" href="https://twitter.com/ubulagy?s=21" target='_blank' rel='noreferrer'>
              <i className="fab fa-twitter" />
            </a>
            <a className="icon instagram" href="https://instagram.com/umut_bulagy?igshid=1xbcj2buy3w7f" target='_blank' rel='noreferrer'>
              <i className="fab fa-instagram" />
            </a>
            <a className="icon youtube" href="https://youtube.com/channel/UCPl7-Ft11BG8m2OC9m3p9EQ" target='_blank' rel='noreferrer'>
              <i className="fab fa-youtube" />
            </a>
        </div>
          
    )
}