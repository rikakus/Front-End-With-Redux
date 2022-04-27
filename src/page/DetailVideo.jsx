import React from 'react'

import Navbar from '../components/Navbar';
import Next from '../components/nextVideo';
import style from "../css/video.module.css"
import nextVideo1 from '../assets/nextVideo1.png'
 

export default function Video() {
    return (
        <>
        <section>
      <div className={style.background}>
        <div className={style.yellow}></div>
        <div className={style.white}>
          <div className={style.navbar}>
            <Navbar/>
            </div>
          <section>
            <div className={style.content}>
              <div className={style.big}>
                <div className={style.image}>
                  <div className={style.play}></div>
                </div>
                <h1 className={style.h1}>
                  Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it
                </h1>
                <h6 className={style.bigh6}>3 month ago</h6>
              </div>
              <div className={style.next}>
                <h6 className={style.h6}>Next</h6>
                <ul className={style.ul}>
                  <li><Next image={nextVideo1} title='Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown' user='HanaLohana' date='- 3 month ago'/></li>
                  <li><Next image={nextVideo1} title='Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s medium rare' user='HanaLohana' date='- 3 month ago'/></li>
                  <li><Next image={nextVideo1} title='Beef Steak with Curry Sauce - [Step 7] Roast beef until it’s medium rare' user='HanaLohana' date='- 3 month ago'/></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
        </>
    )
  }
  