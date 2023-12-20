import { FaCartShopping } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--grids">
                <div className="hero--section--grid head--one">
                    <div className="head--title">
                        <div className="head--title--noneflex">
                            <p>MORE LEARM</p>
                            <h1>There is something else for you all</h1>
                        </div>     
                    </div>
                    <div className="head--sub">
                        <button className="head--btn">
                            <div className="head--btn--rl">
                                <span>Start</span>
                                <p>Get Product</p>
                            </div>
                            <div className="head--btn--lf">
                                <FaCartShopping size={25}/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="hero--section--grid head--two">
                    <div className="head--title">
                        <p>MORE LEARM</p>
                        <FiArrowUpRight size={50}/>
                    </div>
                    <div className="head--sub">
                        <h2>View blocks</h2>
                    </div>
                </div>
                <div className="hero--section--grid head--three">
                <div className="head--title">
                        <p>MORE LEARM</p>
                        <FiArrowUpRight size={50}/>
                    </div>
                    <div className="head--sub">
                        <h2>View blocks</h2>
                    </div>
                </div>
                <div className="hero--section--grid head--four">
                <div className="head--title">
                        <p>MORE LEARM</p>
                        <FiArrowUpRight size={50}/>
                    </div>
                    <div className="head--sub">
                        <h2>View blocks</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}