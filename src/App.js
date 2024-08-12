import React from 'react';
import Controler from './Controler';
import ReactDOMServer from 'react-dom/server';
import { saveAs } from 'file-saver';
import { Full, Small, StickyHeader, Brand } from './components/Header';
import { Carousel, Centered, Gradient } from './components/Headline';
import { BulletpointList, Images } from './components/Section';
import { Content, Cards } from './components/Article';
import { FooterText, FooterLinks, FooterOne, FooterTwo } from './components/Footer';
import { Subscription, NewsletterContent } from './components/Newsletter';
import { About, HeroBlock } from './components/About';
import { Benefits } from './components/Benefits';
import { Registration } from './components/Registration';
import { Blog } from './components/Blog';
import { ShoppingCart } from './components/ShoppingCart';
import { CallToActionOne, CallToActionTwo, CallToActionThree } from './components/CallToAction';
import { ContactOne, ContactTwo } from './components/Contact';
import { FAQOne, FAQTwo, FAQThree, FAQFour, FAQFive } from './components/FAQ';
import { Features } from './components/Features';
import { LoginOne, LoginTwo } from './components/Login';
import { Picture } from './components/Picture';
import { ProductCollection, ProductOne, ProductTwo, ProductThree, ProductFour } from './components/Product';
import { PricingOne, PricingTwo, PricingThree, PricingFour } from './components/Pricing';
import { Page404 } from './components/Page404';
import { ReviewOne, ReviewTwo, ReviewThree } from './components/Review';
import { Services } from './components/Services';
import { TeamOne, TeamTwo } from './components/Team';
import { TestimonialsOne, TestimonialsTwo } from './components/Testimonials';

class App extends React.Component {
  state = {
    open: true,
    edit: false,
    all: new Map(),
    status: false,
    components: [
      'Header',
      'Headline',
      'Services',
      'Gallery',
      'Newsletter',
      'Pricing',
      'About',
      'Registration',
      'Login',
      'Team',
      'Blog',
      'CallToAction',
      'Product',
      'Shopping Cart',
      'Features',
      'Benefits',
      'FAQ',
      'Testimonials',
      'Picture',
      'Contact',
      'Reviews',
      'Footer',
      'Page404',
    ],
    final: '',
    displaySmallControler: false,
  };

  controlDashboard = (isOpen) => {
    isOpen = isOpen ? this.state.open : false;

    const handleLargeScreen = () => {
      const aside = document.querySelector('aside');
      const main = document.querySelector('main');
      const controle = document.querySelector('.controle');
      const icon = document.querySelector('.controle i');
      const controlerSection = document.querySelector('.components-controler');

      if (isOpen) {
        aside.style.display = 'flex';
        main.style.marginLeft = `${aside.clientWidth}px`;
        controle.style.left = `${aside.clientWidth}px`;
        icon.className = 'fas fa-caret-left fa-1x px-2 py-4 bg-light';
      } else {
        aside.style.display = 'none';
        main.style.marginLeft = '0px';
        controle.style.left = '0px';
        icon.className = 'fas fa-caret-right fa-1x px-2 py-4 bg-light';
      }
      aside.style.flexFlow = 'column';
      aside.style.justifyContent = 'space-between';
      aside.style.alignItems = 'stretch';
      aside.style.width = '350px';
      aside.style.height = '100vh';
      aside.style.position = 'absolute';
      aside.style.top = '0';
      aside.style.left = '0';
      controlerSection.style.overflow = 'auto';
      controle.style.position = 'absolute';
      controle.style.top = '50vh';
    };

    const handleSmallScreen = () => {
      const aside = document.querySelector('aside');
      const main = document.querySelector('main');
      const icon = document.querySelector('small-controler-btn i');

      if (isOpen) {
        aside.style.display = 'flex';
        main.style.display = 'none';
        aside.style.flexFlow = 'column';
        aside.style.justifyContent = 'center';
        aside.style.alignItems = 'center';
        aside.style.width = '100vw';
        aside.style.height = '100vh';
        aside.style.position = 'absolute';
        aside.style.top = '0';
        aside.style.left = '0';
        aside.style.right = '0';
        aside.style.bottom = '0';

        icon.className = 'fas fa-times';
      } else {
        aside.style.display = 'none';
        main.style.display = 'block';
        icon.className = 'fas fa-caret-up';
      }
    };

    if (window.innerWidth > 1250) {
      handleLargeScreen();
    } else {
      handleSmallScreen();
    }
  };

  componentDidMount() {
    this.controlDashboard();
    window.addEventListener('resize', () => {
      this.controlDashboard();
      this.setState({
        open: true,
      });
    });
  }

  controleClick = (open) => {
    this.controlDashboard(open);
    this.setState({
      open: !open,
    });
  };

  componentName = (element, value) => {
    let { all } = this.state;

    this.setState({
      edit: true,
    });

    if (element) {
      all.set(element, value);
      this.setState({
        final: this.renderComponents(),
      });
    }
  };

  view = () => {
    let { all, components } = this.state;
    let next = false;

    for (let key of all.keys()) {
      for (let el of components) {
        if (key === el) {
          this.state.components.splice(el, 1);
          this.setState({
            status: true,
          });
          next = true;
        }
      }
    }

    return next;
  };

  component = (v) => {
    switch (v) {
      case 'Full':
        return <Full key="N1" />;
      case 'Small':
        return <Small key="N2" />;
      case 'Carousel':
        return <Carousel key="N3" />;
      case 'Centered':
        return <Centered key="N4" />;
      case 'Gradient':
        return <Gradient key="N5" />;
      case 'Content':
        return <Content key="N6" />;
      case 'Cards':
        return <Cards key="N7" />;
      case 'Bulletpoint List':
        return <BulletpointList key="N8" />;
      case 'Images':
        return <Images key="N9" />;
      case 'Footer Text':
        return <FooterText key="F1" />;
      case 'Footer Links':
        return <FooterLinks key="F2" />;
      case 'Subscription':
        return <Subscription key="F3" />;
      case 'Newsletter Content':
        return <NewsletterContent key="F4" />;
      case 'About':
        return <About key="F5" />;
      case 'Registration':
        return <Registration key="F6" />;
      case 'Blog':
        return <Blog key="F7" />;
      case 'Call-To-Action One':
        return <CallToActionOne key="F8" />;
      case 'Call-To-Action Two':
        return <CallToActionTwo key="F9" />;
      case 'Call-To-Action Three':
        return <CallToActionThree key="C1" />;
      case 'Services':
        return <Services key="C2" />;
      case 'Sticky Header':
        return <StickyHeader key="C3" />;
      case 'Brand':
        return <Brand key="C4" />;
      case 'Login One':
        return <LoginOne key="C5" />;
      case 'Login Two':
        return <LoginTwo key="C6" />;
      case 'Team One':
        return <TeamOne key="C7" />;
      case 'Team Two':
        return <TeamTwo key="C8" />;
      case 'Pricing One':
        return <PricingOne key="C9" />;
      case 'Pricing Two':
        return <PricingTwo key="D1" />;
      case 'Pricing Three':
        return <PricingThree key="D2" />;
      case 'Pricing Four':
        return <PricingFour key="D3" />;
      case 'FAQ One':
        return <FAQOne key="D4" />;
      case 'FAQ Two':
        return <FAQTwo key="D5" />;
      case 'FAQ Three':
        return <FAQThree key="D6" />;
      case 'FAQ Four':
        return <FAQFour key="D7" />;
      case 'FAQ Five':
        return <FAQFive key="D8" />;
      case 'Hero Block':
        return <HeroBlock key="D9" />;
      case 'Features':
        return <Features key="P1" />;
      case 'Benefits':
        return <Benefits key="P2" />;
      case 'Picture':
        return <Picture key="P3" />;
      case 'Product Three':
        return <ProductThree key="P4" />;
      case 'Product Four':
        return <ProductFour key="P5" />;
      case 'Contact Two':
        return <ContactTwo key="P6" />;
      case 'Footer One':
        return <FooterOne key="P7" />;
      case 'Footer Two':
        return <FooterTwo key="P8" />;
      case 'Testimonials One':
        return <TestimonialsOne key="P9" />;
      case 'Testimonials Two':
        return <TestimonialsTwo key="T1" />;
      case 'Product Collection':
        return <ProductCollection key="T2" />;
      case 'Product One':
        return <ProductOne key="T3" />;
      case 'Product Two':
        return <ProductTwo key="T4" />;
      case 'Page 404':
        return <Page404 key="T5" />;
      case 'Contact One':
        return <ContactOne key="T6" />;
      case 'Shopping Cart':
        return <ShoppingCart key="T7" />;
      case 'Review One':
        return <ReviewOne key="T8" />;
      case 'Review Two':
        return <ReviewTwo key="T9" />;
      case 'Review Three':
        return <ReviewThree key="W1" />;
      default:
        return '';
    }
  };

  renderComponents = () => {
    let { all } = this.state;
    let Arr = [];

    all.forEach((el) => Arr.push(this.component(el)));

    return Arr;
  };

  copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = this.generateHTML();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('HTML code copied to clipboard!');
  };

  saveToFile = () => {
    const blob = new Blob([this.generateHTML()], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'website.html');
  };

  publish = () => {
    const html = this.generateHTML();
    const newWindow = window.open();
    newWindow.document.write(html);
    newWindow.document.close();
  };

  generateHTML = () => {
    const { all } = this.state;
    const componentsHTML = Array.from(all.values())
      .map((component) => {
        return ReactDOMServer.renderToStaticMarkup(this.component(component));
      })
      .join('');
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Website</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        ${componentsHTML}
      </body>
      </html>
    `;
  };

  render() {
    let { open, edit, all, final } = this.state;

    return (
      <React.Fragment>
        <div
          className="small-controler-btn shadow border bg-light py-2 px-3 rounded-circle"
          onClick={() => this.controleClick(open)}
        >
          {!open ? <i className="fas fa-times"></i> : <i className="fas fa-caret-up"></i>}
        </div>
        <div className="controle border rounded shadow">
          <i className="fas fa-caret-right fa-1x px-1 bg-light" onClick={() => this.controleClick(open)}></i>
        </div>
        <Controler
          componentFun={this.componentName}
          done={() => this.controleClick(open)}
          next={this.view}
          selected={all}
        />
        <main>
          {edit ? (
            <React.Fragment>{final ? final.map((e) => e) : ''}</React.Fragment>
          ) : (
            <div id="start" className="bg-secondary text-center d-flex justify-content-center align-items-center">
              <h6 className="text-light mx-2">Click on the arrow button to start building websites.</h6>
            </div>
          )}
        </main>
        <div className="actions">
          <button onClick={this.copyToClipboard}>Copy to Clipboard</button>
          <button onClick={this.saveToFile}>Save</button>
          <button onClick={this.publish}>Publish</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
