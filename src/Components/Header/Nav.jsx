import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list" >
      <li >
        <Link to="/">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>          
          </ul>
        </DropDown> */}
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          All Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service/tyre-repair" onClick={() => setMobileToggle(false)}>
                Tyre Repair
              </Link>
            </li>
              <li>
              <Link to="/service/buy-new-tyre" onClick={() => setMobileToggle(false)}>
                Buy New Tyre 
              </Link>
            </li>
             <li>
              <Link to="/service/tyre-replacement" onClick={() => setMobileToggle(false)}>
                Tyre Replacement
              </Link>
            </li>
              <li>
              <Link to="/service/air-fill" onClick={() => setMobileToggle(false)}>
                Air Fill
              </Link>
            </li>
              <li>
              <Link to="/service/spare-tyre-change" onClick={() => setMobileToggle(false)}>
                Spare Tyre Change
              </Link>
            </li>
             {/* <li>
              <Link to="/service/fix-puncture-tyre" onClick={() => setMobileToggle(false)}>
                Fix Puncture Tyre
              </Link>
            </li> */}
             <li>
              <Link to="/service/fix-puncture-tyre" onClick={() => setMobileToggle(false)}>
                Fix Puncture Tyre
              </Link>
            </li>
              <li>
              <Link to="/service/new-battery-installation" onClick={() => setMobileToggle(false)}>
                New Battery Installation
              </Link>
            </li>
            <li>
              <Link to="/service/battery-health-check" onClick={() => setMobileToggle(false)}>
                Battery Health Check
              </Link>
            </li>
            <li>
              <Link to="/service/quick-jumpStart-service" onClick={() => setMobileToggle(false)}>
                Quick JumpStart
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>  
      <li >
        <Link to="/service/tyre-repair">
          Tyre Repair
        </Link>
    

      </li>    
      <li >
        <Link to="/service/buy-new-tyre">
          Buy New Tyre 
        </Link>
    

      </li>
       <li >
        <Link to="/service/new-battery-installation">
          Battery Installation
        </Link>
    

      </li>  
       <li >
        <Link to="/service/tyre-replacement">
          Tyre Replacement
        </Link>
    

      </li>
       <li >
        <Link to="/service">
         Spare Tyre Change 
        </Link>
    

      </li>
      
        


      {/* <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>        

      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
              Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>                   
          </ul>
        </DropDown>
      </li>      
    
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          News
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>          
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li> */}
    </ul>
  );
}
