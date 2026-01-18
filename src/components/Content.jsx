import About from "./About"
import Buttons from "./Buttons"
import Person from "./Person"

const Content = () => {
  return (
        <section className="border-content-bg">
            <Person />
            <Buttons />
            <About />
        </section>
    )
}

export default Content