import Menu from "../components/menu";

export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="content__slider">
              Слайдер
          </div>
        </div>
      </div>
    </div>
  )
}
