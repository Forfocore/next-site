export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <div className="kost">
            <div className='logo'></div>
            <div className='name__logo'>Halloween</div>
          </div>
          <div className="menu__cont">
            <div className="main__text">Home</div>
            <div className="main__text">About</div>
            <div className="main__text">Candy</div>
            <div className="main__text">New</div>
            <div className='btn__support'><div className="main__text">Support</div></div>
          </div>
        </div>
        <div className="site__content">
          <div className="content__slider">Слайдер</div>
        </div>
      </div>
    </div>
  );
}
