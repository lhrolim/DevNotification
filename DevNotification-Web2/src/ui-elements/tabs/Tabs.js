import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
import VerticalTabs from './VerticalTabs'
import DefaultTabs from './DefaultTabs'
import DefaultPills from './DefaultPills'
import RoundedPills from './RoundedPills'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/tabs.css'

const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger']
const texts = [
  "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
  "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.",
  "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.  Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.  Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr."
]
const Tabs = () => (
  <div>
    <div className="row">
      <div className="col-12 col-xl-6">
        <Widget
          title="Default tabs"
          description="Use the <code>.nav-tabs</code> className for default tabs">
          <DefaultTabs texts={texts} />
        </Widget>
      </div>
      <div className="col-12 col-xl-6">
        <Widget
          title="Default pills"
          description="Use the <code>.nav-pills</code> className for default pills">
          <DefaultPills texts={texts} />
        </Widget>
      </div>
      <div className="col-12 col-xl-6">
        <Widget
          title="Rounded pills"
          description="Use the <code>.nav-pills-rounded</code> className for rounded pills">
          <RoundedPills texts={texts} />
        </Widget>
      </div>
      <div className="col-12 col-xl-6">
        <Widget
          title="Vertical tabs"
          description="Use the <code>.nav-tabs-vertical</code> className for vertical tabs">
          <VerticalTabs texts={texts} />
        </Widget>
      </div>
    </div>
    <div className="row">
      {colors.map((color, i) => (
        <div className="col-12 col-xl-6" key={i}>
          <Widget
            title={`Tabs and pills using ${color} colors`}
            description={`Use the <code>.nav-tabs-${color}</code> or the <code>.nav-pills-${color}</code> classNames to style the tabs and pills using the ${color} color`}>
            <Nav tabs className={`nav-tabs-${color}`}>
              <NavItem>
                <NavLink className="active">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="disabled">Disabled</NavLink>
              </NavItem>
            </Nav>
            <br />
            <Nav tabs className={`nav-pills-${color} nav-pills`}>
              <NavItem>
                <NavLink className="active">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="disabled">Disabled</NavLink>
              </NavItem>
            </Nav>
            <br />
            <Nav
              tabs
              className={`nav-pills-${color} nav-pills nav-pills-rounded`}>
              <NavItem>
                <NavLink className="active">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="disabled">Disabled</NavLink>
              </NavItem>
            </Nav>
          </Widget>
        </div>
      ))}
    </div>
  </div>
)
export default Tabs
