import data from '../../data/index.json';
import { BsThreeDots } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";


export default function MySkills(){
    return(
        <section className='skills--section' id='mySkills'>
            <div className="skills--section--container">
                {data?.skills?.map((item, i) => (
                    <div key={i} className="skills--section--card">
                        <div className="card--title">
                            <div className="card--title-text">
                                <p>{item.title}</p>
                                <span>{item.subtext}</span>
                            </div>
                            <button>
                                <BsThreeDots size={25}/>
                            </button>

                        </div>
                        <div className="card--subtitle">
                            <p>{item.description}</p>
                            <button><IoMdDownload size={25} fill='var(--white)'/></button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}