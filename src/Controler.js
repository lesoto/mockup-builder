import React, { Component } from 'react';
import SingleControler from './SingleControler';

const elements = [
  {
    name: 'Header',
    components: ['Full', 'Small', 'Sticky Header', 'Brand'],
  },
  {
    name: 'Headline',
    components: ['Carousel', 'Centered', 'Gradient'],
  },
  {
    name: 'Services',
    components: ['Content', 'Cards'],
  },
  {
    name: 'Gallery',
    components: ['Bulletpoint List', 'Images'],
  },
  {
    name: 'Newsletter',
    components: ['Subscription', 'Newsletter Content'],
  },
  {
    name: 'Pricing',
    components: ['Pricing One', 'Pricing Two', 'Pricing Three', 'Pricing Four'],
  },
  {
    name: 'About',
    components: ['About', 'Hero Block'],
  },
  {
    name: 'Registration',
    components: ['Registration'],
  },
  {
    name: 'Login',
    components: ['Login One', 'Login Two'],
  },
  {
    name: 'Team',
    components: ['Team One', 'Team Two'],
  },
  {
    name: 'Blog',
    components: ['Blog'],
  },
  {
    name: 'CallToAction',
    components: ['Call-To-Action One', 'Call-To-Action Two', 'Call-To-Action Three'],
  },
  {
    name: 'Product',
    components: ['Product Collection', 'Product One', 'Product Two', 'Product Three', 'Product Four'],
  },
  {
    name: 'Shopping Cart',
    components: ['Shopping Cart'],
  },
  {
    name: 'Features',
    components: ['Features'],
  },
  {
    name: 'Benefits',
    components: ['Benefits'],
  },
  {
    name: 'FAQ',
    components: ['FAQ One', 'FAQ Two', 'FAQ Three', 'FAQ Four', 'FAQ Five'],
  },
  {
    name: 'Testimonials',
    components: ['Testimonials One', 'Testimonials Two'],
  },
  {
    name: 'Picture',
    components: ['Picture'],
  },
  {
    name: 'Contact',
    components: ['Contact One', 'Contact Two'],
  },
  {
    name: 'Reviews',
    components: ['Review One', 'Review Two', 'Review Three'],
  },
  {
    name: 'Footer',
    components: ['Footer Text', 'Footer Links', 'Footer One', 'Footer Two'],
  },
  {
    name: 'Page404',
    components: ['Page404'],
  },
];

export default class Controler extends Component {
  state = {
    next: [],
    stay: false,
  };

  nextComponent = (check, e) => {
    if (check) {
      if (!this.props.next()) {
        return;
      }
    }
    if (elements.length > 0) {
      let all = [...this.state.next];
      all.push(elements.shift());
      this.setState({
        next: all,
        stay: true,
      });
    } else {
      this.props.done();
      e.target.className = 'd-none';
    }
  };

  componentDidMount() {
    this.nextComponent(false);
  }

  render() {
    let { next, stay } = this.state;
    return (
      <aside className="bg-black text-light">
        <div className="text-center components-controler">
          <h5 className="p-2 text-uppercase">Site Builder</h5>
          <hr className="bg-light my-2" />
          <div className="text-left">
            {elements.length >= 0
              ? next.map((el, index) => (
                  <SingleControler
                    key={index}
                    name={el.name}
                    elements={el.components}
                    componentFun={this.props.componentFun}
                    selected={this.props.selected}
                    stay={stay}
                  />
                ))
              : ''}
          </div>
        </div>

        <div className="mt-1 mt-md-2 mt-lg-3 py-1 text-center controler-bootom-area">
          <p className="my-1">
            {elements.length > 0 ? 'Press the button for next component.' : 'Congrats! Your website is ready.'}
          </p>
          <button
            className="btn btn-light btn-sm d-block mx-auto w-75 align-self-center"
            onClick={(e) => this.nextComponent(true, e)}
          >
            {elements.length > 0 ? 'Next' : "Let's Finish"}
          </button>
          <small className="py-2">Always Follow Instructions</small>
        </div>
      </aside>
    );
  }
}
