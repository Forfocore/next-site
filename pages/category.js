import Menu from "../components/menu";

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          <div className="content__category">
              Категории
          </div>
        </div>
      </div>
    </div>
  )
}
